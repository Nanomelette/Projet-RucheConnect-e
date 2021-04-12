

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;
  const button = document.querySelectorAll('button');
  button.disabled = true;
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



function  httpGet(url_web){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", url_web, false );
  return xmlHttp.responseText;
}

var données = httpGet("BDD.txt")
for ( var i = 0; i < données.length; i++){
  var data=données[i];
}
