(this.webpackJsonpadviceapp=this.webpackJsonpadviceapp||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(11),o=a.n(i),s=(a(22),a(12)),r=a(13),l=a(16),u=a(15),d=(a(23),a(14)),p=a.n(d),m=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).fetchData=function(){p.a.get("https://api.adviceslip.com/advice").then((function(t){var a=t.data.slip.advice;e.setState({advice:a})})).catch((function(e){console.log(e.message)}))},e.state={advice:""},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"card"},c.a.createElement("h1",{className:"heading"},this.state.advice),c.a.createElement("button",{className:"button",onClick:function(){return e.fetchData()}},c.a.createElement("span",null,"Get me New Advice!"))))}}]),a}(n.Component);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4d74fa73.chunk.js.map