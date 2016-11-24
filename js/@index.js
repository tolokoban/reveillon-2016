/**********************************************************************
 require( 'require' )
 -----------------------------------------------------------------------
 @example

 var Path = require("node://path");  // Only in NodeJS/NW.js environment.
 var Button = require("tfw.button");

 **********************************************************************/

window.require = function() {
    var modules = {};
    var definitions = {};
    var nodejs_require = typeof window.require === 'function' ? window.require : null;

    var f = function(id, body) {
        if( id.substr( 0, 7 ) == 'node://' ) {
            // Calling for a NodeJS module.
            if( !nodejs_require ) {
                throw Error( "[require] NodeJS is not available to load module `" + id + "`!" );
            }
            return nodejs_require( id.substr( 7 ) );
        }

        if( typeof body === 'function' ) {
            definitions[id] = body;
            return;
        }
        var mod;
        body = definitions[id];
        if (typeof body === 'undefined') {
            var err = new Error("Required module is missing: " + id);   
            console.error(err.stack);
            throw err;
        }
        mod = modules[id];
        if (typeof mod === 'undefined') {
            mod = {exports: {}};
            var exports = mod.exports;
            body(f, mod, exports);
            modules[id] = mod.exports;
            mod = mod.exports;
            //console.log("Module initialized: " + id);
        }
        return mod;
    };
    return f;
}();
function addListener(e,l) {
    if (window.addEventListener) {
        window.addEventListener(e,l,false);
    } else {
        window.attachEvent('on' + e, l);
    }
};

addListener(
    'DOMContentLoaded',
    function() {
        document.body.parentNode.$data = {};
        // Attach controllers.
        APP = require('main');
setTimeout(function (){if(typeof APP.start==='function')APP.start()});

    }
);
require("$",function(n,o,r){r.config={name:'"reveillon-2016"',description:'"Réveillon 2016 à Gémens"',author:'"tolokoban"',version:'"0.0.2"',major:"0",minor:"0",revision:"2",date:"2016-11-24T15:04:46.000Z",consts:{}};var t=null;r.lang=function(n){return void 0===n&&(window.localStorage&&(n=window.localStorage.getItem("Language")),n||(n=window.navigator.language,n||(n=window.navigator.browserLanguage,n||(n="fr"))),n=n.substr(0,2).toLowerCase()),t=n,window.localStorage&&window.localStorage.setItem("Language",n),n},r.intl=function(n,o){var t,a,e,i,g,l,u=n[r.lang()],s=o[0];if(!u)return s;if(t=u[s],!t)return s;if(o.length>1){for(a="",g=0,e=0;e<t.length;e++)i=t.charAt(e),"$"===i?(a+=t.substring(g,e),e++,l=t.charCodeAt(e)-48,a+=l<0||l>=o.length?"$"+t.charAt(e):o[l],g=e+1):"\\"===i&&(a+=t.substring(g,e),e++,a+=t.charAt(e),g=e+1);a+=t.substr(g),t=a}return t}});
//# sourceMappingURL=$.js.map
require("main",function(t,e,n){function o(){return a(i,arguments)}function r(t,e,n){var o,r,i,a=2*Math.PI/t.length,f=e+60,h=.03*(e-400)+60;for(n.font="bold "+h.toFixed(0)+"px josefin-sans",o=0;o<t.length;o++)r=t.charAt(o),i=a*o,i+=a/2,n.moveTo(f*l(i)+n.W/2,f*s(i)+n.H/2),n.lineTo(f*l(i+a)+n.W/2,f*s(i+a)+n.H/2),i-=a/2,n.stroke(),n.save(),n.translate(n.W/2,n.H/2),n.rotate(i),n.textAlign="center",n.textBaseline="middle",n.fillText(r,-e,0),n.restore()}var i={en:{},fr:{}},a=t("$").intl;t("font.josefin");var l=Math.cos,s=Math.sin,f=document.getElementById("D1"),h=f.getContext("2d");h.W=f.width,h.H=f.height;for(var d=400,c=110,x=0;x<6;x++)r("ABCDEFGHIJKLMNOPQRSTUVWXYZ",d,h),d+=c;e.exports._=o});
//# sourceMappingURL=main.js.map
require("font.josefin",function(n,r,e){function t(){return i(f,arguments)}var f={en:{},fr:{}},i=n("$").intl;r.exports._=t});
//# sourceMappingURL=font.josefin.js.map
