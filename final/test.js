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
    //$('#login_btn').on('click', () => {
  
  let user = 'mcaim23';
  let pass = 'soccercats23';

  //console.log(user);
  //console.log(pass);

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
           build_home();
       },
       error: (jqxhr, status, error) => {
           alert(error);
       }
         });
    
  
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

    let introcontainer =  $('<div class="intro">For our project we decided to make use of the airline flight data API'+
      ' by creating an application that allows you to act as if you were in charge of air traffic control. <br><br>'+
      'The Flights page allows you to search for flight instances by date and airport. Then you can select from a table'+
      ' of instances to cancel. This also cancels any associated tickets and itinerarires of that instance.<br><br>'+
      'The Map page allows you to search for flight instances on a map of the world based on the date and time of departure.'+
      ' This page also gives you the power to cancel flights that you select.<br><br>'+
      '<span id="th">Th</span>ere is also <span id="a">a</span> mad, titanic easter egg if you happe<span id="n">n</span>'+
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
      if (th&&a&&n&&o) {
        thanosTime();
      }
    });

    function unbind() {
      $('body').unbind('click').click(function() {
      });
    }

    function thanosTime() {
      homecontainer.empty();
      let eastereggcontainer = $('<div class="egg"></div>');
      $('.homecontainer').append(eastereggcontainer);
      var egg = $('.egg');
      $("<div id='gauntlet'>"+"<img src='img/gauntlet.jpg'></div>"+
        "<h2>Collect all 6 Infinity Gems!</h2><button class='okbutton' id='startegg'>OK</button>").appendTo(egg).hide().fadeIn(3000);

      egg.on('click','#startegg', function() {
        egg.empty();
        $("<span class='stonetitles' id='xandartitle'>Power Stone - Destroy Xandar!</span><br><button id='xandar'>"+
          "<img src='img/Xandar-Planeta.jpg'></button>").appendTo(egg).hide().fadeIn(3000);
      });

       egg.on('click','#xandar', function() {
        unbind();
        $('#xandar').hide(2000).remove();
        if ($('#xandar').length === 0) {
          $('#xandartitle').hide().html('Xandar Destroyed. Power Stone acquired!').fadeIn(2000);
          $('<img src="img/exploding-planet.jpg"><br>').appendTo(egg).hide().fadeIn(3000);
          $("<br><span class='stonetitles' id='spacetitle'>Space Stone - Raid Thor's ship!</span><br>"+
            "<button id='space'><img src='img/ship.jpg'></button>").appendTo(egg).hide().fadeIn(6000);
        }
      });

       egg.on('click','#space', function() {
        unbind();
        $('#space').hide(2000).remove();
        if ($('#space').length === 0) {
          $('#spacetitle').hide().html('Thor pwned. Space Stone acquired!').fadeIn(2000);
          $('<img src="img/space-stone.jpg"><br>').appendTo(egg).hide().fadeIn(3000);
          $("<br><span class='stonetitles' id='realitytitle'>Reality Stone - Beat the Collector and troll the Guardians!</span><br>"+
            "<button id='reality'><img src='img/collector.jpg'></button>").appendTo(egg).hide().fadeIn(6000);
        }
      });

       egg.on('click','#reality', function() {
        unbind();
        $('#reality').hide(2000).remove();
        if ($('#reality').length === 0) {
          $('#realitytitle').hide().html('Guardians rekt. Reality Stone acquired!').fadeIn(2000);
          $('<img src="img/realitystone.png"><br>').appendTo(egg).hide().fadeIn(3000);
          $("<br><span class='stonetitles' id='soultitle'>Soul Stone - Sacrifice Gamora</span><br>"+
            "<button id='soul'><img src='img/thanos-throw.jpg'></button>").appendTo(egg).hide().fadeIn(6000);
        }        
      });

      egg.on('click','#soul', function() {
        unbind();
        $('#soul').hide(2000).remove();
        if ($('#soul').length === 0) {
          $('#soultitle').hide().html('It cost you everything, but Soul Stone acquired!').fadeIn(2000);
          $('<img src="img/sorry.jpg"><br>').appendTo(egg).hide().fadeIn(3000);
          $("<br><span class='stonetitles' id='timetitle'>Time Stone - Stomp Dr. Strange!</span><br>"+
            "<button id='timestone'><img src='img/strange.jpg'></button>").appendTo(egg).hide().fadeIn(6000);
        }        
      });

      egg.on('click','#timestone', function() {
        unbind();
        $('#timestone').hide(2000).remove();
        if ($('#timestone').length === 0) {
          $('#timetitle').hide().html('Dr. Strange defeated. Time Stone acquired!').fadeIn(2000);
          $('<img src="img/timestone.jpg"><br>').appendTo(egg).hide().fadeIn(3000);
          $("<br><span class='stonetitles' id='mindtitle'>Mind Stone - Wreck everyone!</span><br>"+
            "<button id='mind'><img src='img/thanosvseveryone.jpg'></button>").appendTo(egg).hide().fadeIn(6000);
        }        
      });

      egg.on('click','#mind', function() {
        unbind();
        $('#mind').hide(2000).remove();
        if ($('#mind').length === 0) {
          $('#mindtitle').hide().html('You should have gone for the head!').fadeIn(2000);
          $('<img src="img/vision.jpg"><br>').appendTo(egg).hide().fadeIn(3000);
          $("<br><span class='stonetitles'>All Stones acquired! Click to snap! (deletes 1/2 instances for today)</span><br>"+
            "<button id='snap'><img src='img/fullpower.jpg'></button><br>").appendTo(egg).hide().fadeIn(6000);
        }        
      });

      egg.on('click','#snap', function() {
        unbind();
        egg.empty();
        $("<img src='img/snap.gif'>").appendTo(egg).hide().fadeIn(3000);
        perfectlybalanced();
      });

    }

    function perfectlybalanced() {
      //figure out today's date
      let date = ''
      n =  new Date();
      y = n.getFullYear();
      m = n.getMonth() + 1;
      d = n.getDate();
      date = y + '-' + m + '-' + d;
      let thanos_list = []
      $.ajax(root_url + "instances?" + "filter[date]=" + date,
        {
          type: 'GET',
          async: false,
          xhrFields: {withCredentials: true},
          success: (instances) => {
          instancelen = instances.length;
          for (let i=0; i<instancelen; i++) {
            thanos_list.push(instances[i].id);
          }
          }
        });

      balanced = Math.floor(thanos_list.length/2)
      
      fullSnap(balanced, thanos_list);
      
    function fullSnap(balanced, thanos_list) {
      for (let i=0;i<balanced;i++) {
        $.ajax(root_url + "instances/" + thanos_list[i],
        {
          type: 'DELETE',
          async: false,
          xhrFields: {withCredentials: true},
          success: (instances) => {
          }
        });
      }
    }
  

      

      //find how many instances with today's date
      //delete 1/2 of those lmao
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

  let searchcontainer = $('<div class="searchcontainerflights"></div>');
  body.append(searchcontainer);

  let info = $('<h2>Search for Flight Instances by Date and Airport</h2><br>');
  searchcontainer.append(info);
  let inst = $('<p>*Search buttton appears after airport is chosen<br>Cancelling an instance of a flight also deletes any associated tickets and itineraries.</p>')
  searchcontainer.append('<div id="instructions"><img src="img/plane.png"></div>')
  let date_search = $('<h4>Date</h4>');
  searchcontainer.append(date_search);
  let calendar = $("<input type='text' name='cal' class='calendar' value='12/11/2018'/>");
  searchcontainer.append(calendar);

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
   searchDiv.append("<h4>Airports</h4>");
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
      $('.searchButton').remove();
      let searchinstances = $('<button class="searchButton" value="'+
        airport_name+'">'+'Search Instances from ' + airport_name + '</button>');
      searchcontainer.append(searchinstances);
     } else {
      let searchinstances = $('<button class="searchButton" value="'+
        airport_name+'">'+'Search Instances from ' + airport_name + '</button>');

     searchcontainer.append(searchinstances);
     }
     
    });

   $('.searchcontainerflights').on('click','.searchButton',function(e){
        id = pull_id(airport_name);
        getflightids(id);
    });


function pull_id(airportname) { 
    $('.searchButton').toggleClass('hidden');
    var id;
    $.ajax(root_url + "airports?" + "filter[name]="+ airportname,
    {
      type: 'GET',
      async: false,
      xhrFields: {withCredentials: true},
      success: (airports) => {
      airport_id = airports[0].id;
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
        alert('No flights from this airport');
      } else {
        getinstances(flight_ids_from_airport);
      }
      }
    });
    $('.searchButton').toggleClass('hidden');
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

function formatTime(time) {
    hour = time[11] + time[12];
    minutes = time[14] + time[15];
    return hour + ':' + minutes;
  }

//wipes search stuff and displays results along with cancelling flights
function results(instance_flight_ids,instance_ids) {
  $('.resultscontainer').remove()
  let resultscontainer = $('<div class="resultscontainer"></div>');
  body.append(resultscontainer);
  let results_title = $('<h2>Results</h2>');
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
  
  for (let i=0;i<instance_flight_ids.length;i++) {
    airportname = $('.searchButton').val();
    destname = 'destination name';
    destid = 0;
    depart_time = 'departure time';
    arrival_time = 'arrival time';

    //this is a flight id for an instance
    //search for departure and arrival time of flight associated with this
    //instance_flight_ids[i]
    $.ajax(root_url + "flights/"+ instance_flight_ids[i],
    {
      type: 'GET',
      async: false,
      xhrFields: {withCredentials: true},
      success: (flights) => {
        depart_time = formatTime(flights.departs_at);
        arrival_time = formatTime(flights.arrives_at);
        destid = flights.arrival_id;
      }
    });

    $.ajax(root_url + "airports/"+ destid,
    {
      type: 'GET',
      async: false,
      xhrFields: {withCredentials: true},
      success: (airports) => {
        destname = airports.name;
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
    cell5.innerHTML = '<button class="cancelflight" id="'+i+'" value="'+instance_ids[i]+'"">Cancel Flight</button>';

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
        
        $.ajax(root_url + "instances/" + instance_id,
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

    $.ajax(root_url + "tickets?" + "filter[instance_id]="+ instance_id,
    {
      type: 'GET',
      async: false,
      xhrFields: {withCredentials: true},
      success: (tickets) => {
        for(let i=0;i<tickets.length;i++) {
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
    
      for (let i=0;i<filtered_itinerary_id_list.length;i++) {
        $.ajax(root_url + "itineraries/" +filtered_itinerary_id_list[i],
        {
            type: "DELETE",
            //async: false,
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

  let form = $('<div id="form"></div>');
  form.toggleClass("hidden");
  let formTable = $('<table></table>');
  formTable.append(
      "<tr><td>Airport Name:</td> <td><input type='text' id='name' placeholder='required'/> </td> </tr>");
  formTable.append(
      "<tr><td>Airport Code:</td> <td><input type='text' id='code' placeholder='required'/> </td> </tr>");
  formTable.append(
      "<tr><td></td><td><input type='button' value='Save' class='saveButton'/></td></tr>")
  form.append(formTable);
  body.append($(
      '<h2 style="text-align:center;">Search and Edit Flight Instances</h2>'));
  body.append($(
      '<h2 style="text-align:center;">Right Click on Map to Add New Airports</h2>'));
  let mapLayout = $('<div id = "mapLayout"></div>');
  body.append(mapLayout);
  let searchcontainer = $('<div class="searchcontainer"></div>');
  mapLayout.append(searchcontainer);
  searchcontainer.append($('<h3>Date:</h3>'));
  searchcontainer.append(
      $("<input type='text' id='calendar' value='12/11/2018'/>"));
  $(function() {
    $('#calendar').daterangepicker({
      singleDatePicker : true,
      showDropdowns : true,
    });
  });
  searchcontainer.append($('<h3>Departs Between:</h3>'));
  searchcontainer.append(
      $("<input type='text' class='timepicker' id='aftertime'/>"));
  searchcontainer.append($('<h3>and</h3>'));
  searchcontainer.append(
      $("<input type='text' class='timepicker' id='beforetime'/>"));
  $('.timepicker').timepicker({
    timeFormat : 'HH:mm',
    interval : 60,
    minTime : '00:00',
    maxTime : '23:59',
    defaultTime : '01:00',
    startTime : '01:00',
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
  mapLayout.append(form);
  message = $('<div id="message">Airport saved</div>');
  message.toggleClass("hidden");
  mapLayout.append(message);
  var map = new google.maps.Map(document.getElementById('GMap'), {
    center : {lat : 40, lng : -100},
    zoom : 4,
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

  var messagewindow = new google.maps.InfoWindow({content : message.html()});

  google.maps.event.addListener(map, 'rightclick', function(event) {
    let form = $("#form");
    let btn = form.find('.saveButton');
    btn.attr('id', markers.length);
    let formInfoWindow = new google.maps.InfoWindow({content : form.html()});
    var icon = {
      url : "http://maps.google.com/mapfiles/ms/micons/red.png", // url
      size : new google.maps.Size(32, 32),
      scaledSize : new google.maps.Size(24, 24), // scaled size
    };
    let marker = new google.maps.Marker({
      icon: icon,
      position : event.latLng,
      map : map,
      animation : google.maps.Animation.DROP,
      infowindow : formInfoWindow
    });

    google.maps.event.addListener(marker, 'click', function() {
      hideAllInfoWindows();
      formInfoWindow.open(map, marker);
    });

    markers.push(marker);
  });

  $('body').on('click', '.saveButton', function() {
    let marker = markers[this.id];
    var name = escape(document.getElementById('name').value);
    var code = escape(document.getElementById('code').value);
    var lat = marker.getPosition().lat();
    var lng = marker.getPosition().lng();
    $.ajax(root_url + "airports/", {
      type : 'POST',
      xhrFields : {withCredentials : true},
      datatype : "json",
      data : {
        "airport" : {
          "name" : name, 
          "code" : code,
          "latitude" : lat,
          "longitude" : lng
        }
      },
      success : (response) => {
        airportid = response.id;
        $.ajax(root_url + "flights/", {
          type : 'POST',
          xhrFields : {withCredentials : true},
          datatype : "json",
          data : {
            "flight": {
              "departs_at":   "12:00",
              "arrives_at":   "17:10",
              "number":       "AA 2667",
              "departure_id": airportid,
              "arrival_id":   154861
            }
          },
          success : (response) => {
            flightid = response.id;
            $.ajax(root_url + "instances/", {
              type : 'POST',
              xhrFields : {withCredentials : true},
              datatype : "json",
              data : {
                "instance": {
                  "flight_id": flightid,
                  "date":      "2018-12-11"
                }
              },
              success : (response) => {
                }
            });
            }
        });
        hideAllInfoWindows();
        let c = '<h3>' + name + '<h3><h5>' + code + '</h5>';
        let finalWindow = new google.maps.InfoWindow({content : c});
        messagewindow.open(map, marker);
        google.maps.event.addListener(marker, 'click', function() {
          hideAllInfoWindows();
          finalWindow.open(map, marker);
        });
      }
    });
  });

  $('body').on('click', '.editButton', function() {
    let status = $("span", this).text();
    let instance_id = this.id.substring(1, this.id.length);
    let id;
    if (this.id.startsWith("a")) {
      id = "d" + instance_id;

    } else {
      id = "a" + instance_id;
    }
    if (status == "Cancelled") {
      $.ajax(root_url + "instances/" + instance_id, {
        type : 'PATCH',
        xhrFields : {withCredentials : true},
        datatype : "json",
        data : {"instance" : {"is_cancelled" : "false"}},
        success : (response) => {
          $("#" + id + " span").text("On Time");
          $("span", this).text("On Time");
        }
      });
    } else {
      $.ajax(root_url + "instances/" + instance_id, {
        type : 'PATCH',
        xhrFields : {withCredentials : true},
        datatype : "json",
        data : {"instance" : {"is_cancelled" : "true"}},
        success : (response) => {
          $("#" + id + " span").text("Cancelled");
          $("span", this).text("Cancelled");
        }
      });
    }
  });

  function loadMap(date, aftertime, beforetime) {
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
          buildAirportMarker(airports[i], instances, aftertime, beforetime);
        }
        searchButton.toggleClass("hidden");
        loadingButton.toggleClass("hidden");
      }
    });
  }
  function buildAirportMarker(airport, instances, aftertime, beforetime) {
    let info = $('<div id="markerinfo"></div>');
    info.append('<h2>' + airport.name + '</h2>');
    let arrivalsTable =
        $('<table class="markerTable" id="arrivalsTable"></table>');
    info.append('<h3>Arrivals</h3>');
    info.append(arrivalsTable);
    let departuresTable =
        $('<table class="markerTable" id="departuresTable"></table>');
    info.append('<h3>Departures</h3>');
    info.append(departuresTable);
    $.ajax(
        root_url + "flights?filter[arrival_id]=" + airport.id +
            "&filter[departs_at_le]=" + beforetime +
            "&filter[departs_at_ge]=" + aftertime,
        {
          type : 'GET',
          async : false,
          xhrFields : {withCredentials : true},
          success : (flights) => {
            for (let i = 0; i < flights.length; i++) {
              if (flights[i].id in instances) {
                let fl = flights[i].id;
                let instance_id = instances[fl][0];
                let cancelled = instances[fl][1];
                let status;
                if (cancelled) {
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
                        '</td><td style="text-align: center;">' + fl +
                        '</td><td style="text-align: center;">' +
                        formatTime(flights[i].departs_at) +
                        '</td><td style="text-align: center;">' +
                        formatTime(flights[i].arrives_at) +
                        '</td><td><button type="button" class="editButton" id="a' +
                        instance_id + '"><span>' + status +
                        '</span></button></td></tr>');
                  }
                });
              }
            }
          }

        });
    $.ajax(
        root_url + "flights?filter[departure_id]=" + airport.id +
            "&filter[departs_at_le]=" + beforetime +
            "&filter[departs_at_ge]=" + aftertime,
        {
          type : 'GET',
          async : false,
          xhrFields : {withCredentials : true},
          success : (flights) => {
            for (let i = 0; i < flights.length; i++) {
              if (flights[i].id in instances) {
                let fl = flights[i].id;
                let instance_id = instances[fl][0];
                let cancelled = instances[fl][1];
                let status;
                if (cancelled) {
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
                        '</td><td style="text-align: center;">' + fl +
                        '</td><td style="text-align: center;">' +
                        formatTime(flights[i].departs_at) +
                        '</td><td style="text-align: center;">' +
                        formatTime(flights[i].arrives_at) +
                        '</td><td><button type="button" class="editButton" id="d' +
                        instance_id + '"><span>' + status +
                        '</span></button></td></tr>');
                  }
                });
              }
            }
          }

        });
    if (!(arrivalsTable.is(':empty') && departuresTable.is(':empty'))) {
      if (arrivalsTable.is(":empty")) {
        arrivalsTable.append('<p>No Arrivals</p>');
      } else {
        arrivalsTable.prepend(
            '<tr><th>From</th><th>Flight ID</th><th>Departure Time</th><th>Arrival Time</th><th>Edit Status</th></tr>');
      }
      if (departuresTable.is(":empty")) {
        departuresTable.append('<p>No Departures</p>');
      } else {
        departuresTable.prepend(
            '<tr><th>To</th><th>Flight ID</th><th>Departure Time</th><th>Arrival Time</th><th>Edit Status</th></tr>');
      }
      var icon = {
        url : "http://maps.google.com/mapfiles/ms/micons/red.png", // url
        size : new google.maps.Size(32, 32),
        scaledSize : new google.maps.Size(24, 24), // scaled size
      };
      let marker;
      let lat = parseInt(airport.latitude);
      let lng = parseInt(airport.longitude);
      let infowindow = new google.maps.InfoWindow(
          {content : info.html(), maxWidth : 500});
      marker = new google.maps.Marker({
        position : new google.maps.LatLng(lat, lng),
        map : map,
        icon : icon,
        infowindow : infowindow
      });
      google.maps.event.addListener(marker, 'click', (function() {
                                      return function() {
                                        hideAllInfoWindows();
                                        infowindow.open(map, this);
                                      }
                                    })(marker));
      markers.push(marker);
    }
  }


  $('body').on('click', '#mapSearchButton', function() {
    searchButton.toggleClass("hidden");
    loadingButton.toggleClass("hidden");
    let date = $('#calendar').val();
    let aftertime = $('#aftertime').val();
    let beforetime = $('#beforetime').val();
    date = calendarformat(date);
    loadMap(date, aftertime, beforetime);
  });

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
  function markerExists(latlng) {
    for (var x = 0; x < markers.length; x++) {
      if (markers[x].getPosition().equals(latlng)) {
        return true;
      }
    }
    return false;
  }
  function hideAllInfoWindows() {
    markers.forEach(function(marker) { marker.infowindow.close(map, marker); });
  }

  $('#home').on('click', () => { build_home(); });
  $('#flights').on('click', () => { build_flights(); });
  $('#about').on('click', () => { build_about(); });
};

var build_about = function() {
    let body = $('body');

    body.empty();
    body.append(aboutmenu);
    let aboutDiv = $('<div class="aboutDiv"></div>');
    let titleDiv = $('<div class"titleDiv"></div>');
    //titleDiv.append('<h1 class="aboutTitle" >About Our Product</h1>');
    titleDiv.append('<div class="aboutOurProduct">ABOUT OUR PROJECT AND TEAM</div>' + '<br>');
    titleDiv.append('<div class="description">We began our project by looking a some well designed travel websites like kayak.com to gather inspiration.'+
      ' <br><br>From here we decided that instead of implementing a travel app, we would approach it from the standpoint of an air traffic controller looking for '+
      'day by day or hour by hour instances of flights in order to appropriately cancel them when necessary.<br><br>'+
      'To do this we thought a good third party api to utilize would be the Google Maps api. This allowed for some nice visualization of '+
      'our data.<br><br>Design was also important to us. We wanted to keep things simple. Our application mimics a full website but is all controlled by key DOM changes to a single page.<br><br>'+
      'Our hardest challenge was managing the data from the api since we needed multiple ajax requests to gather the instance data we required.<br><br>'+
      'Thanks to KMP, Aaron and all of the TAs that have helped us throughout the semester. We have learned a lot and appreciate you all so much!</div>' + "<br><br>");

    aboutDiv.append(titleDiv);

    let footerDiv = $('<div class="footerDiv"></div>');
    let footer1Div = $('<div class="footerDiv"></div>');
    let footer2Div = $('<div class="footerDiv"></div>');


    let imageDiv = $('<div class="imageDiv"></div>');
    imageDiv.append('<img class="teamPic" width="225" height="225" src="img/alex.jpg" alt="alex">');
    imageDiv.append('<div class="overlay">' + '<div class="nameText">ALEX</div>' + '</div>');
    footerDiv.append(imageDiv);
    footerDiv.append('<div class="bio">Alex Donovan is a computer science and information science double major at The University of North Carolina at Chapel Hill. </div>');

    let imageDiv1 = $('<div class="imageDiv"></div>');
    imageDiv1.append('<img class="teamPic" width="225" height="225" src="img/zsofia.jpg" alt="zsofia">');
    imageDiv1.append('<div class="overlay">' + '<div class="nameText">ZSOFIA</div>' + '</div>');
    footer1Div.append(imageDiv1);
    footer1Div.append('<div class="bio">Zsofia Voros is a computer science and statistics double major at The University of North Carolina at Chapel Hill.</div>');

    let imageDiv2 = $('<div class="imageDiv"></div>');
    imageDiv2.append('<img class="teamPic" width="225" height="225" src="img/aidan.jpg" alt="aidan">');
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


       

    