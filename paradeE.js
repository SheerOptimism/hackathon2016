myMap = createParadeMap("map");

var routeEparadeUrl = "https://www.dropbox.com/s/dcicw8877aujuwe/RouteEParadeRoute.kml?dl=1";
var routeErestroomUrl = "https://www.dropbox.com/s/gxety7f4muy9gsq/RouteERestrooms.kml?dl=1";
var routeEvendorUrl = "https://www.dropbox.com/s/v08g6rhxj4t39sy/RouteEVendors.kml?dl=0";
var routeEstreetUrl = "https://www.dropbox.com/s/7mmwds45bfovl4k/RouteEStreetClosures.kml?dl=1";

myMap.addLayer(routeEparadeUrl,true);
myMap.addLayer(routeErestroomUrl,false);
myMap.addLayer(routeEvendorUrl,false);
myMap.addLayer(routeEstreetUrl,false);

var showRouteBtn = document.getElementById("showRouteBtn");
var hideRouteBtn = document.getElementById("hideRouteBtn");
var showClosestRestroomBtn = document.getElementById ("showClosestRestroomBtn"); 
var hideClosestRestroomBtn = document.getElementById ("hideClosestRestroomBtn"); 
var showFoodVendorBtn = document.getElementById ("showFoodVendorBtn"); 
var hideFoodVendorBtn = document.getElementById ("hideFoodVendorBtn");
var showStreetBtn = document.getElementById ("showStreetBtn");
var hideStreetBtn = document.getElementById ("hideStreetBtn");

function showRouteOnClickHandler(){
	myMap.showLayer(routeEparadeUrl);
  };
  
  function hideRouteOnClickHandler(){
 myMap.hideLayer(routeEparadeUrl);
  };
  
  
function showRestroomOnClickHandler()
{
  myMap.showLayer(routeErestroomUrl);
}

function hideRestroomOnClickHandler()
{
  myMap.hideLayer(routeErestroomUrl);
}


function showVendorOnClickHandler()
{
  myMap.showLayer(routeEvendorUrl);
}

function hideVendorOnClickHandler()
{
  myMap.hideLayer(routeEvendorUrl);
}

function showStreetOnClickHandler()
{
  myMap.showLayer(routeEstreetUrl);
}

function hideStreetOnClickHandler()
{
  myMap.hideLayer(routeEstreetUrl);
}
  
showRouteBtn.onclick = showRouteOnClickHandler;
hideRouteBtn.addEventListener("click", hideRouteOnClickHandler)

showClosestRestroomBtn.onclick = showRestroomOnClickHandler;
hideClosestRestroomBtn.addEventListener("click", hideRestroomOnClickHandler)

showFoodVendorBtn.onclick = showVendorOnClickHandler;
hideFoodVendorBtn.addEventListener("click", hideVendorOnClickHandler)

showStreetBtn.onclick = showStreetOnClickHandler;
hideStreetBtn.addEventListener("click", hideStreetOnClickHandler)