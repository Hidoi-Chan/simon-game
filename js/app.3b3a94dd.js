(function(e){function t(t){for(var r,a,o=t[0],u=t[1],l=t[2],f=0,d=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==s[u]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},s={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/simon-game/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0f0d":function(e,t,n){"use strict";n("9229")},"196f":function(e,t,n){e.exports=n.p+"media/3.36d5a722.mp3"},"3c6d":function(e,t,n){e.exports=n.p+"media/1.d2c4a2c4.mp3"},"3cf8":function(e,t,n){e.exports=n.p+"media/2.c1c96b44.mp3"},"42f6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("Simon Says")]),n("div",{staticClass:"container"},[n("Game",{attrs:{gameItems:e.gameItems,clientsTurn:e.clientsTurn},on:{"push-new-value":e.pushNewValue}}),n("Control",{attrs:{round:e.round,error:e.error,clientsTurn:e.clientsTurn},on:{"start-new-game":e.startNewGame,"set-interval":e.setInterval}})],1)])},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game"},e._l(e.gameItems,(function(t){return n("GameItem",{key:t.id,attrs:{gameItem:t,clientsTurn:e.clientsTurn},on:{"push-new-value":e.pushNewValue}})})),1)},o=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game-item",class:{disabled:!e.clientsTurn,active:e.gameItem.isActive},on:{click:function(t){return e.$emit("push-new-value",e.gameItem.id)}}})},l=[],c={props:{gameItem:Object,clientsTurn:Boolean}},f=c,d=(n("808a"),n("2877")),p=Object(d["a"])(f,u,l,!1,null,"50ecab06",null),h=p.exports,m={components:{GameItem:h},props:{gameItems:Array,clientsTurn:Boolean},methods:{pushNewValue(e){this.$emit("push-new-value",e)}}},v=m,b=(n("0f0d"),Object(d["a"])(v,a,o,!1,null,"23446537",null)),g=b.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"control"},[n("h2",[e._v("Раунд: "+e._s(e.round))]),n("div",{staticClass:"info-block",class:{info:e.clientsTurn,error:e.error}},[e.error?n("span",[e._v("Вы проиграли на "+e._s(e.round)+" раунде. Попробуйте снова!")]):e.clientsTurn?n("span",[e._v("Ваш ход!")]):e._e()]),n("button",{staticClass:"start",attrs:{disabled:0!==e.round&&!e.error},on:{click:function(t){return e.$emit("start-new-game")}}},[e._v(" Старт ")]),n("h3",[e._v("Уровень сложности:")]),n("div",{staticClass:"radio-block"},[n("input",{attrs:{type:"radio",name:"interval",id:"ease",value:"1500",checked:""},on:{change:e.setInterval}}),n("label",{attrs:{for:"ease"}},[e._v("Легко")])]),n("div",{staticClass:"radio-block"},[n("input",{attrs:{type:"radio",name:"interval",id:"medium",value:"1000"},on:{change:e.setInterval}}),n("label",{attrs:{for:"medium"}},[e._v("Средне")])]),n("div",{staticClass:"radio-block"},[n("input",{attrs:{type:"radio",name:"interval",id:"hard",value:"400"},on:{change:e.setInterval}}),n("label",{attrs:{for:"hard"}},[e._v("Сложно")])])])},w=[],y={props:{round:Number,error:Boolean,clientsTurn:Boolean},methods:{setInterval(e){this.$emit("set-interval",e.target.value)}}},_=y,T=(n("e86e"),Object(d["a"])(_,O,w,!1,null,"5ca233b8",null)),I=T.exports,V={name:"App",data(){return{round:0,gameItems:[{id:0,isActive:!1},{id:1,isActive:!1},{id:2,isActive:!1},{id:3,isActive:!1}],sequenceOfValues:[],clientSequenceOfValues:[],interval:1500,clientsTurn:!1,error:!1}},components:{Game:g,Control:I},methods:{startNewGame(){this.round=0,this.error=!1,this.startNewRound()},startNewRound(){this.round+=1,this.clientSequenceOfValues=[],this.sequenceOfValues.push(this.generateRandomNum())},pushNewValue(e){this.clientsTurn&&(this.clientSequenceOfValues.push(e),this.playAudio(e))},generateRandomNum(){return Math.floor(4*Math.random())},playAudio(e){new Audio(n("ba5b")(`./${e}.mp3`)).play()},setInterval(e){this.interval=+e}},watch:{sequenceOfValues:{handler:function(e){if(e.length)for(let t=0;t<=e.length;t++)setTimeout(()=>{t!==e.length?(this.gameItems[e[t]].isActive=!0,this.playAudio(e[t]),setTimeout(()=>{this.gameItems[e[t]].isActive=!1},this.interval-100)):this.round&&(this.clientsTurn=!0)},this.interval*t)},deep:!0},clientSequenceOfValues:{handler:function(e){if(e.length){for(let t=0;t<e.length;t++)if(this.sequenceOfValues[t]!==e[t]){this.sequenceOfValues=[],this.clientSequenceOfValues=[],this.clientsTurn=!1,this.error=!0;break}this.sequenceOfValues.length!==e.length||this.error||(this.clientsTurn=!1,setTimeout(this.startNewRound,500))}},deep:!0},interval(){this.round=0,this.sequenceOfValues=[],this.clientSequenceOfValues=[],this.clientsTurn=!1,this.error=!1}}},j=V,x=(n("034f"),Object(d["a"])(j,s,i,!1,null,null,null)),k=x.exports;r["a"].config.productionTip=!1,r["a"].config.devtools=!0,new r["a"]({render:function(e){return e(k)}}).$mount("#app")},"58a5":function(e,t,n){e.exports=n.p+"media/0.99e50f7d.mp3"},"808a":function(e,t,n){"use strict";n("ee1e")},"85ec":function(e,t,n){},9229:function(e,t,n){},ba5b:function(e,t,n){var r={"./0.mp3":"58a5","./1.mp3":"3c6d","./2.mp3":"3cf8","./3.mp3":"196f"};function s(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=i,e.exports=s,s.id="ba5b"},e86e:function(e,t,n){"use strict";n("42f6")},ee1e:function(e,t,n){}});
//# sourceMappingURL=app.3b3a94dd.js.map