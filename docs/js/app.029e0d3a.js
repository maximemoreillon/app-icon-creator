(function(e){function t(t){for(var o,c,i=t[0],l=t[1],s=t[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(o=!1)}o&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},r=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"2f84":function(e,t,n){e.exports=n.p+"img/helm.28c3b5c6.png"},"40d1":function(e,t,n){e.exports=n.p+"img/vuetify.c7ad3d2c.png"},"46e4":function(e,t,n){"use strict";n("bacf")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("App icon creator")]),n("div",{},[n("input",{attrs:{type:"file"},on:{change:function(t){return e.image_changed(t)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.logo,expression:"logo"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.logo)?e._i(e.logo,null)>-1:e.logo},on:{change:function(t){var n=e.logo,o=t.target,a=!!o.checked;if(Array.isArray(n)){var r=null,c=e._i(n,r);o.checked?c<0&&(e.logo=n.concat([r])):c>-1&&(e.logo=n.slice(0,c).concat(n.slice(c+1)))}else e.logo=a}}}),n("label",{attrs:{for:""}},[e._v("Draw logo")])]),e.image?n("div",{staticClass:"images_wrapper"},e._l(e.technos,(function(t,o){return n("AppIcon",{key:o,attrs:{image:e.image,techno:t,logo:e.logo}})})),1):e._e()])},r=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("canvas",{ref:"canvas"})},i=[],l=(n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),n("cb29"),{name:"AppIcon",props:{techno:String,image:File,logo:Boolean},data:function(){return{techno_lookup:{},context:null,canvas:null}},mounted:function(){this.get_canvas_and_context(),this.draw_base_image()},methods:{get_canvas_and_context:function(){this.canvas=this.$refs.canvas,this.context=this.canvas.getContext("2d")},draw_base_image:function(){var e=this,t=new Image;t.src=URL.createObjectURL(this.image),t.addEventListener("load",(function(){var n=Math.max(t.width,t.height);e.canvas.width=n,e.canvas.height=e.canvas.width;var o={x:.5*e.canvas.width-.5*t.width,y:.5*e.canvas.height-.5*t.height};e.context.drawImage(t,o.x,o.y),e.draw_techno(),e.logo&&e.draw_logo()}),!1)},draw_logo:function(){var e=this,t=this.canvas,o=t.width,a=t.height,r=.15,c=.05*o,i={x:(1-r)*o,y:r*a},l=2*r*o,s={x:i.x-.5*l-c,y:i.y-.5*l+c},u=new Image;u.src=n("cf05"),u.addEventListener("load",(function(){e.context.drawImage(u,s.x,s.y,l,l)}),!1)},draw_techno:function(){var e=this,t=this.techno;if(t){var n=this.canvas,o=n.width,a=n.height,r=.2,c=1-r,i=0*o,l=r*o,s={x:r*o+i,y:c*a-i},u=1.1*l,f={x:s.x-.5*u,y:s.y-.5*u},p=new Image;p.src=t,p.addEventListener("load",(function(){e.context.arc(s.x,s.y,l,l,0,2*Math.PI,!1),e.context.fillStyle="white",e.context.fill(),e.context.drawImage(p,f.x,f.y,u,u)}),!1)}}}}),s=l,u=(n("46e4"),n("2877")),f=Object(u["a"])(s,c,i,!1,null,"ea87ce52",null),p=f.exports,d={name:"App",components:{AppIcon:p},data:function(){return{image:null,logo:!1,technos:[n("2f84"),n("40d1"),n("c6eb"),n("9f06"),null]}},methods:{image_changed:function(e){var t=this;this.image=null,setTimeout((function(){t.image=e.target.files[0]}),10)}}},g=d,h=(n("034f"),Object(u["a"])(g,a,r,!1,null,null,null)),v=h.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(v)}}).$mount("#app")},"85ec":function(e,t,n){},"9f06":function(e,t,n){e.exports=n.p+"img/pdf.b945362a.png"},bacf:function(e,t,n){},c6eb:function(e,t,n){e.exports=n.p+"img/vue.ed419638.png"},cf05:function(e,t,n){e.exports=n.p+"img/logo.eb932683.png"}});
//# sourceMappingURL=app.029e0d3a.js.map