require("main",function(e,t,n){function o(){return d(a,arguments)}function i(e,t,n){"undefined"==typeof t&&(t=1024),"undefined"==typeof n&&(n=t);var o="undefined"==typeof e?document.createElement("canvas"):document.getElementById(e);return c.addClass(o,"theme-elevation-16"),o.width=t,o.height=n,o.$ctx=o.getContext("2d"),o.$ctx.W=t,o.$ctx.H=n,o}var a={en:{},fr:{}},d=e("$").intl;e("font.josefin"),e("font.mystery-quest");var c=e("dom"),r=e("x-widget").getById,l=e("disk"),s=e("crypt"),u=e("tfw.fileapi"),f=e("tfw.font-loader");f("mystery-quest").then(function(){r("modal").visible=!0;var e=document.getElementById("input");e.addEventListener("keyup",n.onEncode),window.setTimeout(n.onEncode)}),n.onDraw=function(){r("modal-disk").visible=!0;var e,t=r("code").value.toUpperCase(),n=i("canvas-disk"),o=n.$ctx;for(l(0,666,o,1,0,t.charAt(0)),r("D1").visible=!0,r("D1").enabled=!0,e=1;e<6;e++)r("D"+(e+1)).visible=!1;for(e=1;e<t.length;e++)l(e,t.length,o,Math.pow(.84,e),t.charCodeAt(e),t.charAt(e)),r("D"+(e+1)).visible=!0,r("D"+(e+1)).enabled=!0},n.onDiskSave=function(e){r("D"+e).enabled=!1,e=parseInt(e)-1;var t=r("code").value.toUpperCase(),n=i(),o=n.$ctx;0==e?l(0,666,o,1,0,t.charAt(0)):l(e,t.length,o,Math.pow(.84,e),t.charCodeAt(e),t.charAt(e)),n.toBlob(function(t){u.saveAs(t,"Disk-"+(1+e))},"image/png",100)},n.onCloseModalDisk=function(){r("modal-disk").visible=!1},n.onEncode=function(){var e=r("code").value.toUpperCase(),t=document.getElementById("input").value.trim(),n=document.getElementById("output");n.textContent=s.encode(e,t)},t.exports._=o});
//# sourceMappingURL=main.js.map