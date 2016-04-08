myMap = createParadeMap("map");

var routeUrl = "https://www.dropbox.com/s/w9m0lv99p5i4fhv/RouteAParadeRoute.kml?dl=1";

myMap.addLayer(routeUrl,false);

var showRouteBtn = document.getElementById("showRouteBtn");
var hideRouteBtn = document.getElementById("hideRouteBtn");


function showRouteOnClickHandler(){
	myMap.showLayer(routeUrl);
};

function hideRouteOnClickHandler(){
	myMap.hideLayer(routeUrl);
};

showRouteBtn.onclick = showRouteOnClickHandler;
hideRouteBtn.addEventListener("click", hideRouteOnClickHandler)

