import{c as P}from"./three-BFxAWP9U.js";function c(r,n,t){return n in r?Object.defineProperty(r,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[n]=t,r}function p(r,n){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);n&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),t.push.apply(t,e)}return t}function w(r){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?p(Object(t),!0).forEach(function(e){c(r,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))})}return r}new P;new P;function b(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}var a=function r(n,t,e){var i=this;b(this,r),c(this,"dot2",function(u,o){return i.x*u+i.y*o}),c(this,"dot3",function(u,o,f){return i.x*u+i.y*o+i.z*f}),this.x=n,this.y=t,this.z=e},d=[new a(1,1,0),new a(-1,1,0),new a(1,-1,0),new a(-1,-1,0),new a(1,0,1),new a(-1,0,1),new a(1,0,-1),new a(-1,0,-1),new a(0,1,1),new a(0,-1,1),new a(0,1,-1),new a(0,-1,-1)],O=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],g=new Array(512),m=new Array(512),j=function(n){n>0&&n<1&&(n*=65536),n=Math.floor(n),n<256&&(n|=n<<8);for(var t=0;t<256;t++){var e;t&1?e=O[t]^n&255:e=O[t]^n>>8&255,g[t]=g[t+256]=e,m[t]=m[t+256]=d[e%12]}};j(0);function S(r){if(typeof r=="number")r=Math.abs(r);else if(typeof r=="string"){var n=r;r=0;for(var t=0;t<n.length;t++)r=(r+(t+1)*(n.charCodeAt(t)%96))%2147483647}return r===0&&(r=311),r}function y(r){var n=S(r);return function(){var t=n*48271%2147483647;return n=t,t/2147483647}}var G=function r(n){var t=this;b(this,r),c(this,"seed",0),c(this,"init",function(e){t.seed=e,t.value=y(e)}),c(this,"value",y(this.seed)),this.init(n)},M=new G(Math.random()),C={radius:1,center:[0,0,0]};function A(r,n){for(var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:M,e=w(w({},C),n),i=e.radius,u=e.center,o=0;o<r.length;o+=3){var f=Math.pow(t.value(),.3333333333333333),l=t.value()*2-1,h=t.value()*2-1,s=t.value()*2-1,v=Math.sqrt(l*l+h*h+s*s);l=f*l/v,h=f*h/v,s=f*s/v,r[o]=l*i+u[0],r[o+1]=h*i+u[1],r[o+2]=s*i+u[2]}return r}export{A as i};
