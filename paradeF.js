myMap = createParadeMap("map");

var routeFparadeUrl = "https://www.dropbox.com/s/70kc2jjspysqvez/RouteFParadeRoute.kml?dl=1";
var routeFrestroomUrl = "https://www.dropbox.com/s/7bbf0841lq5akox/RouteFRestrooms.kml?dl=1";
var routeFvendorUrl = "https://www.dropbox.com/s/dq0xokxtudtbxme/RouteFVendors.kml?dl=1";
var routeFstreetUrl = "https://www.dropbox.com/s/v1g8ffp9tutm9vl/RouteFStreetClosures.kml?dl=1";

myMap.addLayer(routeFparadeUrl,true);
myMap.addLayer(routeFrestroomUrl,false);
myMap.addLayer(routeFvendorUrl,false);
myMap.addLayer(routeFstreetUrl,false);

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
  myMap.showLayer(routeFrestroomUrl);
}

function hideRestroomOnClickHandler()
{
  myMap.hideLayer(routeFrestroomUrl);
}


function showVendorOnClickHandler()
{
  myMap.showLayer(routeFvendorUrl);
}

function hideVendorOnClickHandler()
{
  myMap.hideLayer(routeFvendorUrl);
}

function showStreetOnClickHandler()
{
  myMap.showLayer(routeFstreetUrl);
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
