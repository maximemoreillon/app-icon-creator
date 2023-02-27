(function(t){function e(e){for(var n,s,l=e[0],c=e[1],o=e[2],d=0,h=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&h.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,l=1;l<a.length;l++){var c=a[l];0!==i[c]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0934":function(t,e,a){},"384e":function(t,e,a){"use strict";a("0934")},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),i=a("7496"),r=a("40dc"),s=a("b0af"),l=a("99d9"),c=a("62ad"),o=a("a523"),u=a("f6c4"),d=a("0fd9"),h=a("2a7f"),g=function(){var t=this,e=t._self._c;return e(i["a"],[e(r["a"],{attrs:{app:"",dark:"",color:"#444444"}},[e(h["a"],[t._v("Icon maker")])],1),e(u["a"],{staticClass:"grey lighten-4"},[e(o["a"],[e(d["a"],[e(c["a"],{attrs:{cols:"12",md:"6"}},[e(s["a"],[e(l["b"],[t._v("Input")]),e(l["a"],{staticClass:"inputWrapper"},t._l(t.images,(function(a,n){return e("ImageManagement",{key:n,model:{value:t.images[n],callback:function(e){t.$set(t.images,n,e)},expression:"images[index]"}})})),1)],1)],1),e(c["a"],{attrs:{cols:"12",md:"6"}},[e(s["a"],[e(l["b"],[t._v("Output")]),e(l["a"],{staticClass:"outputWrapper"},[e("canvas",{ref:"canvas",staticClass:"output"})])],1)],1)],1)],1)],1)],1)},f=[],m=a("8336"),p=a("ce7e"),v=a("23a7"),w=a("132d"),b=a("2fa4"),x=a("71d9"),y=function(){var t=this,e=t._self._c;return e(s["a"],{staticClass:"imageWrapper",class:t.image.label,style:{"grid-area":t.image.label},attrs:{outlined:""}},[e(x["a"],{attrs:{flat:"",dense:""}},[t.image.file?e(m["a"],{staticClass:"clearButton",attrs:{icon:""},on:{click:function(e){return t.clearInput()}}},[e(w["a"],[t._v("mdi-close")])],1):e(v["a"],{attrs:{"hide-input":"",accept:"image/*"},model:{value:t.imageFile,callback:function(e){t.imageFile=e},expression:"imageFile"}}),e(b["a"]),e(m["a"],{attrs:{icon:"",color:t.image.drawBackground?"#c00000":void 0},on:{click:function(e){t.image.drawBackground=!t.image.drawBackground}}},[e(w["a"],[t._v("mdi-arrange-send-backward")])],1)],1),e(p["a"]),e(l["a"],{staticClass:"imagePreviewWrapper"},[t.image.file?e("img",{staticClass:"imagePreview",attrs:{src:t.imageurl,alt:""}}):e(w["a"],{attrs:{size:"48"}},[t._v("mdi-image-off")])],1)],1)},_=[],k={name:"ImageManagement",props:{value:void 0},components:{},data(){return{imageFile:null}},watch:{imageFile(){this.image.file=this.imageFile}},methods:{clearInput(){this.imageFile=null,this.image.file=null}},computed:{image:{get(){return this.value},set(t){this.$emit("input",t)}},imageurl(){if(this.image)return URL.createObjectURL(this.image.file)}}},O=k,I=(a("384e"),a("2877")),j=Object(I["a"])(O,y,_,!1,null,"584592c0",null),P=j.exports,B={name:"App",components:{ImageManagement:P},data(){return{image:null,images:[{label:"main",file:null,drawBackground:!1},{label:"top-left",file:null,drawBackground:!0},{label:"top-right",file:null,drawBackground:!0},{label:"bottom-left",file:null,drawBackground:!0},{label:"bottom-right",file:null,drawBackground:!0}],context:null,canvas:null}},mounted(){this.get_canvas_and_context()},watch:{images:{handler(){this.draw_icon()},deep:!0}},methods:{get_canvas_and_context(){this.canvas=this.$refs.canvas,this.context=this.canvas.getContext("2d")},async draw_icon(){const[t,...e]=this.images;this.clear_canvas(),await this.draw_main_image(t),e.forEach(t=>{this.draw_corner(t)})},loadImage(t){return new Promise(e=>{const a=new Image;a.src=URL.createObjectURL(t),a.addEventListener("load",()=>{e(a)},!1)})},clear_canvas(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)},async draw_main_image(t){const e=t.file;if(!e)return;const a=await this.loadImage(e),n=Math.max(a.width,a.height);this.canvas.width=n,this.canvas.height=n;const i={x:.5*n-.5*a.width,y:.5*n-.5*a.height};t.drawBackground&&(this.context.fillStyle="white",this.context.fillRect(0,0,this.canvas.width,this.canvas.height)),this.context.drawImage(a,i.x,i.y)},async draw_corner(t){const{file:e,label:a}=t;if(!e)return;const n=await this.loadImage(e),{width:i,height:r}=this.canvas,s=.2,l=1-s,c=s*i,o=1.1*c,u=n.height/n.width,d=o*u,h=o/u,g=Math.min(h,o),f=Math.min(d,o);let m;"top-left"===a&&(m={x:s*i,y:s*r}),"bottom-left"===a&&(m={x:s*i,y:l*r}),"top-right"===a&&(m={x:l*i,y:s*r}),"bottom-right"===a&&(m={x:l*i,y:l*r});const p={x:m.x-.5*g,y:m.y-.5*f};t.drawBackground&&(this.context.beginPath(),this.context.arc(m.x,m.y,c,c,0,2*Math.PI,!1),this.context.fillStyle="white",this.context.fill()),this.context.drawImage(n,p.x,p.y,g,f)}}},M=B,C=(a("93fb"),Object(I["a"])(M,g,f,!1,null,null,null)),F=C.exports,S=a("f309");n["a"].use(S["a"]);var R=new S["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:R,render:t=>t(F)}).$mount("#app")},"93fb":function(t,e,a){"use strict";a("96c4")},"96c4":function(t,e,a){}});
//# sourceMappingURL=app.6f4d8fe3.js.map