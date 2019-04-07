var root_url = "http://comp426.cs.unc.edu:3001/";

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

    $('body').unbind('click').click(function() {
    });

    body.append('<div class="homecontainer"></div>');
    let homecontainer = $('.homecontainer');

  	let maintitle = $('<h2>Welcome to FlightSearch(and Destroy)</h2>');
  	homecontainer.append(maintitle);

    let introcontainer =  $('<div class="intro">Flights - Search for all instances of flights '+
      'from a selected airport on selected date. Options to cancel instances that delete tickets'+
      ' and iteneraries associated with cancelled instance.<br>'+
      'Map - Shows all instances prior to a certain time with options to cancel, etc<br>'+
      '<span id="th">Th</span>ere is also <span id="a">a</span> crazy easter egg if you happe<span id="n">n</span>'+
      ' t<span id="o">o</span> <span id="s">s</span>ee it!</div>');
    homecontainer.append(introcontainer);

    th = false;
    a = false;
    n = false;
    o = false;
    s = false;

    $('#th').on('click', () => {
      th = true;
    });
    $('#a').on('click', () => {
      a = true;
    });
    $('#n').on('click', () => {
      n = true;
    });
    $('#o').on('click', () => {
      o = true;
    });
    $('#s').on('click', () => {
      //if (th&&a&&n&&o) {
        //alert('thanos');
        thanosTime();
      //}
    });

    function unbind() {
      $('body').unbind('click').click(function() {
      });
    }

    function thanosTime() {
      homecontainer.empty()
      

      let eastereggcontainer = $('<div class="egg"></div>');
      body.append(eastereggcontainer);
      var egg = $('.egg');

      egg.append("<div id='gauntlet'>"+"<img src='/gauntlet.jpg'></div>"+
        "<h2>Collect all 6 Infinity Gems! <button id='startegg'>OK</button></h2>");

      egg.on('click','#startegg', function() {
        egg.empty();
        egg.append("<span class='stonetitles' id='xandartitle'>Power Stone - Destroy Xandar!</span><br><button id='xandar'>"+
          "<img src='/Xandar-Planeta.jpg'></button><br>");
      });

       egg.on('click','#xandar', function() {
        //alert('xandar clicked')
        unbind();
        $('#xandar').remove();
        $('#xandartitle').html('Xandar Destroyed. Power Stone acquired!');
        egg.append('<img src="/xandar-boom.jpg"');
        alert('???')
        egg.append("<br><span class='stonetitles' id='spacetitle'>Space Stone - Raid Thor's ship!</span><br>"+
          "<button id='space'><img src='/ship.jpg'></button><br>");
      });

       egg.on('click','#space', function() {
        //alert('space clicked')
        unbind();
        $('#space').remove();
        $('#spacetitle').html('Thor pwned. Space Stone acquired!');
        egg.append('<img src="/space-stone.jpg"><br>');
        egg.append("<span class='stonetitles' id='realitytitle'>Reality Stone - Beat the Collector and troll the Guardians!</span><br>"+
          "<button id='reality'><img src='/collector.jpg'></button><br>");
      });

       egg.on('click','#reality', function() {
        //alert('space clicked')
        unbind();
        $('#reality').remove();
        $('#realitytitle').html('Guardians rekt. Reality Stone acquired!');
        egg.append('<img src="/realitystone.png"><br>');
        egg.append("<span class='stonetitles' id='soultitle'>Soul Stone - Sacrifice Gamora</span><br>"+
          "<button id='soul'><img src='/thanos-throw.jpg'></button><br>");
      });

       egg.on('click','#soul', function() {
        //alert('space clicked')
        unbind();
        $('#soul').remove();
        $('#soultitle').html('It cost you everything, but Soul Stone acquired!');
        egg.append('<img src="/sorry.jpg"><br>');
        egg.append("<span class='stonetitles' id='timetitle'>Time Stone - Wreck everyone</span><br>"+
          "<button id='timestone'><img src='/strange.jpg'></button><br>");
      });

       egg.on('click','#timestone', function() {
        //alert('space clicked')
        unbind();
        $('#timestone').remove();
        $('#timetitle').html('Close, but no cigar. Time Stone acquired!');
        egg.append('<img src="/timestone.jpg"><br>');
        egg.append("<span class='stonetitles' id='mindtitle'>Mind Stone - Wreck everyone again!</span><br>"+
          "<button id='mind'><img src='/thanosvseveryone.jpg'></button>");
      });

       egg.on('click','#mind', function() {
        //alert('mind clicked')
        unbind();
        $('#mind').remove();
        $('#mindtitle').html('You should have gone for the head! All Stones acquired! Click to snap! (deletes 1/2 instances for today)');
        egg.append('<img src=""><br>');
        egg.append("<button id='snap'><img src='/fullpower.jpg'></button><br>");
      });

        egg.on('click','#snap', function() {
        //alert('mind clicked')
        unbind();
        egg.empty();
        egg.append("<img src='/snap.gif'>");
        perfectlybalanced();
      });

    }

    function perfectlybalanced() {
      alert('deleting half')
    }


    $('#home').on('click', () => {
      build_home();
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

    $('body').unbind('click').click(function() {
    });

  let searchcontainer = $('<div class="searchcontainer"></div>');
  body.append(searchcontainer);

	let info = $('<h1>Search for Flight Instances by Date and Airport</h1>');
	searchcontainer.append(info);
	let date_search = $('<h2>Date</h2>');
	searchcontainer.append(date_search);
	let calendar = $("<input type='text' name='cal' class='calendar' value='12/09/2018'/>");
	searchcontainer.append(calendar);
	//console.log(calendar.value)

	$(function() {
  		$('input[name="cal"]').daterangepicker({
    		singleDatePicker: true,
    		showDropdowns: true,
  		}, function(start) {
    		
  		});
	});

    //airports
   var airport_list = [];
   var airport_list_ids = [];
   let searchDiv = $('<div class="searchDiv"></div>');
   searchDiv.append("<h2>Airports</h2>");
   let airport_list_html = $("<ul id='airport_list_html' class=airportSearch></ul>");
   searchDiv.append($('<input type="text" class="searchBar" placeholder="Search Airports">'));
   let airport_list_drop = $('<div class="airportDropClass"></div>');
   searchDiv.append(airport_list_drop);
   
   searchcontainer.append(searchDiv);
   $.ajax(root_url + "airports",
   {
       type: 'GET',
       xhrFields: {withCredentials: true},
        success: (airports) => {
        for (let i=0; i<airports.length; i++) {
            airport_list.push(airports[i].name);
            airport_list_ids.push(airports[i].id)
            var removeSpaces = airports[i].name.replace(/\s/g,'').toLowerCase();
        }
     }
   });

   // Search bar function
   function autocomplete(searchText) {
     if(searchText.length === 0) {
       $('.airportDropClass').empty();
       return false;
     }
     let filteredList = airport_list.filter(airport => {
     return airport.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
     });
     return filteredList;
   }

   var selectedAirport;
   $(".searchBar").on('keyup', function() {
     let input = $(this).val();
     let airportDrop = autocomplete(input);
     if (!airportDrop) {
        return false;
     }
     $('.airportDropClass').empty();
     
     for (let i = 0; i < airportDrop.length; i++) {
        $('.airportDropClass').append('<button class="airportButtons" value="' + airportDrop[i] + '">' + airportDrop[i] +'</button>' + '<br>');
     }
    });

   var airport_name = '';
   var airport_id;


   $('.airportDropClass').on('click','.airportButtons',function(){
     airport_name = $(this).val();
     if ($('.searchButton').length>0) {
      //nothing
     } else {
      let searchinstances = $('<button class="searchButton" value="'+airport_name+'">Search</button>' + '<br>');

     searchcontainer.append(searchinstances);
     }
     
    });

   $('.searchcontainer').on('click','.searchButton',function(e){
        id = pull_id(airport_name);
        getflightids(id);
    });


function pull_id(airportname) { 
    var id;
    //console.log(airportname);   
    $.ajax(root_url + "airports?" + "filter[name]="+ airportname,
    {
      type: 'GET',
      async: false,
      xhrFields: {withCredentials: true},
      success: (airports) => {
        //console.log(airports[0].id);
      airport_id = airports[0].id;
      //console.log(airport_id)
      //search();
      id = airport_id;
      }
    });
    return id;  
}

function getflightids(id) {
  let flight_ids_from_airport = []
  $.ajax(root_url + "flights?" + "filter[departure_id]="+ id,
    {
      type: 'GET',
      async: false,
      xhrFields: {withCredentials: true},
      success: (flights) => {      
      for (let i=0;i<flights.length;i++) {
        flight_ids_from_airport.push(flights[i].id)
      }
      if (flight_ids_from_airport.length === 0) {
        alert('no flights from this airport');
      } else {
        getinstances(flight_ids_from_airport);
      }
      }
    });
}

function calendarformat(date) {
  day = date[3] + date[4];
  month = date[0] + date[1];
  year = date[6]+date[7]+date[8]+date[9]
  return year+'-'+month+'-'+day;
}



function getinstances(flight_ids) {
  let date = $('.calendar').val();

  date = calendarformat(date);
  let instances_list = []
  let valid_flight_ids = []
  for (let i=0;i<flight_ids.length;i++) {
    $.ajax(root_url + "instances?" + "filter[date]="+date+"&filter[flight_id]="+flight_ids[i]+"&filter[is_cancelled]=false",
    {
      type: 'GET',
      async: false,
      xhrFields: {withCredentials: true},
      success: (instances) => {
      instancelen = instances.length;
      for (let i=0; i<instancelen; i++) {
        instances_list.push(instances[i].id)
        valid_flight_ids.push(instances[i].flight_id)
      }
      }
    });
  }
  
  results(valid_flight_ids,instances_list); //gives results list of instance ids
}

//wipes search stuff and displays results along with cancelling flights
function results(instance_flight_ids,instance_ids) {
  $('.resultscontainer').remove()
  let resultscontainer = $('<div class="resultscontainer"></div>');
  body.append(resultscontainer);
  let results_title = $('<h1>Results</h1>');
  $('.resultscontainer').append(results_title);
  $('.resultscontainer').append('<table id="results-table">'+
    '<tr>'+
    '<th>Departure Airport</th>'+
    '<th>Destination Airport</th>'+
    '<th>Departure Time</th>'+
    '<th>Arrival Time</th>'+
    '<th>Cancel</th>'+
    '</tr>'+
    '</table>');
  
  console.log('flight ids of instances: '+instance_flight_ids)
  for (let i=0;i<instance_flight_ids.length;i++) {
    airportname = $('.searchButton').val();
    destname = 'destination name';
    destid = 0;
    depart_time = 'departure time';
    arrival_time = 'arrival time';

    //this is a flight id for an instance
    //search for departure and arrival time of flight associated with this
    //instance_flight_ids[i]
    $.ajax(root_url + "flights?" + "filter[id]="+ instance_flight_ids[i],
    {
      type: 'GET',
      async: false,
      xhrFields: {withCredentials: true},
      success: (flights) => {
        console.log('flights.len'+flights.length)
        depart_time = flights[0].departs_at;
        arrival_time = flights[0].arrives_at;
        destid = flights[0].arrival_id;
      }
    });

    $.ajax(root_url + "airports?" + "filter[id]="+ destid,
    {
      type: 'GET',
      async: false,
      xhrFields: {withCredentials: true},
      success: (airports) => {
        destname = airports[0].name;
      }
    });

    var table = document.getElementById("results-table");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = airportname;
    cell2.innerHTML = destname;
    cell3.innerHTML = depart_time;
    cell4.innerHTML = arrival_time;
    //cell5.innerHTML = '<button class="cancelflight" id="'+i+'" value="'+instance_ids[i]+'">Cancel Flight</button>';
    cell5.innerHTML = '<button class="cancelflight" id="'+i+'" value="'+instance_ids[i]+'"">Cancel Flight</button>';

    //$('.resultscontainer').append(instances_list[i]);
    } 
  }


  $('body').on('click','.cancelflight',function(e){
        e.stopPropagation();
        instance_id = $(this).val();
        id = parseInt(this.id) + 1;

        var table = document.getElementById("results-table");
        try {
          $(this).closest('tr').remove()
        } catch(err) {
          //don't worry about it
        }
        
        $.ajax(root_url + "instances/" +instance_id,
        {
            type: "PUT",
            dataType: "json",
            xhrFields: { withCredentials: true },
            data: {
                "instance": {
                    "is_cancelled": "true"
                }
            }
        });
        deleteItineraries(instance_id);
  });

  //now need to delete tickets and iteneraries associated with cancelled instances

  function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
  }
  
  //to delete iteneraries, need ticket[itinerary_id], so delete itineraries first
  //to delete tickets, need filter by instance id then delete all ids

  function deleteItineraries(instance_id) {
    itinerary_id_list = [];
    ticket_id_list = [];

    //get tickets with instance_id that was just cancelled

    $.ajax(root_url + "tickets?" + "filter[id]="+ instance_id,
    {
      type: 'GET',
      async: false,
      xhrFields: {withCredentials: true},
      success: (tickets) => {
        for(let i=0;i<tickets.length;i++) {
          alert('num of tickets'+tickets.length)
          itinerary_id_list.push(tickets[i].itinerary_id);
          ticket_id_list.push(tickets[i].id);
        }
      },
      error: () => {
                //ok
            }
    });

    //filter itinerary id list to remove dups
    filtered_itinerary_id_list = itinerary_id_list.filter(onlyUnique);

    //now for each itinerary id in list, delete
    //what if there's some totally unrelated flight using same itinerary????
    //should only delete itinerary if it's only being used by cancelled instance
    alert('number of intineraries to delete'+filtered_itinerary_id_list.length);
    console.log('filtered list to delete'+filtered_itinerary_id_list);
    
      for (let i=0;i<filtered_itinerary_id_list.length;i++) {
        $.ajax(root_url + "itineraries/" +filtered_itinerary_id_list[i],
        {
            type: "DELETE",
            async: false,
            xhrFields: { withCredentials: true },
            success: (response) => {

            },
            error: (response) => {
                //ok
            }
        });
    } 
    //now call delete ticket function
    deleteTickets(ticket_id_list);
  }

  function deleteTickets(ticket_id_list) {
    //alert('here')
    for (let i=0;i<ticket_id_list.length;i++) {
      $.ajax(root_url + "tickets/" +ticket_id_list[i],
        {
            type: "DELETE",
            xhrFields: { withCredentials: true },
            success: (response) => {

            }
        });
    } 
  }

    $('#home').on('click', () => {
    	build_home();
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

var build_map = function() {
  let body = $('body');
  body.empty();
  body.append(mapmenu);

  $('body').unbind('click').click(function() {
  });

  body.append($(
      '<h2 style="text-align:center;">Search and Edit Flight Instances</h2>'));
  let mapLayout = $('<div id = "mapLayout"></div>');
  body.append(mapLayout);
  let searchcontainer = $('<div class="searchcontainer"></div>');
  mapLayout.append(searchcontainer);
  searchcontainer.append($('<h3>Date:</h3>'));
  searchcontainer.append(
      $("<input type='text' id='calendar' value='12/09/2018'/>"));
  $(function() {
    $('#calendar').daterangepicker({
      singleDatePicker : true,
      showDropdowns : true,
    });
  });
  searchcontainer.append($('<h3>Departs Before:</h3>'));
  searchcontainer.append($("<input type='text' id='timepicker'/>"));
  $('#timepicker').timepicker({
    timeFormat : 'HH:mm p',
    interval : 60,
    minTime : '12:00 am',
    maxTime : '11:00pm',
    defaultTime : '1:00 am',
    startTime : '12:00 am',
    dynamic : true,
    dropdown : true,
    scrollbar : true
  });
  let searchButton = $(
      '<button class="searchButton" id="mapSearchButton">Search Flights</button>');
  let loadingButton = $(
      '<button class="searchButton hidden"><i class="fa fa-circle-o-notch fa-spin"></i> Loading</button>');
  let divButtons = $('<div></div>');
  divButtons.append(searchButton);
  divButtons.append(loadingButton);
  searchcontainer.append(divButtons);
  mapLayout.append('<div id="GMap"></div>');
  var map = new google.maps.Map(document.getElementById('GMap'), {
    center : {lat : 45, lng : -105},
    zoom : 3,
    mapTypeControl : false,
    streetViewControl : false,
    styles : [
      {"elementType" : "geometry", "stylers" : [ {"color" : "#ebe3cd"} ]},
      {
        "elementType" : "labels.text.fill",
        "stylers" : [ {"color" : "#523735"} ]
      },
      {
        "elementType" : "labels.text.stroke",
        "stylers" : [ {"color" : "#f5f1e6"} ]
      },
      {
        "featureType" : "administrative",
        "elementType" : "geometry.stroke",
        "stylers" : [ {"color" : "#c9b2a6"} ]
      },
      {
        "featureType" : "administrative.country",
        "elementType" : "labels.text",
        "stylers" : [ {"visibility" : "off"} ]
      },
      {
        "featureType" : "administrative.land_parcel",
        "elementType" : "geometry.stroke",
        "stylers" : [ {"color" : "#dcd2be"} ]
      },
      {
        "featureType" : "administrative.land_parcel",
        "elementType" : "labels.text.fill",
        "stylers" : [ {"color" : "#ae9e90"} ]
      },
      {
        "featureType" : "administrative.locality",
        "stylers" : [ {"visibility" : "off"} ]
      },
      {
        "featureType" : "administrative.neighborhood",
        "stylers" : [ {"visibility" : "off"} ]
      },
      {
        "featureType" : "landscape.natural",
        "elementType" : "geometry",
        "stylers" : [ {"color" : "#d6dfb3"} ]
      },
      {"featureType" : "poi", "stylers" : [ {"visibility" : "off"} ]},
      {
        "featureType" : "poi",
        "elementType" : "geometry",
        "stylers" : [ {"color" : "#dfd2ae"} ]
      },
      {
        "featureType" : "poi",
        "elementType" : "labels.text.fill",
        "stylers" : [ {"color" : "#93817c"} ]
      },
      {
        "featureType" : "poi.park",
        "elementType" : "geometry.fill",
        "stylers" : [ {"color" : "#a5b076"} ]
      },
      {
        "featureType" : "poi.park",
        "elementType" : "labels.text.fill",
        "stylers" : [ {"color" : "#447530"} ]
      },
      {
        "featureType" : "road",
        "elementType" : "geometry",
        "stylers" : [ {"color" : "#f5f1e6"} ]
      },
      {"featureType" : "road.arterial", "stylers" : [ {"visibility" : "off"} ]},
      {
        "featureType" : "road.arterial",
        "elementType" : "geometry",
        "stylers" : [ {"color" : "#fdfcf8"} ]
      },
      {
        "featureType" : "road.highway",
        "elementType" : "geometry",
        "stylers" : [
          {"color" : "#f8f28a"}, {"saturation" : -100}, {"lightness" : -100}
        ]
      },
      {
        "featureType" : "road.highway",
        "elementType" : "geometry.fill",
        "stylers" : [ {"color" : "#e0e97d"}, {"weight" : 0.5} ]
      },
      {
        "featureType" : "road.highway",
        "elementType" : "geometry.stroke",
        "stylers" : [ {"color" : "#e9bc62"}, {"visibility" : "off"} ]
      },
      {
        "featureType" : "road.highway.controlled_access",
        "elementType" : "geometry",
        "stylers" : [ {"color" : "#e98d58"} ]
      },
      {
        "featureType" : "road.highway.controlled_access",
        "elementType" : "geometry.stroke",
        "stylers" : [ {"color" : "#db8555"} ]
      },
      {"featureType" : "road.local", "stylers" : [ {"visibility" : "off"} ]},
      {
        "featureType" : "road.local",
        "elementType" : "labels.text.fill",
        "stylers" : [ {"color" : "#806b63"} ]
      },
      {
        "featureType" : "transit.line",
        "elementType" : "geometry",
        "stylers" : [ {"color" : "#dfd2ae"} ]
      },
      {
        "featureType" : "transit.line",
        "elementType" : "labels.text.fill",
        "stylers" : [ {"color" : "#8f7d77"} ]
      },
      {
        "featureType" : "transit.line",
        "elementType" : "labels.text.stroke",
        "stylers" : [ {"color" : "#ebe3cd"} ]
      },
      {
        "featureType" : "transit.station",
        "elementType" : "geometry",
        "stylers" : [ {"color" : "#dfd2ae"} ]
      },
      {
        "featureType" : "water",
        "elementType" : "geometry.fill",
        "stylers" : [ {"color" : "#88b295"} ]
      },
      {
        "featureType" : "water",
        "elementType" : "labels.text.fill",
        "stylers" : [ {"color" : "#92998d"} ]
      }
    ]
  });
  var markers = [];
  $('body').on('click', '#mapSearchButton', function() {
    searchButton.toggleClass("hidden");
    loadingButton.toggleClass("hidden");
    let date = $('#calendar').val();
    let time = $('#timepicker').val();
    date = calendarformat(date);
    loadMap(date, time);
  });
  function loadMap(date, time) {
    deleteMarkers();
    let instances = [];
    $.ajax(root_url + "instances?" +
               "filter[date]=" + date,
           {
             type : 'GET',
             async : false,
             xhrFields : {withCredentials : true},
             success : (instance) => {
               for (let i = 0; i < instance.length; i++) {
                 instances[instance[i].flight_id] =
                     [ parseInt(instance[i].id), instance[i].is_cancelled ];
               }
             }
           });
    $.ajax(root_url + "airports", {
      type : 'GET',
      dataType : 'json',
      xhrFields : {withCredentials : true},
      success : (response) => {
        let airports = response;
        for (let i = 0; i < airports.length; i++) {
          buildAirportMarker(airports[i], instances, time);
        }
        searchButton.toggleClass("hidden");
        loadingButton.toggleClass("hidden");
      }
    });
  }
  function buildAirportMarker(airport, instances, time) {
    let info = $('<div id="markerinfo"></div>');
    info.append('<h2>' + airport.name + '</h2>');
    let arrivalsTable = $('<table class="markerTable"></table>');
    info.append('<h3>Arrivals</h3>');
    info.append(arrivalsTable);
    let departuresTable = $('<table class="markerTable"></table>');
    info.append('<h3>Departures</h3>');
    info.append(departuresTable);
    $.ajax(
        root_url + "flights?filter[arrival_id]=" + airport.id +
            "&filter[departs_at_lt]=" + time,
        {
          type : 'GET',
          async : false,
          dataType : 'json',
          xhrFields : {withCredentials : true},
          success : (flights) => {
            if (flights.length > 0) {
              arrivalsTable.append(
                  '<tr><th>From</th><th>Flight ID</th><th>Arrival Time</th><th>Edit Status</th></tr>');
              for (let i = 0; i < flights.length; i++) {
                if (flights[i].id in instances) {
                  fl = flights[i].id;
                  let status;
                  if (instances[fl][1]) {
                    status = "Cancelled";
                  } else {
                    status = "On Time";
                  }
                  $.ajax(root_url + "airports/" + flights[i].departure_id, {
                    async : false,
                    type : 'GET',
                    dataType : 'json',
                    xhrFields : {withCredentials : true},
                    success : (response) => {
                      arrivalsTable.append(
                          '<tr><td>' + response.name +
                          '</td><td style="text-align: center;">' +
                          flights[i].id +
                          '</td><td style="text-align: center;">' +
                          formatTime(flights[i].arrives_at) +
                          '</td><td><button class="editButton" id="' +
                          instances[fl][0] + '" onClick="editClick(' +
                          instances[fl][0] + ',this.text)">' + status +
                          '</button></td></tr>');
                    }
                  });
                }
              }
            }
          }
        });
    $.ajax(
        root_url + "flights?filter[departure_id]=" + airport.id +
            "&filter[departs_at_lt]=" + time,
        {
          type : 'GET',
          async : false,
          dataType : 'json',
          xhrFields : {withCredentials : true},
          success : (flights) => {
            if (flights.length > 0) {
              departuresTable.append(
                  '<tr><th>To</th><th>Flight ID</th><th>Departure Time</th><th>Edit Status</th></tr>');
              for (let i = 0; i < flights.length; i++) {
                if (flights[i].id in instances) {
                  fl = flights[i].id;
                  let status;
                  if (instances[fl][1]) {
                    status = "Cancelled";
                  } else {
                    status = "On Time";
                  }
                  $.ajax(root_url + "airports/" + flights[i].arrival_id, {
                    async : false,
                    type : 'GET',
                    dataType : 'json',
                    xhrFields : {withCredentials : true},
                    success : (response) => {
                      departuresTable.append(
                          '<tr><td>' + response.name +
                          '</td><td style="text-align: center;">' +
                          flights[i].id +
                          '</td><td style="text-align: center;">' +
                          formatTime(flights[i].departs_at) +
                          '</td><td><button class="editButton" id="' +
                          instances[fl][0] + '" onClick="editClick(' +
                          instances[fl][0] + ', this.text)">' + status +
                          '</button></td></tr>');
                    }
                  });
                }
              }
            }
          }
        });
    if (arrivalsTable.is(":parent") || departuresTable.is(":parent")) {
      if (arrivalsTable.is(":empty") ||
          arrivalsTable.html() ==
              '<table class="markerTable"><tr><th>From</th><th>Flight ID</th><th>Arrival Time</th><th>Edit Status</th></tr></table>') {
        arrivalsTable.append('<p>No Arrivals</p>');
      }
      if (departuresTable.is(":empty") ||
          departuresTable.html() ==
              '<table class="markerTable"><tr><th>To</th><th>Flight ID</th><th>Departure Time</th><th>Edit Status</th></tr></table>') {
        departuresTable.append('<p>No Departures</p>');
      }
      var icon = {
        url : "http://maps.google.com/mapfiles/ms/micons/red.png", // url
        size : new google.maps.Size(32, 32),
        scaledSize : new google.maps.Size(16, 16), // scaled size
        origin : new google.maps.Point(0, 0),      // origin
        anchor : new google.maps.Point(10, 16)     // anchor
      };
      let marker;
      let lat = parseInt(airport.latitude);
      let lng = parseInt(airport.longitude);
      var infowindow =
          new google.maps.InfoWindow({content : info.html(), maxWidth : 600});
      marker = new google.maps.Marker({
        position : new google.maps.LatLng(lat, lng),
        map : map,
        icon : icon
      });
      google.maps.event.addListener(
          marker, 'click',
          (function(
              marker) { return function() { infowindow.open(map, marker); } })(
              marker));
      markers.push(marker);
    }
  }
  function calendarformat(date) {
    day = date[3] + date[4];
    month = date[0] + date[1];
    year = date[6] + date[7] + date[8] + date[9];
    return year + '-' + month + '-' + day;
  }
  function formatTime(time) {
    hour = time[11] + time[12];
    minutes = time[14] + time[15];
    return hour + ':' + minutes;
  }
  function deleteMarkers() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  }
  $('#home').on('click', () => { build_home(); });
  $('#flights').on('click', () => { build_flights(); });
  $('#about').on('click', () => { build_about(); });
};
var editClick = function(instance_id, status) {
  alert(instance_id);
  if (status = "Cancelled") {
    $.ajax(root_url + "instances/" + instance_id, {
      type : 'PUT',
      xhrFields : {withCredentials : true},
      datatype : "json",
      data : {"instance" : {"is_cancelled" : "false,"}},
      success : (response) => {}
    });
  } else {
    $.ajax(root_url + "instances/" + instance_id, {
      type : 'PUT',
      xhrFields : {withCredentials : true},
      datatype : "json",
      data : {"instance" : {"is_cancelled" : "false,"}},
      success : (response) => {}
    });
  }
};

var build_about = function() {
    let body = $('body');

    body.empty();
    body.append(aboutmenu);
    let aboutDiv = $('<div class="aboutDiv"></div>');
    let titleDiv = $('<div class"titleDiv"></div>');
    //titleDiv.append('<h1 class="aboutTitle" >About Our Product</h1>');
    titleDiv.append('<div class="aboutOurProduct">ABOUT OUR PRODUCT AND TEAM</div>' + '<br>');
    titleDiv.append('<div class="description">For our project we decided to make use of the airline flight data API by creating an application that allows you to act as if you were in charge of air traffic control. The Flights page allows you to search for flight instances by date and airport. Selecting instances will give you the ability to cancel flights and. The Map page allows you to search for flights on a map of the world based on the date and time of departure. This page also gives you the power to cancel flights that you select. </div>' + "<br><br>");

    aboutDiv.append(titleDiv);

    let footerDiv = $('<div class="footerDiv"></div>');
    let footer1Div = $('<div class="footerDiv"></div>');
    let footer2Div = $('<div class="footerDiv"></div>');


    let imageDiv = $('<div class="imageDiv"></div>');
    imageDiv.append('<img class="teamPic" width="225" height="225" src="alex.jpg" alt="alex">');
    imageDiv.append('<div class="overlay">' + '<div class="nameText">ALEX</div>' + '</div>');
    footerDiv.append(imageDiv);
    footerDiv.append('<div class="bio">Alex Donovan is a computer science and information science double major at The University of North Carolina at Chapel Hill. </div>');

    let imageDiv1 = $('<div class="imageDiv"></div>');
    imageDiv1.append('<img class="teamPic" width="225" height="225" src="alex.jpg" alt="aidan">');
    imageDiv1.append('<div class="overlay">' + '<div class="nameText">ZSOFIA</div>' + '</div>');
    footer1Div.append(imageDiv1);
    footer1Div.append('<div class="bio">Zsofia Voros is a computer science and statistics double major at The University of North Carolina at Chapel Hill.</div>');

    let imageDiv2 = $('<div class="imageDiv"></div>');
    imageDiv2.append('<img class="teamPic" width="225" height="225" src="alex.jpg" alt="zsofia">');
    imageDiv2.append('<div class="overlay">' + '<div class="nameText">AIDAN</div>' + '</div>');
    footer2Div.append(imageDiv2);
    footer2Div.append('<div class="bio">Aidan Mcritchie is a computer science major at The University of North Carolina at Chapel Hill.</div>');

    aboutDiv.append(footerDiv);
    aboutDiv.append(footer1Div);
    aboutDiv.append(footer2Div);


    body.append(aboutDiv);

    $('#home').on('click', () => {
      build_home();
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


		   

    