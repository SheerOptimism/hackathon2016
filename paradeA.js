myMap = createParadeMap("map");

var routeAparadeUrl = "https://www.dropbox.com/s/w9m0lv99p5i4fhv/RouteAParadeRoute.kml?dl=1";
var routeArestroomUrl = "https://www.dropbox.com/s/xr28jnpg0wzfdl8/RouteARestrooms.kml?dl=1";
var routeAvendorUrl = "https://www.dropbox.com/s/iv5j0m6rgi8xq5s/RouteAVendors.kml?dl=1";
var routeAstreetUrl = "https://www.dropbox.com/s/dtbpxkchagxox5m/RouteAStreetClosures.kml?dl=1"

myMap.addLayer(routeAparadeUrl,true);
myMap.addLayer(routeArestroomUrl, false);
myMap.addLayer(routeAvendorUrl, false);
myMap.addLayer(routeAstreetUrl, false);

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
  myMap.showLayer(routeArestroomUrl);
}

function hideRestroomOnClickHandler()
{
  myMap.hideLayer(routeArestroomUrl);
}


function showVendorOnClickHandler()
{
  myMap.showLayer(routeAvendorUrl);
}

function hideVendorOnClickHandler()
{
  myMap.hideLayer(routeAvendorUrl);
}

function showStreetOnClickHandler()
{
  myMap.showLayer(routeAstreetUrl);
}

function hideStreetOnClickHandler()
{
  myMap.hideLayer(routeAstreetUrl);
}
  
  
  
showRouteBtn.onclick = showRouteOnClickHandler;
hideRouteBtn.addEventListener("click", hideRouteOnClickHandler)

showClosestRestroomBtn.onclick = showRestroomOnClickHandler;
hideClosestRestroomBtn.addEventListener("click", hideRestroomOnClickHandler)

showFoodVendorBtn.onclick = showVendorOnClickHandler;
hideFoodVendorBtn.addEventListener("click", hideVendorOnClickHandler)

showStreetBtn.onclick = showStreetOnClickHandler;
hideStreetBtn.addEventListener("click", hideStreetOnClickHandler)