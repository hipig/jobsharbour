(window.webpackJsonp=window.webpackJsonp||[]).push([[11,1],{115:function(t,e,a){"use strict";var s=a(28);a.n(s).a},116:function(t,e,a){(t.exports=a(7)(!1)).push([t.i,".table-striped tbody tr:nth-child(even) {\n  background-color: #f7fafc;\n}\n",""])},117:function(t,e,a){"use strict";var s=a(29);a.n(s).a},118:function(t,e,a){(t.exports=a(7)(!1)).push([t.i,".alert-custom[data-v-4611a825] {\n  border-radius: 10px;\n}\n.fill-current[data-v-4611a825] {\n  fill: currentColor;\n}\n.text-alert-danger[data-v-4611a825] {\n  color: #dc3545;\n}",""])},119:function(t,e,a){"use strict";var s=a(30);a.n(s).a},120:function(t,e,a){(t.exports=a(7)(!1)).push([t.i,'.menu-active {\n  position: relative;\n}\n.menu-active:after {\n  bottom: 0;\n  position: absolute;\n  left: 0;\n  right: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  content: "";\n  height: 3px;\n  width: 100%;\n  border-radius: 1000px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n  background-color: #29a7c9;\n}\n.overlay-black {\n  position: relative;\n}\n.overlay-black:after {\n  position: absolute;\n  content: "";\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  display: block;\n  height: 100%;\n  background-image: linear-gradient(\n\t\trgba(0, 0, 0, 0.01) 0%,\n\t\trgba(0, 0, 0, 0.1) 45%,\n\t\trgba(0, 0, 0, 0.75) 100%\n\t);\n  z-index: 1;\n}\n',""])},121:function(t,e,a){"use strict";var s=a(31);a.n(s).a},122:function(t,e,a){(t.exports=a(7)(!1)).push([t.i,".switch-button-control {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.switch-button-control .switch-button {\n  height: 1.6em;\n  width: calc(1.6em * 2);\n  /* border: 2px solid #ddd; */\n  /* box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.33); */\n  border-radius: 1.6em;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n  background: #ddd;\n  box-sizing: border-box;\n}\n.switch-button-control .switch-button .button {\n  height: 1.6em;\n  width: 1.6em;\n  border: 2px solid #ddd;\n  border-radius: 1.6em;\n  background-color: #fff;\n  transition: all 0.3s ease-in-out;\n  box-sizing: border-box;\n}\n.switch-button-control .switch-button.enabled {\n  background-color: var(--color);\n  box-shadow: none;\n}\n.switch-button-control .switch-button.enabled .button {\n  background: white;\n  border: 2px solid var(--color);\n  transform: translateX(calc(calc(1.6em - (2 * 2px)) + (2 * 2px)));\n}\n.switch-button-control .switch-button-label {\n  margin-left: 10px;\n}\n",""])},123:function(t,e,a){"use strict";var s=a(32);a.n(s).a},124:function(t,e,a){(t.exports=a(7)(!1)).push([t.i,".date-input {\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 1rem;\n  z-index: 2000;\n  margin: 3px 0 0 0;\n  border-top: 1px solid #eee;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\n\t\t0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.date-input.is-hidden {\n  display: none;\n}\n.date-input .pika-title {\n  padding: 0.5rem;\n  width: 100%;\n  text-align: center;\n}\n.date-input .pika-prev,\n.date-input .pika-next {\n  margin-top: 0;\n  /* margin-top: 0.5rem; */\n  padding: 0.25rem 0;\n  cursor: pointer;\n  color: #4299e1;\n}\n.date-input .pika-prev:hover,\n.date-input .pika-next:hover {\n  text-decoration: underline;\n}\n.date-input .pika-prev {\n  float: left;\n}\n.date-input .pika-next {\n  float: right;\n}\n.date-input .pika-label {\n  display: inline-block;\n  font-size: 0;\n}\n.date-input .pika-select-month,\n.date-input .pika-select-year {\n  display: inline-block;\n  border: 1px solid #ddd;\n  color: #444;\n  background-color: #fff;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  padding-top: 0.25em;\n  padding-bottom: 0.25em;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.date-input .pika-select-month:focus,\n.date-input .pika-select-year:focus {\n  border-color: #cbd5e0;\n  outline: none;\n}\n.date-input .pika-select-month {\n  margin-right: 0.25em;\n}\n.date-input table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.date-input table th {\n  width: 2em;\n  height: 2em;\n  font-weight: normal;\n  color: #718096;\n  text-align: center;\n}\n.date-input table th abbr {\n  text-decoration: none;\n}\n.date-input table td {\n  padding: 2px;\n}\n.date-input table td button {\n  /* border: 1px solid #e2e8f0; */\n  width: 2em;\n  height: 2em;\n  text-align: center;\n  color: #555;\n  border-radius: 10px;\n}\n.date-input table td button:hover {\n  background-color: #bee3f8;\n}\n.date-input table td.is-today button {\n  background-color: #90cdf4;\n}\n.date-input table td.is-selected button {\n  background-color: #3182ce;\n}\n.date-input table td.is-selected button {\n  color: white;\n}\n.date-input table td.is-selected button:hover {\n  color: white;\n}\n",""])},14:function(t,e,a){"use strict";var s={name:"SwitchInput",model:{prop:"isEnabled",event:"toggle"},props:{isEnabled:{type:Boolean,default:!0},color:{type:String,required:!1,default:"#4D4D4D"}},methods:{toggle:function(){this.$emit("toggle",!this.isEnabled)}}},n=(a(121),a(0)),r=Object(n.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"switch-button-control"},[e("div",{staticClass:"switch-button",class:{enabled:this.isEnabled},style:{"--color":this.color},on:{click:this.toggle}},[e("div",{staticClass:"button"})]),this._v(" "),e("div",{staticClass:"switch-button-label"},[this._t("default")],2)])}),[],!1,null,null,null);e.a=r.exports},15:function(t,e,a){"use strict";var s=a(64),n=a.n(s),r={name:"DateInput",props:{id:{type:String,default:function(){return"text-input-".concat(this._uid)}},value:String,label:String,errors:{type:Array,default:function(){return[]}},format:{type:String,default:"D/M/YYYY"},minYear:{type:Number,default:2019},maxYear:{type:Number,default:(new Date).getFullYear()},defaultYear:{type:Number,default:null},defaultMonth:{type:Number,default:null}},mounted:function(){var t=new n.a({format:this.format,reposition:!1,position:"bottom left",field:this.$refs.input,yearRange:[this.minYear,this.maxYear],theme:"date-input",keyboardInput:!1,i18n:{previousMonth:"Prev",nextMonth:"Next",months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Su","Mo","Tu","We","Th","Fr","Sa"]}});this.defaultYear&&t.gotoYear(this.defaultYear),this.defaultMonth&&t.gotoMonth(this.defaultMonth-1)},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},change:function(t){this.$emit("input",t.target.value)}}},i=(a(123),a(0)),o=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.label?a("label",{staticClass:"form-label block mb-1 font-semibold text-gray-700",attrs:{for:t.id}},[t._v(t._s(t.label))]):t._e(),t._v(" "),a("div",{staticClass:"relative"},[a("input",t._b({ref:"input",staticClass:"pl-10 pr-2 py-2 h-12 leading-normal block w-full border-2 text-gray-800 bg-white font-sans rounded-lg text-left appearance-none focus:border-blue-600 outline-none",class:{"border-red-400":t.errors.length},attrs:{id:"date-input-"+t._uid,type:"text"},domProps:{value:t.value},on:{change:t.change,keyup:t.change}},"input",t.$attrs,!1)),t._v(" "),t.errors.length?a("div",{staticClass:"text-red-600 mt-1 text-sm"},[t._v(t._s(t.errors[0]))]):t._e(),t._v(" "),t.errors.length?a("svg",{staticClass:"absolute text-red-600 fill-current",staticStyle:{top:"12px",right:"12px"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M11.953,2C6.465,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.493,2,11.953,2z M13,17h-2v-2h2V17z M13,13h-2V7h2V13z"}})]):t._e(),t._v(" "),a("svg",{staticClass:"absolute text-gray-400 fill-current",staticStyle:{top:"14px",left:"12px"},attrs:{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[a("path",{attrs:{d:"M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"}})])])])}),[],!1,null,null,null);e.a=o.exports},155:function(t,e,a){"use strict";var s=a(45);a.n(s).a},156:function(t,e,a){(t.exports=a(7)(!1)).push([t.i,".bg-white-linear {\n  background: linear-gradient(to right, white, #f7fafc);\n}\n",""])},18:function(t,e,a){"use strict";var s={props:{noShadow:{type:Boolean,default:!1},height:{type:String,default:"400px"}}},n=a(0),r=Object(n.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center bg-white py-6 flex w-full items-center justify-center flex-row shadow rounded-lg",class:{"shadow-none":1==this.noShadow},style:{"min-height":this.height}},[e("div",{staticClass:"w-100"},[this._t("default")],2)])}),[],!1,null,"3a4ba9db",null);e.a=r.exports},21:function(t,e,a){"use strict";var s={props:{datas:{type:Array,default:function(){return[]}},headings:{type:Array,default:function(){return[]}},theme:{type:String,default:"normal"}},computed:{classes:function(){return{"table-striped":"striped"===this.theme}}}},n=(a(115),a(0)),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"overflow-x-auto bg-white rounded-lg shadow"},[a("table",{staticClass:"w-full whitespace-no-wrap bg-white overflow-hidden",class:t.classes},[a("thead",[a("tr",{staticClass:"text-left"},t._l(t.headings,(function(e,s){return a("th",{key:s,staticClass:"px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs",class:{"text-right":"right"===e.align&&void 0!==e.align,"text-center":"center"===e.align&&void 0!==e.align}},[void 0!==e.title?[t._v("\n\t\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t\t")]:[t._v(t._s(e))]],2)})),0)]),t._v(" "),a("tbody",[t._t("default")],2)])])}),[],!1,null,null,null);e.a=r.exports},28:function(t,e,a){var s=a(116);"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(8)(s,n);s.locals&&(t.exports=s.locals)},29:function(t,e,a){var s=a(118);"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(8)(s,n);s.locals&&(t.exports=s.locals)},30:function(t,e,a){var s=a(120);"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(8)(s,n);s.locals&&(t.exports=s.locals)},31:function(t,e,a){var s=a(122);"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(8)(s,n);s.locals&&(t.exports=s.locals)},32:function(t,e,a){var s=a(124);"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(8)(s,n);s.locals&&(t.exports=s.locals)},45:function(t,e,a){var s=a(156);"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(8)(s,n);s.locals&&(t.exports=s.locals)},59:function(t,e,a){"use strict";var s={data:function(){return{show:!0}},watch:{"$page.flash":{handler:function(){this.show=!0},deep:!0}}},n=a(0),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.$page.flash.success&&t.show?a("div",{staticClass:"mb-8 flex items-center justify-between bg-green-400 rounded-lg"},[a("div",{staticClass:"flex items-center"},[a("svg",{staticClass:"ml-4 mr-2 flex-no-shrink w-8 h-8 text-white fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M10.001,16.413l-3.713-3.705 L7.7,11.292l2.299,2.295l5.294-5.294l1.414,1.414L10.001,16.413z"}})]),t._v(" "),a("div",{staticClass:"py-4 text-white text-sm font-medium"},[t._v(t._s(t.$page.flash.success))])]),t._v(" "),a("button",{staticClass:"group mr-2 p-2",attrs:{type:"button"},on:{click:function(e){t.show=!1}}},[a("svg",{staticClass:"block w-8 h-8 text-gray-100 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"}})])])]):t._e(),t._v(" "),Object.keys(t.$page.errors).length>0&&t.show?a("div",{staticClass:"mb-8 flex items-center justify-between bg-red-400 rounded-lg"},[a("div",{staticClass:"flex items-center"},[a("svg",{staticClass:"ml-4 mr-2 flex-no-shrink w-8 h-8 text-white fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M11.953,2C6.465,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.493,2,11.953,2z M13,17h-2v-2h2V17z M13,13h-2V7h2V13z"}})]),t._v(" "),a("div",{staticClass:"py-4 text-white text-sm font-medium"},[1===Object.keys(t.$page.errors).length?a("span",[t._v("There is one form error.")]):a("span",[t._v("There are "+t._s(Object.keys(t.$page.errors).length)+" form errors.")])])]),t._v(" "),a("button",{staticClass:"group mr-2 p-2",attrs:{type:"button"},on:{click:function(e){t.show=!1}}},[a("svg",{staticClass:"block w-8 h-8 text-gray-100 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"}})])])]):t._e()])}),[],!1,null,null,null);e.a=r.exports},6:function(t,e,a){"use strict";var s=a(2),n=a(1),r={data:function(){return{isOpen:!1}},mounted:function(){var t=this,e=function(e){t.isOpen&&"Escape"===e.key&&(t.isOpen=!1)};document.addEventListener("keydown",e),this.$on("hook:destroyed",(function(){document.removeEventListener("keydown",e)}))},methods:{toggle:function(){this.isOpen=!this.isOpen}}},i=a(0),o=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"relative"},[a("button",{staticClass:"inline-flex focus:outline-none",attrs:{type:"button"},on:{click:t.toggle}},[t._t("trigger")],2),t._v(" "),a("transition",{attrs:{"enter-class":"opacity-0 scale-90","enter-active-class":"ease-out transition-fastest","enter-to-class":"opacity-100 scale-100","leave-class":"opacity-100 scale-100","leave-active-class":"ease-in transition-fastest","leave-to-class":"opacity-0 scale-90"}},[t.isOpen?a("div",[a("button",{staticClass:"z-30 block fixed inset-0 w-full h-full cursor-default",attrs:{type:"button"},on:{click:function(e){t.isOpen=!1}}}),t._v(" "),a("div",{staticClass:"absolute z-50 right-0 origin-top-right"},[t._t("dropdown")],2)]):t._e()])],1)}),[],!1,null,null,null).exports,l=a(21),c=a(11),d=a(9),u=a(13),h=a(5),p=a(4),v=a(10),b=a(3),m={components:{Card:s.a,Heading:n.a,Dropdown:o,BasicTable:l.a,Badge:c.a,Alert:d.a,SearchInput:u.a,TextInput:v.a,LoadingButton:h.a,LinkTo:p.a,Icon:b.a},props:{title:String},data:function(){return{showNav:!1,showNavbar:!1}},watch:{"$page.flash":{handler:function(){this.$snack.success(this.$page.flash.success)},deep:!0},title:{immediate:!0,handler:function(t){document.title=t?"".concat(t," - Jobs Harbour"):"Jobs harbour"}}},methods:{isUrl:function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return""===e[0]?""===location.pathname.substr(1):e.filter((function(t){return location.pathname.substr(1).startsWith(t)})).length}}},f=(a(119),Object(i.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"flex w-100 flex-col min-h-screen"},[a("div",{staticClass:"bg-white px-4 relative z-30"},[a("div",{staticClass:"md:flex items-center justify-between mx-auto max-w-6xl"},[a("div",{staticClass:"flex justify-between md:flex-none items-center"},[t._m(0),t._v(" "),a("div",{staticClass:"inline-block inline-flex items-center justify-center w-8 h-8 rounded-full mr-2 cursor-pointer md:hidden",on:{click:function(e){t.showNavbar=!t.showNavbar}}},[a("svg",{staticClass:"fill-current text-gray-600",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z"}})])])]),t._v(" "),a("div",{staticClass:"hidden md:block"},[t.$page.auth.user?a("a",{staticClass:"mr-6 py-6 inline-block font-medium hover:text-blue-600",class:t.isUrl("dashboard")?"menu-active text-blue-600":"text-gray-600",attrs:{href:"/dashboard"}},[t._v("Dashboard")]):t._e(),t._v(" "),a("a",{staticClass:"mr-6 py-6 inline-block font-medium hover:text-blue-600",class:t.isUrl("jobs")?"menu-active text-blue-600":"text-gray-600",attrs:{href:"/jobs"}},[t._v("Job Listings")]),t._v(" "),a("a",{staticClass:"mr-6 py-6 inline-block font-medium hover:text-blue-600",class:t.isUrl("categories")?"menu-active text-blue-600":"text-gray-600",attrs:{href:"/categories"}},[t._v("Categories")]),t._v(" "),a("a",{staticClass:"py-6 mr-6 inline-block font-medium hover:text-blue-600",class:t.isUrl("for-employers")?"menu-active text-blue-600":"text-gray-600",attrs:{href:"/for-employers"}},[t._v("For Employers")]),t._v(" "),a("a",{staticClass:"py-6 inline-block font-medium hover:text-blue-600",class:t.isUrl("about")?"menu-active text-blue-600":"text-gray-600",attrs:{href:"/about"}},[t._v("About")])]),t._v(" "),a("div",{staticClass:"hidden md:block"},[t.$page.auth.user?[a("dropdown",{scopedSlots:t._u([{key:"trigger",fn:function(){return[a("div",{staticClass:"flex items-center"},[a("div",{staticClass:"outline-none block inline-flex items-center justify-center h-10 w-10 overflow-hidden rounded-full shadow-inner bg-gray-500 text-white font-bold text-xl"},[t._v(t._s(t.$page.auth.user.name.charAt(0)))]),t._v(" "),a("div",{staticClass:"text-left ml-2"},[a("span",{staticClass:"text-sm leading-tight block w-32 truncate"},[t._v(t._s(t.$page.auth.user.name))]),t._v(" "),a("span",{staticClass:"leading-tight text-gray-400 block text-xs uppercase tracking-wider font-semibold"},[t._v(t._s(t.$page.auth.user.type))])])])]},proxy:!0},{key:"dropdown",fn:function(){return[a("div",{staticClass:"mt-2 bg-white rounded-lg border-t border-gray-100 w-48 py-1 shadow-lg overflow-hidden"},[a("a",{staticClass:"block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600",attrs:{href:"/admin/jobs"}},[t._v("Job Posts")]),t._v(" "),a("a",{staticClass:"block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600",attrs:{href:"#"}},[t._v("Notifications")]),t._v(" "),a("a",{staticClass:"block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600",attrs:{href:"/settings"}},[t._v("Settings")]),t._v(" "),a("div",{staticClass:"border-t my-1 border-gray-200"}),t._v(" "),a("inertia-link",{staticClass:"block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600",attrs:{href:t.route("logout"),method:"post"}},[t._v("Logout")])],1)]},proxy:!0}],null,!1,468365969)})]:[a("a",{staticClass:"px-4 py-5 mr-3 inline-block font-medium text-gray-600 hover:text-blue-600",attrs:{href:"/login"}},[t._v("Login")]),t._v(" "),a("loading-button",{attrs:{tag:"a",to:"/register",size:"small",rounded:"large"}},[t._v("Post a Job")])]],2)]),t._v(" "),t.showNavbar?a("div",{staticClass:"md:hidden"},[a("a",{staticClass:"border-t px-2 py-3 block font-medium",class:t.isUrl("/")?"text-blue-600":"text-gray-600",attrs:{href:"/"}},[t._v("Home")]),t._v(" "),t.$page.auth.user?a("a",{staticClass:"border-t px-2 py-3 block font-medium hover:text-blue-600",class:t.isUrl("dashboard")?"text-blue-600":"text-gray-600",attrs:{href:"/dashboard"}},[t._v("Dashboard")]):t._e(),t._v(" "),a("a",{staticClass:"border-t px-2 py-3 block font-medium hover:text-blue-600",class:t.isUrl("jobs")?"text-blue-600":"text-gray-600",attrs:{href:"/jobs"}},[t._v("Jobs Listing")]),t._v(" "),a("a",{staticClass:"border-t px-2 py-3 block font-medium hover:text-blue-600",class:t.isUrl("about")?"text-blue-600":"text-gray-600",attrs:{href:"/categories"}},[t._v("Categories")]),t._v(" "),a("a",{staticClass:"border-t px-2 py-3 block font-medium hover:text-blue-600",class:t.isUrl("for-employers")?"text-blue-600":"text-gray-600",attrs:{href:"/for-employers"}},[t._v("For Employers")]),t._v(" "),a("a",{staticClass:"border-t px-2 py-3 block font-medium hover:text-blue-600",class:t.isUrl("about")?"text-blue-600":"text-gray-600",attrs:{href:"/about"}},[t._v("About Jobs Harbour")]),t._v(" "),t.$page.auth.user?a("div",{staticClass:"flex items-center py-2 border-t"},[a("div",{staticClass:"flex flex-1"},[a("div",{staticClass:"outline-none block inline-flex items-center justify-center h-10 w-10 overflow-hidden rounded-full shadow-inner bg-blue-600 text-white font-bold text-xl"},[t._v(t._s(t.$page.auth.user.name.charAt(0)))]),t._v(" "),a("div",{staticClass:"text-left ml-2"},[a("span",{staticClass:"text-sm leading-tight block w-32 truncate"},[t._v(t._s(t.$page.auth.user.name))]),t._v(" "),a("span",{staticClass:"leading-tight text-gray-400 block text-xs uppercase tracking-wider font-semibold"},[t._v(t._s(t.$page.auth.user.type))])])]),t._v(" "),a("div",{staticClass:"w-24 px-4"},[a("inertia-link",{staticClass:"block px-4 py-2 text-gray-600 hover:text-blue-600",attrs:{href:t.route("logout"),method:"post"}},[t._v("Logout")])],1)]):a("div",{staticClass:"border-t flex"},[a("div",{staticClass:"flex-1 border-r text-center"},[a("a",{staticClass:"px-2 py-3 block font-medium",class:t.isUrl("login")?"text-blue-600":"text-gray-600",attrs:{href:"/login"}},[t._v("Login")])]),t._v(" "),a("div",{staticClass:"flex-1 text-center"},[a("a",{staticClass:"px-2 py-3 block font-medium",class:t.isUrl("register")?"text-blue-600":"text-gray-600",attrs:{href:"/register"}},[t._v("Create free account")])])])]):t._e()]),t._v(" "),a("article",{staticClass:"flex-1"},[t._t("default")],2),t._v(" "),a("div",{staticClass:"px-4 py-16 bg-white border-b-8 border-blue-600"},[a("div",{staticClass:"max-w-6xl mx-auto"},[a("div",{staticClass:"flex flex-wrap md:flex-1 -mx-4"},[t._m(1),t._v(" "),a("div",{staticClass:"w-1/2 md:w-1/5 px-4 mb-6"},[a("heading",{staticClass:"mb-3",attrs:{size:"small-caps"}},[t._v("About")]),t._v(" "),a("a",{staticClass:"block text-sm mb-2 hover:text-blue-600",attrs:{href:"/about"}},[t._v("About us")]),t._v(" "),a("a",{staticClass:"block text-sm mb-2 hover:text-blue-600",attrs:{href:"/for-employers"}},[t._v("For Employers")]),t._v(" "),a("a",{staticClass:"block text-sm mb-2 hover:text-blue-600",attrs:{href:"/advertise"}},[t._v("Advertise with us")]),t._v(" "),a("a",{staticClass:"block text-sm mb-2 hover:text-blue-600",attrs:{href:"/faq"}},[t._v("FAQ")])],1),t._v(" "),a("div",{staticClass:"w-1/2 md:w-1/5 px-4 mb-6"},[a("heading",{staticClass:"mb-3",attrs:{size:"small-caps"}},[t._v("Resources")]),t._v(" "),a("a",{staticClass:"block text-sm mb-2 hover:text-blue-600",attrs:{href:"/faq"}},[t._v("Support")]),t._v(" "),a("a",{staticClass:"block text-sm mb-2 hover:text-blue-600",attrs:{href:"/privacy"}},[t._v("Privacy")]),t._v(" "),a("a",{staticClass:"block text-sm mb-2 hover:text-blue-600",attrs:{href:"/terms"}},[t._v("Terms of Service")]),t._v(" "),a("a",{staticClass:"block text-sm mb-2 hover:text-blue-600",attrs:{href:"/refund"}},[t._v("Refund & Cancellation")])],1),t._v(" "),a("div",{staticClass:"w-1/2 md:w-1/5 px-4 mb-6"},[a("heading",{staticClass:"mb-3",attrs:{size:"small-caps"}},[t._v("Get Connected")]),t._v(" "),a("a",{staticClass:"block text-sm mb-2 hover:text-blue-600 flex",attrs:{href:"#"}},[a("div",{staticClass:"p-1 rounded-full bg-gray-400 hover:bg-blue-600 text-white mr-2"},[a("icon",{staticClass:"w-4 h-4",attrs:{name:"facebook"}})],1),t._v("Facebook\n\t\t\t\t\t")]),t._v(" "),a("a",{staticClass:"block text-sm mb-2 hover:text-blue-600 flex",attrs:{href:"#"}},[a("div",{staticClass:"p-1 rounded-full bg-gray-400 hover:bg-blue-600 text-white mr-2"},[a("icon",{staticClass:"w-4 h-4",attrs:{name:"linkedin"}})],1),t._v("LinkedIn\n\t\t\t\t\t")]),t._v(" "),a("a",{staticClass:"block text-sm mb-2 hover:text-blue-600 flex",attrs:{href:"#"}},[a("div",{staticClass:"p-1 rounded-full bg-gray-400 hover:bg-blue-600 text-white mr-2"},[a("icon",{staticClass:"w-4 h-4",attrs:{name:"instagram"}})],1),t._v("Instagram\n\t\t\t\t\t")]),t._v(" "),a("a",{staticClass:"block text-sm mb-2 hover:text-blue-600 flex",attrs:{href:"#"}},[a("div",{staticClass:"p-1 rounded-full bg-gray-400 hover:bg-blue-600 text-white mr-2"},[a("icon",{staticClass:"w-4 h-4",attrs:{name:"twitter"}})],1),t._v("Twitter\n\t\t\t\t\t")])],1)]),t._v(" "),t._m(2)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"flex items-center py-2",attrs:{href:"/"}},[e("img",{staticClass:"h-10",attrs:{src:"/jh-logo.svg",alt:"jh"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-1/2 md:w-2/5 px-4 mb-6"},[e("img",{attrs:{src:"/jh-logo.svg",alt:"jh"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pt-8 border-t border-gray-200 text-sm md:flex md:justify-between"},[e("div",[this._v("\n\t\t\t\t\t© 2019 Jobs Harbour. All rights reserved. Made with\n\t\t\t\t\t"),e("span",{staticClass:"text-red-600"},[this._v("♥")]),this._v(" in Guwahati\n\t\t\t\t")])])}],!1,null,null,null));e.a=f.exports},85:function(t,e,a){"use strict";a.r(e);var s=a(6),n=a(1),r=a(3),i=a(4),o=a(2),l=a(13),c=a(5),d=a(14),u=a(15),h=a(9),p=a(21),v=a(11),b=a(18),m=a(59),f=a(19),g=a.n(f),x={components:{Layout:s.a,Heading:n.a,Icon:r.a,LinkTo:i.a,Card:o.a,SearchInput:l.a,LoadingButton:c.a,SwitchInput:d.a,DateInput:u.a,Alert:h.a,BasicTable:p.a,Badge:v.a,EmptyState:b.a,FlashMessage:m.a},props:["companies","filters","can"],watch:{form:{handler:g.a.throttle((function(){var t=g.a.pickBy(this.form);this.$inertia.replace(this.route("admin.jobs.all",Object.keys(t).length?t:{remember:"forget"}))}),150),deep:!0}},data:function(){return{form:{search:this.filters.search},headings:["Name","Industry","Website"]}},methods:{}},_=(a(155),a(0)),w=Object(_.a)(x,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("layout",[a("div",{staticClass:"bg-white px-4 pt-6 py-4 relative shadow-sm z-20"},[a("div",{staticClass:"max-w-6xl mx-auto"},[a("link-to",{staticClass:"mb-2",attrs:{to:"/dashboard"}},[a("icon",{staticClass:"-ml-2",attrs:{name:"chevron-left"}}),t._v("Back to Dashboard\n\t\t\t")],1),t._v(" "),a("div",{staticClass:"flex justify-between items-center"},[a("heading",{attrs:{size:"heading"}},[t._v("All Companies")]),t._v(" "),a("div",{staticClass:"flex"},[a("search-input",{staticClass:"mr-2",attrs:{placeholder:"Search by company name, email..."},model:{value:t.form.search,callback:function(e){t.$set(t.form,"search",e)},expression:"form.search"}}),t._v(" "),t.can.create?a("loading-button",{attrs:{size:"small",to:"/admin/companies/create",tag:"a"}},[a("icon",{attrs:{name:"plus"}}),t._v(" "),a("span",{staticClass:"hidden md:block"},[t._v("New Company")])],1):t._e()],1)],1)],1)]),t._v(" "),a("div",{staticClass:"py-10"},[a("div",{staticClass:"max-w-6xl mx-auto"},["Consultancy"==t.$page.auth.user.type?a("alert",{staticClass:"my-6"},[t._v("\n\t\t\t\tYou could list upto maximum of 5 companies in your free period. For further information contact our\n\t\t\t\t"),a("link-to",{attrs:{to:"#"}},[t._v("sales team")]),t._v(" .\n\t\t\t")],1):t._e(),t._v(" "),a("div",{staticClass:"relative"},[a("div",{staticClass:"absolute fixed top-0 bottom-0 right-0 w-6 bg-white-linear rounded-r-lg opacity-75"}),t._v(" "),t.companies.data.length>0?a("basic-table",{attrs:{headings:t.headings}},t._l(t.companies.data,(function(e,s){return a("tr",{key:s,staticClass:"focus-within:bg-gray-200 overflow-hidden"},[a("td",{staticClass:"border-t"},[a("link-to",{staticClass:"inline-block truncate mr-2 mx-6",attrs:{to:"/admin/companies/"+e.uuid+"/edit"}},[t._v(t._s(e.company_name))])],1),t._v(" "),a("td",{staticClass:"border-t"},[a("span",{staticClass:"text-gray-700 px-6 py-4 flex items-center"},[t._v(t._s(e.company_industry))])]),t._v(" "),a("td",{staticClass:"border-t"},[a("span",{staticClass:"text-gray-700 px-6 py-4 flex items-center"},[t._v(t._s(e.company_website))])])])})),0):a("empty-state",{staticClass:"lg:py-32"},[a("div",{staticClass:"w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-center mx-auto"},[a("icon",{staticClass:"w-8 h-8",attrs:{name:"search"}})],1),t._v(" "),a("heading",{staticClass:"mt-5 mb-1",attrs:{size:"heading"}},[t._v("No Companies found")]),t._v(" "),a("p",[t._v("Please create atleast one company/organization details to add a job post.")]),t._v(" "),a("loading-button",{staticClass:"mt-6",attrs:{tag:"a",to:"/admin/companies/create",size:"small"}},[a("icon",{staticClass:"mr-1",attrs:{name:"plus"}}),t._v("Create Company\n\t\t\t\t\t")],1)],1)],1),t._v(" "),null!=t.companies.prev_page_url||null!=t.companies.next_page_url?a("div",{staticClass:"flex items-center justify-between mt-8"},[a("div",[null==t.companies.prev_page_url?a("loading-button",{staticClass:"cursor-not-allowed",attrs:{tag:"a",to:t.companies.prev_page_url,size:"small",variant:"secondary","variant-type":"outline"}},[a("icon",{attrs:{name:"chevron-left"}}),t._v("Previous\n\t\t\t\t\t")],1):a("loading-button",{staticClass:"bg-secondary-400 border-secondary-400 hover:bg-secondary-500 hover:border-secondary-500",attrs:{tag:"a",to:t.companies.prev_page_url,size:"small"}},[a("icon",{attrs:{name:"chevron-left"}}),t._v("Previous\n\t\t\t\t\t")],1)],1),t._v(" "),a("div",[a("heading",{attrs:{size:"small"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.companies.from)+" to\n\t\t\t\t\t\t"+t._s(t.companies.to)+"\n\t\t\t\t\t")])],1),t._v(" "),a("div",[null==t.companies.next_page_url?a("loading-button",{staticClass:"cursor-not-allowed",attrs:{tag:"a",to:t.companies.next_page_url,size:"small",variant:"secondary","variant-type":"outline"}},[t._v("\n\t\t\t\t\t\tNext\n\t\t\t\t\t\t"),a("icon",{attrs:{name:"chevron-right"}})],1):a("loading-button",{staticClass:"bg-secondary-400 border-secondary-400 hover:bg-secondary-500 hover:border-secondary-500",attrs:{tag:"a",to:t.companies.next_page_url,disabled:null==t.companies.next_page_url,size:"small"}},[t._v("\n\t\t\t\t\t\tNext\n\t\t\t\t\t\t"),a("icon",{attrs:{name:"chevron-right"}})],1)],1)]):t._e()],1)])])}),[],!1,null,null,null);e.default=w.exports},9:function(t,e,a){"use strict";var s={name:"Alert",props:{variant:{type:String,default:"info"},withIcon:{type:Boolean,default:!0}},computed:{getAlertClass:function(){return{"bg-blue-100 text-blue-800 border-blue-200":"info"==this.variant,"bg-red-100 text-red-800 border-red-200":"danger"==this.variant,"bg-green-100 text-green-800 border-green-200":"success"==this.variant,"bg-orange-100 text-gray-600 border-orange-200":"warning"==this.variant}}}},n=(a(117),a(0)),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex p-4 rounded-lg border-2",class:t.getAlertClass,attrs:{role:"alert"}},[t.withIcon?t._t("icon",["info"==t.variant?a("svg",{staticClass:"flex-shrink-0 fill-current text-blue-500 mr-3",attrs:{width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),a("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}})]):t._e(),t._v(" "),"danger"==t.variant?a("svg",{staticClass:"flex-shrink-0 fill-current text-red-500 mr-3",attrs:{width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),a("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}})]):t._e(),t._v(" "),"success"==t.variant?a("svg",{staticClass:"flex-shrink-0 fill-current text-green-500 mr-3",attrs:{width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),a("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}})]):t._e()]):t._e(),t._v(" "),a("div",{staticClass:"pt-1"},[t._t("default")],2)],2)}),[],!1,null,"4611a825",null);e.a=r.exports}}]);