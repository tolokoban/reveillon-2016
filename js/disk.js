/** @module disk */require( 'disk', function(require, module, exports) { var _intl_={"en":{},"fr":{}},_$=require("$").intl;function _(){return _$(_intl_, arguments);}
    "use strict";

var Crypt = require("crypt");

var ALPHABET = Crypt.ALPHABET;

/**
 * @export function
 * Dessine un anneau avec l'alphabet mélangé.
 */
module.exports = function(index, codeLength,
                          ctx, scale, code, start, x, y, radius, fontSize, alphabet) {
    if( typeof scale === 'undefined' ) scale = 1;
    if( typeof code === 'undefined' ) code = 0;
    if( typeof start === 'undefined' ) start = 'A';
    if( typeof x === 'undefined' ) x = ctx.W / 2;
    if( typeof y === 'undefined' ) y = ctx.H / 2;
    if( typeof radius === 'undefined' ) radius = 450;
    if( typeof fontSize === 'undefined' ) fontSize = 80;
    if( typeof alphabet === 'undefined' ) alphabet = ALPHABET;

    alphabet = Crypt.shuffle( alphabet, code, start );
    ctx.font = fontSize + "px mystery-quest";
    var i, angStep = Math.PI * 2 / alphabet.length;
    ctx.save();
    ctx.translate( x, y );
    ctx.lineWidth = 10;
    ctx.fillStyle = "#feb";
    ctx.strokeStyle = "#875";
    ctx.beginPath();
    ctx.arc(0, 0, scale * (radius + 58), 0, Math.PI * 2, false);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#875";
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.restore();
    
    if( index == 1 ) ctx.fillStyle = "#00f";
    else if( index == codeLength - 1 ) ctx.fillStyle = "#f00";
    else ctx.fillStyle = "#000";
    
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for( i=0; i<alphabet.length; i++ ) {
        ctx.save();
        ctx.translate( x, y );
        ctx.rotate( angStep * i );
        ctx.scale( scale, scale );
        ctx.fillText( alphabet.charAt( i ), 0, -radius );
        ctx.restore();
    }
};


  
module.exports._ = _;
/**
 * @module disk
 * @see module:$
 * @see module:crypt

 */
});