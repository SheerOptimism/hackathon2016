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
  };
  
  function hideRouteOnClickHandler(){
 myMap.hideLayer(routeAparadeUrl);
  };
  
  
function showRestroomOnClickHandler()
{
  myMap.showLayer(routeArestroomURL);
}

function hideRestroomOnClickHandler()
{
  myMap.hideLayer(routeArestroomURL);
}


function showVendorOnClickHandler()
{
  myMap.showLayer(routeAvendorURL);
}

function hideVendorOnClickHandler()
{
  myMap.hideLayer(routeAvendorURL);
}

function showStreetOnClickHandler()
{
  myMap.showLayer(routeAstreetURL);
}

function hideStreetOnClickHandler()
{
  myMap.hideLayer(routeAstreetURL);
}
  
  
  
showRouteBtn.onclick = showRouteOnClickHandler;
hideRouteBtn.addEventListener("click", hideRouteOnClickHandler)

showClosestRestroomBtn.onclick = showRestroomOnClickHandler;
hideClosestRestroomBtn.addEventListener("click", hideRestroomOnClickHandler)

showFoodVendorBtn.onclick = showVendorOnClickHandler;
hideFoodVendorBtn.addEventListener("click", hideVendorOnClickHandler)

showStreetBtn.onclick = showStreetOnClickHandler;
hideStreetBtn.addEventListener("click", hideStreetOnClickHandler)