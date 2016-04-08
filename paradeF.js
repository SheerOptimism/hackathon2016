myMap = createParadeMap("map");

var routeFparadeUrl = "https://www.dropbox.com/s/70kc2jjspysqvez/RouteFParadeRoute.kml?dl=1";
var routeFrestroomURL = "https://www.dropbox.com/s/7bbf0841lq5akox/RouteFRestrooms.kml?dl=1";
var routeFvendorURL = "https://www.dropbox.com/s/dq0xokxtudtbxme/RouteFVendors.kml?dl=1";
var routeFstreetURL = "https://www.dropbox.com/s/v1g8ffp9tutm9vl/RouteFStreetClosures.kml?dl=1";

myMap.addLayer(routeFparadeUrl,true);
myMap.addLayer(routeFrestroomURL,false);
myMap.addLayer(routeFvendorURL,false);
myMap.addLayer(routeFstreetURL,false);

var showRouteBtn = document.getElementById("showRouteBtn");
var hideRouteBtn = document.getElementById("hideRouteBtn");
var showClosestRestroomBtn = document.getElementById ("showClosestRestroomBtn"); 
var hideClosestRestroomBtn = document.getElementById ("hideClosestRestroomBtn"); 
var showFoodVendorBtn = document.getElementById ("showFoodVendorBtn"); 
var hideFoodVendorBtn = document.getElementById ("hideFoodVendorBtn");
var showStreetBtn = document.getElementById ("showStreetBtn");
var hideStreetBtn = document.getElementById ("hideStreetBtn");

function showRouteOnClickHandler(){
	myMap.showLayer(routeFparadeUrl);
  };
  
  function hideRouteOnClickHandler(){
 myMap.hideLayer(routeFparadeUrl);
  };
  
  
function showRestroomOnClickHandler()
{
  myMap.showLayer(routeFrestroomURL);
}

function hideRestroomOnClickHandler()
{
  myMap.hideLayer(routeFrestroomURL);
}


function showVendorOnClickHandler()
{
  myMap.showLayer(routeFvendorURL);
}

function hideVendorOnClickHandler()
{
  myMap.hideLayer(routeFvendorURL);
}

function showStreetOnClickHandler()
{
  myMap.showLayer(routeFstreetURL);
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
