GifArray = new Array();
GifArray[0]= 'tff.gif';
GifArray[1] = 'sb.gif';
GifArray[2] = 'dd.gif';
GifArray[3] = 'cph.gif';
GifArray[4] = 'sap.gif';
GifArray[5] = 'dodger.gif';
PageArray = new Array();
PageArray[0]= 'finalfrontiersman.html';
PageArray[1] = 'spacebubby.html';
PageArray[2] = 'deathdweller.html';
PageArray[3] = 'colorphase.html';
PageArray[4] = 'solosandpairs.html';
PageArray[5] = 'dodger.html';

function getRandomGif() {
    var num = Math.floor( Math.random() * 6);
    var img = GifArray[num];
    var pg = PageArray[num];
    document.getElementById("headergif").innerHTML = ('<a href="/projects/'+pg+'"><img id="hgif" src="' + '/images/' + img + '">');
}