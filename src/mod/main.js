"use strict";

require("font.josefin");


var C = Math.cos;
var S = Math.sin;

function draw( letters, radius, ctx ) {
    var angStep = Math.PI * 2 / letters.length;
    var i, letter;
    var ang;
    var r1 = radius + 60;
    var r2 = radius - 60;
    var fontSize = (radius - 400) * 0.03 + 60;
    ctx.font = "bold " + fontSize.toFixed(0) + "px josefin-sans";
    for( i = 0 ; i < letters.length ; i++ ) {
        letter = letters.charAt( i );
        ang = angStep * i;
        ang += angStep / 2;
        ctx.moveTo( r1 * C( ang ) + ctx.W/2 , r1 * S( ang ) + ctx.H/2 );
        ctx.lineTo( r1 * C( ang + angStep )+ ctx.W/2 , r1 * S( ang + angStep ) + ctx.H/2 );
        ang -= angStep / 2;
        ctx.stroke();
        ctx.save();
        ctx.translate( ctx.W / 2, ctx.H / 2 );
        ctx.rotate( ang );
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText( letter, -radius, 0 );
        ctx.restore();
    }
}

var canvas = document.getElementById( 'D1' );
var ctx = canvas.getContext( '2d' );
ctx.W = canvas.width;
ctx.H = canvas.height;
var radius = 400;
var step = 110;
for( var k=0 ; k<6 ; k++ ) {
    draw( "ABCDEFGHIJKLMNOPQRSTUVWXYZ", radius, ctx );
    radius += step;
}
