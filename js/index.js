

var map = L.map('map').setView([35.3, -79.793457], 7);

//L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGFuaWFlc3RyYWRhIiwiYSI6ImNqZnVoMGNjNzAxanUycWxhdHQ3dnRicGMifQ.zT5HSwpsaTm0sA3cmOlZZg', {
//		maxZoom: 18,
//		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
//			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
//			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
//		id: 'mapbox.light'
//	}).addTo(map);




function getSat(d) {
    return d > 2415 ? '#800026' :
           d > 2070  ? '#BD0026' :
           d > 1725  ? '#E31A1C' :
           d > 1380  ? '#FC4E2A' :
           d > 1035   ? '#FD8D3C' :
           d > 690   ? '#FEB24C' :
           d > 345   ? '#FED976' :
                      '#FFEDA0';
}

//function select(id) {
//    for (var i = 1;i <= 5; i++)
//    {
//        document.getElementById("checkbox" + i) = false;
//    }
//    document.getElementById(id).checked = true;
//}

//function select(id) {
//    var checkboxes = document.getElementsByName('independent_variable')
//    checkboxes.forEach((item) => {
//        if (item == checkbox) item.checked = false
//    })
//}

function checked() {
    var subject = total;
    var box = document.getElementsByName('independent_variable');
    for (i = 0; i < 5; i++) {
        if(box[i].checked) {
            subject = box[i].value;
    
}  
        /*else if(document.getElementById('independent_variable').checked) {
  //Female radio button is checked
}*/
//    else value = total;
        
    }
    
    return subject;
    
  // If the checkbox is checked, display the output text
//  if (checkBox.checked == true){
//    text.style.display = "block";
//  } if (checkBox.checked == true){
//    text.style.display = "block";
//  } if (checkBox.checked == true){
//    text.style.display = "block";
//  } if (checkBox.checked == true){
//    text.style.display = "block";
//  } if (checkBox.checked == true){
//    text.style.display = "block";
//  } 
//}
}




function setTotal(feature) {
    
    return {
        fillColor: getSat(feature.properties.total),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

function setMath(feature) {
    
    return {
        fillColor: getSat(feature.properties.Math),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
function setCR(feature) {
    
    return {
        fillColor: getSat(feature.properties.CR),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
function setWriting(feature) {
    
    return {
        fillColor: getSat(feature.properties.writing),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

function setERW(feature) {
    
    return {
        fillColor: getSat(feature.properties.ERW),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}






function total(){
    var box = document.getElementsByName('independent_variable');
    var v;
    for (var i = 0; i < 5; i++) {
        if(box[i].checked) {
           if (box[i].value === "total") {
            map.removeLayer(sat2017);
            sat2017 = L.geoJson(fake, {style: setTotal}).addTo(map);
            map.addLayer(sat2017);
            break; }
            
            if (box[i].value === "Math") {
            map.removeLayer(sat2017);
            sat2017 = L.geoJson(fake, {style: setMath}).addTo(map);
            map.addLayer(sat2017);
            break; }
            
            if (box[i].value === "CR") {
            map.removeLayer(sat2017);
            sat2017 = L.geoJson(fake, {style: setCR}).addTo(map);
            map.addLayer(sat2017);
            break; }
            
            if (box[i].value === "writing") {
            map.removeLayer(sat2017);
            sat2017 = L.geoJson(fake, {style: setWriting}).addTo(map);
            map.addLayer(sat2017);
            break; }
  
}
            
}}

//function years(theval){
//    var slider = theval;
//    var year = slider.value;
//     if (slider === "2016") {
//            map.removeLayer(sat2017);
//            sat2017 = L.geoJson(us_county_geojson_2016).addTo(map);
//            map.addLayer(sat2017);
//            break; }
//    if (slider === "2017") {
//            map.removeLayer(sat2017);
//            sat2017 = L.geoJson(fake).addTo(map);
//            map.addLayer(sat2017);
//            break; 
//    }
//    
//}
//

function year(theyears){
    if (thevalue === "2017") {
        month("fake");
    }
    if (thevalue === "2016") {
        return month("us_county_geojson_2016");
    }
}


var themap = function month(year){
    
    if (year === 2017) {
        return "fake";
    }
    if (year === 2016) {
        return "us_county_geojson_2016";
    }
}


var years = [
    '2016',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];


var sat2017 = L.geoJson(fake, {style: setTotal}).addTo(map);
var sat2016 = L.geoJson(us_county_geojson_2016);


//$('body').on('click', 'radio', function (radio) {
//    var id = $(radio).attr('id');
//     map.removeLayer(sat2017);
//    sat2017 = L.geoJson(fake, {style: style2}).addTo(map);
//    map.addLayer(sat2017);
//    break;
//    
//}); 








//var allcounties = L.layerGroup([geojson, geojson2]);
//var overlayMaps = {
//    "nc": allcounties
//};

//L.control.layers(overlayMaps).addTo(map);

//
//var geojson = L.geoJson(nccounties, {style: style}).addTo(map);



