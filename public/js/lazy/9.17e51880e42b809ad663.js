(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{119:function(t,s,a){"use strict";a.r(s);var o=a(0),e=a.n(o);function r(t,s,a,o,e,r,n){try{var i=t[r](n),l=i.value}catch(t){return void a(t)}i.done?s(l):Promise.resolve(l).then(o,e)}var n={middleware:"guest",metaInfo:function(){return{title:this.$t("reset_password")}},data:function(){return{status:""}},created:function(){},methods:{reset:function(){var t,s=(t=e.a.mark(function t(){var s,a;return e.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.axios.post("/api/password/reset");case 2:s=t.sent,a=s.data,this.status=a.status;case 5:case"end":return t.stop()}},t,this)}),function(){var s=this,a=arguments;return new Promise(function(o,e){var n=t.apply(s,a);function i(t){r(n,o,e,i,l,"next",t)}function l(t){r(n,o,e,i,l,"throw",t)}i(void 0)})});return function(){return s.apply(this,arguments)}}()}},i=a(1),l=Object(i.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-8 m-auto"},[a("card",{attrs:{title:t.$t("reset_password")}},[a("form",{on:{submit:function(s){return s.preventDefault(),t.reset(s)}}},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("email")))]),t._v(" "),a("div",{staticClass:"col-md-7"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",name:"email",readonly:""},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("password")))]),t._v(" "),a("div",{staticClass:"col-md-7"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",name:"password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("confirm_password")))]),t._v(" "),a("div",{staticClass:"col-md-7"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password_confirmation,expression:"password_confirmation"}],staticClass:"form-control",attrs:{type:"password",name:"password_confirmation"},domProps:{value:t.password_confirmation},on:{input:function(s){s.target.composing||(t.password_confirmation=s.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("div",{staticClass:"col-md-9 ml-md-auto"},[a("button",[t._v("\n              "+t._s(t.$t("reset_password"))+"\n            ")])])])])])],1)])},[],!1,null,null,null);l.options.__file="reset.vue";s.default=l.exports}}]);