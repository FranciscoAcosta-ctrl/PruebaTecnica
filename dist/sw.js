if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let t={};const o=e=>s(e,c),d={module:{uri:c},exports:t,require:o};i[c]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-c000e010.css",revision:null},{url:"assets/index-cd503f2c.js",revision:null},{url:"index.html",revision:"839c9a3b15cca15ed5f5e00099c2bb9d"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icon.ico",revision:"7997d8c7b9b2b9b745cabca4ebcb53fd"},{url:"manifest.webmanifest",revision:"afaccb126245293a14dcdd32ed99c851"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
