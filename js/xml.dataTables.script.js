$(document).ready(function() {

var xhttp;
  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.open("GET","xml/patner.xml",false);
  xhttp.send();
  var xmlDoc = xhttp.responseXML;
  var tabular = '<table style="width: 100%;" id="example" class="vitamins"><tfoot><tr><th>Model</th><th>Number</th><th>Gadi From</th><th>Driver No.</th></tr></tfoot><thead><tr><th>model</th><th>number</th><th>gadi from</th><th>Driver No.</th></tr></thead><tbody>';
  var i;
  var x = xmlDoc.getElementsByTagName("id");
  for(i=0;i<x.length;i++)
  {
    tabular += '<tr><td>'+xmlDoc.getElementsByTagName('gadi_model')[i].childNodes[0].nodeValue+'</td><td>'+xmlDoc.getElementsByTagName('gadi_number')[i].childNodes[0].nodeValue+'</td><td>'+xmlDoc.getElementsByTagName('gadi_from')[i].childNodes[0].nodeValue+'</td><td><button type="button" class="btn btn-success" onclick="getConfirmation('+xmlDoc.getElementsByTagName('driver_number')[i].childNodes[0].nodeValue+')">'+xmlDoc.getElementsByTagName('driver_number')[i].childNodes[0].nodeValue+'</button><a id="'+xmlDoc.getElementsByTagName('driver_number')[i].childNodes[0].nodeValue+'" href="tel:'+xmlDoc.getElementsByTagName('driver_number')[i].childNodes[0].nodeValue+'"></a></td></tr>';
  }
  tabular += '</tbody></table>';
  document.getElementById("slideid").innerHTML = tabular;

});
