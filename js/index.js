noUiSlider.create(slider, {
			start: [367329.0, 3053969840.0],
			behaviour: "drag",
			connect: true,
			range: { min: 367329.0, max: 3053969840.0 }
		});


var map = L.map('map').setView([35.3, -79.793457], 7);

//L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGFuaWFlc3RyYWRhIiwiYSI6ImNqZnVoMGNjNzAxanUycWxhdHQ3dnRicGMifQ.zT5HSwpsaTm0sA3cmOlZZg', {
//		maxZoom: 18,
//		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
//			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
//			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
//		id: 'mapbox.light'
//	}).addTo(map);


function style(feature) {
    return {
        fillColor: '#57bdb2',
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

var geojson = L.geoJson(fake, {style: style}).addTo(map);
//
//var geojson = L.geoJson(nccounties, {style: style}).addTo(map);



