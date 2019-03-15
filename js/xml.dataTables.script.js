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
  var tabular = '<table style="width: 100%;" id="example" class="vitamins"><tfoot><tr><th>Image</th><th>Gadi From</th><th>Model</th><th>Number</th><th>From</th><th>To</th><th>Price</th></tr></tfoot><thead><tr><th>image</th><th>gadi from</th><th>model</th><th>number</th><th>from</th><th>to</th><th>price</th></tr></thead><tbody>';
  var i;
  var x = xmlDoc.getElementsByTagName("id");
  for(i=0;i<x.length;i++)
  {
  	tabular += '<tr><td><img src="'+xmlDoc.getElementsByTagName('image')[i].childNodes[0].nodeValue+'" class="img-responsive"></td><td>'+xmlDoc.getElementsByTagName('gadi')[i].childNodes[0].nodeValue+'</td><td>'+xmlDoc.getElementsByTagName('model')[i].childNodes[0].nodeValue+'</td><td>'+xmlDoc.getElementsByTagName('number')[i].childNodes[0].nodeValue+'</td><td>'+xmlDoc.getElementsByTagName('from')[i].childNodes[0].nodeValue+'</td><td>'+xmlDoc.getElementsByTagName('to')[i].childNodes[0].nodeValue+'</td><td>'+xmlDoc.getElementsByTagName('price')[i].childNodes[0].nodeValue+'<br><button type="button" class="btn btn-success">BOOK NOW!</button></td></tr>';
  }
  tabular += '</tbody></table>';
  document.getElementById("slideid").innerHTML = tabular;

});