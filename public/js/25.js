(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{0:function(t,e,n){"use strict";function o(t,e,n,o,s,a,i,r){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=l):s&&(l=r?function(){s.call(this,this.$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}n.d(e,"a",(function(){return o}))},113:function(t,e,n){"use strict";var o=n(27);n.n(o).a},114:function(t,e,n){(t.exports=n(7)(!1)).push([t.i,'/* .list-style-one::before {\n\tcontent: "";\n\twidth: 8px;\n\theight: 8px;\n\tbackground-color: blue;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tborder-radius: 50%;\n} */\n.list-style-ul:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n',""])},12:function(t,e,n){"use strict";var o={name:"List",props:{theme:{type:String,default:"ul"},lists:{type:Array,default:function(){return[]}},unorderedListColor:{type:String}},computed:{classes:function(){return[{"list-none list-style-ul":"ul"===this.theme}]}}},s=(n(113),n(0)),a=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.theme,{tag:"component"},t._l(t.lists,(function(e,o){return n("li",{key:o,staticClass:"flex",class:t.classes},["ul"===t.theme?n("div",{staticClass:"w-10"},[n("svg",{staticClass:"fill-current",class:t.unorderedListColor,attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M10.001,16.413l-3.713-3.705 L7.7,11.292l2.299,2.295l5.294-5.294l1.414,1.414L10.001,16.413z"}})])]):t._e(),t._v(" "),n("div",{staticClass:"flex-1"},[t._v(t._s(e))])])})),0)}),[],!1,null,null,null);e.a=a.exports},27:function(t,e,n){var o=n(114);"string"==typeof o&&(o=[[t.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n(8)(o,s);o.locals&&(t.exports=o.locals)},98:function(t,e,n){"use strict";n.r(e);var o=n(6),s=n(1),a=n(3),i=n(4),r=n(2),l=n(12),c=n(5),d={components:{Layout:o.a,Heading:s.a,Icon:a.a,LinkTo:i.a,Card:r.a,List:l.a,LoadingButton:c.a}},u=n(0),p=Object(u.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout",[n("div",{staticClass:"px-4 py-6 md:py-16 relative"},[n("div",{staticClass:"max-w-5xl mx-auto"},[n("heading",{staticClass:"mb-12 text-center",attrs:{size:"display"}},[t._v("Cancellation & Refund Policy")]),t._v(" "),n("p",{staticClass:"mb-3"},[t._v("You can cancel your payment only if it has not been posted to the the website, and your order is in pending status. Once your order is completed, and the listings are approved, you will not be able to cancel the same order  anyways.  You can cancel the same order within 24 hours, provided your listings are not approved or live.")]),t._v(" "),n("p",{staticClass:"mb-3"},[t._v("In case, you have sent a request for a cancellation, and if your cancellation request is denied, then you will get a confirmation email from us regarding this. For cancellation of an order, you will need to send the Order Number, listing name, date or time of placing the order to "),n("link-to",{attrs:{to:"mailto:hello@jobsharbour.com"}},[t._v("hello@jobsharbour.com")]),t._v(".")],1),t._v(" "),n("p",{staticClass:"mb-3"},[t._v("In case of a cancellation is accepted, then the refund will be credited to the users bank account electronically.  Users need to provide the mode of payments and list their bank account information in the email for cancellation.")])],1)])])}),[],!1,null,null,null);e.default=p.exports}}]);