(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{0:function(t,s,e){"use strict";function a(t,s,e,a,o,i,n,r){var l,c="function"==typeof t?t.options:t;if(s&&(c.render=s,c.staticRenderFns=e,c._compiled=!0),a&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),n?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},c._ssrRegister=l):o&&(l=r?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,s){return l.call(s),d(t,s)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}e.d(s,"a",(function(){return a}))},121:function(t,s,e){"use strict";var a=e(31);e.n(a).a},122:function(t,s,e){(t.exports=e(7)(!1)).push([t.i,".switch-button-control {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.switch-button-control .switch-button {\n  height: 1.6em;\n  width: calc(1.6em * 2);\n  /* border: 2px solid #ddd; */\n  /* box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.33); */\n  border-radius: 1.6em;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n  background: #ddd;\n  box-sizing: border-box;\n}\n.switch-button-control .switch-button .button {\n  height: 1.6em;\n  width: 1.6em;\n  border: 2px solid #ddd;\n  border-radius: 1.6em;\n  background-color: #fff;\n  transition: all 0.3s ease-in-out;\n  box-sizing: border-box;\n}\n.switch-button-control .switch-button.enabled {\n  background-color: var(--color);\n  box-shadow: none;\n}\n.switch-button-control .switch-button.enabled .button {\n  background: white;\n  border: 2px solid var(--color);\n  transform: translateX(calc(calc(1.6em - (2 * 2px)) + (2 * 2px)));\n}\n.switch-button-control .switch-button-label {\n  margin-left: 10px;\n}\n",""])},14:function(t,s,e){"use strict";var a={name:"SwitchInput",model:{prop:"isEnabled",event:"toggle"},props:{isEnabled:{type:Boolean,default:!0},color:{type:String,required:!1,default:"#4D4D4D"}},methods:{toggle:function(){this.$emit("toggle",!this.isEnabled)}}},o=(e(121),e(0)),i=Object(o.a)(a,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"switch-button-control"},[s("div",{staticClass:"switch-button",class:{enabled:this.isEnabled},style:{"--color":this.color},on:{click:this.toggle}},[s("div",{staticClass:"button"})]),this._v(" "),s("div",{staticClass:"switch-button-label"},[this._t("default")],2)])}),[],!1,null,null,null);s.a=i.exports},173:function(t,s,e){"use strict";var a=e(54);e.n(a).a},174:function(t,s,e){(t.exports=e(7)(!1)).push([t.i,".list-group li:last-child {\n  border-bottom: 0;\n}\n",""])},31:function(t,s,e){var a=e(122);"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(8)(a,o);a.locals&&(t.exports=a.locals)},54:function(t,s,e){var a=e(174);"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(8)(a,o);a.locals&&(t.exports=a.locals)},59:function(t,s,e){"use strict";var a={data:function(){return{show:!0}},watch:{"$page.flash":{handler:function(){this.show=!0},deep:!0}}},o=e(0),i=Object(o.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t.$page.flash.success&&t.show?e("div",{staticClass:"mb-8 flex items-center justify-between bg-green-400 rounded-lg"},[e("div",{staticClass:"flex items-center"},[e("svg",{staticClass:"ml-4 mr-2 flex-no-shrink w-8 h-8 text-white fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M10.001,16.413l-3.713-3.705 L7.7,11.292l2.299,2.295l5.294-5.294l1.414,1.414L10.001,16.413z"}})]),t._v(" "),e("div",{staticClass:"py-4 text-white text-sm font-medium"},[t._v(t._s(t.$page.flash.success))])]),t._v(" "),e("button",{staticClass:"group mr-2 p-2",attrs:{type:"button"},on:{click:function(s){t.show=!1}}},[e("svg",{staticClass:"block w-8 h-8 text-gray-100 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"}})])])]):t._e(),t._v(" "),Object.keys(t.$page.errors).length>0&&t.show?e("div",{staticClass:"mb-8 flex items-center justify-between bg-red-400 rounded-lg"},[e("div",{staticClass:"flex items-center"},[e("svg",{staticClass:"ml-4 mr-2 flex-no-shrink w-8 h-8 text-white fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M11.953,2C6.465,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.493,2,11.953,2z M13,17h-2v-2h2V17z M13,13h-2V7h2V13z"}})]),t._v(" "),e("div",{staticClass:"py-4 text-white text-sm font-medium"},[1===Object.keys(t.$page.errors).length?e("span",[t._v("There is one form error.")]):e("span",[t._v("There are "+t._s(Object.keys(t.$page.errors).length)+" form errors.")])])]),t._v(" "),e("button",{staticClass:"group mr-2 p-2",attrs:{type:"button"},on:{click:function(s){t.show=!1}}},[e("svg",{staticClass:"block w-8 h-8 text-gray-100 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"}})])])]):t._e()])}),[],!1,null,null,null);s.a=i.exports},74:function(t,s,e){"use strict";e.r(s);var a,o=e(6),i=e(1),n=e(2),r={props:{action:{type:Boolean,default:!0}}},l=(e(173),e(0)),c=Object(l.a)(r,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"flex px-8 py-4"},[this._t("listbody"),this._v(" "),this.action?s("div",{staticClass:"w-20 text-center flex items-start justify-center"},[this._t("listaction")],2):this._e()],2)}),[],!1,null,null,null).exports,d=e(14),u=e(10),p=e(5),h=e(4),m=e(3),f=e(9),v=e(59);function b(t,s,e){return s in t?Object.defineProperty(t,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[s]=e,t}var w=(b(a={components:{Layout:o.a,Heading:i.a,Card:n.a,ListGroup:c,SwitchInput:d.a,TextInput:u.a,LoadingButton:p.a,LinkTo:h.a,Icon:m.a,Alert:f.a,FlashMessage:v.a},props:["errors"],data:function(){return{notification:!0,user:{name:this.$page.auth.user.name,email:this.$page.auth.user.email},resetform:{current_password:"",password:"",password_confirmation:""}}}},"props",["errors"]),b(a,"methods",{changePassword:function(){var t=this;this.$refs.changePasswordButton.startLoading(),this.$inertia.post(this.route("settings.changePassword"),this.resetform).then((function(s){0===Object.keys(t.$page.errors).length&&(t.resetform={}),t.$refs.changePasswordButton.stopLoading()})).catch((function(){}))},updateProfile:function(){var t=this;this.$refs.updateProfileButton.startLoading(),this.$inertia.post(this.route("settings.updateProfile"),this.user).then((function(s){t.$refs.updateProfileButton.stopLoading()})).catch((function(){}))}}),a),g=Object(l.a)(w,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("layout",[e("div",{staticClass:"bg-white px-4 pt-6 pb-4 relative shadow-sm z-20"},[e("div",{staticClass:"max-w-6xl mx-auto"},[e("link-to",{staticClass:"mb-4",attrs:{to:"/dashboard"}},[e("icon",{staticClass:"-ml-2",attrs:{name:"chevron-left"}}),t._v("Back to Dashboard\n\t\t\t")],1),t._v(" "),e("heading",{attrs:{size:"heading"}},[t._v("Settings")])],1)]),t._v(" "),e("div",{staticClass:"px-4 lg:px-6 py-5 md:py-10 bg-gray-100"},[e("div",{staticClass:"max-w-6xl mx-auto"},[e("flash-message",{staticClass:"mb-8"}),t._v(" "),e("div",{staticClass:"md:flex md:flex-wrap mb-10 -mx-4"},[e("div",{staticClass:"md:w-1/3 px-4"},[e("heading",{staticClass:"mb-1",attrs:{size:"large"}},[t._v("Personal Details")]),t._v(" "),e("heading",{staticClass:"mb-4"},[t._v("Edit your name, date of birth and so on.")])],1),t._v(" "),e("div",{staticClass:"md:w-2/3 px-4"},[e("card",{attrs:{"with-footer":""},scopedSlots:t._u([{key:"footer",fn:function(){return[e("loading-button",{ref:"updateProfileButton",on:{click:t.updateProfile}},[t._v("Update Profile")])]},proxy:!0}])},[e("text-input",{staticClass:"mb-4",attrs:{label:"Name",errors:t.errors.name},on:{keydown:function(s){delete t.errors.name}},model:{value:t.user.name,callback:function(s){t.$set(t.user,"name",s)},expression:"user.name"}}),t._v(" "),e("div",{staticClass:"mb-2"},[e("text-input",{attrs:{label:"Email",disabled:"",bordered:!1},model:{value:t.user.email,callback:function(s){t.$set(t.user,"email",s)},expression:"user.email"}}),t._v(" "),e("p",{staticClass:"text-sm mb-0 mt-2"},[t._v("\n\t\t\t\t\t\t\t\tPlease\n\t\t\t\t\t\t\t\t"),e("link-to",{attrs:{to:"#"}},[t._v("contact admin")]),t._v(" to change/update\n\t\t\t\t\t\t\t\tyour email address\n\t\t\t\t\t\t\t")],1)],1)],1)],1)]),t._v(" "),e("div",{staticClass:"md:flex md:flex-wrap mb-10 -mx-4"},[e("div",{staticClass:"md:w-1/3 px-4"},[e("heading",{staticClass:"mb-1",attrs:{size:"large"}},[t._v("Change Password")]),t._v(" "),e("heading",{staticClass:"mb-4"},[t._v("\n\t\t\t\t\t\tUpdate your password here. We recommend that you set a strong\n\t\t\t\t\t\tpassword that is atleast 8 characters long and includes a mix of\n\t\t\t\t\t\tletters, numbers and symbols.\n\t\t\t\t\t")])],1),t._v(" "),e("div",{staticClass:"md:w-2/3 px-4"},[e("card",{attrs:{"with-footer":""},scopedSlots:t._u([{key:"footer",fn:function(){return[e("loading-button",{ref:"changePasswordButton",attrs:{type:"button"},on:{click:t.changePassword}},[t._v("Update Password")])]},proxy:!0}])},[e("text-input",{staticClass:"mb-4",attrs:{label:"Current Password",errors:t.errors.current_password},model:{value:t.resetform.current_password,callback:function(s){t.$set(t.resetform,"current_password",s)},expression:"resetform.current_password"}}),t._v(" "),e("text-input",{staticClass:"mb-4",attrs:{label:"New Password",errors:t.errors.password},model:{value:t.resetform.password,callback:function(s){t.$set(t.resetform,"password",s)},expression:"resetform.password"}}),t._v(" "),e("text-input",{attrs:{label:"Confirm New Password",errors:t.errors.password_confirmation},model:{value:t.resetform.password_confirmation,callback:function(s){t.$set(t.resetform,"password_confirmation",s)},expression:"resetform.password_confirmation"}})],1)],1)]),t._v(" "),e("div",{staticClass:"md:flex md:flex-wrap mb-10 -mx-4"},[e("div",{staticClass:"md:w-1/3 px-4"},[e("heading",{staticClass:"mb-1",attrs:{size:"large"}},[t._v("Notifications")]),t._v(" "),e("heading",{staticClass:"mb-4"},[t._v("\n\t\t\t\t\t\tControl the newsletter subscription and email\n\t\t\t\t\t\tnotifications\n\t\t\t\t\t")])],1),t._v(" "),e("div",{staticClass:"md:w-2/3 px-4"},[e("card",{attrs:{"is-padding":!1,"with-footer":""},scopedSlots:t._u([{key:"footer",fn:function(){return[e("loading-button",[t._v("Save Settings")])]},proxy:!0}])},[e("list-group",[e("div",{staticClass:"pr-10",attrs:{slot:"listbody"},slot:"listbody"},[e("heading",{staticClass:"mb-1",attrs:{size:"large"}},[t._v("Email Notifications")]),t._v(" "),e("heading",[t._v("\n\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit, amet consectetur adipisicing elit.\n\t\t\t\t\t\t\t\t\tNulla dolorem odit voluptas, saepe a earum.\n\t\t\t\t\t\t\t\t")])],1),t._v(" "),e("template",{slot:"listaction"},[e("switch-input",{attrs:{color:"#1abc9c"},model:{value:t.notification,callback:function(s){t.notification=s},expression:"notification"}})],1)],2),t._v(" "),e("list-group",{staticClass:"border-t"},[e("div",{staticClass:"pr-10",attrs:{slot:"listbody"},slot:"listbody"},[e("heading",{staticClass:"mb-1",attrs:{size:"large"}},[t._v("Text/SMS Notifications")]),t._v(" "),e("heading",[t._v("\n\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit, amet consectetur adipisicing elit.\n\t\t\t\t\t\t\t\t\tNulla dolorem odit voluptas, saepe a earum.\n\t\t\t\t\t\t\t\t")])],1),t._v(" "),e("template",{slot:"listaction"},[e("switch-input",{attrs:{color:"#1abc9c"},model:{value:t.notification,callback:function(s){t.notification=s},expression:"notification"}})],1)],2),t._v(" "),e("list-group",{staticClass:"border-t"},[e("div",{staticClass:"pr-10",attrs:{slot:"listbody"},slot:"listbody"},[e("heading",{staticClass:"mb-1",attrs:{size:"large"}},[t._v("Slack Notifications")]),t._v(" "),e("heading",[t._v("\n\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit, amet consectetur adipisicing elit.\n\t\t\t\t\t\t\t\t\tNulla dolorem odit voluptas, saepe a earum.\n\t\t\t\t\t\t\t\t")])],1),t._v(" "),e("template",{slot:"listaction"},[e("switch-input",{attrs:{color:"#1abc9c"},model:{value:t.notification,callback:function(s){t.notification=s},expression:"notification"}})],1)],2)],1)],1)])],1)])])}),[],!1,null,null,null);s.default=g.exports}}]);