(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{124:function(t,e,s){"use strict";s.r(e);var a=s(0),n=s.n(a);function r(t,e,s,a,n,r,i){try{var o=t[r](i),l=o.value}catch(t){return void s(t)}o.done?e(l):Promise.resolve(l).then(a,n)}var i={middleware:"guest",metaInfo:function(){return{title:this.$t("reset_password")}},data:function(){return{status:""}},methods:{send:function(){var t,e=(t=n.a.mark(function t(){var e,s;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.axios.post("/api/password/email");case 2:e=t.sent,s=e.data,this.status=s.status;case 5:case"end":return t.stop()}},t,this)}),function(){var e=this,s=arguments;return new Promise(function(a,n){var i=t.apply(e,s);function o(t){r(i,a,n,o,l,"next",t)}function l(t){r(i,a,n,o,l,"throw",t)}o(void 0)})});return function(){return e.apply(this,arguments)}}()}},o=s(1),l=Object(o.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-8 m-auto"},[s("card",{attrs:{title:t.$t("reset_password")}},[s("form",{on:{submit:function(e){return e.preventDefault(),t.send(e)}}},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("email")))]),t._v(" "),s("div",{staticClass:"col-md-7"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-md-9 ml-md-auto"},[s("v-button",[t._v("\n              "+t._s(t.$t("send_password_reset_link"))+"\n            ")])],1)])])])],1)])},[],!1,null,null,null);l.options.__file="email.vue";e.default=l.exports}}]);