(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{69:function(e,t,n){},90:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(54),s=n.n(i),r=(n(69),n(12)),o=n(17),l=n.n(o),j=n(3);var d=function(e){var t=e.onLogin,n=Object(a.useState)(""),c=Object(r.a)(n,2),i=c[0],s=c[1],o=Object(a.useState)(""),d=Object(r.a)(o,2),x=d[0],b=d[1];return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l.a.post("/login",{username:i,password:x}).then((function(e){!1===e.data.success?alert("Login failed, please try again"):t(e.data.token)})).catch((function(e){console.error(e)})),s(""),b("")},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(j.jsx)("input",{type:"text",id:"username",value:i,onChange:function(e){s(e.target.value)}})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(j.jsx)("input",{type:"password",id:"password",value:x,onChange:function(e){b(e.target.value)}})]}),Object(j.jsx)("button",{type:"submit",children:"Submit"})]})};var x=function(e){var t=e.onRegister,n=Object(a.useState)(""),c=Object(r.a)(n,2),i=c[0],s=c[1],o=Object(a.useState)(""),d=Object(r.a)(o,2),x=d[0],b=d[1],u=Object(a.useState)(""),h=Object(r.a)(u,2),p=h[0],m=h[1];return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l.a.post("/register",{email:x,password:p}).then((function(e){"unsuccess"===e.data?alert("Registration failed, please try again"):t()})).catch((function(e){console.error(e)})),s(""),b(""),m("")},children:[Object(j.jsx)("h2",{children:"Register"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(j.jsx)("input",{type:"text",id:"username",value:i,onChange:function(e){s(e.target.value)}})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(j.jsx)("input",{type:"email",id:"email",value:x,onChange:function(e){b(e.target.value)}})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(j.jsx)("input",{type:"password",id:"password",value:p,onChange:function(e){m(e.target.value)}})]}),Object(j.jsx)("button",{type:"submit",children:"Submit"})]})},b=(n(90),n(18)),u=n(113),h=n(111),p=n(52),m=n(53),g=n(51),O=n(37),f=n(114),y=Object(b.a)(u.a)((function(e){return{backgroundColor:"dark"===e.theme.palette.mode?"#1A2027":"#fff",height:"auto",width:"auto",display:"flex",alignItems:"center",justifyContent:"center",padding:"6px 9px",margin:"4px 2px"}})),v=function(e){var t=e.iconName,n=e.iconVariant,a=e.name,c=e.number,i=e.currentPick,s=O[t],r="true"===i?"#DFDFDF":"#E8E8E8",o="true"===i?"#EDEDED":"#DFDFDF",l="true"===i?"bold":"normal";return Object(j.jsx)(u.a,{elevation:0,style:{height:"36px",fontSize:"14px",backgroundColor:r},children:Object(j.jsxs)(h.a,{container:!0,spacing:0,alignItems:"center",style:{padding:"0px 15px",height:"100%"},children:[Object(j.jsx)(h.a,{item:!0,xs:2,children:Object(j.jsx)(s,{variant:n,color:"#767676"})}),Object(j.jsx)(h.a,{item:!0,xs:6,style:{paddingLeft:"6px",fontWeight:l},children:a}),Object(j.jsx)(h.a,{item:!0,xs:4,style:{display:"flex",justifyContent:"flex-end"},children:Object(j.jsx)("div",{style:{width:"23px",height:"14px",marginLeft:"auto",textAlign:"center"},children:Object(j.jsx)(u.a,{elevation:0,style:{width:"100%",height:"100%",fontSize:"10px",backgroundColor:o},children:c})})})]})})},k=function(e){var t=e.color,n=e.name,a=e.number,c=e.currentPick,i="true"===c?"#DFDFDF":"#E8E8E8",s="true"===c?"#EDEDED":"#DFDFDF",r="true"===c?"bold":"normal",o=t;return Object(j.jsx)(u.a,{elevation:0,style:{height:"36px",fontSize:"14px",backgroundColor:i},children:Object(j.jsxs)(h.a,{container:!0,spacing:0,alignItems:"center",style:{padding:"0px 15px",height:"100%"},children:[Object(j.jsx)(h.a,{item:!0,xs:2,children:Object(j.jsx)(u.a,{elevation:0,style:{backgroundColor:o,height:"17px",width:"17px",marginLeft:"4px"}})}),Object(j.jsx)(h.a,{item:!0,xs:6,style:{paddingLeft:"6px",fontWeight:r},children:n}),Object(j.jsx)(h.a,{item:!0,xs:4,style:{display:"flex",justifyContent:"flex-end"},children:Object(j.jsx)("div",{style:{width:"23px",height:"14px",marginLeft:"auto",textAlign:"center"},children:Object(j.jsx)(u.a,{elevation:0,style:{width:"100%",height:"100%",fontSize:"10px",backgroundColor:s},children:a})})})]})})};var C=function(e){var t=e.onLogout;return Object(j.jsx)("div",{className:"Menu unselectable",children:Object(j.jsxs)(h.a,{container:!0,spacing:0,children:[Object(j.jsx)(h.a,{item:!0,xs:6,style:{fontWeight:"medium",fontSize:"24px",marginTop:"10px"},children:"Menu"}),Object(j.jsx)(h.a,{item:!0,xs:6,style:{display:"flex",justifyContent:"flex-end",marginTop:"10px"},children:Object(j.jsx)(p.a,{size:"32",color:"#767676"})}),Object(j.jsx)(h.a,{item:!0,xs:12,style:{height:"36px",marginTop:"16px",marginBottom:"26px"},children:Object(j.jsxs)(u.a,{elevation:0,style:{height:"36px",border:"2px #D5D5D5 solid",backgroundColor:"#E8E8E8",color:"#767676",display:"flex",alignItems:"center",padding:"0 10px"},children:[Object(j.jsx)(m.a,{size:"20",color:"#767676"}),Object(j.jsx)("span",{style:{marginLeft:"25px"},children:"Search"})]})}),Object(j.jsx)(h.a,{item:!0,xs:12,children:Object(j.jsxs)(h.a,{container:!0,spacing:0,children:[Object(j.jsx)("p",{className:"Title",children:"TASKS"}),Object(j.jsx)(h.a,{item:!0,xs:12,style:{margin:"5px 0px 1px 0px"},children:Object(j.jsx)(v,{iconName:"Forward",iconVariant:"Bold",name:"Upcoming",number:"2"})}),Object(j.jsx)(h.a,{item:!0,xs:12,style:{margin:"1px 0px"},children:Object(j.jsx)(v,{currentPick:"true",iconName:"Task",iconVariant:"Bold",name:"Today",number:"4"})}),Object(j.jsx)(h.a,{item:!0,xs:12,style:{margin:"1px 0px"},children:Object(j.jsx)(v,{iconName:"Calendar",iconVariant:"Bold",name:"Calendar",number:"8"})})]})}),Object(j.jsx)(h.a,{item:!0,xs:12,style:{margin:"10px 0px"},children:Object(j.jsx)(f.a,{variant:"middle"})}),Object(j.jsx)(h.a,{item:!0,xs:12,children:Object(j.jsxs)(h.a,{container:!0,spacing:0,children:[Object(j.jsx)("p",{className:"Title",children:"LISTS"}),Object(j.jsx)(h.a,{item:!0,xs:12,children:Object(j.jsx)(k,{color:"#F26666",name:"Personal",number:"2"})}),Object(j.jsx)(h.a,{item:!0,xs:12,children:Object(j.jsx)(k,{color:"#61CEDC",name:"Work",number:"6"})}),Object(j.jsx)(h.a,{item:!0,xs:12,children:Object(j.jsx)(k,{color:"#F2C938",name:"List 1",number:"2"})}),Object(j.jsx)(h.a,{item:!0,xs:12,children:Object(j.jsx)(u.a,{elevation:0,style:{height:"36px",fontSize:"14px",backgroundColor:"#E8E8E8"},children:Object(j.jsxs)(h.a,{container:!0,spacing:0,alignItems:"center",style:{padding:"0px 15px",height:"100%"},children:[Object(j.jsx)(h.a,{item:!0,xs:2,children:Object(j.jsx)(g.a,{})}),Object(j.jsx)(h.a,{item:!0,xs:6,style:{paddingLeft:"6px"},children:"Add List"})]})})})]})}),Object(j.jsx)(h.a,{item:!0,xs:12,children:Object(j.jsxs)(h.a,{container:!0,spacing:0,children:[Object(j.jsx)("p",{className:"Title",children:"TAGS"}),Object(j.jsx)(h.a,{item:!0,xs:12,style:{marginTop:"6px"},children:Object(j.jsxs)("div",{style:{display:"flex",fontSize:"10px"},children:[Object(j.jsx)(y,{elevation:0,style:{backgroundColor:"#C6DEE1"},children:"Square"}),Object(j.jsx)(y,{elevation:0,style:{backgroundColor:"#F2CFCF"},children:"Name"}),Object(j.jsx)(y,{elevation:0,style:{backgroundColor:"#DFDFDF"},children:"+ Add Tag"})]})})]})}),Object(j.jsx)("input",{type:"button",value:"Sign Out",className:"AddTaskButton",onClick:t})]})})},S=(n(96),n(8)),D=(n(97),Object(b.a)(u.a)((function(e){e.theme;return{backgroundColor:"rgba(0,0,0,0.0)",marginLeft:"35px"}})));function F(){console.log("Hello")}var E=function(e){e.id;var t=e.task;return Object(j.jsxs)("div",{className:"unselectable",onClick:F,style:{cursor:"pointer"},children:[Object(j.jsxs)(h.a,{item:!0,xs:12,style:{display:"flex",height:"65px",alignItems:"center",marginLeft:"40px"},children:[Object(j.jsx)("input",{type:"checkbox",id:"task1",name:"task1",value:"task1"}),Object(j.jsx)(D,{elevation:0,children:t})]}),Object(j.jsx)(h.a,{item:!0,xs:12,style:{margin:"0px 0px"},children:Object(j.jsx)(f.a,{variant:"middle"})})]})},w=Object(b.a)(u.a)((function(e){e.theme;return{display:"flex",alignItems:"center",justifyContent:"center",height:"60px",width:"60px",marginLeft:"35px",backgroundColor:"rgba(0,0,0,0.0)",border:"2px black solid",borderRadius:"10px"}}));var L=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),s=Object(r.a)(i,2),o=s[0],d=s[1],x=Object(a.useState)(!1),b=Object(r.a)(x,2),p=b[0],m=b[1];return Object(a.useEffect)((function(){l.a.get("/api/gettasks",{params:{token:localStorage.getItem("token")}}).then((function(e){c(e.data.tasks)})).catch((function(e){console.error(e)}))}),[]),Object(j.jsx)("div",{className:"Today",children:Object(j.jsxs)(h.a,{container:!0,spacing:0,children:[Object(j.jsxs)(h.a,{item:!0,xs:12,style:{display:"flex",fontWeight:"500",fontSize:"48px"},children:[Object(j.jsx)(u.a,{elevation:0,style:{backgroundColor:"rgba(0,0,0,0)",display:"flex",alignItems:"center"},children:"Today"}),Object(j.jsx)(w,{elevation:0,children:"8"})]}),Object(j.jsx)(h.a,{className:"unselectable",item:!0,xs:12,style:{marginTop:"30px",marginLeft:"15px",display:"flex",cursor:"pointer"},children:Object(j.jsx)(u.a,{onClick:function(){m(!0)},elevation:0,style:{border:"2px #DFDFDF solid",fontSize:"18px",backgroundColor:"rgba(0, 0, 0, 0)",padding:"21px 25px",width:"100%"},children:"+ Add New Task"})}),p&&Object(j.jsx)("div",{className:"popup",children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l.a.post("/tasks/add",{task:o,completed:!1,date:new Date,priority:0,category:"None",subtasks:[],token:localStorage.getItem("token")}).then((function(e){console.log(e),200===e.status&&c([].concat(Object(S.a)(n),[e.data])),d(""),m(!1),window.location.reload()})).catch((function(e){console.log(e)}))},children:[Object(j.jsx)("input",{type:"text",value:o,onChange:function(e){return d(e.target.value)},placeholder:"Enter task name"}),Object(j.jsx)("button",{type:"submit",children:"Add Task"})]})}),Object(j.jsx)(h.a,{item:!0,xs:12,children:n.length>0?n.map((function(e){return Object(j.jsx)(E,{task:e.title},e.id)})):Object(j.jsx)("p",{children:"Loading tasks..."})})]})})};var N=function(e){var t=e.onLogout;return Object(j.jsx)("div",{className:"Homepage",children:Object(j.jsxs)("div",{className:"InsideContainer",children:[Object(j.jsx)(C,{onLogout:t}),Object(j.jsx)(L,{})]})})};n(98);var T=function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("token");e&&c(e)}),[]),Object(j.jsx)("div",{className:"App",children:n?Object(j.jsx)(N,{onLogout:function(){c(null),localStorage.removeItem("token"),console.log("Logged out")}}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Login"}),Object(j.jsx)(d,{onLogin:function(e){c(e),localStorage.setItem("token",e)}}),Object(j.jsx)("h2",{children:"Register"}),Object(j.jsx)(x,{onRegister:function(){}})]})})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(T,{})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.3e9e8d25.chunk.js.map