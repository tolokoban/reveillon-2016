require("main",function(t,e,n){function o(){return a(i,arguments)}function r(t,e,n){var o,r,i,a=2*Math.PI/t.length,f=e+60,h=.03*(e-400)+60;for(n.font="bold "+h.toFixed(0)+"px josefin-sans",o=0;o<t.length;o++)r=t.charAt(o),i=a*o,i+=a/2,n.moveTo(f*l(i)+n.W/2,f*s(i)+n.H/2),n.lineTo(f*l(i+a)+n.W/2,f*s(i+a)+n.H/2),i-=a/2,n.stroke(),n.save(),n.translate(n.W/2,n.H/2),n.rotate(i),n.textAlign="center",n.textBaseline="middle",n.fillText(r,-e,0),n.restore()}var i={en:{},fr:{}},a=t("$").intl;t("font.josefin");var l=Math.cos,s=Math.sin,f=document.getElementById("D1"),h=f.getContext("2d");h.W=f.width,h.H=f.height;for(var d=400,c=110,x=0;x<6;x++)r("ABCDEFGHIJKLMNOPQRSTUVWXYZ",d,h),d+=c;e.exports._=o});
//# sourceMappingURL=main.js.map