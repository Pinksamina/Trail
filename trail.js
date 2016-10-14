//Create canvas and set props
var canvasElement = "<canvas id='canvas' height='5000' width='5000' ></canvas>";
$(canvasElement).appendTo('body');
$('#canvas').css({'position':'fixed', 'z-index':'-9999'});

// CANVAS Functions & Variables
var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
var ch = canvas.height;
var cw = canvas.width;
var fps = 1000;

function rect(color, x, y, w, h){
c.fillStyle = color;
c.fillRect(x, y, w, h);}

//reset frame
function reset(){c.clearRect(0, 0, cw, ch);}
// Code Start

//draw and setup loop
var start = setInterval(function(){setup(); draw();}, 1000/fps);
function startagain(){start = setInterval(function(){setup(); draw();}, 1000/fps);}
function stop(){clearInterval(start)}

//Variables
var x; var y;
var cordx=[];
var cordy=[];
var cordnum=0;

var delay = 1;
var linewidth=2;
var linecolor='#000000';
var segs = 20;

$(document).on("mousemove", function(event){x=event.pageX; y=event.pageY;});

var capture = setInterval(function(){
cordx[cordnum]=x; cordy[cordnum]=y; cordnum+=1;}, delay);

//canvas setup function
function setup(){
$(window).on("resize", function(){
$('#canvas').attr('height', $(window).height());
$('#canvas').attr('width', $(window).width());
});}

//canvas screen drawing function
function draw(){
reset();
c.beginPath();
c.moveTo(cordx[cordnum-segs], cordy[cordnum-segs]);
for(var i=-(segs-1); i<=0; i++){
c.lineTo(cordx[cordnum+i], cordy[cordnum+i]);}
c.lineTo(x, y);
for(var i=0; i<=-(segs-1); i++){
c.lineTo(cordx[cordnum-i], cordy[cordnum-i]);}
c.moveTo(cordx[cordnum-segs], cordy[cordnum-segs]);
c.closePath();

//line attr
c.lineWidth=linewidth;
c.strokeStyle=linecolor;
c.stroke();}
// Code End
