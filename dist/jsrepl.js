/* 
ify v1.0
https://github.com/Unzor/workerify
Use however you want it.
*/
Worker.workerFromURL=function(r){return new Worker(function(r){const e=`importScripts( "${r}" );`;return URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}(r))},Worker.workerFromCode=function(r){var e=new Blob([r],{type:"text/javascript"});return new Worker(window.URL.createObjectURL(e))};

window.__BAKED_JSREPL_BUILD__ = true;
(function(){var l,j,k,m,p,n,q,r,o=[].slice,i=function(h,a){return function(){return h.apply(a,arguments)}},s=function(h,a){function c(){this.constructor=h}for(var b in a)u.call(a,b)&&(h[b]=a[b]);c.prototype=a.prototype;h.prototype=new c;h.__super__=a.prototype;return h},u={}.hasOwnProperty;j=document.getElementById("jsrepl-script");if(j!=null)l="https://unzor.github.io/jsrepl-packed/dist",p=l+"/sandbox.html";else throw Error('JSREPL script element cannot be found. Make sure you have the ID "jsrepl-script" on it.');
m=function(){function h(){var a;a=function(c){return function(){c.head=document.getElementsByTagName("head")[0];return c.body=document.getElementsByTagName("body")[0]}}(this);a();this.loadfns=[a];window.onload=function(c){return function(){var b,a,f,e,g;e=c.loadfns;g=[];for(a=0,f=e.length;a<f;a++)b=e[a],g.push(b());return g}}(this);this.iframe=null}h.prototype._appendChild=function(a,c){var b;b=function(b){return function(){return b[a].appendChild(c)}}(this);return this[a]!=null?b():this.loadfns.push(b)};
h.prototype.createSandbox=function(a){this.iframe!=null&&this.body.removeChild(this.iframe);this.iframe=document.createElement("iframe");this.iframe.src=p;this.iframe.style.display="none";this.iframe.onload=function(c){return function(){return a(c.iframe.contentWindow)}}(this);return this._appendChild("body",this.iframe)};return h}();j=function(){function h(){this.listeners={}}h.prototype.makeArray=function(a){Object.prototype.toString.call(a)!=="[object Array]"&&(a=[a]);return a};h.prototype.on=
function(a,c){var b,d,f,e;if(typeof c==="function"){a=this.makeArray(a);f=[];for(b=0,d=a.length;b<d;b++)e=a[b],this.listeners[e]==null?f.push(this.listeners[e]=[c]):f.push(this.listeners[e].push(c));return f}};h.prototype.off=function(a,c){var b,d,f,e,g,a=this.makeArray(a);g=[];for(d=0,f=a.length;d<f;d++)b=a[d],e=this.listeners[b],e!=null&&(c!=null?(b=e.indexOf(c),b>-1?g.push(e.splice(b,1)):g.push(void 0)):g.push(this.listeners[b]=[]));return g};h.prototype.fire=function(a,c){var b,d,f,e,c=this.makeArray(c);
d=this.listeners[a];if(d!=null){c.push(a);var g;g=[];for(f=0,e=d.length;f<e;f++)b=d[f],g.push(b);e=[];for(d=0,f=g.length;d<f;d++)b=g[d],e.push(b.apply(this,c));return e}};h.prototype.once=function(a,c){var b,d,f,e,g,a=this.makeArray(a);b=function(e){return function(){var d,g,f,h;d=1<=arguments.length?o.call(arguments,0):[];for(g=0,f=a.length;g<f;g++)h=a[g],e.off(h,b);return c.apply(null,d)}}(this);e=[];for(d=0,f=a.length;d<f;d++)g=a[d],e.push(this.on(g,b));return e};return h}();r="Worker"in window;
n=function(h){function a(c,b,a){var f;this.input_server=b;a==null&&(a={});this.onmsg=i(this.onmsg,this);var e,g,h;h=[];for(e=0,g=c.length;e<g;e++)b=c[e],h.push(l+"/"+b);this.baseScripts=h;this.loader=new m;for(f in a)c=a[f],typeof c==="function"&&(a[f]=[c]);this.listeners=a}s(a,h);a.prototype.onmsg=function(a){var b;try{return b=JSON.parse(a.data),this.fire(b.type,[b.data])}catch(d){}};a.prototype.load=function(a,b){var d,f,e;b==null&&(b=true);d=this.baseScripts.concat(a);f=d.shift();this.worker!=
null&&this.kill();e=function(a){return function(){a.post({type:"importScripts",data:d});if(a.input_server!=null)return a.post({type:"set_input_server",data:a.input_server})}}(this);window.removeEventListener("message",this.onmsg,false);return!r||!b?this.loader.createSandbox(function(a){return function(b){a.worker=b;a.workerIsIframe=true;window.addEventListener("message",a.onmsg,false);return e()}}(this)):(this.worker=new Worker.workerFromURL(f),this.workerIsIframe=false,this.worker.addEventListener("message",this.onmsg,
false),e())};a.prototype.post=function(a){a=JSON.stringify(a);return this.workerIsIframe?this.worker.postMessage(a,"*"):this.worker.postMessage(a)};a.prototype.kill=function(){var a;typeof(a=this.worker).terminate==="function"&&a.terminate();if(this.loader.body!=null&&this.loader.iframe)return this.loader.body.removeChild(this.loader.iframe),delete this.loader.iframe};return a}(j);q=function(){var h,a,c;h={firefox_3:/firefox\/3/i,opera:/opera/i,chrome:/chrome/i};for(a in h)if(c=h[a],c.test(window.navigator.userAgent))return a}();
k=function(h){function a(c){var b,d,f,e,g,h,t;b=c!=null?c:{};t=b.result;c=b.error;f=b.input;g=b.output;h=b.progress;this.timeout=b.timeout;e=b.input_server;this.getLangConfig=i(this.getLangConfig,this);this.rawEval=i(this.rawEval,this);this.eval=i(this.eval,this);this.checkLineEnd=i(this.checkLineEnd,this);this.loadLanguage=i(this.loadLanguage,this);this.off=i(this.off,this);this.on=i(this.on,this);a.__super__.constructor.call(this);window.openDatabase!=null&&(d=openDatabase("replit_input","1.0",
"Emscripted input",1024),d.transaction(function(a){a.executeSql("DROP TABLE IF EXISTS input");return a.executeSql("CREATE TABLE input (text)")}));e==null&&(e={});e.input_id=Math.floor(Math.random()*9007199254740992)+1;this.lang=null;this.on("input",f);b=["sandbox.js"];window.__BAKED_JSREPL_BUILD__||(b=b.concat(["util/polyfills.js","util/mtwister.js"]));this.sandbox=new n(b,e,{output:g,input:function(a){return function(){return a.fire("input",function(b){return a.sandbox.post({type:"input.write",data:b})})}}(this),
error:c,result:t,progress:h,db_input:function(a){return function(){return a.fire("input",function(b){a.sandbox.fire("recieved_input",[b]);return d.transaction(function(a){return a.executeSql("INSERT INTO input (text) VALUES ('"+b+"')",[])})})}}(this),server_input:function(a){return function(){return a.fire("input",function(b){var c,d;a.sandbox.fire("recieved_input",[b]);c=(e.url||"/emscripten/input/")+e.input_id++;if(e.cors)if(d=new XMLHttpRequest,"withCredentials"in d)d.open("POST",c,true);else if(typeof XDomainRequest!==
"undefined"&&XDomainRequest!==null)d=new XDomainRequest,d.open("POST",c);else throw Error("CORS not supported on your browser");else d=new XMLHttpRequest,d.open("POST",c,true);d.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");return d.send("input="+b)})}}(this)})}s(a,h);a.prototype.on=function(c,b){var d,f,e,g,c=this.makeArray(c);e=[];for(d=0,f=c.length;d<f;d++)g=c[d],g==="input"?e.push(a.__super__.on.call(this,"input",b)):e.push(this.sandbox.on(g,b));return e};
a.prototype.off=function(c,b){var d,f,e,g,c=this.makeArray(c);e=[];for(d=0,f=c.length;d<f;d++)g=c[d],g==="input"?e.push(a.__super__.off.call(this,"input",b)):e.push(this.sandbox.off(g,b));return e};a.prototype.loadLanguage=function(c,b,d){var f,e;typeof b==="function"&&(f=[b,void 0],d=f[0],b=f[1]);if(a.prototype.Languages.prototype[c]==null)throw Error("Language "+c+" not supported.");this.current_lang_name=c;this.lang=a.prototype.Languages.prototype[c];if(d!=null)this.sandbox.once("ready",d);return this.sandbox.load(function(){var a,
b,c,d;c=this.lang.scripts;d=[];for(a=0,b=c.length;a<b;a++)e=c[a],typeof e==="object"?d.push(e[q]||e["default"]):d.push(e);return d}.call(this).concat([this.lang.engine]),b)};a.prototype.checkLineEnd=function(a,b){return/\n\s*$/.test(a)?b(false):(this.sandbox.once("indent",b),this.sandbox.post({type:"getNextLineIndent",data:a}))};a.prototype.eval=function(a,b){var d,f,e,g,h;!this.sandbox.
IsIframe&&this.timeout!=null&&this.timeout.time&&this.timeout.callback&&(g=null,f=function(a){return function(){a.sandbox.fire("timeout");
return a.timeout.callback()?h():g=setTimeout(f,a.timeout.time)}}(this),g=setTimeout(f,this.timeout.time),e=function(a){return function(){var b,c;2<=arguments.length?o.call(arguments,0,b=arguments.length-1):b=0;c=arguments[b++];clearTimeout(g);if(c==="input")return a.once("recieved_input",function(){return g=setTimeout(f,a.timeout.time)}),d()}}(this),d=function(a){return function(){return a.once(["result","error","input"],e)}}(this),h=function(a){return function(){return a.off(["result","error","input"],
e)}}(this),d());if(typeof b==="function")this.once(["result","error"],function(){return function(){var a,c,d;a=2<=arguments.length?o.call(arguments,0,c=arguments.length-1):(c=0,[]);d=arguments[c++];return d==="error"?b(a[0],null):b(null,a[0])}}(this));return this.sandbox.post({type:"engine.Eval",data:a})};a.prototype.rawEval=function(a){return this.sandbox.post({type:"engine.RawEval",data:a})};a.prototype.getLangConfig=function(c){return a.prototype.Languages.prototype[c||this.current_lang_name]||
null};return a}(j);k.prototype.Languages=function(){return function(){}}();k.prototype.__test__=function(){return function(){}}();k.prototype.__test__.prototype.Loader=m;k.prototype.__test__.prototype.EventEmitter=j;k.prototype.__test__.prototype.Sandbox=n;this.JSREPL=k}).call(this);
JSREPL.prototype.Languages.prototype={qbasic:{system_name:"qbasic",name:"Quick Basic",extension:"bas",matchings:[],scripts:[{"default":["engines/qbasic-default.js?51c9323b345b43ffe05ec7f31085391a"]}],includes:[],engine:"langs/qbasic/jsrepl_qbasic.js?35d0bab54c8e86fa629ed053c876bd8a",minifier:"closure"},scheme:{system_name:"scheme",name:"Scheme",extension:"scm",matchings:[["(",")"],["[","]"]],scripts:[{"default":["engines/scheme-default.js?868d8696cb69d728f098a9422dd7ebb1"]}],includes:[],engine:"langs/scheme/jsrepl_scheme.js?9afb1722e57f2d006fffedf4eefd5054",
minifier:"closure_es5"},apl:{system_name:"apl",name:"APL",extension:"apl",matchings:[["(",")"],["[","]"],["{","}"]],scripts:[{"default":["engines/apl-default.js?76857c82b75bfee6ad62b33ae2379501"]}],includes:[],engine:"langs/apl/jsrepl_apl.js?3603387502bf32f8963a4a4ca42b5783",minifier:"yui"},javascript:{system_name:"javascript",name:"JavaScript",extension:"js",matchings:[["(",")"],["[","]"],["{","}"]],scripts:[{"default":["engines/javascript-default.js?65bb444af09df5e0489cb4eeca585b60"]}],includes:[],
engine:"langs/javascript/jsrepl_js.js?046802f3495ec4f2ec9616196f05cf15",minifier:"closure"},coffeescript:{system_name:"coffeescript",name:"CoffeeScript",extension:"coffee",matchings:[["(",")"],["[","]"],["{","}"]],scripts:[{"default":["engines/coffeescript-default.js?62674baeb2482dfa1ac64c5101592765"]}],includes:[],engine:"langs/coffee-script/jsrepl_coffee.js?3ef426f4ca53e14f3928898861ceb825",minifier:"uglify"},brainfuck:{system_name:"brainfuck",name:"Brainfuck",extension:"bf",matchings:[["[","]"]],
scripts:[{"default":["engines/brainfuck-default.js?f8e0d9da103695e3dac38f57cb12f47e"]}],includes:[],engine:"langs/brainfuck/jsrepl_brainfuck.js?d5e9476909cc2fad802d66394920db75",minifier:"closure"},unlambda:{system_name:"unlambda",name:"Unlambda",extension:"unl",matchings:[],scripts:[{"default":["engines/unlambda-default.js?0369381fa06fb047411056537e3ccb85"]}],includes:[],engine:"langs/unlambda/jsrepl_unlambda.js?f22cb81464591bdb31600813653540ea",minifier:"closure"},lolcode:{system_name:"lolcode",
name:"LOLCODE",extension:"lol",matchings:[],scripts:[{"default":["engines/lolcode-default.js?f249b05cc1418263e18e1844a5bafc33"]}],includes:[],engine:"langs/lolcode/jsrepl_lolcode.js?4eebe25b5ef983f9d345f4f00fcf53c6",minifier:"closure"},kaffeine:{system_name:"kaffeine",name:"Kaffeine",extension:"k",matchings:[["(",")"],["[","]"],["{","}"]],scripts:[{"default":["engines/kaffeine-default.js?6fe21e41ed5e18dac020a4edc84142e2"]}],includes:[],engine:"langs/kaffeine/jsrepl_kaffeine.js?a7af86efc83fd71f56d4ec0ea4d4c38e",
minifier:"closure"},move:{system_name:"move",name:"Move",extension:"mv",matchings:[["(",")"],["[","]"],["{","}"]],scripts:[{"default":["engines/move-default.js?87029e7548fa64744a2ca9c39073a642"]}],includes:[],engine:"langs/move/jsrepl_move.js?693989f81b89eea48d501efa35ad5fcd",minifier:"closure"},traceur:{system_name:"traceur",name:"Traceur",extension:"js",matchings:[["(",")"],["[","]"],["{","}"]],scripts:[{"default":["engines/traceur-default.js?0ce31873e9074f983869d2221d337337"]}],includes:[],engine:"langs/traceur/jsrepl_traceur.js?25cd4e7afe892436ac650edc8d3b03c7",
minifier:"uglify"},emoticon:{system_name:"emoticon",name:"Emoticon",extension:"emo",matchings:[["(",")"]],scripts:[{"default":["engines/emoticon-default.js?59b4b8737f51d9c4ed8cfe48f6225e1d"]}],includes:[],engine:"langs/emoticon/jsrepl_emoticon.js?605807492eb72e5442ace7fe10150675",minifier:"closure"},bloop:{system_name:"bloop",name:"Bloop/Floop",extensions:"bloop",matchings:[],scripts:[{"default":["engines/bloop-default.js?f66e26592f9355978903c47a4d6eb311"]}],includes:[],engine:"langs/bloop/jsrepl_bloop.js?8e92bb724a4d6922eb39a8867ac46d5e",
minifier:"closure"},forth:{system_name:"forth",name:"Forth",extensions:"4th",matchings:[["(",")"],[":",";"]],scripts:[{"default":["engines/forth-default.js?7288e57d257b560de97aec80811d77d2"]}],includes:[],engine:"langs/forth/jsrepl_forth.js?bde952dd85bf2d2886e5796fa912b800",minifier:"closure"},lua:{system_name:"lua",name:"Lua",extension:"lua",matchings:[["(",")"],["[","]"],["{","}"]],scripts:[{"default":["engines/lua-default.js?24370fc40b99f5bd7614c820e6f3a9d3"]}],includes:[],engine:"langs/lua/jsrepl_lua.js?686f7dff7e2287d83014b4d4b39ea7af",
minifier:"none",emscripted:true},python:{system_name:"python",name:"Python",extension:"py",matchings:[["(",")"],["[","]"],["{","}"]],scripts:[{opera:["engines/python-opera.js?85a5ce2f34cdadfa9633b8aad856ce7c"],"default":["engines/python-default.js?ee901eb5df52622c564170c651714041"]}],includes:["extern/python/unclosured","extern/python/closured","extern/python/reloop-closured"],engine:"langs/python/jsrepl_python.js?d1b60d6b2764ff96c519d2f454ed91cd",minifier:"none",emscripted:true},ruby:{system_name:"ruby",
name:"Ruby",extension:"rb",matchings:[["(",")"],["[","]"],["{","}"]],scripts:[{opera:["engines/ruby-opera.js?ecea667faea1fa3d23d99c3a6b95fd7d"],firefox_3:["engines/ruby-firefox_3.js?ecea667faea1fa3d23d99c3a6b95fd7d"],"default":["engines/ruby-default.js?57a1c7ba1c03ab0b434e5462e1e73ca3"]}],includes:["extern/ruby/dist/lib"],engine:"langs/ruby/jsrepl_ruby.js?0cc43f3d358c66324ce7e5781d1eedc0",minifier:"none",emscripted:true},roy:{system_name:"roy",name:"Roy",extension:"roy",matchings:[["(",")"],["[",
"]"],["{","}"]],scripts:[{"default":["engines/roy-default.js?4c22d8dcd201c1035ddcf45449c1ebba"]}],includes:[],engine:"langs/roy/jsrepl_roy.js?16695bf9b295f11ae55bd05bb4351e5e",minifier:"closure"}};
