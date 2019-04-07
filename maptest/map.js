var root_url = "http://comp426.cs.unc.edu:3001/";
//key=AIzaSyAKF52YBIDiPuImg_FfeFPenJOmpVGM180


let homemenu = $("<h1>FlightSearch</h1><ul class='menu'>"+
"<li id='home'><a href='#' class='active'>Home</a></li>"+
"<li id='flights'><a href='#'>Flights</a></li>"+
"<li id='map'><a href='#'>Map</a></li id='about'>"+
"<li id='about'><a href='#'>About</a></li><li class='slider'></li></ul>");

let flightsmenu = $("<h1>FlightSearch</h1><ul class='menu'>"+
"<li id='home'><a href='#'>Home</a></li>"+
"<li id='flights'><a href='#' class='active'>Flights</a></li>"+
"<li id='map'><a href='#'>Map</a></li id='about'>"+
"<li id='about'><a href='#'>About</a></li><li class='slider'></li></ul>");

let mapmenu = $("<h1>FlightSearch</h1><ul class='menu'>"+
"<li id='home'><a href='#'>Home</a></li>"+
"<li id='flights'><a href='#'>Flights</a></li>"+
"<li id='map'><a href='#' class='active'>Map</a></li id='about'>"+
"<li id='about'><a href='#'>About</a></li><li class='slider'></li></ul>");

let aboutmenu = $("<h1>FlightSearch</h1><ul class='menu'>"+
"<li id='home'><a href='#'>Home</a></li>"+
"<li id='flights'><a href='#'>Flights</a></li>"+
"<li id='map'><a href='#'>Map</a></li id='about'>"+
"<li id='about'><a href='#' class='active'>About</a></li><li class='slider'></li></ul>");
$(document).ready(() => {
build_home();
    /*$('#login_btn').on('click', () => {

let user = $('#user').val();
let pass = $('#pass').val();

console.log(user);
console.log(pass);

$.ajax(root_url + "sessions",
      {
  type: 'POST',
  xhrFields: {withCredentials: true},
  data: {
      user: {
  username: user,
  password: pass
      }
  },
  success: () => {
      build_airlines_interface();
  },
  error: (jqxhr, status, error) => {
      alert(error);
  }
      });
    });*/
});

var build_home = function() {
    let body = $('body');

    body.empty();
    body.append(homemenu);

    let dailyflights = $("<h2>Day by Day Flights</h2>");
    body.append(dailyflights);

    //change calendar to one day
let calendar = $("<input type='text' name='calendar' value='01/01/2018 - 01/15/2018' />")
body.append(calendar);



$.ajax(root_url + "flights",
    {
    type: 'GET',
    xhrFields: {withCredentials: true},
   success: (instances) => {
   for (let i=0; i<instances.length; i++) {

    airport_list.push(airports[i].name);
    console.log(airport_list);
    airport_list_html.append("<li>" + airports[i].name + "</li>");
   }
   }
    });


    $('#flights').on('click', () => {
    build_flights();
    });

     $('#map').on('click', () => {
    build_map();
    });

    $('#about').on('click', () => {
    build_about();
    });
};

var build_flights = function() {
    let body = $('body');

    body.empty();
    body.append(flightsmenu);

    let flightselector = $("<div id='selector>")
let calendar = $("<input type='text' name='daterange' value='01/01/2018 - 01/15/2018' />")
$(function() {
  $('input[name="daterange"]').daterangepicker({
    opens: 'left'
  }, function(start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    console.log('start'+start);
    console.log('end'+end);
  });
});



    //body.append(calendar);

    //airports
    var airport_list = [];
    body.append("<h2>Airports</h2>");

    let airport_list_html = $("<ul id='airport_list_html'></ul>");
    body.append(airport_list_html);

    //let airport_add_div = $("<div>Name: <input id='new_airport_name' type='text'><br>" +
//    "<button id='make_airline'>Create</button></div>");

    $.ajax(root_url + "airports",
    {
    type: 'GET',
    xhrFields: {withCredentials: true},
   success: (airports) => {
   for (let i=0; i<airports.length; i++) {
    airport_list.push(airports[i].name);
    console.log(airport_list);
    airport_list_html.append("<li>" + airports[i].name + "</li>");
   }
   }
    });

    console.log('outside function'+airport_list);
    //SEARCH FORM
    let form = $("<div id='selector'>"+
  "<div id='from'>"+
    "From:<br>"+
    "<select id='from-select'></select>"+
  "</div>"+
  "<div id='to'>"+
    "To:<br>"+
    "<select id='to-select'></select>"+
  "</div>"+
  "<center><input type='text' name='daterange' id='date' value='01/01/2018 - 01/15/2018' /><br>"+
  "<button type='button' id='search-flights'>Search Flights</button></center>"+
        "<button type='button' id='edit-flights'>Edit Flights</button></center>"+
  "</div>");

    body.append(form);

    console.log(airport_list.length);

    var fromlist = ['test','test1'];

var select = document.getElementById("from-select");
for(index in fromlist) {
    select.options[select.options.length] = new Option(fromlist[index], index);
}

var tolist = ['test','test1'];

var toselect = document.getElementById("to-select");
for(index in tolist) {
    toselect.options[toselect.options.length] = new Option(tolist[index], index);
}

$('#search-flights').on('click', () => {
      searchFlights();
});

  $('#edit-flights').on('click', () => {
      editFlights();
      //console.("Hi");
});

function searchFlights() {
  if(select.options.length > 0) {
    //alert('cool');
    var from_select = select.options[select.selectedIndex].text;
    var to_select = toselect.options[toselect.selectedIndex].text;
    console.log(from_select);
    console.log(to_select);
  }
  else {
    alert('nothing selected')
  }
}


    //END SEARCH FORM


    //airlines
    var airline_list = [];
    body.append("<h2>Airlines</h2>");

    let airline_list_html = $("<ul id='airlines_list_html'></ul>");
    body.append(airline_list_html);

    //let airline_add_div = $("<div>Name: <input id='new_airline_name' type='text'><br>" +
//    "<button id='make_airline'>Create</button></div>");

    //body.append(airline_add_div);

    $.ajax(root_url + "airlines",
{
   type: 'GET',
   xhrFields: {withCredentials: true},
   success: (airlines) => {
for (let i=0; i<airlines.length; i++) {
  airline_list.push(airlines[i].name);
   airline_list_html.append("<li>" + airlines[i].name + "</li>");
}
   }
});

//flights
    var flight_list = [];
    body.append("<h2>Flights</h2>");

    let flight_list_html = $("<ul id='flight_list_html'></ul>");
    body.append(flight_list_html);

    //let airline_add_div = $("<div>Name: <input id='new_airline_name' type='text'><br>" +
//    "<button id='make_airline'>Create</button></div>");

    //body.append(airline_add_div);

    $.ajax(root_url + "flights",
{
   type: 'GET',
   xhrFields: {withCredentials: true},
   success: (flights) => {
for (let i=0; i<flights.length; i++) {
  flight_list.push(flights[i].number);
   flight_list_html.append("<li>" + flights[i].number + "</li>");
}
   }
});

    $('#home').on('click', () => {
    build_home();
    });

     $('#map').on('click', () => {
    build_map();
    });

    $('#about').on('click', () => {
    build_about();
    });
};

var build_map = function() {
    let body = $('body');

    body.empty();
    body.append(mapmenu);

var lineSymbol = {
path: 'M 0,-1 0,1',
strokeOpacity: 1,
scale: 4
};

//add the search based on calendar/airports
body.append('<button id= "show-flights">Show Flights</button>')
body.append('<input id= "airportA" value="">')
body.append('<button id= "search-flights">Search Flights</button>')
body.append('<div id="GMap"></div>');
var map = new google.maps.Map(document.getElementById('GMap'),
{center : {lat : 45, lng : -105}, zoom : 3});
map.setOptions({featureType: 'poi.business',
stylers: [{visibility: 'off'}]});
var markers = [];
    // $.ajax(root_url + "airports", {
    //     type : 'GET',
    //     dataType : 'json',
    //     xhrFields : {withCredentials : true},
    //     success : (response) => {
    //         let airports = response;
    //         for (let i = 0; i < airports.length; i++) {
// buildAirportMarker(airports[i]);
    //         }
    //     },
    //     error : () => { alert("AJAX call failed"); },
    // });
// function deleteMarkers() {
// for (var i = 0; i < markers.length; i++) {
// markers[i].setMap(null);
// }
// markers = [];
var buildAirportMarker = function(airport){
let info = $('<div id="markerinfo"></div>');
info.append('<h2>'+airport.name+'</h2>');
let arrivalsTable = $("<table></table>");
arrivalsTable.append('<tr><th>From</th><th>Flight ID</th><th>Status</th><th>Arrival Time</th></tr>')
$.ajax(root_url + "flights?filter[arrival_id]="+ airport.id, {
type : 'GET',
dataType : 'json',
xhrFields : {withCredentials : true},
success : (response) => {
let flights = response;
for (let i = 0; i < flights.length; i++) {
$.ajax(root_url + "airports/" + flights[i].departure_id, { type : 'GET', dataType : 'json', xhrFields : {withCredentials : true},
       success : (response) => {
arrivalsTable.append('<tr><td>'+ response.name + '</td><td>'+ flights[i].id + '</td><td>'+ flights[i].id + '</td><td>'+ flights[i].arrives_at + '</td></tr>')
//141557
       },
       error : () => { alert("AJAX call failed"); },
   });
}
},
error : () => { alert("AJAX call failed"); },
});
let departuresTable = $("<table></table>");
departuresTable.append('<tr><th>To</th><th>Flight ID</th><th>Status</th><th>Departure Time</th></tr>')
$.ajax(root_url + "flights?filter[departure_id]="+ airport.id, {
type : 'GET',
dataType : 'json',
xhrFields : {withCredentials : true},
success : (response) => {
let flights = response;
for (let i = 0; i < flights.length; i++) {
$.ajax(root_url + "airports/" + flights[i].arrival_id, { type : 'GET', dataType : 'json', xhrFields : {withCredentials : true},
       success : (response) => {
departuresTable.append('<tr><td>'+ response.name + '</td><td>'+ flights[i].id + '</td><td>'+ flights[i].id + '</td><td>'+ flights[i].arrives_at + '</td></tr>')
       },
       error : () => { alert("AJAX call failed"); },
   });
}
},
error : () => { alert("AJAX call failed"); },
});
info.append('<h4>Arrivals</h4>');
info.append(arrivalsTable);
info.append('<h4>Departures</h4>');
info.append(departuresTable);
let information =info.html();
console.log(information);
let marker;
let lat = parseInt(airport.latitude);
let lng = parseInt(airport.longitude);
var infowindow = new google.maps.InfoWindow({
         content: information,
         maxWidth: 200
       }); marker = new google.maps.Marker(
{position : new google.maps.LatLng(lat, lng), map : map});
google.maps.event.addListener(marker, 'click', (function(marker) {
return function() {
infowindow.open(map, marker);
}
})(marker));
markers.push(marker);
}
//test code for deleting markers
body.append('<button id= "delete-markers">Delete Markers</button>')
$('#delete-markers').on('click', () => {
deleteMarkers();
});

$('#search-flights').on('click', () => {
let airport = $('#airportA').val();
$.ajax(root_url + "airports?filter[name]=" + airport, {
       type : 'GET',
       dataType : 'json',
       xhrFields : {withCredentials : true},
       success : (response) => {
buildAirportMarker(response[0]);
       },
       error : () => { alert("AJAX call failed"); },
   });
});

    $('#flights').on('click', () => {
    build_flights();
    });

     $('#home').on('click', () => {
    build_home();
    });

    $('#about').on('click', () => {
    build_about();
    });
};

var build_about = function() {
    let body = $('body');

    body.empty();
    body.append(aboutmenu);




    $('#flights').on('click', () => {
    build_flights();
    });

     $('#map').on('click', () => {
    build_map();
    });

    $('#home').on('click', () => {
    build_home();
    });
};