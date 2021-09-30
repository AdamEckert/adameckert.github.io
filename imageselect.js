GifArray = new Array();
GifArray[0]= 'tff.gif';
GifArray[1] = 'sb.gif';
GifArray[2] = 'dd.gif';
GifArray[3] = 'cph.gif';
GifArray[4] = 'sap.gif';

function getRandomGif() {
    var num = Math.floor( Math.random() * 5);
    var img = GifArray[num];
    document.getElementById("headergif").innerHTML = ('<img id="hgif" src="' + '/images/' + img + '">');
}