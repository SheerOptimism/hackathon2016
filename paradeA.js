myMap = createParadeMap("map");

var routeAparadeUrl = "https://www.dropbox.com/s/w9m0lv99p5i4fhv/RouteAParadeRoute.kml?dl=1";
var routeArestroomURL = "https://www.dropbox.com/s/xr28jnpg0wzfdl8/RouteARestrooms.kml?dl=1";
var routeAvendorURL = "https://www.dropbox.com/s/xr28jnpg0wzfdl8/RouteARestrooms.kml?dl=1";
var routeAstreetURL = "https://www.dropbox.com/s/dtbpxkchagxox5m/RouteAStreetClosures.kml?dl=1"

myMap.addLayer(routeAparadeUrl,true);
myMap.addLayer(routeArestroomURL, false);
myMap.addLayer(routeAvendorURL, false);
myMap.addLayer(routeAstreetURL, false);

var showRouteBtn = document.getElementById("showRouteBtn");
var hideRouteBtn = document.getElementById("hideRouteBtn");
var showClosestRestroomBtn = document.getElementById ("showClosestRestroomBtn"); 
var hideClosestRestroomBtn = document.getElementById ("hideClosestRestroomBtn"); 
var showFoodVendorBtn = document.getElementById ("showFoodVendorBtn"); 
var hideFoodVendorBtn = document.getElementById ("hideFoodVendorBtn");
var showStreetBtn = document.getElementById ("showStreetBtn");
var hideStreetBtn = document.getElementById ("hideStreetBtn");

function showRouteOnClickHandler(){
	myMap.showLayer(routeAparadeUrl);
  myMap.showLayer(routeArestroomURL);
  myMap.showLayer(routeAvendorURL);
  myMap.showLayer(routeAstreetURL);
  };
  
  function hideRouteOnClickHandler(){
	myMap.hideLayer(routeAparadeUrl);
  myMap.hideLayer(routeArestroomURL);
  myMap.hideLayer(routeAvendorURL);
  myMap.hideLayer(routeAstreetURL);
  };
  
showRouteBtn.onclick = showRouteOnClickHandler;
hideRouteBtn.addEventListener("click", hideRouteOnClickHandler)