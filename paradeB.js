myMap = createParadeMap("map");

var routeBparadeUrl = "https://www.dropbox.com/s/rz0vlyur05n8v2u/RouteBParadeRoute.kml?dl=1";
var routeBrestroomUrl = "https://www.dropbox.com/s/vakxapjzixe0r6f/RouteBRestrooms.kml?dl=1";
var routeBvendorUrl = "https://www.dropbox.com/s/l6z9cu5a3b23hsj/RouteBVendors.kml?dl=1";
var routeBstreetUrl = "https://www.dropbox.com/s/4j4iqj3m1f9dmgb/RouteBStreetClosures.kml?dl=1"

myMap.addLayer(routeBparadeUrl,true);
myMap.addLayer(routeBrestroomUrl,false);
myMap.addLayer(routeBvendorUrl,false);
myMap.addLayer(routeBstreetUrl,false);

var showRouteBtn = document.getElementById("showRouteBtn");
var hideRouteBtn = document.getElementById("hideRouteBtn");
var showClosestRestroomBtn = document.getElementById ("showClosestRestroomBtn"); 
var hideClosestRestroomBtn = document.getElementById ("hideClosestRestroomBtn"); 
var showFoodVendorBtn = document.getElementById ("showFoodVendorBtn"); 
var hideFoodVendorBtn = document.getElementById ("hideFoodVendorBtn");
var showStreetBtn = document.getElementById ("showStreetBtn");
var hideStreetBtn = document.getElementById ("hideStreetBtn");

function showRouteOnClickHandler(){
	myMap.showLayer(routeBparadeUrl);
  };
  
  function hideRouteOnClickHandler(){
 myMap.hideLayer(routeBparadeUrl);
  };
  
  
function showRestroomOnClickHandler()
{
  myMap.showLayer(routeBrestroomUrl);
}

function hideRestroomOnClickHandler()
{
  myMap.hideLayer(routeBrestroomUrl);
}


function showVendorOnClickHandler()
{
  myMap.showLayer(routeBvendorUrl);
}

function hideVendorOnClickHandler()
{
  myMap.hideLayer(routeBvendorUrl);
}

function showStreetOnClickHandler()
{
  myMap.showLayer(routeBstreetUrl);
}

function hideStreetnClickHandler()
{
  myMap.hideLayer(routeBstreetUrl);
}
  
showRouteBtn.onclick = showRouteOnClickHandler;
hideRouteBtn.addEventListener("click", hideRouteOnClickHandler)

showClosestRestroomBtn.onclick = showRestroomOnClickHandler;
hideClosestRestroomBtn.addEventListener("click", hideRestroomOnClickHandler)

showFoodVendorBtn.onclick = showVendorOnClickHandler;
hideFoodVendorBtn.addEventListener("click", hideVendorOnClickHandler)

showStreetBtn.onclick = showStreetOnClickHandler;
hideStreetBtn.addEventListener("click", hideStreetOnClickHandler) 