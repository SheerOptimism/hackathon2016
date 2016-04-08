myMap = createParadeMap("map");

var routeEparadeUrl = "https://www.dropbox.com/s/dcicw8877aujuwe/RouteEParadeRoute.kml?dl=1";
var routeErestroomURL = "https://www.dropbox.com/s/gxety7f4muy9gsq/RouteERestrooms.kml?dl=1";
var routeEvendorURL = "https://www.dropbox.com/s/v08g6rhxj4t39sy/RouteEVendors.kml?dl=0";
var routeEstreetURL = "https://www.dropbox.com/s/7mmwds45bfovl4k/RouteEStreetClosures.kml?dl=1";

myMap.addLayer(routeEparadeUrl,true);
myMap.addLayer(routeErestroomURL,false);
myMap.addLayer(routeEvendorURL,false);
myMap.addLayer(routeEstreetURL,false);

var showRouteBtn = document.getElementById("showRouteBtn");
var hideRouteBtn = document.getElementById("hideRouteBtn");
var showClosestRestroomBtn = document.getElementById ("showClosestRestroomBtn"); 
var hideClosestRestroomBtn = document.getElementById ("hideClosestRestroomBtn"); 
var showFoodVendorBtn = document.getElementById ("showFoodVendorBtn"); 
var hideFoodVendorBtn = document.getElementById ("hideFoodVendorBtn");
var showStreetBtn = document.getElementById ("showStreetBtn");
var hideStreetBtn = document.getElementById ("hideStreetBtn");

function showRouteOnClickHandler(){
	myMap.showLayer(routeEparadeUrl);
  };
  
  function hideRouteOnClickHandler(){
 myMap.hideLayer(routeEparadeUrl);
  };
  
  
function showRestroomOnClickHandler()
{
  myMap.showLayer(routeErestroomURL);
}

function hideRestroomOnClickHandler()
{
  myMap.hideLayer(routeErestroomURL);
}


function showVendorOnClickHandler()
{
  myMap.showLayer(routeEvendorURL);
}

function hideVendorOnClickHandler()
{
  myMap.hideLayer(routeEvendorURL);
}

function showStreetOnClickHandler()
{
  myMap.showLayer(routeEstreetURL);
}

function hideStreetOnClickHandler()
{
  myMap.hideLayer(routeEstreetURL);
}
  
showRouteBtn.onclick = showRouteOnClickHandler;
hideRouteBtn.addEventListener("click", hideRouteOnClickHandler)

showClosestRestroomBtn.onclick = showRestroomOnClickHandler;
hideClosestRestroomBtn.addEventListener("click", hideRestroomOnClickHandler)

showFoodVendorBtn.onclick = showVendorOnClickHandler;
hideFoodVendorBtn.addEventListener("click", hideVendorOnClickHandler)

showStreetBtn.onclick = showStreetOnClickHandler;
hideStreetBtn.addEventListener("click", hideStreetOnClickHandler)