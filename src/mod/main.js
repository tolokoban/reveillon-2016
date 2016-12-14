require("font.josefin");
require("font.mystery-quest");

var $ = require("dom");
var W = require("x-widget").getById;
var Disk = require("disk");
var Crypt = require("crypt");
var FileAPI = require("tfw.fileapi");
var FontLoader = require("tfw.font-loader");


FontLoader("mystery-quest").then(function () {
    W('modal').visible = true;
    var input = document.getElementById( 'input' );
    input.addEventListener( 'keyup', exports.onEncode );
    window.setTimeout( exports.onEncode );
});

exports.onDraw = function() {
    W('modal-disk').visible = true;
    var i;
    var code = W('code').value.toUpperCase();
    var canvas = newCanvas( 'canvas-disk' );
    var ctx = canvas.$ctx;
    Disk( 0, 666, ctx, 1, 0, code.charAt(0) );
    W('D1').visible = true;
    W('D1').enabled = true;
    for( i=1; i<6; i++ ) {
        W('D' + (i + 1)).visible = false;
    }
    for( i=1; i<code.length; i++ ) {
        Disk( i, code.length,
              ctx, Math.pow(.84, i), code.charCodeAt( i ), code.charAt( i ) );
        W('D' + (i + 1)).visible = true;
        W('D' + (i + 1)).enabled = true;
    }
};


exports.onDiskSave = function( index ) {
    W('D' + index).enabled = false;
    index = parseInt( index ) - 1;
    var code = W('code').value.toUpperCase();
    var canvas = newCanvas();
    var ctx = canvas.$ctx;
    if( index == 0 ) {
        Disk( 0, 666, ctx, 1, 0, code.charAt(0) );
    } else {
        Disk( index, code.length,
              ctx, Math.pow(.84, index), code.charCodeAt( index ), code.charAt( index ) );
    }
    canvas.toBlob(function (blob) {
        FileAPI.saveAs( blob, "Disk-" + (1 + index) );
    }, "image/png", 100);
};


exports.onCloseModalDisk = function() {
    W('modal-disk').visible = false;
};


exports.onEncode = function() {
    var code = W('code').value.toUpperCase();
    var text = document.getElementById( 'input' ).value.trim();
    var output = document.getElementById( 'output' );
    output.textContent = Crypt.encode( code, text );
};

function newCanvas(id, width, height) {
    if( typeof width === 'undefined' ) width = 1024;
    if( typeof height === 'undefined' ) height = width;

    var canvas = typeof id === 'undefined' ?
            document.createElement( 'canvas' ) :
            document.getElementById( id );
    $.addClass( canvas, "theme-elevation-16" );
    canvas.width = width;
    canvas.height = height;
    canvas.$ctx = canvas.getContext( '2d' );
    canvas.$ctx.W = width;
    canvas.$ctx.H = height;
    return canvas;
}
