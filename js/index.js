var map = L.map('map', {
    zoomControl: false,
    scrollWheelZoom:false
}).setView([35.0, -79.9063457], zoom = 6.5);

map.setMaxBounds(map.getBounds());


var current_year = "2013";
var current_map = us_county_geojson_2013;

//functions to change color of counties
function getSat(d) {
    //fix: is 2017 correct? 
    if (current_year === "2017") {
        
        return d > 1200 ? '#800026' :
               d > 1100  ? '#BD0026' :
               d > 1000  ? '#E31A1C' :
               d > 900  ? '#FC4E2A' :
               d > 800   ? '#FD8D3C' :
               d > 700   ? '#FEB24C' :
               d > 600   ? '#FED976' :
                          '#FFEDA0';
    }
    
    return d > 2415 ? '#800026' :
       d > 2070  ? '#BD0026' :
       d > 1725  ? '#E31A1C' :
       d > 1380  ? '#FC4E2A' :
       d > 1035   ? '#FD8D3C' :
       d > 690   ? '#FEB24C' :
       d > 345   ? '#FED976' :
                  '#FFEDA0';    
    
}
function getMath(d) {
    return d > 690 ? '#800026' :
           d > 574  ? '#BD0026' :
           d > 460  ? '#E31A1C' :
           d > 463  ? '#FC4E2A' :
           d > 230   ? '#FD8D3C' :
           d > 115   ? '#FEB24C' :
           d > 50   ? '#FED976' :
                      '#FFEDA0';
}

function checked() {
    var subject = total;
    var box = document.getElementsByName('independent_variable');
    for (i = 0; i < 5; i++) {
        if(box[i].checked) {
            subject = box[i].value;    
        }         
    } 
    return subject;
}

function setTotal(feature) {
    if (current_year === "2013"){
        return {
            fillColor: getSat(Number(feature.properties.Total_2013)),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '1',
            fillOpacity: 1
        };  
    }
    if (current_year === "2014"){
        return {
            fillColor: getSat(Number(feature.properties.Total_2014)),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '1',
            fillOpacity: 1
        };
        
    }
    
    if (current_year === "2015"){
        return {
            fillColor: getSat(Number(feature.properties.Total_2015)),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '1',
            fillOpacity: 1
        };
        
    }
    
    if (current_year === "2016"){
        return {
            fillColor: getSat(Number(feature.properties.total)),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '1',
            fillOpacity: 1
        };
        
    } 
    if (current_year === "2017"){

        
        return {
            fillColor: getSat(Number(feature.properties.Total_2017)),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '1',
            fillOpacity: 1
        };
        
    }
   
}

function setMath(feature) {
    if (current_year === "2013"){
        return {
            fillColor: getMath(Number(feature.properties.Math_2013)),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '1',
            fillOpacity: 1
        };  
    }
    
    if (current_year === "2014"){
        return {
            fillColor: getMath(Number(feature.properties.Math_2014)),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '1',
            fillOpacity: 1
        };  
    }
    
    if (current_year === "2015"){
        return {
            fillColor: getMath(Number(feature.properties.Math_2015)),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '1',
            fillOpacity: 1
        };  
    }
    
    if (current_year === "2016"){
        return {
            fillColor: getMath(Number(feature.properties.Math)),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '1',
            fillOpacity: 1
        };  
    }
    
    if (current_year === "2017"){
        return {
            fillColor: getMath(Number(feature.properties.Math_2017)),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '1',
            fillOpacity: 1
        };  
    }
        
}
function setCR(feature) {
    if (current_year === "2013"){
        return {
            fillColor: getMath(Number(feature.properties.CR_2013)),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '1',
            fillOpacity: 1
        };   
    }
    
    if (current_year === "2014"){
        return {
            fillColor: getMath(Number(feature.properties.CR_2014)),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '1',
            fillOpacity: 1
        };   
    }
    
    if (current_year === "2015"){
        return {
            fillColor: getMath(Number(feature.properties.CR_2015)),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '1',
            fillOpacity: 1
        };   
    }
    
    if (current_year === "2016"){
        return {
            fillColor: getMath(Number(feature.properties.CR)),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '1',
            fillOpacity: 1
        };  
    }
//    if (current_year === "2017"){   
    
//    }
}
function setWriting(feature) {
    if (current_year === "2013"){
        return {
            fillColor: getMath(Number(feature.properties.Writing_2013)),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '1',
            fillOpacity: 1
        };  
    }
    
    if (current_year === "2014"){
        return {
            fillColor: getMath(Number(feature.properties.Writing_2014)),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '1',
            fillOpacity: 1
        };  
    }
    
    if (current_year === "2015"){
        return {
            fillColor: getMath(Number(feature.properties.Writing_2015)),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '1',
            fillOpacity: 1
        };  
    }
    
    if (current_year === "2016"){
        return {
            fillColor: getMath(Number(feature.properties.writing)),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '1',
            fillOpacity: 1
        };  
    }
//    if (current_year === "2017"){ 
//    }

}
function setERW(feature) {
    if (current_year === "2017"){
        return {
            fillColor: getMath(Number(feature.properties.ERW_2017)),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '1',
            fillOpacity: 1
    };
        
    }

}



//add data to map

var current_SAT = L.geoJson(current_map, {style: setTotal, onEachFeature: onEachTotal}).addTo(map);


//map interactivy functions
function switchSAT(){
    var box = document.getElementsByName('independent_variable');
    var v;
    for (var i = 0; i < 5; i++) {   
        if(box[i].checked) {
            if (box[i].value === "total") {
                map.removeLayer(current_SAT);
                current_SAT = L.geoJson(current_map, {style: setTotal, onEachFeature: onEachTotal}).addTo(map);
                map.addLayer(current_SAT);
                break; }
            
            if (box[i].value === "Math") {
                map.removeLayer(current_SAT);
                current_SAT = L.geoJson(current_map, {style: setMath, onEachFeature: onEachMath}).addTo(map);
                map.addLayer(current_SAT);
                break; }
            
            if (box[i].value === "CR") {
                map.removeLayer(current_SAT);
                current_SAT = L.geoJson(current_map, {style: setCR, onEachFeature: onEachCR}).addTo(map);
                map.addLayer(current_SAT);
                break; }
            
            if (box[i].value === "writing") {
                map.removeLayer(current_SAT);
                current_SAT = L.geoJson(current_map, {style: setWriting, onEachFeature: onEachWriting}).addTo(map);
                map.addLayer(current_SAT);
                break; }
            
            if (box[i].value === "ERW") {
                map.removeLayer(current_SAT);
                current_SAT = L.geoJson(current_map, {style: setERW, onEachFeature: onEachERW}).addTo(map);
                map.addLayer(current_SAT);
                break; }
        }     
    }
}

function getYear(sliderYear){
    if (sliderYear === "2013") {
        current_year = sliderYear;
        current_map = us_county_geojson_2013;
    }
    if (sliderYear === "2014") {
        current_year = sliderYear;
        current_map = us_county_geojson_2014;
    }
    
    if (sliderYear === "2015") {
        current_year = sliderYear;
        current_map = us_county_geojson_2015;
    }
    if (sliderYear === "2016") {
        current_year = sliderYear;
        current_map = us_county_geojson_2016;
    }
    
    if (sliderYear === "2017") {
        current_year = sliderYear;
        current_map = us_county_geojson_2017;
    }
    var output = document.getElementById("show_year");
    output.innerHTML = sliderYear;
}


function zoomToFeature(e) {
//      map.flyToBounds(e.target.getBounds());
        map.setView(e.latlng, 8);	
	}
function highlightFeature(e) {
		var layer = e.target;
       
		layer.setStyle({
			weight: 5,
			color: '#fff',
			fillOpacity: 0
		});

		if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
			layer.bringToFront();
		}

		legend.update(layer.feature.properties);
	}
function resetHighlight(e) {
		current_SAT.resetStyle(e.target);
//		legend.update();
	}


function onEachTotal(feature, layer) {
    if (current_year === "2013"){
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        }).bindPopup("Average SAT: " + feature.properties.Total_2013);
    }
    
    if (current_year === "2014"){
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        }).bindPopup("Average SAT: " + feature.properties.Total_2014);
    }
    
    if (current_year === "2015"){
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        }).bindPopup("Average SAT: " + feature.properties.Total_2015);
    }
    
    if (current_year === "2016"){
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        }).bindPopup("Average SAT: " + feature.properties.total);
    }
    
    if (current_year === "2017"){
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        }).bindPopup("Average SAT: " + feature.properties.Total_2017);
    }
		
}
function onEachMath(feature, layer) {
    if (current_year === "2013"){
        layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		}).bindPopup("Math SAT: " + feature.properties.Math_2013);    
    }
    
    if (current_year === "2014"){
        layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		}).bindPopup("Math SAT: " + feature.properties.Math_2014);    
    }
    
    if (current_year === "2015"){
        layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		}).bindPopup("Math SAT: " + feature.properties.Math_2015);    
    }
    
    if (current_year === "2016"){
        layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		}).bindPopup("Math SAT: " + feature.properties.Math);    
    }
    
    if (current_year === "2017"){
        layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		}).bindPopup("Math SAT: " + feature.properties.Math_2017);    
    }		
}

function onEachCR(feature, layer) {
    if (current_year === "2013"){
        layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		}).bindPopup("Critical Reading SAT: " + feature.properties.CR_2013); 
    }
    
    if (current_year === "2014"){
        layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		}).bindPopup("Critical Reading SAT: " + feature.properties.CR_2014); 
    }
    
    if (current_year === "2015"){
        layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		}).bindPopup("Critical Reading SAT: " + feature.properties.CR_2015); 
    }
    
    if (current_year === "2016"){
        layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		}).bindPopup("Critical Reading SAT: " + feature.properties.CR); 
    }
		
}

function onEachWriting(feature, layer) {
    if (current_year === "2013"){
        layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		}).bindPopup("Writing SAT: " + feature.properties.Writing_2013);
    }
    
    if (current_year === "2014"){
        layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		}).bindPopup("Writing SAT: " + feature.properties.Writing_2014);
    }
    
    if (current_year === "2015"){
        layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		}).bindPopup("Writing SAT: " + feature.properties.Writing_2015);
    }
    
    if (current_year === "2016"){
        layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		}).bindPopup("Writing SAT: " + feature.properties.writing);
    }
}

function onEachERW(feature, layer) {
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		}).bindPopup("ERW SAT: " + feature.properties.ERW_2017);
	}


//control for updated info on right
var legend = L.control();
legend.onAdd = function (map) {
   
        var d = document.getElementById('control');
        d.update();
        return d;
};
//updates info for the current year
legend.update = function (props) {
    var d = document.getElementById('control');
    if (current_year === "2013"){
        d.innerHTML = '<h4>'+'</h4>'+(props ?
        '<h4>' + props.county  + ' County'+ '</h4>'  + "<b>Average Income: </b>" + props.income2013 + '<br>'+ "<b>Percent on free lunch: </b>" + props.freelunch_2013 + "<br><b>Dropout Rate: </b>" + props.dropout_2013 +"<br>" + "<br><b>% Hispanic Students: </b>" + props.hispanic_percent +  "<br><b>% White Students: </b>" + props.white_percent +  "<br><b>% Black Students: </b>" + props.black_percent + "<br><b>% Other Students: </b>" + props.other_percent : '<h3>County Breakdown</h3><h5>hover over a county</h5>');

    }
    if (current_year === "2014"){
        d.innerHTML = '<h4>'+'</h4>'+(props ?
        '<h4>' + props.county  + ' County'+ '</h4>'  + "<b>Average Income: </b>" + props.income_2014 + '<br>'+ "<b>Percent on free lunch: </b>" + props.freelunch_2014 + "<br><b>Dropout Rate: </b>" + props.dropout_2014 +"<br>" + "<br><b>% Hispanic Students: </b>" + props.hispanic_percent +  "<br><b>% White Students: </b>" + props.white_percent +  "<br><b>% Black Students: </b>" + props.black_percent + "<br><b>% Other Students: </b>" + props.other_percent : '<h3>County Breakdown</h3><h5>hover over a county</h5>');
    }
    
    if (current_year === "2015"){
        d.innerHTML = '<h4>'+'</h4>'+(props ?
        '<h4>' + props.county  + ' County'+ '</h4>'  + "<b>Average Income: </b>" + props.income2015 + '<br>'+ "<b>Percent on free lunch: </b>" + props.freelunch_2015 + "<br><b>Dropout Rate: </b>" + props.dropout_2015 +"<br>" + "<br><b>% Hispanic Students: </b>" + props.hispanic_percent +  "<br><b>% White Students: </b>" + props.white_percent +  "<br><b>% Black Students: </b>" + props.black_percent + "<br><b>% Other Students: </b>" + props.other_percent : '<h3>County Breakdown</h3><h5>hover over a county</h5>');
        
    }
    
    if (current_year === "2016"){
        d.innerHTML = '<h4>'+'</h4>'+(props ?
        '<h4>' + props.county  + ' County'+ '</h4>'  + "<b>Average Income: </b>" + props.income + '<br>'+ "<b>Percent on free lunch: </b>" + props.freelunch + "<br><b>Dropout Rate: </b>" + props.dropout +"<br>" + "<br><b>% Hispanic Students: </b>" + props.hispanic_percent +  "<br><b>% White Students: </b>" + props.white_percent +  "<br><b>% Black Students: </b>" + props.black_percent + "<br><b>% Other Students: </b>" + props.other_percent : '<h3>County Breakdown</h3><h5>hover over a county</h5>');

    }
    
    if (current_year === "2017"){
        d.innerHTML = '<h4>'+'</h4>'+(props ?
        '<h4>' + props.county  + ' County'+ '</h4>'  + "<b>Average Income: </b>" + props.income2017 + '<br>'+ "<b>Percent on free lunch: </b>" + props.freelunch_2017 + "<br><b>Dropout Rate: </b>" + props.dropout_2017 +"<br>" + "<br><b>% Hispanic Students: </b>" + props.hispanic_percent +  "<br><b>% White Students: </b>" + props.white_percent +  "<br><b>% Black Students: </b>" + props.black_percent + "<br><b>% Other Students: </b>" + props.other_percent : '<h3>County Breakdown</h3><h5>hover over a county</h5>');   
    }	
};



//control for reset zoom
var reset = L.control({position: 'topleft'});
reset.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'reset');

    div.innerHTML = '<form><input name = "reset" type="button" value = "Reset Zoom" id="reset""/></form>'; 
    return div;
};

reset.addTo(map);
function resetmap() {
   map.setView([35.3, -79.9063457], zoom = 6.5);
}
document.getElementById ("reset").addEventListener ("click", resetmap, false);


//displays legend
var info = L.control({position: 'bottomleft'});
info.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info'),
     sat = [690 ,574, 460, 463, 230,115 ,50],
    labels = [];
    div.innerHTML += "SAT Score Legend <br>";
    for (var i = 0; i < sat.length; i++) {
        div.innerHTML +=
            '<label>' + sat[i] + (sat[i + 1] ? '&ndash;' + sat[i + 1] : '+') + '</label>';
    }
    div.innerHTML += '<br>';
    for (var i = 0; i < sat.length; i++) {
        div.innerHTML +=
            '<span style="background:' + getMath(sat[i] + 1) + '"></span> ';
    }
    return div; 
};
info.addTo(map);