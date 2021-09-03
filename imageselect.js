GifArray = new Array();
GifArray[0]= 'tff.gif';
GifArray[1] = 'sb.gif';
GifArray[2] = 'dd.gif';

function getRandomGif() {
    var num = Math.floor( Math.random() * 3);
    var img = GifArray[num];
    document.getElementById("headergif").innerHTML = ('<img id="hgif" src="' + '/images/' + img + '">');
}