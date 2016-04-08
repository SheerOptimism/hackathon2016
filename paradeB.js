myMap = createParadeMap("map");

var routeBparadeUrl = "https://www.dropbox.com/s/rz0vlyur05n8v2u/RouteBParadeRoute.kml?dl=1";
//var routeBrestroomURL = null;
var routeBvendorURL = "https://www.dropbox.com/s/l6z9cu5a3b23hsj/RouteBVendors.kml?dl=1";
var routeBstreetURL = "https://www.dropbox.com/s/4j4iqj3m1f9dmgb/RouteBStreetClosures.kml?dl=1"

myMap.addLayer(routeBparadeUrl,false);
//myMap.addLayer(routeBrestroomUrl,false);
myMap.addLayer(routeBvendorUrl,false);
myMap.addLayer(routeBstreetUrl,false);

var showRouteBtn = document.getElementById("showRouteBtn");
var hideRouteBtn = document.getElementById("hideRouteBtn");
//var showClosestRestroomBtn = document.getElementById ("showClosestRestroomBtn"); 
//var hideClosestRestroomBtn = document.getElementById ("hideClosestRestroomBtn"); 
var showFoodVendorBtn = document.getElementById ("showFoodVendorBtn"); 
var hideFoodVendorBtn = document.getElementById ("hideFoodVendorBtn");
var showStreetBtn = document.getElementById ("showStreetBtn");
var hideStreetBtn = document.getElementById ("hideStreetBtn");

function showRouteOnClickHandler(){
  myMap.showLayer(routeBparadeUrl);
  //myMap.showLayer(routeBrestroomUrl);
  myMap.showLayer(routeBvendorUrl);
  myMap.showLayer(routeBstreetUrl);
  };
  
  
function hideRouteOnClickHandler(){
  myMap.hideLayer(routeBparadeUrl);
  //myMap.hideLayer(routeBrestroomUrl);
  myMap.hideLayer(routeBvendorUrl);
  myMap.hideLayer(routeBstreetUrl);
  };
  
showRouteBtn.onclick = showRouteOnClickHandler;
hideRouteBtn.addEventListener("click", hideRouteOnClickHandler)  