(function(){self.JSREPLEngine=function(){function k(c,a,b,h,g,j){this.sandbox=g;this.virtual_machine=new this.sandbox.QBasic.VirtualMachine({print:a,input:c,result:b,error:h});j()}k.prototype.Eval=function(c){try{return this.virtual_machine.run(c,function(b){return function(){return b.virtual_machine.stack.length?b.virtual_machine.cons.result(b.virtual_machine.stack.pop().toString()):b.virtual_machine.cons.result("")}}(this))}catch(a){return this.virtual_machine.cons.error(a.message)}};k.prototype.EvalSync=
function(c){var a;a=null;this.virtual_machine.run(c,function(b){return function(){if(b.virtual_machine.stack.length)return a=b.virtual_machine.stack.pop()}}(this));return a};k.prototype.GetNextLineIndent=function(c){var a,b,h,g,j;this.sandbox.QBasic.Program.prototype.createParser();g=this.sandbox.QBasic.Program.parser;if(g.parse(c+"\n")===true)return false;j=g.tokenizer;h=function(){var a,g,f,l;f=c.split("\n");l=[];for(a=0,g=f.length;a<g;a++)b=f[a],l.push(b+"\n");return l}();a=function(a,b){var f,
c,h,d,e,i;b==null&&(b=false);d=[];for(c=0,h=a.length;c<h;c++)if(f=a[c],!g.parse(f))switch(j.setText(f),e=j.nextToken(0,0),f=e.text,e=j.nextToken(0,e.locus.position+e.text.length),e=e.text,i=d[d.length-1],f){case "SUB":case "FUNCTION":case "FOR":case "IF":case "SELECT":case "WHILE":d.push(f);break;case "DO":d.push(e==="WHILE"?"DOWHILE":"DO");break;case "ELSE":if(b&&d.length===0)d.push("IF");else if(i!=="IF")return-1;break;case "WEND":if(i==="WHILE")d.pop();else return-1;break;case "FOR":if(i==="NEXT")d.pop();
else return-1;break;case "LOOP":if(e==="WHILE"||e==="UNTIL")if(i==="DO")d.pop();else return-1;else if(i==="DOWHILE")d.pop();else return-1;break;case "END":if(i===e)d.pop();else return-1}return d.length};return a(h)<=0?false:a([h.slice(-1)[0]],true)>0?1:0};return k}()}).call(this);