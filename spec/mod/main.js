require("main",function(e,t,n){function o(){return c(a,arguments)}function i(){var e,t=r("code").value.toUpperCase(),n=d("canvas-disk"),o=n.$ctx;for(s(o,1,0,t.charAt(0)),r("D1").visible=!0,r("D1").enabled=!0,e=1;e<6;e++)r("D"+(e+1)).visible=!1;for(e=1;e<t.length;e++)s(o,Math.pow(.86,e),t.charCodeAt(e),t.charAt(e)),r("D"+(e+1)).visible=!0,r("D"+(e+1)).enabled=!0}function d(e,t,n){"undefined"==typeof t&&(t=2048),"undefined"==typeof n&&(n=t);var o="undefined"==typeof e?document.createElement("canvas"):document.getElementById(e);return u.addClass(o,"theme-elevation-16"),o.width=t,o.height=n,o.$ctx=o.getContext("2d"),o.$ctx.W=t,o.$ctx.H=n,o}var a={en:{},fr:{}},c=e("$").intl;e("font.josefin"),e("font.mystery-quest");var u=e("dom"),r=e("x-widget").getById,s=e("disk"),l=e("crypt"),f=e("tfw.fileapi"),m=e("tfw.font-loader");m("mystery-quest").then(function(){r("modal").visible=!0;var e=document.getElementById("input");e.addEventListener("keyup",n.onEncode),window.setTimeout(n.onEncode)}),n.onDraw=function(){r("modal-disk").visible=!0,i(),window.setTimeout(i,1500),window.setTimeout(i,3e3)},n.onDiskSave=function(e){r("D"+e).enabled=!1,e=parseInt(e)-1;var t=r("code").value.toUpperCase(),n=d(),o=n.$ctx;s(o,Math.pow(.86,e),t.charCodeAt(e),t.charAt(e)),n.toBlob(function(t){f.saveAs(t,"Disk-"+(1+e)+".png")},"image/png",100)},n.onCloseModalDisk=function(){r("modal-disk").visible=!1},n.onEncode=function(){var e=r("code").value.toUpperCase(),t=document.getElementById("input").value.trim(),n=document.getElementById("output");n.textContent=l.encode(e,t)},t.exports._=o});
//# sourceMappingURL=main.js.map