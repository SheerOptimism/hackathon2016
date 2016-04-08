myMap = createParadeMap("map");

var routeCparadeUrl = "https://www.dropbox.com/s/qmjwjuwz5d607zq/RouteCParadeRoute.kml?dl=1";
var routeCrestroomURL = "https://www.dropbox.com/s/b42kfpny9xccfgc/RouteCRestrooms.kml?dl=1";
var routeCvendorURL = "https://www.dropbox.com/s/74zbcbko10q4qsi/RouteCVendors.kml?dl=1";
var routeCstreetURL = "https://www.dropbox.com/s/g32cmvtdyyatxl7/RouteCStreetClosures.kml?dl=0";

myMap.addLayer(routeCparadeUrl,true);
myMap.addLayer(routeCrestroomURL,false);
myMap.addLayer(routeCvendorURL,false);
myMap.addLayer(routeCstreetURL,false);

var showRouteBtn = document.getElementById("showRouteBtn");
var hideRouteBtn = document.getElementById("hideRouteBtn");
var showClosestRestroomBtn = document.getElementById ("showClosestRestroomBtn"); 
var hideClosestRestroomBtn = document.getElementById ("hideClosestRestroomBtn"); 
var showFoodVendorBtn = document.getElementById ("showFoodVendorBtn"); 
var hideFoodVendorBtn = document.getElementById ("hideFoodVendorBtn");
var showStreetBtn = document.getElementById ("showStreetBtn");
var hideStreetBtn = document.getElementById ("hideStreetBtn");

function showRouteOnClickHandler(){
	myMap.showLayer(routeCparadeUrl);
  };
  
  function hideRouteOnClickHandler(){
 myMap.hideLayer(routeCparadeUrl);
  };
  
  
function showRestroomOnClickHandler()
{
  myMap.showLayer(routeCrestroomURL);
}

function hideRestroomOnClickHandler()
{
  myMap.hideLayer(routeCrestroomURL);
}


function showVendorOnClickHandler()
{
  myMap.showLayer(routeCvendorURL);
}

function hideVendorOnClickHandler()
{
  myMap.hideLayer(routeCvendorURL);
}

function showStreetOnClickHandler()
{
  myMap.showLayer(routeCstreetURL);
}

function hideStreetOnClickHandler()
{
  myMap.hideLayer(routeCstreetURL);
}
  
showRouteBtn.onclick = showRouteOnClickHandler;
hideRouteBtn.addEventListener("click", hideRouteOnClickHandler)

showClosestRestroomBtn.onclick = showRestroomOnClickHandler;
hideClosestRestroomBtn.addEventListener("click", hideRestroomOnClickHandler)

showFoodVendorBtn.onclick = showVendorOnClickHandler;
hideFoodVendorBtn.addEventListener("click", hideVendorOnClickHandler)

showStreetBtn.onclick = showStreetOnClickHandler;
hideStreetBtn.addEventListener("click", hideStreetOnClickHandler)