require("$",function(n,o,r){r.config={name:'"reveillon-2016"',description:'"R�veillon 2016"',author:'"Tolokoban"',version:'"1.0.4"',major:"1",minor:"0",revision:"4",date:"2016-11-24T20:36:31.000Z",consts:{}};var a=null;r.lang=function(n){return void 0===n&&(window.localStorage&&(n=window.localStorage.getItem("Language")),n||(n=window.navigator.language,n||(n=window.navigator.browserLanguage,n||(n="fr"))),n=n.substr(0,2).toLowerCase()),a=n,window.localStorage&&window.localStorage.setItem("Language",n),n},r.intl=function(n,o){var a,t,e,i,g,l,u=n[r.lang()],s=o[0];if(!u)return s;if(a=u[s],!a)return s;if(o.length>1){for(t="",g=0,e=0;e<a.length;e++)i=a.charAt(e),"$"===i?(t+=a.substring(g,e),e++,l=a.charCodeAt(e)-48,t+=l<0||l>=o.length?"$"+a.charAt(e):o[l],g=e+1):"\\"===i&&(t+=a.substring(g,e),e++,t+=a.charAt(e),g=e+1);t+=a.substr(g),a=t}return a}});
//# sourceMappingURL=$.js.map