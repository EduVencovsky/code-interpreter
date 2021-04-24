(this["webpackJsonp@expression-interpreter/web"]=this["webpackJsonp@expression-interpreter/web"]||[]).push([[0],{38:function(t,e,r){"use strict";var i=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function i(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(e,"__esModule",{value:!0}),e.ExpressionsInterpreter=e.ExpressionsParser=e.StringComparator=e.StringComparatorParser=e.Calculator=e.CalculatorParser=e.SimpleInterpreter=e.Token=void 0;var n="NUM",s="PLUS",o="MINUS",h="EOF",a="MULT",p="DIV",u="LPAREN",c="RPAREN",f="DIF",l="BIG",v="BIGEQ",y="SML",d="SMLEQ",k="EQ",x="CHARS",g="AND",w="OR",j=function(){function t(t,e){this.type=t,this.value=e}return t.prototype.toString=function(){return"Token("+this.type+", "+this.value+")"},t}();e.Token=j;var T=function(){function t(t){this.lexer=new C(t),this.currentToken=this.lexer.getNextToken()}return t.prototype.error=function(){throw new Error("Invalid syntax")},t.prototype.eat=function(t){this.currentToken.type===t?this.currentToken=this.lexer.getNextToken():this.error()},t.prototype.factor=function(){var t=this.currentToken;if(t.type===n)return this.eat(n),t.value;if(t.type===u){this.eat(u);var e=this.expr();return this.eat(c),e}this.error()},t.prototype.term=function(){for(var t=this.factor();[a,p].includes(this.currentToken.type);){var e=this.currentToken;e.type===a?(this.eat(a),t*=this.factor()):e.type===p&&(this.eat(p),t/=this.factor())}return t},t.prototype.expr=function(){for(var t=this.term();[s,o].includes(this.currentToken.type);){var e=this.currentToken;e.type===s?(this.eat(s),t+=this.term()):e.type===o&&(this.eat(o),t-=this.term())}return t},t}();e.SimpleInterpreter=T;var C=function(){function t(t){this.text=t,this.position=0,this.currentChar=this.text[this.position]}return t.prototype.error=function(){throw new Error('Invalid character "'+this.currentChar+'" at position '+this.position)},t.prototype.advance=function(){this.position++,this.currentChar=this.position>this.text.length-1?null:this.text[this.position]},t.prototype.skipWhiteSpace=function(){for(;null!=this.currentChar&&/\s/.test(this.currentChar);)this.advance()},t.prototype.num=function(){for(var t="",e=!1;null!=this.currentChar&&!/\s/.test(this.currentChar);)if(isNaN(this.currentChar)){if(e||"."!==this.currentChar||isNaN(this.peek()))break;t+=this.currentChar,e=!0,this.advance()}else t+=this.currentChar,this.advance();return Number(t)},t.prototype.chars=function(t){void 0===t&&(t='"');var e="";for(this.advance();null!=this.currentChar&&this.currentChar!==t;)e+=this.currentChar,this.advance();return this.advance(),String(e)},t.prototype.peek=function(t){void 0===t&&(t=1);var e=this.position+t;return e>this.text.length-1?null:this.text[e]},t.prototype.getNextToken=function(){for(;null!=this.currentChar;){var t=null;if(/\s/.test(this.currentChar))this.skipWhiteSpace();else{if('"'===this.currentChar)return t=new j(x,this.chars('"'));if(!isNaN(this.currentChar))return t=new j(n,this.num());if("+"===this.currentChar)return this.advance(),t=new j(s,"+");if("-"===this.currentChar)return this.advance(),t=new j(o,"-");if("*"===this.currentChar)return this.advance(),t=new j(a,"*");if("/"===this.currentChar)return this.advance(),t=new j(p,"/");if("("===this.currentChar)return this.advance(),t=new j(u,"(");if(")"===this.currentChar)return this.advance(),t=new j(c,")");if("&"===this.currentChar&&"&"===this.peek())return this.advance(),this.advance(),t=new j(g,"&&");if("|"===this.currentChar&&"|"===this.peek())return this.advance(),this.advance(),t=new j("OR","||");if(">"===this.currentChar)return this.advance(),"="===this.currentChar?(this.advance(),t=new j(v,">=")):t=new j(l,">"),t;if("<"===this.currentChar)return this.advance(),"="===this.currentChar?(this.advance(),t=new j(d,"<=")):t=new j(y,"<"),t;if("="===this.currentChar&&"="===this.peek())return this.advance(),this.advance(),t=new j(k,"==");if("!"===this.currentChar&&"="===this.peek())return this.advance(),this.advance(),t=new j(f,"!=");this.error(this.currentChar)}}return new j(h,null)},t}(),b=function(t){this.token=t},m=function(t){function e(e,r,i){var n=t.call(this,r.token)||this;return n.left=e,n.op=r,n.right=i,n}return i(e,t),e.prototype.toString=function(){return"left "+this.left+" op "+this.left+" right "+this.left},e}(b),O=function(){function t(t,e,r){this.left=t,this.token=e,this.op=e,this.right=r}return t.prototype.toString=function(){return"left "+this.left+" op "+this.left+" right "+this.left},t}(),N=function(){function t(t,e,r){this.left=t,this.token=e,this.op=e,this.right=r}return t.prototype.toString=function(){return"left "+this.left+" op "+this.left+" right "+this.left},t}(),S=function(){function t(t,e,r){this.left=t,this.token=e,this.op=e,this.right=r}return t.prototype.toString=function(){return"left "+this.left+" op "+this.left+" right "+this.left},t}(),E=function(t){function e(t){var e=this;return e.token=t,e.value=t.value,e}return i(e,t),e}(b),I=function(t){this.token=t,this.value=t.value},L=function(t,e){this.token=t,this.op=t,this.expr=e},P=function(){function t(t){this.lexer=new C(t),this.currentToken=this.lexer.getNextToken(),this.tokenList=[this.currentToken]}return t.prototype.error=function(){this.lexer.error()},t.prototype.eat=function(t){this.currentToken.type===t?(this.currentToken=this.lexer.getNextToken(),this.tokenList.push(this.currentToken)):this.error()},t.prototype.expr=function(){for(var t=this.term();[s,o].includes(this.currentToken.type);){var e=this.currentToken;e.type===s?this.eat(s):e.type===o&&this.eat(o),t=new m(t,e,this.term())}return t},t.prototype.term=function(){for(var t=this.factor();[a,p].includes(this.currentToken.type);){var e=this.currentToken;e.type===a?this.eat(a):e.type===p&&this.eat(p),t=new m(t,e,this.factor())}return t},t.prototype.factor=function(){var t=this.currentToken;if(t.type===s)return this.eat(s),new L(t,this.factor());if(t.type===o)return this.eat(o),new L(t,this.factor());if(t.type===n)return this.eat(n),new E(t);if(t.type===u){this.eat(u);var e=this.expr();return this.eat(c),e}this.error(this.currentToken.toString())},t.prototype.parse=function(){var t=this.expr();return this.currentToken.type===h?t:this.error(this.currentToken.toString())},t}();e.CalculatorParser=P;var _=function(){function t(){}return t.prototype.visit=function(t){return(this["visit"+t.constructor.name]||this.genericVisit).call(this,t)},t.prototype.genericVisit=function(t){throw new Error("No "+t.constructor.name+" method")},t.prototype.visitBinOpNode=function(t){return t.op.type===s?this.visit(t.left)+this.visit(t.right):t.op.type===o?this.visit(t.left)-this.visit(t.right):t.op.type===a?this.visit(t.left)*this.visit(t.right):t.op.type===p?this.visit(t.left)/this.visit(t.right):void this.parser.error(t.toString())},t.prototype.visitNumNode=function(t){return t.value},t.prototype.visitUnaryOp=function(t){var e=t.op.type;return e===s?+this.visit(t.expr):e===o?-this.visit(t.expr):void this.parser.error(t.toString())},t.prototype.eval=function(t){this.parser=new P(t);var e=this.parser.parse();return this.visit(e)},t}();e.Calculator=_;var M=function(){function t(t){this.lexer=new C(t),this.currentToken=this.lexer.getNextToken(),this.tokenList=[this.currentToken]}return t.prototype.error=function(t){this.lexer.error(t)},t.prototype.eat=function(t){this.currentToken.type===t?(this.currentToken=this.lexer.getNextToken(),this.tokenList.push(this.currentToken)):this.error(this.currentToken.toString())},t.prototype.expr=function(){for(var t=this.term();[g,w].includes(this.currentToken.type);){var e=this.currentToken;e.type===g?this.eat(g):e.type===w&&this.eat(w),t=new m(t,e,this.term())}return t},t.prototype.term=function(){for(var t=this.factor();[l,v,y,d,k,f].includes(this.currentToken.type);){var e=this.currentToken;e.type===l?this.eat(l):e.type===v?this.eat(v):e.type===y?this.eat(y):e.type===d?this.eat(d):e.type===k?this.eat(k):e.type===f&&this.eat(f),t=new m(t,e,this.factor())}return t},t.prototype.factor=function(){var t=this.currentToken;if(t.type===x)return this.eat(x),new I(t);if(t.type===u){this.eat(u);var e=this.expr();return this.eat(c),e}this.error()},t.prototype.parse=function(){var t=this.expr();return this.currentToken.type===h?t:this.error()},t}();e.StringComparatorParser=M;var A=function(){function t(){}return t.prototype.error=function(){this.parser.error()},t.prototype.visit=function(t){return(this["visit"+t.constructor.name]||this.genericVisit).call(this,t)},t.prototype.genericVisit=function(t){throw new Error("No "+t.constructor.name+" method")},t.prototype.visitBinOpNode=function(t){return t.op.type===g?this.visit(t.left)&&this.visit(t.right):t.op.type===w?this.visit(t.left)||this.visit(t.right):t.op.type===l?this.visit(t.left)>this.visit(t.right):t.op.type===v?this.visit(t.left)>=this.visit(t.right):t.op.type===y?this.visit(t.left)<this.visit(t.right):t.op.type===d?this.visit(t.left)<=this.visit(t.right):t.op.type===k?this.visit(t.left)==this.visit(t.right):t.op.type===f?this.visit(t.left)!=this.visit(t.right):void this.error()},t.prototype.visitChars=function(t){return t.value},t.prototype.eval=function(t){this.parser=new M(t);var e=this.parser.parse();return this.visit(e)},t}();e.StringComparator=A;var V=function(){function t(t){this.lexer=new C(t),this.currentToken=this.lexer.getNextToken(),this.tokenList=[this.currentToken]}return t.prototype.error=function(){this.lexer.error()},t.prototype.eat=function(t){this.currentToken.type===t?(this.currentToken=this.lexer.getNextToken(),this.tokenList.push(this.currentToken)):this.error()},t.prototype.expr=function(){for(var t=this.comparison();[g,w].includes(this.currentToken.type);){var e=this.currentToken;e.type===g?this.eat(g):e.type===w&&this.eat(w),t=new O(t,e,this.comparison())}return t},t.prototype.comparison=function(){for(var t=this.addition();[l,v,y,d,k,f].includes(this.currentToken.type);){var e=this.currentToken;e.type===l?this.eat(l):e.type===v?this.eat(v):e.type===y?this.eat(y):e.type===d?this.eat(d):e.type===k?this.eat(k):e.type===f&&this.eat(f),t=new N(t,e,this.addition())}return t},t.prototype.addition=function(){for(var t=this.multiplication();[s,o].includes(this.currentToken.type);){var e=this.currentToken;e.type===s?this.eat(s):e.type===o&&this.eat(o),t=new S(t,e,this.multiplication())}return t},t.prototype.multiplication=function(){for(var t=this.unary();[a,p].includes(this.currentToken.type);){var e=this.currentToken;e.type===a?this.eat(a):e.type===p&&this.eat(p),t=new S(t,e,this.unary())}return t},t.prototype.unary=function(){var t=this.currentToken;if(t.type===s)return this.eat(s),new L(t,this.unary());if(t.type===o)return this.eat(o),new L(t,this.unary());if(t.type===n)return this.eat(n),new E(t);if(t.type===x)return this.eat(x),new I(t);if(t.type===u){this.eat(u);var e=this.expr();return this.eat(c),e}this.error()},t.prototype.parse=function(){var t=this.expr();return this.currentToken.type!==h&&this.error(),t},t}();e.ExpressionsParser=V;var B=function(){function t(){}return t.prototype.visit=function(t){return(this["visit"+t.constructor.name]||this.genericVisit).call(this,t)},t.prototype.genericVisit=function(t){throw new Error("No "+t.constructor.name+" method")},t.prototype.error=function(){throw Error("Interpretation Error")},t.prototype.visitExpressionNode=function(t){var e=this.visit(t.left),r=this.visit(t.right);return"boolean"===typeof e&&"boolean"===typeof r||this.error(),t.op.type===g?e&&r:t.op.type===w?e||r:void this.error()},t.prototype.visitComparisonNode=function(t){return t.op.type===l?this.visit(t.left)>this.visit(t.right):t.op.type===v?this.visit(t.left)>=this.visit(t.right):t.op.type===y?this.visit(t.left)<this.visit(t.right):t.op.type===d?this.visit(t.left)<=this.visit(t.right):t.op.type===k?this.visit(t.left)==this.visit(t.right):t.op.type===f?this.visit(t.left)!=this.visit(t.right):void this.error()},t.prototype.visitMathNode=function(t){return t.op.type===s?this.visit(t.left)+this.visit(t.right):t.op.type===o?this.visit(t.left)-this.visit(t.right):t.op.type===a?this.visit(t.left)*this.visit(t.right):t.op.type===p?this.visit(t.left)/this.visit(t.right):void this.error()},t.prototype.visitUnaryOp=function(t){var e=t.op.type;return e===s?+this.visit(t.expr):e===o?-this.visit(t.expr):void this.parser.error()},t.prototype.visitChars=function(t){return t.token.type===x?t.value:this.error()},t.prototype.visitNumNode=function(t){return t.token.type===n?t.value:this.error()},t.prototype.eval=function(t){this.parser=new V(t);var e=this.parser.parse(),r=this.visit(e);return"boolean"===typeof r?r:this.error()},t}();e.ExpressionsInterpreter=B},63:function(t,e,r){},64:function(t,e,r){},71:function(t,e,r){"use strict";r.r(e);var i=r(0),n=r.n(i),s=r(10),o=r.n(s),h=(r(63),r(42)),a=r(41),p=(r(64),r(38)),u=r(72),c=r(102),f=r(107),l=r(105),v=r(103),y=r(110),d=r(109),k=r(104),x=r(108),g=r(8),w={Calculator:new p.Calculator,StringComparator:new p.StringComparator,ExpressionsInterpreter:new p.ExpressionsInterpreter},j=function(){var t=Object(i.useState)({value:"",option:"ExpressionsInterpreter"}),e=Object(a.a)(t,2),r=e[0],n=e[1],s=Object(i.useState)({result:"",tokens:[]}),o=Object(a.a)(s,2),p=o[0],j=o[1];return Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)("header",{className:"App-header",children:[Object(g.jsx)(u.a,{variant:"h1",children:p.result}),Object(g.jsxs)(c.a,{children:[Object(g.jsxs)(f.a,{children:[Object(g.jsx)(f.a,{children:Object(g.jsx)(l.a,{variant:"outlined",value:r.value,onChange:function(t){return n((function(e){return Object(h.a)(Object(h.a)({},e),{},{value:t.target.value})}))}})}),Object(g.jsx)(v.a,{variant:"contained",color:"primary",onClick:function(){var t,e="",i=w[r.option];try{e=i.eval(r.value)}catch(n){e=n}j({result:e.toString(),tokens:(null===(t=i.parser)||void 0===t?void 0:t.tokenList)||[]})},children:"Interpretar"})]}),Object(g.jsx)(f.a,{m:1,children:Object(g.jsx)(y.a,{component:"fieldset",children:Object(g.jsxs)(d.a,{value:r.option,onChange:function(t){t.target.value in w&&(n({value:"",option:t.target.value}),j({tokens:[],result:""}))},children:[Object(g.jsx)(k.a,{value:"Calculator",control:Object(g.jsx)(x.a,{}),label:"Calculator"}),Object(g.jsx)(k.a,{value:"StringComparator",control:Object(g.jsx)(x.a,{}),label:"String Comparator"}),Object(g.jsx)(k.a,{value:"ExpressionsInterpreter",control:Object(g.jsx)(x.a,{}),label:"Expressions Interpreter"})]})})})]}),Object(g.jsx)(f.a,{flexDirection:"row",display:"flex",overflow:"auto",width:"90%",children:p.tokens.map((function(t,e){return Object(g.jsx)(f.a,{m:1,children:Object(g.jsx)(c.a,{children:Object(g.jsxs)(f.a,{p:1,children:[Object(g.jsx)(f.a,{children:Object(g.jsx)(u.a,{variant:"h5",children:t.type})}),Object(g.jsx)(f.a,{children:Object(g.jsx)(u.a,{variant:"h6",children:t.value||"\xa0"})})]})})},e)}))})]})})},T=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,113)).then((function(e){var r=e.getCLS,i=e.getFID,n=e.getFCP,s=e.getLCP,o=e.getTTFB;r(t),i(t),n(t),s(t),o(t)}))};o.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(j,{})}),document.getElementById("root")),T()}},[[71,1,2]]]);
//# sourceMappingURL=main.d79eca27.chunk.js.map