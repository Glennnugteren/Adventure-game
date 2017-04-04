function lvl1(){
	for (var i = 1; i <= 5; i++){
		document.getElementById('art' + i).style.cssText = "display: none;";
	}
	document.getElementById('titel').innerHTML = "BAH!!";
	document.getElementById('some').innerHTML = "Try again";
	document.getElementById('some').style.display = "block";
	document.getElementById('img3').src = "bullshit.png";
	document.getElementById('some-txt').style.display = "block";
	document.getElementById('some-txt').innerHTML = "VIEZERIK";
	document.getElementById('red').style.backgroundColor = "#880000";
	document.getElementById('red2').style.backgroundColor = "#880000";
}
function lvl2(){
	for (var o = 4; o <= 5; o++){
		document.getElementById('art' + o).style.cssText = "display: none;";
	}
	document.getElementById('titel').innerHTML = "Het DJ avontuur: level 2";
	document.getElementById('rechterknop').innerHTML = "oefenen";
	document.getElementById('linkerknop').innerHTML = "een manager zoeken";
	document.getElementById('info').innerHTML = "Wat ga je nu doen? ";
	document.getElementById('img3').style.display = "none";
	document.getElementById('linkerknop').setAttribute("onClick", "javascript:fout();");
	document.getElementById('rechterknop').setAttribute("onClick", "javascript:goed();");
}
function fout(){
	for (var a = 1; a <= 5; a++) {
		document.getElementById('art' + a).style.cssText = "display: none;";
	}
	document.getElementById('titel').innerHTML = "FOUT!!";
	document.getElementById('some').innerHTML = "Try again";
	document.getElementById('some').style.display = "block";
	document.getElementById('img3').src = "bullshit.png";
	document.getElementById('some-txt').style.display = "block";
	document.getElementById('some-txt').innerHTML = "Jeetje wat fout zeg...";
	document.getElementById('red').style.backgroundColor = "#880000";
	document.getElementById('red2').style.backgroundColor = "#880000";	
}
function goed(){
	for (var b = 4; b <= 5; b++) {
		document.getElementById('art' + b).style.cssText = "display: none;";
	}
	document.getElementById('titel').innerHTML = "Het DJ avontuur: level 3";
	document.getElementById('rechterknop').innerHTML = "een eigen goeie mix in elkaar zetten";
	document.getElementById('linkerknop').innerHTML = "optreden";
	document.getElementById('info').innerHTML = "Je hebt goed geoefend! <br> Wat denk je nu te gaan doen?";	
	document.getElementById('linkerknop').setAttribute("onClick", "javascript:fout();");
	document.getElementById('rechterknop').setAttribute("onClick", "javascript:lvl4();");
}
function lvl4(){
	for (var v = 4; v <= 5; v++) {
		document.getElementById('art' + v).style.cssText = "display: none;";
	}
	document.getElementById('titel').innerHTML = "Het DJ avontuur: level 4";
	document.getElementById('rechterknop').innerHTML = "zoeken naar een boekings agency";
	document.getElementById('linkerknop').innerHTML = "Speakers kopen om te kunnen optreden";
	document.getElementById('info').innerHTML = "Goed bezig! Wat ga je nu doen?";	
	document.getElementById('linkerknop').setAttribute("onClick", "javascript:fout();");
	document.getElementById('rechterknop').setAttribute("onClick", "javascript:lvl5();");
}
function lvl5(){
	for (var p = 1; p <= 5; p++) {
		document.getElementById('art' + p).style.cssText = "display: none;";
	}
	document.getElementById('titel').innerHTML = "Het DJ avontuur: Einde";
	document.getElementById('some-txt').innerHTML = "Bedankt voor het spelen!";
	document.getElementById('some-txt').style.display = "block";
	document.getElementById('img').src = "duimpie.png";
}
var i = 1;
function menu(){
	if (i == 1) {
		document.getElementById('menu').style.display = "block";
		document.getElementById('menu').className = "animation";
		i = 2
	}else if(i == 2){
		document.getElementById('menu').className = "animationFade";
		document.getElementById('menu').style.display = "none";

		i = 1
	}
	

}