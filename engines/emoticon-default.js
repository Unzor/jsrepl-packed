(function(){var k,m,l,n,q=function(d,a){function c(){this.constructor=d}for(var b in a)p.call(a,b)&&(d[b]=a[b]);c.prototype=a.prototype;d.prototype=new c;d.__super__=a.prototype;return d},p={}.hasOwnProperty;k=function(){function d(a,c){var b;this.value=a;this.type=c;if(this.type==="emoticon"&&(b=this.value.split(""),this.mouth=b.pop(),this.nose=b.pop(),this.face=b.join(""),this.face===""))this.face=this.nose,this.nose=null}d.prototype.toString=function(){return this.value};return d}();n=function(d){function a(a){this.message=
a}q(a,d);a.prototype.name="RuntimeError";return a}(Error);l=function(){return function(d){var a,c,b,o,e,g,i,f,h;b=/^([^\s]+[OC<>\[\]VD@PQ7L#${}\\\/()|3E*])(\s|$)/;e=/^-?\d+/;g=/^[ \t\v]+/;o=/^(\n)/;c=/^\*\*([^*]|\*[^*])*\*\*/;i=/^([^\s]+)\s*/;for(f=[];d;){if(a=d.match(g))a=a[0];else if(a=d.match(o))a=a[0];else if(a=d.match(c))a=a[0];else if(a=d.match(b))a=a[1],h=new k(a,"emoticon"),f.push(h);else if(a=d.match(e))a=a[0],h=new k(parseInt(a),"data"),f.push(h);else if(a=d.match(i))a=a[1],h=new k(a,"data"),
f.push(h);d=d.slice(a.length)}return f}}();m=function(){function d(a){var c;c=a.source;this.print=a.print;this.input=a.input;this.result=a.result;this.logger=a.logger;c.unshift("START");this.lists={X:[1],Z:c,A:[":"],G:[],S:[" "],E:[],":":[]}}d.prototype.debug=function(){var a,c,b,d;if(this.logger==null)return false;this.logger("step "+this.left("X"));c="";b=this.lists;for(a in b)d=b[a],c+="\n"+a+": "+d.toString();return this.logger(c)};d.prototype.closestDivideOrClose=function(a){var c;for(c=this.lists.Z;a<
c.length;){if(c[a].mouth===")")return a;else if(c[a].mouth==="|")return this.lists.G[0]="IF",a;a++}return infinity};d.prototype.closestCloser=function(a){var c;for(c=this.lists.Z;a<c.length;){if(c[a].mouth===")")return a;a++}return infinity};d.prototype.left=function(a){return this.lists[a][0]};d.prototype.right=function(a){return this.lists[a][this.lists[a].length-1]};d.prototype.putRight=function(a,c){return this.lists[a].push(c)};d.prototype.putLeft=function(a,c){return this.lists[a].unshift(c)};
d.prototype.currentList=function(){return this.left("A")};d.prototype.clone=function(a){var c,b,d,e;b=this.lists[a];if(b.map!=null)return b.map(function(a){return a});d=[];for(a=0,c=b.length;a<c;a++)e=b[a],d.push(e);return d};d.prototype.run=function(){var a,c;a=true;for(c=0;a&&typeof a!=="function"&&c<3E4;)c++,this.debug(),a=this.step();typeof a==="function"?a():typeof this.result==="function"&&this.result(this.lists);return this.lists};d.prototype.step=function(){var a;a=this.lists.Z[this.left("X")];
if(!a)return false;a instanceof k||(a=(new l(a))[0]);if(a.type==="data")this.putRight(this.currentList(),a.value),this.lists.X[0]++;else if(a.type==="emoticon")return a=this.execute(a),this.lists.X[0]++,a;return true};d.prototype.execute=function(a){var c,b,d,e,g,i,f,h,j;h=a.mouth;g=a.nose;b=a.face;c=function(b){return function(c,d){if(b.lists[d].length<c)throw new n("List '"+d+"' needs to have at least #"+c+" items to execute "+a+" at "+b.left("X"));}}(this);b.length===1&&b[0]===":"?f=this.lists[":"]:
b.length===2&&b[1]===":"&&b[0]in this.lists?(b=b[0],f=this.lists[b]):f=this.lists[b]?this.lists[b]:this.lists[b]=[];d=this.currentList();e=this.lists[d];switch(h){case "O":this.lists.A[0]=b;break;case "C":e.unshift(f.length);break;case "<":c(1,d);this.putLeft(b,e.shift());break;case ">":c(1,d);this.putRight(b,e.pop());break;case "[":c(1,d);this.putLeft(b,this.left(d));break;case "]":c(1,d);this.putRight(b,this.right(d));break;case "V":c(2,":");e=this.lists[":"].shift();g=this.lists[":"].shift();for(b=
this.clone(d);b.length;)i=b.shift(),c=e>0?1:0,e--,i=f.splice(g,c,i),g++,c&&this.putRight(":",i[0]);break;case "D":this.lists[b]=f=this.clone(d);break;case "@":c(1,d);for(g=c=this.left(d);c<=1?g<=1:g>=1;c<=1?++g:--g)this.putLeft(b,f.pop());break;case "P":c(1,b);this.print(f[0].toString());break;case "Q":c(1,b);this.print(f.shift().toString());break;case "7":c(1,b);c=[];j=f.shift().split("");for(e=0,i=j.length;e<i;e++)g=j[e],c.push(g);this.lists[b]=f=c.concat(f);break;case "L":c(1,b);c=[];j=f.pop().split("");
for(e=0,i=j.length;e<i;e++)g=j[e],c.push(g);this.lists[b]=f.concat(c);break;case "#":b=this.left(d);c=isNaN(b)?f.splice(0,f.length):f.splice(0,b);c=g==="~"?c.join(" "):c.join("");f.unshift(c);break;case "$":b=this.left(d);c=f.splice(-b,b);c=g==="~"?c.join(" "):c.join("");f.push(c);break;case "{":case "}":c(2,b);e=function(a){return h==="{"?f.unshift(a):f.push(a)};b=function(){return h==="{"?f.shift():f.pop()};c=b();b=b();switch(g){case "+":e(c+b);break;case "-":e(c-b);break;case "x":e(c*b);break;
case "/":e(c/b);break;case "\\":e(c%b)}break;case "\\":case "/":e=function(a){return function(b){return h==="\\"?a.lists[":"].unshift(b.toString().toUpperCase()):a.lists[":"].push(b.toString().toUpperCase())}}(this);c=h==="\\"?this.left(d):this.right(d);b=h==="\\"?this.left(b):this.right(b);switch(g){case "=":e(c===b);break;case ">":e(c>b);break;case "<":e(c<b);break;case "~":e(c!==b)}break;case "(":this.lists.G.push(this.left("X"));break;case ")":b=this.lists.G.pop();b=b==="IF"?this.left("X"):b-
1;this.lists.X[0]=b;break;case "|":this.lists.X[0]=this.closestCloser(this.left("X"));break;case "3":case "E":b=this.left(":");b==="TRUE"&&(this.lists.X[0]=this.closestDivideOrClose(this.left("X")));(h==="E"&&b==="TRUE"||b==="FALSE")&&this.lists[":"].shift();break;case "*":return function(a){return function(){return a.input(function(b){var c,e,f,b=b.split(/[ \t\v]+/);for(e=0,c=b.length;e<c;e++)f=b[e],a.putRight(d,f);return a.run()})}}(this)}return true};return d}();window.Emoticon={Parser:l,Interpreter:m}}).call(this);