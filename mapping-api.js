/**
 *
 *
 *	 @author Paul A. Mould
 *
 */



(function(global)
{

	var ParadeMap = (function()
	{
		/**
		*
		* @classdesc
		* <p>Used by {@link createParadeMap} global function to initialize a ParadeMap Object.<br>
		* Each {@link ParadeMap} Object has a Google Maps object set with coordinates for downtown Mobile and a KML Layers array which strores KML Layers objects used by the Google Map</p>
		*

		* @constructs ParadeMap
		*
		*/
		function constructorFn(id)
		{

			var layers = [];
			var map;
			var mapElement = document.getElementById(id);

			map = new google.maps.Map(mapElement,
			{
				center:
				{
					lat: 30.68848,
					lng: -88.04647
				},
				zoom: 16
			});

			mapElement.dataset.map = map;

			/**
			 *
			 *  This method returns an array of the KML Layer instances that have been added to a ParadeMap Object's map
			 *
			 *  @return {Array} Returns an array of KML Layer instances
			 *
			 */
			this.getLayers = function()
			{
				return layers;
			};

			/**
			 *
			 *  This method adds a KML Layer instance to the ParadeMap Object's layers array. The KML Layer is displayed on the map if second argument is set to true, else it does not display on the map.
			 *
			 *  @Param {String} kmlUrl KML URL String of the KML Layer to create
			 *  @Param {Boolean} [shows=true] A Boolean indicating whether to display the KML Layer on the Map. If false, the KML Layer is not displayed on the ParadMap.
			 *
			 *
			 */
			this.addLayer = function(kmlUrl, show)
			{
				var show = typeof show !== 'undefined' ? show : 1;
				var index;

				index = getIndexOfKML(kmlUrl);
				if ((index == -1) && kmlUrl != "")
				{
					//add layer if it does not already exist in the array
					index = layers.push(new google.maps.KmlLayer(
					{
						url: kmlUrl,
						preserveViewport: true
					}));
					index--;
				}
				if (show)
				{
					layers[index].setMap(map);
				}
				else
				{
					layers[index].setMap(null);
				}
			};
			/**
			 *
			 *  This method shows a KML Layer of the ParadeMap Object's map
			 *
			 *	@Param {String}	kmlUrl KML URL String of the KML Layer to show
			 */
			this.showLayer = function(kmlUrl)
			{
				for (var i = 0; i < layers.length; i++)
				{
					if (layers[i].url === kmlUrl)
					{
						layers[i].setMap(map);
					}
				}
			};
			/**
			 *
			 *  This method hides a KML Layer of the ParadeMap Map Object's map
			 *
			 *	@Param {String}	kmlUrl KML URL String of the KML Layer to hide
			 */
			this.hideLayer = function(kmlUrl)
			{

				for (var i = 0; i < layers.length; i++)
				{
					if (layers[i].url === kmlUrl)
					{
						layers[i].setMap(null);
					}
				}
			};

			/**
			 *
			 *  This method toggles (shows/hides) a KML Layer on the the ParadeMap Object's map
			 *
			 *	@Param {(String |Number)} input
			 * 		 A String represents a KML URL String of a KML Layer to toggle off/on |
			 *		 A Number represents the index of the KML Layer in Layer array to toggle off/on
			 */
			this.toggleLayer = function(input)
			{

				if (typeof input === "string" || input instanceof String)
				{
					index = getIndexOfKML(input);
				}
				else
				{
					index = input;
				}


				if (layers[index].getMap() === null)
				{
					layers[index].setMap(map);
				}
				else
				{
					layers[index].setMap(null);
				}

			};
			/**
			 *
			 *  This method hides a KML Layer from the ParadeMap Object's map and deletes it from the ParadeMap Objects's Layers array
			 *
			 *	@Param {String}	 kmlUrl KML URL String of the KML Layer to toggle off/on
			 */
			this.removeLayer = function(kmlUrl)
			{

				for (var i = 0; i < layers.length; i++)
				{
					if (layers[i].url === kmlUrl)
					{
						layers[i].setMap(null);
						layers.splice(i, 1);
						return;
					}
				}
			};
			/**
			 *
			 *  This method hides all KML Layers from the ParadeMap Object's map
			 *
			 */
			this.hideAllLayers = function()
				{
					for (var i = 0; i < layers.length; i++)
					{
						layers[i].setMap(null);
					}
				}
				/**
				 *
				 *  This method hides all KML Layers from the ParadeMap Object's map and deletes them from the ParadeMap Objects's Layers array
				 *
				 */
			this.removeAllLayers = function()
				{
					var size = layers.length;
					for (var i = 0; i < size; i++)
					{
						layers[i].setMap(null);
					}
					layers.splice(0, layers.length)

				}
				/**
				 *
				 *  This method sets the type of the ParadeMap Object's map to the Satellite view
				 *
				 */
			this.setMapsToSatellite = function()
			{
				map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
			};

			/**
			 *
			 *  This method sets the type of the ParadeMap Object's map to the Terrain view
			 *
			 */
			this.setMapsToTerrain = function()
			{
				map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
			};

			/**
			 *
			 *  This method sets the type of the ParadeMap Object's map to the Road Map view
			 *
			 */
			this.setMapsToRoadMap = function()
			{
				map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
			};

			/**
			 *
			 *  This method sets the type of the ParadeMap Object's map to the Hybrid view
			 *
			 */
			this.setMapsToHybrid = function()
			{
				map.setMapTypeId(google.maps.MapTypeId.HYBRID);
			};

			/**
			 *
			 *  This method returns the ParadeMap Objects [GoogleMap]{@link https://developers.google.com/maps/documentation/javascript/3.exp/reference#experimental-version} instance
			 *
			 *	@return {GoogleMapObject} Returns the initialized [GoogleMap]{@link https://developers.google.com/maps/documentation/javascript/3.exp/reference#experimental-version} Object
			 */
			this.getMap = function()
			{
				return map;
			};

			/**
			 *
			 *  This function returns the index of the KML Layer in the Layers array
			 *
			 *	@Ignore
			 *	@return {Integer} the index of the KML Layer in the Layers array
			 */
			var getIndexOfKML = function(kmlUrl)
			{

				for (var i = 0; i < layers.length; i++)
				{
					if (layers[i].url === kmlUrl)
					{
						return i;
					}
				}
				return -1;
			};
		};

		return constructorFn;

	})();

	/**
	 *
	 *	Initializes the {@link ParadeMap} Object with a [GoogleMap Object]{@link https://developers.google.com/maps/documentation/javascript/3.exp/reference#experimental-version} (coordinates set to downtown Mobile, AL) and an empty array of KML layers. The google Map is created inside of the given HTML container, which is typically a DIV element.
	 *
	 *	@Param {Element} mapDiv The HTMLElement that would be the container of the google Map.
	 *  You can pass in  a string only if set to "map" and the HTMLElement container has id of "map"
	 *
	 *	@returns {ParadeMap} Returns an instance of the Map Object
	 */
	this.createParadeMap = function(id)
	{
		return new ParadeMap(id);
	}


})(window);
