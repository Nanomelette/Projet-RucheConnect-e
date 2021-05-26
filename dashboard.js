

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


jQuery(function(){
    $(function () {
        $(window).scroll(function () { //Fonction appelée quand on descend la page
            if ($(this).scrollTop() > 200 ) {  // Quand on est à 200pixels du haut de page,
                $('#scrollUp').css('right','10px'); // Replace à 10pixels de la droite l'image
            } else {
                $('#scrollUp').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
            }
        });
    });
});

let donnees;
function req() {
   console.log(this.responseText);
   donnees = JSON.parse(this.responseText);
   appendData(donnees);
};
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://2.7.79.73:8080/data");
xhr.onload = req;
xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.responseType = 'text';
// xhr.open('GET', 'http://2.7.79.73.fr:8080/data', true);
// xhr.setRequestHeader("Allow","*/*");
// xhr.onreadystatechange = function() {
//   if (xhr.readyState == 4 && xhr.state == 200) {
//     var donnees = xhr.responseText;
//     console.log(xhr.response);
//     console.log(xhr.responseText);
//     appendData(donnees);
//   }
// };
// xhr.send();
// $(document).ready(function() {
//     $('#example').DataTable( {
//         "ajax": "data"
//     } );
// } );

// var myInit = { method: 'GET',
//                mode: 'cors',
//                cache: 'default' };
//
// fetch('http://2.7.79.73.fr:8080/data',myInit)
//   .then(function(response){ //JSON data arrive here
//     return response.json();
//   })
//   .then(function(data){
//     appendData(data);
//
//   })
//   .catch(function(err){// if an error occurs
//     console.log(err);
//   })


function appendData(donnee) {
  var mainContainer = document.getElementById("test");
  for (var i = 0; i < 12; i++) {
    var second = document.createElement("tr");

    // var th = document.createElement("th");
    // th.innerHTML = data[i].time;
    // mainContainer.appendChild(th);

    var th1 = document.createElement("th");
    th1.innerHTML = donnee[i].weight;
    second.appendChild(th1);

    var th2 = document.createElement("th");
    th2.innerHTML = donnee[i].temp;
    second.appendChild(th2);

    var th3 = document.createElement("th");
    th3.innerHTML = donnee[i].humidity;
    second.appendChild(th3);

    mainContainer.appendChild(second);
  }
}
