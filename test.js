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

    /*let dailyflights = $("<h2>Day by Day Flights</h2>");
    body.append(dailyflights);

    //change calendar to one day
	let calendar = $("<input type='text' name='cal' value='12/09/2018' />");
	body.append(calendar);
	//console.log(calendar.value)
	var date = ''
	$(function() {
  		$('input[name="cal"]').daterangepicker({
    		singleDatePicker: true,
    		showDropdowns: true,
  		}, function(start, end, label) {
    		var years = moment().diff(start, 'years');
    		//console.log('date'+start.format('YYYY-MM-DD'));
    		date = start.format('YYYY-MM-DD');
  		});
	});

	var instance_list = [];
    body.append("<h2>Instances</h2>");

	let instance_list_html = $("<ul id='instance_list_html'></ul>");
    body.append(instance_list_html);

    //look up how to update globals inside get req
    var instancelen = 0;
   	//console.log('date ready'+date);
	$.ajax(root_url + "instances",
    {
    	type: 'GET',
    	async: false,
    	xhrFields: {withCredentials: true},
	    success: (instances) => {
	    instancelen = instances.length;
	    //console.log('num of instances'+instances.length);
	    //console.log(instancelen);
	    for (let i=0; i<instancelen; i++) {

	    	instance_list.push(instances[i].flight_id);
	    	//console.log('here '+instancelen);
	    	instance_list_html.append("<li>" + instances[i].flight_id + "</li>");
	    }
	    }
    });
    //console.log('instancelen outside of fun '+instancelen)

	let morebutton = $("<button type='button' id='more-flights'>More Flights</button>");
    body.append(morebutton);

    $('#more-flights').on('click', () => {
      moreFlights();
	});

    function moreFlights() {
  		console.log('date ready'+date)
    		
  	}*/

  	let main = $('<h1>Welcome to FlightSearch(and Destroy)');
  	body.append(main);

  	
  		
	




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

function calendarformat(date) {
  //12/09/2018
  day = date[3] + date[4];
  month = date[0] + date[1];
  year = date[6]+date[7]+date[8]+date[9]
  return year+'-'+month+'-'+day
}

var airport_id;
function pull_id(airportname) {
  //alert(airportname)
    
    $.ajax(root_url + "airports?" + "filter[name]="+ airportname,
    {
      type: 'GET',
      async: false,
      xhrFields: {withCredentials: true},
      success: (airports) => {
        //console.log(airports[0].id);
      airport_id = airports[0].id;
      console.log(airport_id)
      search();

      }
    });
}

function search() {
  let searchinstances = $('<button class="searchButton" onclick="searchforinstances()"</button>' + '<br>');
  let body = $('body')
  console.log('here')
  body.append(searchinstances);
}

function searchforinstances() {
  console.log(airport_id)
  $.ajax(root_url + "flights?" + "filter[departure_id]="+ airport_id,
    {
      type: 'GET',
      async: false,
      xhrFields: {withCredentials: true},
      success: (flights) => {
      for (let i=0;i<flights.length;i++) {
        console.log(flights[i])
      }
      }
    });
}

var build_flights = function() {
    let body = $('body');

    body.empty();
    body.append(flightsmenu);

    //let flightselector = $("<div id='selector>")

	let info = $('<h1>Search for Flight Instances by Date and Airport</h1>');
	body.append(info);
	let date_search = $('<h2>Date</h2>');
	body.append(date_search);
	let calendar = $("<input type='text' name='cal' class='calendar' value='12/09/2018'/>");
	body.append(calendar);
	//console.log(calendar.value)

	$(function() {
  		$('input[name="cal"]').daterangepicker({
    		singleDatePicker: true,
    		showDropdowns: true,
  		}, function(start) {
    		
  		});
	});

  date = $('.calendar').val();
  date = calendarformat(date);

    //airports
   var airport_list = [];
   body.append("<h2>Airports</h2>");

   let airport_list_html = $("<ul id='airport_list_html' class=airportSearch></ul>");
   body.append($('<input type="text" class="searchBar" placeholder="Search Airports">'));
   let airport_list_drop = $('<div class="airportDropClass"></div>');
   body.append(airport_list_drop);
   //body.append(airport_list_html);
   //let airport_add_div = $("<div>Name: <input id='new_airport_name' type='text'><br>" +
   
   $.ajax(root_url + "airports",
   {
       type: 'GET',
       xhrFields: {withCredentials: true},
        success: (airports) => {
        for (let i=0; i<airports.length; i++) {
            airport_list.push(airports[i].name);
            //console.log(airport_list);
            //airport_list_html.append("<li>" + airports[i].name + "</li>");
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
     //console.log(filteredList);
     return filteredList;

   }

   $(".searchBar").on('keyup', function() {
     let input = $(this).val(); //.toLowerCase().replace(/\s/g,'');
     //autocomplete(input);
     let airportDrop = autocomplete(input);
     if (!airportDrop) {
     	return false;
     }
     $('.airportDropClass').empty();
     for (let i = 0; i < airportDrop.length; i++) {
       $('.airportDropClass').append('<button class="airportButtons" onclick="pull_id(\'' + airportDrop[i] + '\')"">' + airportDrop[i] +'</button>' + '<br>');
     }
     //let airportInput = $(this).val().toLowerCase(); // Reads in values from the text box (val?)
    });  


//

   //Filter instances by date and flight_id matching departure_id of airport
   console.log(date);
   console.log(airport_id);
/*
   ajax(root_url + "instances",
    {
      type: 'GET',
      async: false,
      xhrFields: {withCredentials: true},
      success: (instances) => {
      instancelen = instances.length;
      //console.log('num of instances'+instances.length);
      //console.log(instancelen);
      for (let i=0; i<instancelen; i++) {

        instance_list.push(instances[i].flight_id);
        //console.log('here '+instancelen);
        instance_list_html.append("<li>" + instances[i].flight_id + "</li>");
      }
      }
    });*/




   	/*
    var airport_list = [];
    body.append("<h2>Airports</h2>");

    let airport_list_html = $("<ul id='airport_list_html'></ul>");
    body.append(airport_list_html);

    //let airport_add_div = $("<div>Name: <input id='new_airport_name' type='text'><br>" +
	//		    "<button id='make_airline'>Create</button></div>");

    $.ajax(root_url + "airports",
    {
    	type: 'GET',
    	async: false,
    	xhrFields: {withCredentials: true},
	    success: (airports) => {
	    for (let i=0; i<airports.length; i++) {
	    	airport_list.push(airports[i].name);
	    	console.log(airport_list);
	    	airport_list_html.append("<li>" + airports[i].name + "</li>");
	    }
	    }
    });

    //console.log('outside function'+airport_list);
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
 		"</div>");
    
    body.append(form);

    console.log(airport_list.length);

    var fromlist = airport_list;

	var select = document.getElementById("from-select");
	for(index in fromlist) {
    	select.options[select.options.length] = new Option(fromlist[index], index);
	}

	var tolist = airport_list;

	var toselect = document.getElementById("to-select");
	for(index in tolist) {
    	toselect.options[toselect.options.length] = new Option(tolist[index], index);
	}

	$('#search-flights').on('click', () => {
      searchFlights();
	});

	function searchFlights() {
  		if(select.options.length > 0) {
   			 //alert('cool');
    		var from_select = select.options[select.selectedIndex].text;
    		var to_select = toselect.options[toselect.selectedIndex].text;
    		if (to_select === from_select) {
    			alert('what')
    		}
    		console.log(from_select);
    		console.log(to_select);
    		searched();
  	}
  		else {
    		//searched();
  		}
	}

	function searched() {
		body.empty();
		body.append(flightsmenu);
		let flightshere = $("<h1>Flights to here</h1>");
		body.append(flightshere);
	}

    //END SEARCH FORM


    //airlines
    var airline_list = [];
    body.append("<h2>Airlines</h2>");

    let airline_list_html = $("<ul id='airlines_list_html'></ul>");
    body.append(airline_list_html);

    //let airline_add_div = $("<div>Name: <input id='new_airline_name' type='text'><br>" +
	//		    "<button id='make_airline'>Create</button></div>");

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
	//		    "<button id='make_airline'>Create</button></div>");

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
	});*/

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


		   

    