//GOOGLE MAPS API KEY: AIzaSyAKF52YBIDiPuImg_FfeFPenJOmpVGM180
var root_url = "http://comp426.cs.unc.edu:3001/";

$(document).ready(() => { buildList(); });

var buildList = function() {
    let body = $('body');
    body.empty();
    body.append('<h1>FlightsControl</h1>');

    let nav = $('<div id=navbar></div>');
        
    nav.append(
        '<button class="navbar_item active" id="listView">List View</button>' +
        '<button class="navbar_item" id="mapView">Map View</button>' +
        '<button class="navbar_item" id="editView">Edit Flights</button>' +
        '<button class="navbar_item" id="logIn" style ="float:right;">Log In</button>');
    body.append(nav);
    // add search functionality based on time/locations ??
    //     $("body").on("click", "button.search", function() {
    //    
    //     });
    //should go inside ^ search function 
    let resultList = $('<div></div>')
    $.ajax(root_url + "instances", {
        type : 'GET',
        dataType : 'json',
        xhrFields : {withCredentials : true},
        success : (response) => {
            let instances = response;
            for (let i = 0; i < instances.length; i++) {
                let id = instances[i].id;
                let flight_id = instances[i].flight_id;
                let date = instances[i].date;
                let is_cancelled = instances[i].is_cancelled;
                $.ajax(root_url + 'flights/' + flight_id, {
                    type : 'GET',
                    dataType : 'json',
                    xhrFields : {withCredentials : true},
                    success : (response) => {
                        let flight = response;
                        let plane_id = flight.plane_id;
                        let airline_id = flight.airline_id;
                        let departure_id = flight.departure_id;
                        let arrival_id = flight.arrival_id;
                        let arrival_time = flight.arrives_at;
                        let departure_time = flight.departs_at;
                        let departure_name, departure_city, arrival_name, arrival_city;
                        $.ajax(root_url + 'airports/' + departure_id, {
                            type : 'GET',
                            dataType: 'json',
                            xhrFields : {withCredentials : true},
                            success : (response) =>{
                                departure_name = response.name;
                                departure_city = response.city;
                            },
                            error : () => { alert("airports1 call failed"); },
                        });                        
                        $.ajax(root_url + 'airports/' + arrival_id, {
                            type : 'GET',
                            dataType: 'json',
                            xhrFields : {withCredentials : true},
                            success : (response) =>{
                                arrival_name = response.name;
                                arrival_city = response.city;
                            },
                            error : () => { alert("airports2 call failed"); },
                        });
                        $.ajax(root_url + 'airlines/' + airline_id, {
                            type : 'GET',
                            dataType: 'json',
                            xhrFields : {withCredentials : true},
                            success : (response) =>{
                                let airline = response.data;
                                let airline_name = airline.name;
                                let airline_logo_url = airline.logo_url;
                                //let instancediv = createInstanceDiv(airline_name, airline_logo_url, flight_id, date, is_cancelled, arrival_time, departure_time, arrival_name, arrival_city, departure_city, departure_name);
                                //instancediv.addClass("result");
                                //resultList.append(instancediv);
                            },
                            error : () => { alert("airlines call failed"); },

                        });
                    }
                });
            }
        },
        error : () => { alert("instance call failed"); },
    });


    $("#mapView").on("click", function() { buildMap(); });
    $("#editView").on("click", function() { buildEdit(); });
};

var buildMap = function() {
    let body = $('body');
    body.empty();
    body.append('<h1>FlightsControl</h1>');

    let nav = $('<div id=navbar></div>');
    nav.append(
        '<button class="navbar_item" id="listView">List View</button>'+
        '<button class="navbar_item active" id="mapView">Map View</button>' +
        '<button class="navbar_item" id="editView">Edit Flights</button>' +
        '<button class="navbar_item" id="logIn" style ="float:right;">Log In</button>');
    body.append(nav);
    body.append('<div id="map"></div>');
    $.ajax(root_url + "airports", {
        type : 'GET',
        dataType : 'json',
        xhrFields : {withCredentials : true},
        success : (response) => {
            var map =
                new google.maps.Map(document.getElementById('map'),
                                    {center : {lat : 45, lng : -105}, zoom : 3});
            var infowindow = new google.maps.InfoWindow();
            let airports = response;
            var marker;
            for (let i = 0; i < airports.length; i++) {
                let id = airports[i].id;
                let lat = parseInt(airports[i].latitude);
                let lng = parseInt(airports[i].longitude);
                marker = new google.maps.Marker(
                    {position : new google.maps.LatLng(lat, lng), map : map});
                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        infowindow.setContent(
                            airports[i].name + ", " +
                            airports[i].city);
                        infowindow.open(map, marker);
                    }
                })(marker, i));
            }
        },
        error : () => { alert("AJAX call failed"); },
    });

    $("#listView").on("click", function() { buildList(); });
    $("#editView").on("click", function() { buildEdit(); });
}

var createInstanceDiv = function(airline_name, airline_logo_url, flight_id, date, is_cancelled, arrival_time, departure_time, arrival_name, arrival_city, departure_city, departure_name){
//    let tmp = $('<div></div>');
//    tmp.append('<img src =' + airline_logo_url + ' alt = ' + airline_name ' width = "50" height="50"</img>');
//    tmp.append('<p>'+airline_name+'</p>');
//    tmp.append('<p>'+flight_id+'</p>');
//    tmp.append('<p>'+date+'</p>');
//    tmp.append('<p> Cancelled: '+is_cancelled+'</p>');
//    tmp.append('<p>'+departure_city+'</p>');
//    tmp.append('<p>'+departure_time+'</p>');
//    tmp.append('<p>'+arrival_city+'</p>');
//    tmp.append('<p>'+arrival_time+'</p>');
//    return tmp;
}

var buildEdit = function(){
    let body = $('body');
    body.empty();
    body.append('<h1>FlightsControl</h1>');
    let nav = $('<div id=navbar></div>');
    nav.append(
        '<button class="navbar_item" id="listView">List View</button>'+
        '<button class="navbar_item" id="mapView">Map View</button>' +
        '<button class="navbar_item active" id="editView">Edit Flights</button>' +
        '<button class="navbar_item" id="logIn" style ="float:right;">Log In</button>');
    body.append(nav);
    body.append('<div id="map"></div>');

    $("#listView").on("click", function() { buildList(); });
    $("#mapView").on("click", function() { buildMap(); });
}