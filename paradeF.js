myMap = createParadeMap("map");

var routeFparadeUrl = "https://www.dropbox.com/s/70kc2jjspysqvez/RouteFParadeRoute.kml?dl=1";
var routerestroomURL = "https://www.dropbox.com/s/7bbf0841lq5akox/RouteFRestrooms.kml?dl=1";
var routevendorURL = "https://www.dropbox.com/s/dq0xokxtudtbxme/RouteFVendors.kml?dl=1";
var routestreetURL = "https://www.dropbox.com/s/v1g8ffp9tutm9vl/RouteFStreetClosures.kml?dl=1";

myMap.addLayer(routeFparadeUrl,false);
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
  myMap.showLayer(routeFrestroomURL);
  myMap.showLayer(routeFvendorURL);
  myMap.showLayer(routeFstreetURL);
  };

function hideRouteOnClickHandler(){
  myMap.hideLayer(routeFparadeUrl);
  myMap.hideLayer(routeFrestroomURL);
  myMap.hideLayer(routeFvendorURL);
  myMap.hideLayer(routeFstreetURL);
  };
  
showRouteBtn.onclick = showRouteOnClickHandler;
hideRouteBtn.addEventListener("click", hideRouteOnClickHandler)