(this.webpackJsonpstreami=this.webpackJsonpstreami||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),r=n(4),o=n.n(r),i=n(1),c=n.n(i),u=n(2),l=n(5),g=n(6),m=n(8),d=n(7),h=function(e){var t=e.url;return a.a.createElement("div",{className:"child"},a.a.createElement("img",{style:{width:350,height:400},src:t,alt:"dogImage"}))},f=(n(15),function(e){var t=e.dogs.map((function(e,t){return a.a.createElement(h,{url:e,key:t})}));return a.a.createElement("div",{className:"container"},t)}),p=(n(16),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).getDogs=function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,e.next=3,fetch("https://dog.ceo/api/breed/".concat(n,"/images")).then((function(e){return e.json()})).then((function(e){404!==e.code?s.setState({dogs:e.message.slice(0,s.state.items)}):alert("\ud574\ub2f9 \uacac\uc885\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.getDogNames=Object(u.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dog.ceo/api/breeds/list/all").then((function(e){return e.json()})).then((function(e){s.setState({names:Object.keys(e.message)})}));case 2:case"end":return e.stop()}}),e)}))),s.onTextChanged=function(e){var t=s.state.names,n=e.target.value,a=[];if(n.length>0){var r=new RegExp("^".concat(n),"i");a=t.sort().filter((function(e){return r.test(e)}))}s.setState((function(){return{suggestions:a,text:n,items:10}}))},s.handleKeyPress=function(e){var t=e.target.value;"Enter"===e.key&&(s.setState((function(){return{text:t,suggestions:[]}})),s.getDogs(t))},s.infiniteScroll=function(){var e=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);Math.max(document.documentElement.scrollTop,document.body.scrollTop)+document.documentElement.clientHeight===e&&(s.setState({items:s.state.items+10}),s.getDogs(s.state.text))},s.state={items:10,dogs:[],names:[],suggestions:[]},s}return Object(g.a)(n,[{key:"suggestionSelected",value:function(e){this.setState((function(){return{text:e,suggestions:[]}})),this.getDogs(e)}},{key:"renderSuggestions",value:function(){var e=this,t=this.state.suggestions;return 0===t.length?null:a.a.createElement("ul",null,t.map((function(t){return a.a.createElement("li",{onClick:function(){return e.suggestionSelected(t)}},t)})))}},{key:"componentDidMount",value:function(){this.getDogNames(),window.addEventListener("scroll",this.infiniteScroll,!0)}},{key:"render",value:function(){var e=this.state.text;return a.a.createElement("div",null,a.a.createElement("h1",{style:{textAlign:"center"}},"Streami Assignment"),a.a.createElement("div",{className:"AutoCompleteText"},a.a.createElement("input",{type:"text",value:e,onChange:this.onTextChanged,onKeyPress:this.handleKeyPress}),this.renderSuggestions()),a.a.createElement(f,{dogs:this.state.dogs}))}}]),n}(s.Component));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null)),document.getElementById("root"))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.04df5f09.chunk.js.map