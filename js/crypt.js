/** @module crypt */require( 'crypt', function(require, module, exports) { var _intl_={"en":{},"fr":{}},_$=require("$").intl;function _(){return _$(_intl_, arguments);}
    "use strict";

/**
 * @export function shuffle
 * Mélanger un alphabet suivant un code.
 */
exports.shuffle = function(alphabet, code, start) {
    var result = [];
    var i, k, tmp, shift = code;
    for( i=0; i<alphabet.length; i++ ) {
        result.push( alphabet.charAt( i ) );
    }

    for( i=0; i<alphabet.length; i++ ) {
        k = (i + shift) % alphabet.length;
        tmp = result[i];
        result[i] = result[k];
        result[k] = tmp;
        shift += code;
    }
    var pos = result.indexOf( start );
    var out = '';
    for( i=0; i<result.length; i++ ) {
        out += result[(i + pos) % result.length];
    }
    return out;
};


exports.encode = function( code, text ) {
    var i, c, p;
    var out = '';
    var alphaIndex = 0;
    var alphabets = [];
    var alpha;
    var base = exports.shuffle( exports.ALPHABET, 0, code.charAt( 0 ) );
    for( i=1; i<code.length; i++ ) {
        alphabets.push( exports.shuffle( exports.ALPHABET, code.charCodeAt( i ), code.charAt( i ) ) );
    }
    for( i=0; i<text.length; i++ ) {
        if( i % (code.length - 1) == 0 ) out += ' ';
        c = charAt( text, i );
        alpha = alphabets[i % alphabets.length];
        p = alpha.indexOf( c );
        out += base.charAt( p );
    }
    return out.trim();
};


var ACCENTS = "çáàâäãéèêëíìîïóòôöõúùûü";
var REPLACE = "CAAAAAEEEEIIIIOOOOOUUUU";

function charAt( text, i ) {
    var c = text.charAt( i );
    var r = ACCENTS.indexOf( c );
    if( r > -1 ) c = REPLACE.charAt( r );
    c = c.toUpperCase();
    if( exports.ALPHABET.indexOf( c ) == -1 ) return "-";
    return c;
}

exports.ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-";


  
module.exports._ = _;
/**
 * @module crypt
 * @see module:$

 */
});