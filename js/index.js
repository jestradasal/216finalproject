var map = L.map('map').setView([35.3, -79.793457], 7);

var current_year = "2013";
//var array_of_maps = [us_county_geojson_2016, fake];
var current_map = fake;


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


function getYear(sliderYear){
    if (sliderYear === "2013") {
        current_year = "2013";
//        alert("current year is now " + current_year);
    }
    if (sliderYear === "2014") {
        current_year = "2014";
//        alert("current year is now " + current_year);
    }
    
    if (sliderYear === "2015") {
        current_year = "2015";
//        alert("current year is now " + current_year);
    }
    if (sliderYear === "2016") {
        current_year = sliderYear;
        current_map = us_county_geojson_2016;
//        alert("current map is now " + current_map);
    }
    
    if (sliderYear === "2017") {
        current_year = "2017";
        current_map = fake;
//        alert("current map is now " + current_map);
        
    }
}

var sat2017 = L.geoJson(current_map, {style: setTotal}).addTo(map);
//var sat2016 = L.geoJson(us_county_geojson_2016, {style: satColor}).addTo(map);
function switchSAT(){
    var box = document.getElementsByName('independent_variable');
    var v;
    for (var i = 0; i < 5; i++) {
        if(box[i].checked) {
           if (box[i].value === "total") {
            map.removeLayer(sat2017);
            sat2017 = L.geoJson(current_map, {style: setTotal}).addTo(map);
            map.addLayer(sat2017);
            break; }
            
            if (box[i].value === "Math") {
            map.removeLayer(sat2017);
            sat2017 = L.geoJson(current_map, {style: setMath}).addTo(map);
            map.addLayer(sat2017);
            break; }
            
            if (box[i].value === "CR") {
            map.removeLayer(sat2017);
            sat2017 = L.geoJson(current_map, {style: setCR}).addTo(map);
            map.addLayer(sat2017);
            break; }
            
            if (box[i].value === "writing") {
            map.removeLayer(sat2017);
            sat2017 = L.geoJson(current_map, {style: setWriting}).addTo(map);
            map.addLayer(sat2017);
            break; }
  
}
            
}}




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



