(this.webpackJsonpfirstreact=this.webpackJsonpfirstreact||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(2),c=n(8),a=n(3),i=n(4),r=n(6),o=n(5),l=n(1),u=n(9),d=n.n(u),j=(n(15),n(16),n(0)),m=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={label:""},e.onLabelChange=function(t){e.setState({label:t.target.value})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.addItem;return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("h1",{children:"todos"}),Object(j.jsx)("form",{onSubmit:function(n){n.preventDefault(),t(e.state.label),e.setState({label:""})},children:Object(j.jsx)("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",autoFocus:!0,onChange:this.onLabelChange,value:this.state.label})})]})}}]),n}(l.Component),b=(n(18),n(19),n(10));var f=function(e){var t=e.quest,n=t.title,s=t.id,c=t.done,a=t.date,i=e.quest.className,r=e.onCheckClick,o=e.onDelete;return c&&(i+=" completed"),Object(j.jsxs)("li",{className:i,children:[Object(j.jsxs)("div",{className:"view",children:[Object(j.jsx)("input",{className:"toggle",type:"checkbox",checked:!!c,onChange:r}),Object(j.jsxs)("label",{children:[Object(j.jsx)("span",{className:"description",children:n}),Object(j.jsx)("span",{className:"created",children:Object(b.a)(a)})]}),Object(j.jsx)("button",{className:"icon icon-edit"}),Object(j.jsx)("button",{className:"icon icon-destroy",onClick:o})]}),"editing"===i?Object(j.jsx)("input",{type:"text",className:"edit",value:"Editing task"}):null]},s)};var h=function(e){var t=e.quests,n=e.onDelete,s=e.onEdit,c=e.onCheckClick;return Object(j.jsx)("ul",{className:"todo-list",children:t.map((function(e){return Object(j.jsx)(f,{quest:e,onDelete:function(){return n(e.id)},onEdit:function(){return s(e.id)},onCheckClick:function(){return c(e.id)}})}))})};n(20);var O=function(e){var t=e.elem,n=e.onFilter;return Object(j.jsx)("li",{children:Object(j.jsx)("button",{className:t.className,onClick:n,children:t.name})},t.id)};n(21);var p=function(e){var t=e.onFilter,n=e.onClearComplete,s=e.left;return Object(j.jsxs)("footer",{className:"footer",children:[Object(j.jsxs)("span",{className:"todo-count",children:[s," items left"]}),Object(j.jsx)("ul",{className:"filters",children:[{id:1,name:"All",className:""},{id:2,name:"Active",className:""},{id:3,name:"Completed",className:""}].map((function(e){return Object(j.jsx)(O,{elem:e,onFilter:t})}))}),Object(j.jsx)("button",{className:"clear-completed",onClick:n,children:"Clear completed"})]})},x=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).maxId=5,e.state={quests:[{id:1,done:!1,title:"\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0434\u0435\u043d\u0435\u0433",className:"",date:new Date(2021,5,6)},{id:2,done:!1,title:"\u0417\u0430\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u043d\u0430\u043b\u043e\u0433\u0438",className:"",date:new Date(2021,5,12)},{id:3,done:!1,title:"\u0421\u043f\u0430\u0442\u044c \u0441\u043f\u043e\u043a\u043e\u0439\u043d\u043e",className:"",date:Date.now()}]},e.onCheckClick=function(t){var n=e.state.quests.findIndex((function(e){return e.id===t})),a=Object(c.a)(Object(c.a)({},e.state.quests[n]),{},{done:!e.state.quests[n].done});e.setState((function(e){var t=e.quests;return{quests:[].concat(Object(s.a)(t.slice(0,n)),[a],Object(s.a)(t.slice(n+1)))}}))},e.createItem=function(t){return{id:e.maxId++,done:!1,title:t,className:"",date:Date.now()}},e.addItem=function(t){var n=e.createItem(t);e.setState((function(e){var t=e.quests;return{quests:[n].concat(Object(s.a)(t))}}))},e.deleteItem=function(t){e.setState((function(e){var n=e.quests,c=n.findIndex((function(e){return e.id===t}));return{quests:[].concat(Object(s.a)(n.slice(0,c)),Object(s.a)(n.slice(c+1)))}}))},e.editItem=function(t){e.setState((function(n){var c=n.quests,a=c.findIndex((function(e){return e.id===t})),i=c[a].title,r=e.createItem(i,"editing");return{quests:[].concat(Object(s.a)(c.slice(0,a)),[r],Object(s.a)(c.slice(a+1)))}}))},e.onFilter=function(t){e.setState((function(e){var n=e.quests;switch(t.target.textContent){case"All":return{quests:n.map((function(e){return e.className="",e}))};case"Completed":return{quests:n.map((function(e){return e.done?e.className="":e.className="hidden",e}))};case"Active":return{quests:n.map((function(e){return e.done?e.className="hidden":e.className="",e}))}}}))},e.onClearComplete=function(){e.setState((function(e){return{quests:e.quests.filter((function(e){return!e.done}))}}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.quests.filter((function(e){return!e.done})).length;return Object(j.jsxs)("section",{className:"todoapp",children:[Object(j.jsx)(m,{addItem:this.addItem}),Object(j.jsxs)("section",{className:"main",children:[Object(j.jsx)(h,{quests:this.state.quests,onDelete:this.deleteItem,onEdit:this.editItem,onCheckClick:this.onCheckClick}),Object(j.jsx)(p,{onFilter:this.onFilter,onClearComplete:this.onClearComplete,left:e})]})]})}}]),n}(l.Component);d.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.edaad44c.chunk.js.map