(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,r=s(4),i=s.n(r),o=s(5),c=s(6),a=s(9),l=s(7),u=s(8),b=s(1),h=s.n(b),d=(s(14),s(15),s(2)),p=s.n(d),j=s(0),y=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var v=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(o.a)(this,s);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={isReversed:!1,sortType:n.NONE},t.reverseList=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortByLength=function(){t.setState({sortType:n.LENGTH})},t.sortByAlphabet=function(){t.setState({sortType:n.ALPHABET})},t.resetToDefault=function(){t.setState({isReversed:!1,sortType:n.NONE})},t}return Object(c.a)(s,[{key:"render",value:function(){var t=this.state,e=t.isReversed,s=t.sortType,r=function(t,e){var s=e.sortType,r=e.isReversed,i=Object(u.a)(t);return s===n.LENGTH&&i.sort((function(t,e){return t.length-e.length})),s===n.ALPHABET&&i.sort(),r&&i.reverse(),i}(y,{sortType:s,isReversed:e});return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:p()("button","is-info",{"is-light":s!==n.ALPHABET}),onClick:this.sortByAlphabet,children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:p()("button","is-success",{"is-light":s!==n.LENGTH}),onClick:this.sortByLength,children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:p()("button","is-warning",{"is-light":!e}),onClick:this.reverseList,children:"Reverse"}),(e||s!==n.NONE)&&Object(j.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.resetToDefault,children:"Reset"})]}),Object(j.jsx)("ul",{children:Object(j.jsx)("ul",{children:r.map((function(t){return Object(j.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})}}]),s}(h.a.Component);i.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.e6719ee5.chunk.js.map