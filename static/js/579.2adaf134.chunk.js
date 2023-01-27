"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[579],{5579:function(n,e,t){t.r(e),t.d(e,{default:function(){return nn}});var a,r,o,i,s,p,x,c,d,f,l,u,b=t(738),h=t(2791),m=t(5861),g=t(4687),w=t.n(g),v=t(5705),Z=t(168),j=t(6444),y=j.ZP.label(a||(a=(0,Z.Z)(["\n  font-weight: 600;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),k=(0,j.ZP)(v.l0)(r||(r=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 250px;\n  gap: 25px;\n  text-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;\n"]))),P=(0,j.ZP)(v.gN)(o||(o=(0,Z.Z)(["\n  color: #61677c;\n  font-weight: 600;\n  font-family: 'Montserrat', sans-serif;\n  text-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;\n  font-weight: bold;\n  letter-spacing: -0.2px;\n  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;\n  max-width: 500px;\n  box-sizing: border-box;\n  transition: all 0.2s ease-in-out;\n  -moz-appearance: none;\n  appearance: none;\n  -webkit-appearance: none;\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 320px;\n  padding: 12px;\n  background-color: #ebecf0;\n\n  &:focus {\n    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;\n  }\n"]))),z=j.ZP.button(i||(i=(0,Z.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 150px;\n  height: 16px;\n  border-radius: 8px;\n  line-height: 0;\n  margin: auto;\n  font-size: 19.2px;\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 320px;\n  padding: 16px;\n  background-color: #ebecf0;\n  text-shadow: 1px 1px 0 #fff;\n  color: #61677c;\n  font-weight: bold;\n  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  font-weight: 600;\n  &:hover {\n    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;\n  }\n  &:active {\n    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;\n  }\n"]))),C=t(2797),A=t(9434),L=t(208),F=t(6916),_=function(n){return n.contacts},M=function(n){return n.filter},N=(0,F.P1)([_,M],(function(n,e){var t=n.items,a=e.toLowerCase();return t.filter((function(n){return n.name.toLowerCase().includes(a)}))})),q=t(9649),I=t(5218),S=t(184),E={name:"",number:""},D=C.Ry().shape({name:C.Z_().required("Name may contain only letters, apostrophe, dash and spaces."),number:C.Rx().required("Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").positive().integer()}),J=function(){var n=(0,A.v9)(_),e=n.items,t=n.isLoadingAdd,a=n.error,r=(0,A.I0)(),o=function(){var n=(0,m.Z)(w().mark((function n(t,o){var i,s;return w().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=o.resetForm,s=!1,e&&e.length>0&&e.forEach((function(n){var e=n.name;t.name.toLowerCase()===e.toLowerCase()&&(s=!0)})),n.t0=!0,n.next=n.t0===s?6:n.t0===(!s&&!a)?8:18;break;case 6:return alert("".concat(t.name," is already in contacts")),n.abrupt("break",20);case 8:return n.prev=8,n.next=11,r((0,L.uK)(t));case 11:i(),I.ZP.success("Contact added!"),n.next=17;break;case 15:n.prev=15,n.t1=n.catch(8);case 17:return n.abrupt("break",20);case 18:return I.ZP.error("Connection error, please try again later!"),n.abrupt("break",20);case 20:case"end":return n.stop()}}),n,null,[[8,15]])})));return function(e,t){return n.apply(this,arguments)}}();return(0,S.jsx)(v.J9,{initialValues:E,validationScheme:D,onSubmit:o,children:(0,S.jsxs)(k,{children:[(0,S.jsxs)(y,{htmlFor:"name",children:["Name",(0,S.jsx)(P,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,S.jsxs)(y,{htmlFor:"number",children:["Number",(0,S.jsx)(P,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,S.jsxs)(z,{type:"submit",children:["Add contact",t&&(0,S.jsx)(q.a,{})]})]})})},K=j.ZP.h2(s||(s=(0,Z.Z)(["\n  font-family: 'Montserrat', sans-serif;\n  letter-spacing: -0.2px;\n  font-size: 25px;\n  text-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;\n  padding-bottom: 10px;\n"]))),R=function(n){var e=n.title,t=n.children;return(0,S.jsxs)("div",{children:[(0,S.jsx)(K,{children:e}),t]})},B=t(9439),G=j.ZP.p(p||(p=(0,Z.Z)(["\n  font-family: 'Montserrat', sans-serif;\n  letter-spacing: -0.2px;\n  font-size: 16px;\n  text-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;\n  font-weight: 600;\n"]))),O=j.ZP.button(x||(x=(0,Z.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100px;\n  height: 16px;\n  border-radius: 8px;\n  line-height: 0;\n  font-size: 19.2px;\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 320px;\n  padding: 16px;\n  background-color: #ebecf0;\n  text-shadow: 1px 1px 0 #fff;\n  color: #ae1100;\n  font-weight: bold;\n  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  font-weight: 600;\n  &:hover {\n    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;\n  }\n  &:active {\n    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;\n  }\n"]))),T=function(n){var e=n.contact,t=e.id,a=e.name,r=e.number,o=(0,A.I0)(),i=(0,A.v9)(_).isLoadingDelete,s=(0,h.useState)(null),p=(0,B.Z)(s,2),x=p[0],c=p[1];return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(G,{children:[a,": ",r]}),(0,S.jsxs)(O,{type:"button",onClick:function(){return function(n){c(n),o((0,L.GK)(n))&&(0,I.ZP)("Contact deleted!",{icon:"\ud83e\udd26\u200d\u2642\ufe0f"})}(t)},children:["Delete",i&&x===t&&(0,S.jsx)(q.a,{})]})]})},V=j.ZP.ul(c||(c=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),W=j.ZP.div(d||(d=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),Y=function(){var n=(0,A.v9)(N);return(0,S.jsx)(V,{children:n.map((function(n){return(0,S.jsx)(W,{children:(0,S.jsx)(T,{contact:n})},n.id)}))})},$=j.ZP.label(f||(f=(0,Z.Z)(["\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"]))),H=j.ZP.input(l||(l=(0,Z.Z)(["\n  color: #61677c;\n  font-weight: 600;\n  font-family: 'Montserrat', sans-serif;\n  text-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;\n  font-weight: bold;\n  letter-spacing: -0.2px;\n  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;\n  width: 200px;\n  box-sizing: border-box;\n  transition: all 0.2s ease-in-out;\n  -moz-appearance: none;\n  appearance: none;\n  -webkit-appearance: none;\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 320px;\n  padding: 8px;\n  background-color: #ebecf0;\n\n  &:focus {\n    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;\n  }\n"]))),Q=j.ZP.div(u||(u=(0,Z.Z)(["\n  margin-bottom: 15px;\n  border-radius: 5px;\n  padding: 10px;\n  background: #e0e0e0;\n  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;\n"]))),U=t(5732),X=function(){var n=(0,A.I0)(),e=(0,A.v9)(M);return(0,S.jsx)(Q,{children:(0,S.jsxs)($,{children:["Enter contact name",(0,S.jsx)(H,{type:"text",value:e,onChange:function(e){return n((0,U.x)(e.currentTarget.value))}})]})})},nn=function(){var n=(0,A.v9)(_),e=n.items,t=n.isLoading,a=n.error,r=(0,A.I0)();return(0,h.useEffect)((function(){r((0,L.yF)())}),[r]),(0,S.jsxs)(b.W2,{children:[(0,S.jsx)(R,{title:"Phonebook",children:(0,S.jsx)(J,{})}),(0,S.jsxs)(R,{title:"Contacts",children:[(0,S.jsx)(X,{}),t&&(0,S.jsx)(q.S,{}),e.length>0&&!t&&!a&&(0,S.jsx)(Y,{}),!t&&0===e.length&&(0,S.jsx)(b.P_,{children:"You don't have contacts yet \ud83e\udd37\u200d\u2642\ufe0f"})]}),(0,S.jsx)(I.x7,{position:"bottom-right",reverseOrder:!1})]})}}}]);
//# sourceMappingURL=579.2adaf134.chunk.js.map