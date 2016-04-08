myMap = createParadeMap("map");

var routeCparadeUrl = "https://www.dropbox.com/s/qmjwjuwz5d607zq/RouteCParadeRoute.kml?dl=1";
var routeCrestroomUrl = "https://www.dropbox.com/s/b42kfpny9xccfgc/RouteCRestrooms.kml?dl=1";
var routeCvendorUrl = "https://www.dropbox.com/s/74zbcbko10q4qsi/RouteCVendors.kml?dl=1";
var routeCstreetUrl = "https://www.dropbox.com/s/g32cmvtdyyatxl7/RouteCStreetClosures.kml?dl=0";

myMap.addLayer(routeCparadeUrl,true);
myMap.addLayer(routeCrestroomUrl,false);
myMap.addLayer(routeCvendorUrl,false);
myMap.addLayer(routeCstreetUrl,false);

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
  myMap.showLayer(routeCrestroomUrl);
}

function hideRestroomOnClickHandler()
{
  myMap.hideLayer(routeCrestroomUrl);
}


function showVendorOnClickHandler()
{
  myMap.showLayer(routeCvendorUrl);
}

function hideVendorOnClickHandler()
{
  myMap.hideLayer(routeCvendorUrl);
}

function showStreetOnClickHandler()
{
  myMap.showLayer(routeCstreetUrl);
}

function hideStreetOnClickHandler()
{
  myMap.hideLayer(routeCstreetUrl);
}
  
showRouteBtn.onclick = showRouteOnClickHandler;
hideRouteBtn.addEventListener("click", hideRouteOnClickHandler)

showClosestRestroomBtn.onclick = showRestroomOnClickHandler;
hideClosestRestroomBtn.addEventListener("click", hideRestroomOnClickHandler)

showFoodVendorBtn.onclick = showVendorOnClickHandler;
hideFoodVendorBtn.addEventListener("click", hideVendorOnClickHandler)

showStreetBtn.onclick = showStreetOnClickHandler;
hideStreetBtn.addEventListener("click", hideStreetOnClickHandler)