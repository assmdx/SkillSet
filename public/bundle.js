!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e){e.exports={name:"assmdx",skillset:{JavaScript:{nodejs:{"egg.js":1,express:1}},html:1,java:1,"C#":1,C:1,algorithm:1}}},function(e,t,n){"use strict";function r(e){e=JSON.parse(e);try{let t={root:{data:{text:e.name+"'s Skill Set"},children:[]}};return function e(t,n){for(let r in t){if(!t.hasOwnProperty(r)||r.startsWith("."))continue;let o={data:{text:r},children:[]},i=t[r];"object"==typeof i||"string"==typeof i?(i[".level"]&&(o.data.priority=i[".level"]),e(i,o.children)):o.data.priority=i,n.push(o)}}(e.skillset,t.root.children),JSON.stringify(t)}catch(e){return null}}n.r(t);var o=n(0);window.onload=(()=>{const e=ace.edit("editor"),t=ace.require("ace/mode/json").Mode;e.session.setMode(new t),e.setValue(JSON.stringify(o,null,"  "));const n=window.km=new kityminder.Minder;function i(){n.importData("json",r(e.getValue()))}n.renderTo("#minder-view"),i(),n.disable(),n.execCommand("hand"),document.querySelector("#generate-btn").onclick=i,document.querySelector("#save-btn").onclick=function(){n.exportData("png").then(e=>{const t=document.createElement("a");t.href=e,t.download="skill-set.png",t.click(),document.querySelector("canvas").remove()})}})}]);