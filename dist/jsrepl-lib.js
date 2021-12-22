Worker.workerFromURL=function(e){return new Worker(function(e){const t=`importScripts( "${e}" );`;return URL.createObjectURL(new Blob([t],{type:"text/javascript"}))}(e))},Worker.workerFromCode=function(e){var t=new Blob([e],{type:"text/javascript"});return new Worker(window.URL.createObjectURL(t))},window.__BAKED_JSREPL_BUILD__=!0,function(){var e,t,n,i,r,s,o,a,u=[].slice,p=function(e,t){return function(){return e.apply(t,arguments)}},c=function(e,t){function n(){this.constructor=e}for(var i in t)l.call(t,i)&&(e[i]=t[i]);return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e},l={}.hasOwnProperty;if(null==(t=document.currentScript))throw Error('JSREPL script element cannot be found. Make sure you have the ID "jsrepl-script" on it.');e=t.src.split("/").slice(0,-1).join("/"),r=e+"/sandbox.html",i=function(){function e(){var e,t;t=this,(e=function(){return t.head=document.getElementsByTagName("head")[0],t.body=document.getElementsByTagName("body")[0]})(),this.loadfns=[e],window.onload=function(e){return function(){var t,n,i,r,s;for(s=[],n=0,i=(r=e.loadfns).length;n<i;n++)t=r[n],s.push(t());return s}}(this),this.iframe=null}return e.prototype._appendChild=function(e,t){var n;return n=function(n){return function(){return n[e].appendChild(t)}}(this),null!=this[e]?n():this.loadfns.push(n)},e.prototype.createSandbox=function(e){var t;return null!=this.iframe&&this.body.removeChild(this.iframe),this.iframe=document.createElement("iframe"),this.iframe.src=r,this.iframe.style.display="none",this.iframe.onload=(t=this,function(){return e(t.iframe.contentWindow)}),this._appendChild("body",this.iframe)},e}(),t=function(){function e(){this.listeners={}}return e.prototype.makeArray=function(e){return"[object Array]"!==Object.prototype.toString.call(e)&&(e=[e]),e},e.prototype.on=function(e,t){var n,i,r,s;if("function"==typeof t){for(r=[],n=0,i=(e=this.makeArray(e)).length;n<i;n++)s=e[n],null==this.listeners[s]?r.push(this.listeners[s]=[t]):r.push(this.listeners[s].push(t));return r}},e.prototype.off=function(e,t){var n,i,r,s,o;for(o=[],i=0,r=(e=this.makeArray(e)).length;i<r;i++)n=e[i],null!=(s=this.listeners[n])&&(null!=t?(n=s.indexOf(t))>-1?o.push(s.splice(n,1)):o.push(void 0):o.push(this.listeners[n]=[]));return o},e.prototype.fire=function(e,t){var n,i,r,s;t=this.makeArray(t);if(null!=(i=this.listeners[e])){var o;for(t.push(e),o=[],r=0,s=i.length;r<s;r++)n=i[r],o.push(n);for(s=[],i=0,r=o.length;i<r;i++)n=o[i],s.push(n.apply(this,t));return s}},e.prototype.once=function(e,t){var n,i,r,s,o;e=this.makeArray(e);for(n=function(i){return function(){var r,s,o,a;for(r=1<=arguments.length?u.call(arguments,0):[],s=0,o=e.length;s<o;s++)a=e[s],i.off(a,n);return t.apply(null,r)}}(this),s=[],i=0,r=e.length;i<r;i++)o=e[i],s.push(this.on(o,n));return s},e}(),a="Worker"in window,s=function(e){function n(e,t,n){var r,s,o,a;for(this.input_server=t,null==n&&(n={}),this.onmsg=p(this.onmsg,this),a=[],s=0,o=e.length;s<o;s++)t=e[s],a.push(t);for(r in this.baseScripts=a,this.loader=new i,n)"function"==typeof(e=n[r])&&(n[r]=[e]);this.listeners=n}return c(n,t),n.prototype.onmsg=function(e){var t;try{return t=JSON.parse(e.data),this.fire(t.type,[t.data])}catch(e){}},n.prototype.load=function(e,t){var n,i,r;return null==t&&(t=!0),i=(n=this.baseScripts.concat(e)).shift(),null!=this.worker&&this.kill(),r=function(e){return function(){if(e.post({type:"importScripts",data:n}),null!=e.input_server)return e.post({type:"set_input_server",data:e.input_server})}}(this),window.removeEventListener("message",this.onmsg,!1),a&&t?(this.worker=new Worker.workerFromURL(i),this.workerIsIframe=!1,this.worker.addEventListener("message",this.onmsg,!1),r()):this.loader.createSandbox(function(e){return function(t){return e.worker=t,e.workerIsIframe=!0,window.addEventListener("message",e.onmsg,!1),r()}}(this))},n.prototype.post=function(e){return e=JSON.stringify(e),this.workerIsIframe?this.worker.postMessage(e,"*"):this.worker.postMessage(e)},n.prototype.kill=function(){var e;if("function"==typeof(e=this.worker).terminate&&e.terminate(),null!=this.loader.body&&this.loader.iframe)return this.loader.body.removeChild(this.loader.iframe),delete this.loader.iframe},n}(),o=function(){var e,t;for(t in e={firefox_3:/firefox\/3/i,opera:/opera/i,chrome:/chrome/i})if(e[t].test(window.navigator.userAgent))return t}(),(n=function(e){function n(e){var t,i,r,o,a,u,c;c=(t=null!=e?e:{}).result,e=t.error,r=t.input,a=t.output,u=t.progress,this.timeout=t.timeout,o=t.input_server,this.getLangConfig=p(this.getLangConfig,this),this.rawEval=p(this.rawEval,this),this.eval=p(this.eval,this),this.checkLineEnd=p(this.checkLineEnd,this),this.loadLanguage=p(this.loadLanguage,this),this.off=p(this.off,this),this.on=p(this.on,this),n.__super__.constructor.call(this),null!=window.openDatabase&&(i=openDatabase("replit_input","1.0","Emscripted input",1024)).transaction(function(e){return e.executeSql("DROP TABLE IF EXISTS input"),e.executeSql("CREATE TABLE input (text)")}),null==o&&(o={}),o.input_id=Math.floor(9007199254740992*Math.random())+1,this.lang=null,this.on("input",r),t=["https://unzor.github.io/jsrepl-packed/sandbox.js"],window.__BAKED_JSREPL_BUILD__||(t=t.concat(["util/polyfills.js","util/mtwister.js"])),this.sandbox=new s(t,o,{output:a,input:function(e){return function(){return e.fire("input",function(t){return e.sandbox.post({type:"input.write",data:t})})}}(this),error:e,result:c,progress:u,db_input:function(e){return function(){return e.fire("input",function(t){return e.sandbox.fire("recieved_input",[t]),i.transaction(function(e){return e.executeSql("INSERT INTO input (text) VALUES ('"+t+"')",[])})})}}(this),server_input:function(e){return function(){return e.fire("input",function(t){var n,i;if(e.sandbox.fire("recieved_input",[t]),n=(o.url||"/emscripten/input/")+o.input_id++,o.cors)if("withCredentials"in(i=new XMLHttpRequest))i.open("POST",n,!0);else{if("undefined"==typeof XDomainRequest||null===XDomainRequest)throw Error("CORS not supported on your browser");(i=new XDomainRequest).open("POST",n)}else(i=new XMLHttpRequest).open("POST",n,!0);return i.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),i.send("input="+t)})}}(this)})}return c(n,t),n.prototype.on=function(e,t){var i,r,s,o;for(s=[],i=0,r=(e=this.makeArray(e)).length;i<r;i++)"input"===(o=e[i])?s.push(n.__super__.on.call(this,"input",t)):s.push(this.sandbox.on(o,t));return s},n.prototype.off=function(e,t){var i,r,s,o;for(s=[],i=0,r=(e=this.makeArray(e)).length;i<r;i++)"input"===(o=e[i])?s.push(n.__super__.off.call(this,"input",t)):s.push(this.sandbox.off(o,t));return s},n.prototype.loadLanguage=function(e,t,i){var r,s;if("function"==typeof t&&(i=(r=[t,void 0])[0],t=r[1]),null==n.prototype.Languages.prototype[e])throw Error("Language "+e+" not supported.");return this.current_lang_name=e,this.lang=n.prototype.Languages.prototype[e],null!=i&&this.sandbox.once("ready",i),this.sandbox.load(function(){var e,t,n,i;for(i=[],e=0,t=(n=this.lang.scripts).length;e<t;e++)"object"==typeof(s=n[e])?i.push(s[o]||s.default):i.push(s);return i}.call(this).concat([this.lang.engine]),t)},n.prototype.checkLineEnd=function(e,t){return/\n\s*$/.test(e)?t(!1):(this.sandbox.once("indent",t),this.sandbox.post({type:"getNextLineIndent",data:e}))},n.prototype.eval=function(e,t){var n,i,r,s,o;return!this.sandbox.workerIsIframe&&null!=this.timeout&&this.timeout.time&&this.timeout.callback&&(s=null,i=function(e){return function(){return e.sandbox.fire("timeout"),e.timeout.callback()?o():s=setTimeout(i,e.timeout.time)}}(this),s=setTimeout(i,this.timeout.time),r=function(e){return function(){var t,r;if(2<=arguments.length?u.call(arguments,0,t=arguments.length-1):t=0,r=arguments[t++],clearTimeout(s),"input"===r)return e.once("recieved_input",function(){return s=setTimeout(i,e.timeout.time)}),n()}}(this),n=function(e){return function(){return e.once(["result","error","input"],r)}}(this),o=function(e){return function(){return e.off(["result","error","input"],r)}}(this),n()),"function"==typeof t&&this.once(["result","error"],function(){var e,n;return e=2<=arguments.length?u.call(arguments,0,n=arguments.length-1):(n=0,[]),"error"===arguments[n++]?t(e[0],null):t(null,e[0])}),this.sandbox.post({type:"engine.Eval",data:e})},n.prototype.rawEval=function(e){return this.sandbox.post({type:"engine.RawEval",data:e})},n.prototype.getLangConfig=function(e){return n.prototype.Languages.prototype[e||this.current_lang_name]||null},n}()).prototype.Languages=function(){},n.prototype.__test__=function(){},n.prototype.__test__.prototype.Loader=i,n.prototype.__test__.prototype.EventEmitter=t,n.prototype.__test__.prototype.Sandbox=s,this.JSREPL=n}.call(this),JSREPL.prototype.Languages.prototype={qbasic:{system_name:"qbasic",name:"Quick Basic",extension:"bas",matchings:[],scripts:[{default:["https://unzor.github.io/jsrepl-packed/engines/qbasic-default.js?51c9323b345b43ffe05ec7f31085391a"]}],includes:[],engine:"https://unzor.github.io/jsrepl-packed/langs/qbasic/jsrepl_qbasic.js?35d0bab54c8e86fa629ed053c876bd8a",minifier:"closure"},scheme:{system_name:"scheme",name:"Scheme",extension:"scm",matchings:[["(",")"],["[","]"]],scripts:[{default:["https://unzor.github.io/jsrepl-packed/engines/scheme-default.js?868d8696cb69d728f098a9422dd7ebb1"]}],includes:[],engine:"https://unzor.github.io/jsrepl-packed/langs/scheme/jsrepl_scheme.js?9afb1722e57f2d006fffedf4eefd5054",minifier:"closure_es5"},apl:{system_name:"apl",name:"APL",extension:"apl",matchings:[["(",")"],["[","]"],["{","}"]],scripts:[{default:["https://unzor.github.io/jsrepl-packed/engines/apl-default.js?76857c82b75bfee6ad62b33ae2379501"]}],includes:[],engine:"https://unzor.github.io/jsrepl-packed/langs/apl/jsrepl_apl.js?3603387502bf32f8963a4a4ca42b5783",minifier:"yui"},javascript:{system_name:"javascript",name:"JavaScript",extension:"js",matchings:[["(",")"],["[","]"],["{","}"]],scripts:[{default:["https://unzor.github.io/jsrepl-packed/engines/javascript-default.js?65bb444af09df5e0489cb4eeca585b60"]}],includes:[],engine:"https://unzor.github.io/jsrepl-packed/langs/javascript/jsrepl_js.js?046802f3495ec4f2ec9616196f05cf15",minifier:"closure"},coffeescript:{system_name:"coffeescript",name:"CoffeeScript",extension:"coffee",matchings:[["(",")"],["[","]"],["{","}"]],scripts:[{default:["https://unzor.github.io/jsrepl-packed/engines/coffeescript-default.js?62674baeb2482dfa1ac64c5101592765"]}],includes:[],engine:"https://unzor.github.io/jsrepl-packed/langs/coffee-script/jsrepl_coffee.js?3ef426f4ca53e14f3928898861ceb825",minifier:"uglify"},brainfuck:{system_name:"brainfuck",name:"Brainfuck",extension:"bf",matchings:[["[","]"]],scripts:[{default:["https://unzor.github.io/jsrepl-packed/engines/brainfuck-default.js?f8e0d9da103695e3dac38f57cb12f47e"]}],includes:[],engine:"https://unzor.github.io/jsrepl-packed/langs/brainfuck/jsrepl_brainfuck.js?d5e9476909cc2fad802d66394920db75",minifier:"closure"},unlambda:{system_name:"unlambda",name:"Unlambda",extension:"unl",matchings:[],scripts:[{default:["https://unzor.github.io/jsrepl-packed/engines/unlambda-default.js?0369381fa06fb047411056537e3ccb85"]}],includes:[],engine:"https://unzor.github.io/jsrepl-packed/langs/unlambda/jsrepl_unlambda.js?f22cb81464591bdb31600813653540ea",minifier:"closure"},lolcode:{system_name:"lolcode",name:"LOLCODE",extension:"lol",matchings:[],scripts:[{default:["https://unzor.github.io/jsrepl-packed/engines/lolcode-default.js?f249b05cc1418263e18e1844a5bafc33"]}],includes:[],engine:"https://unzor.github.io/jsrepl-packed/langs/lolcode/jsrepl_lolcode.js?4eebe25b5ef983f9d345f4f00fcf53c6",minifier:"closure"},kaffeine:{system_name:"kaffeine",name:"Kaffeine",extension:"k",matchings:[["(",")"],["[","]"],["{","}"]],scripts:[{default:["https://unzor.github.io/jsrepl-packed/engines/kaffeine-default.js?6fe21e41ed5e18dac020a4edc84142e2"]}],includes:[],engine:"https://unzor.github.io/jsrepl-packed/langs/kaffeine/jsrepl_kaffeine.js?a7af86efc83fd71f56d4ec0ea4d4c38e",minifier:"closure"},move:{system_name:"move",name:"Move",extension:"mv",matchings:[["(",")"],["[","]"],["{","}"]],scripts:[{default:["https://unzor.github.io/jsrepl-packed/engines/move-default.js?87029e7548fa64744a2ca9c39073a642"]}],includes:[],engine:"https://unzor.github.io/jsrepl-packed/langs/move/jsrepl_move.js?693989f81b89eea48d501efa35ad5fcd",minifier:"closure"},traceur:{system_name:"traceur",name:"Traceur",extension:"js",matchings:[["(",")"],["[","]"],["{","}"]],scripts:[{default:["https://unzor.github.io/jsrepl-packed/engines/traceur-default.js?0ce31873e9074f983869d2221d337337"]}],includes:[],engine:"https://unzor.github.io/jsrepl-packed/langs/traceur/jsrepl_traceur.js?25cd4e7afe892436ac650edc8d3b03c7",minifier:"uglify"},emoticon:{system_name:"emoticon",name:"Emoticon",extension:"emo",matchings:[["(",")"]],scripts:[{default:["https://unzor.github.io/jsrepl-packed/engines/emoticon-default.js?59b4b8737f51d9c4ed8cfe48f6225e1d"]}],includes:[],engine:"https://unzor.github.io/jsrepl-packed/langs/emoticon/jsrepl_emoticon.js?605807492eb72e5442ace7fe10150675",minifier:"closure"},bloop:{system_name:"bloop",name:"Bloop/Floop",extensions:"bloop",matchings:[],scripts:[{default:["https://unzor.github.io/jsrepl-packed/engines/bloop-default.js?f66e26592f9355978903c47a4d6eb311"]}],includes:[],engine:"https://unzor.github.io/jsrepl-packed/langs/bloop/jsrepl_bloop.js?8e92bb724a4d6922eb39a8867ac46d5e",minifier:"closure"},forth:{system_name:"forth",name:"Forth",extensions:"4th",matchings:[["(",")"],[":",";"]],scripts:[{default:["https://unzor.github.io/jsrepl-packed/engines/forth-default.js?7288e57d257b560de97aec80811d77d2"]}],includes:[],engine:"https://unzor.github.io/jsrepl-packed/langs/forth/jsrepl_forth.js?bde952dd85bf2d2886e5796fa912b800",minifier:"closure"},lua:{system_name:"lua",name:"Lua",extension:"lua",matchings:[["(",")"],["[","]"],["{","}"]],scripts:[{default:["https://unzor.github.io/jsrepl-packed/engines/lua-default.js?24370fc40b99f5bd7614c820e6f3a9d3"]}],includes:[],engine:"https://unzor.github.io/jsrepl-packed/langs/lua/jsrepl_lua.js?686f7dff7e2287d83014b4d4b39ea7af",minifier:"none",emscripted:!0},python:{system_name:"python",name:"Python",extension:"py",matchings:[["(",")"],["[","]"],["{","}"]],scripts:[{opera:["https://unzor.github.io/jsrepl-packed/engines/python-opera.js?85a5ce2f34cdadfa9633b8aad856ce7c"],default:["https://unzor.github.io/jsrepl-packed/engines/python-default.js?ee901eb5df52622c564170c651714041"]}],includes:["extern/python/unclosured","extern/python/closured","extern/python/reloop-closured"],engine:"https://unzor.github.io/jsrepl-packed/langs/python/jsrepl_python.js?d1b60d6b2764ff96c519d2f454ed91cd",minifier:"none",emscripted:!0},ruby:{system_name:"ruby",name:"Ruby",extension:"rb",matchings:[["(",")"],["[","]"],["{","}"]],scripts:[{opera:["https://unzor.github.io/jsrepl-packed/engines/ruby-opera.js?ecea667faea1fa3d23d99c3a6b95fd7d"],firefox_3:["https://unzor.github.io/jsrepl-packed/engines/ruby-firefox_3.js?ecea667faea1fa3d23d99c3a6b95fd7d"],default:["https://unzor.github.io/jsrepl-packed/engines/ruby-default.js?57a1c7ba1c03ab0b434e5462e1e73ca3"]}],includes:["extern/ruby/dist/lib"],engine:"https://unzor.github.io/jsrepl-packed/langs/ruby/jsrepl_ruby.js?0cc43f3d358c66324ce7e5781d1eedc0",minifier:"none",emscripted:!0},roy:{system_name:"roy",name:"Roy",extension:"roy",matchings:[["(",")"],["[","]"],["{","}"]],scripts:[{default:["https://unzor.github.io/jsrepl-packed/engines/roy-default.js?4c22d8dcd201c1035ddcf45449c1ebba"]}],includes:[],engine:"https://unzor.github.io/jsrepl-packed/langs/roy/jsrepl_roy.js?16695bf9b295f11ae55bd05bb4351e5e",minifier:"closure"}};
