myMap = createParadeMap("map");

var routeDparadeUrl = "https://www.dropbox.com/s/0rkgo2kdfbxysct/RouteDParadeRoute.kml?dl=1";
var routeDrestroomURL = "https://www.dropbox.com/s/bb2u62jlu01jlto/RouteDRestrooms.kml?dl=1";
var routeDvendorURL = "https://www.dropbox.com/s/v08g6rhxj4t39sy/RouteEVendors.kml?dl=1";
var routeDstreetURL = "https://www.dropbox.com/s/79uvwttv75d24q4/RouteDStreetClosures.kml?dl=1";

myMap.addLayer(routeDparadeUrl,true);
myMap.addLayer(routeDrestroomURL,false);
myMap.addLayer(routeDvendorURL,false);
myMap.addLayer(routeDstreetURL,false);

var showRouteBtn = document.getElementById("showRouteBtn");
var hideRouteBtn = document.getElementById("hideRouteBtn");
var showClosestRestroomBtn = document.getElementById ("showClosestRestroomBtn"); 
var hideClosestRestroomBtn = document.getElementById ("hideClosestRestroomBtn"); 
var showFoodVendorBtn = document.getElementById ("showFoodVendorBtn"); 
var hideFoodVendorBtn = document.getElementById ("hideFoodVendorBtn");
var showStreetBtn = document.getElementById ("showStreetBtn");
var hideStreetBtn = document.getElementById ("hideStreetBtn");

function showRouteOnClickHandler(){
  myMap.showLayer(routeDparadeUrl);
  myMap.showLayer(routeDrestroomURL);
  myMap.showLayer(routeDvendorURL);
  myMap.showLayer(routeDstreetURL);
  };
  
function hideRouteOnClickHandler(){
  myMap.hideLayer(routeDparadeUrl);
  myMap.hideLayer(routeDrestroomURL);
  myMap.hideLayer(routeDvendorURL);
  myMap.hideLayer(routeDstreetURL);
  };
  
showRouteBtn.onclick = showRouteOnClickHandler;
hideRouteBtn.addEventListener("click", hideRouteOnClickHandler)