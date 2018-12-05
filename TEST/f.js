$(document).ready(function() {

var fromlist = ['cheese','cars']

var select = document.getElementById("from-select");
for(index in fromlist) {
    select.options[select.options.length] = new Option(fromlist[index], index);
}

var tolist = ['quack','france']

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
    console.log(from_select);
    console.log(to_select);
  }
  else {
    alert('nothing selected')
  }
}
});