GifArray = new Array();
GifArray[0]= 'tff.gif';
GifArray[1] = 'sb.gif';

function getRandomGif() {
    var num = Math.floor( Math.random() * 2);
    var img = GifArray[num];
    document.getElementById("headergif").innerHTML = ('<img id="hgif" src="' + '/images/' + img + '">');
}