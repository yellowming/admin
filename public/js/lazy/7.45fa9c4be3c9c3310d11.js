(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{120:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n);function s(e,t,r,n,a,s,o){try{var i=e[s](o),l=i.value}catch(e){return void r(e)}i.done?t(l):Promise.resolve(l).then(n,a)}var o={layout:"basic",middleware:"guest",metaInfo:function(){return{title:this.$t("login")}},data:function(){return{valid:!0,email:"867822412@qq.com",password:"4356465754676",emailRules:[function(e){return!!e||"请输入邮箱"},function(e){return/.+@.+/.test(e)||"邮箱格式不正确"}],passwordRules:[function(e){return!!e||"请输入密码"},function(e){return e.length>=10||"密码必须大于10个字符"}],remember:!1}},methods:{login:function(){var e,t=(e=a.a.mark(function e(){var t,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("auth/login",{email:this.email,password:this.password,remember:this.remember});case 2:return t=e.sent,r=t.data,this.$store.dispatch("auth/saveToken",{token:r.token_type+" "+r.access_token,expires:r.expires_in}),e.next=7,this.$store.dispatch("auth/fetchUser");case 7:this.$router.push({name:"home"});case 8:case"end":return e.stop()}},e,this)}),function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function i(e){s(o,n,a,i,l,"next",e)}function l(e){s(o,n,a,i,l,"throw",e)}i(void 0)})});return function(){return t.apply(this,arguments)}}()}},i=r(1),l=Object(i.a)(o,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"inspire"}},[r("v-content",[r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[r("v-card",{staticClass:"elevation-12"},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.login(t)},keydown:function(t){e.form.onKeydown(t)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-toolbar-title",[e._v(e._s(e.$t("login")))])],1),e._v(" "),r("v-card-text",[r("v-text-field",{attrs:{"prepend-icon":"person",name:"user",label:e.$t("email"),rules:e.emailRules,required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),r("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:e.$t("password"),type:"password",rules:e.passwordRules,required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),r("v-checkbox",{attrs:{name:"remember",label:e.$t("remember_me")},model:{value:e.remember,callback:function(t){e.remember=t},expression:"remember"}})],1),e._v(" "),r("v-card-actions",[r("router-link",{staticClass:"small ml-auto my-auto",attrs:{to:{name:"password.request"}}},[e._v("\n              "+e._s(e.$t("forgot_password"))+"\n            ")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary",type:"submit"}},[e._v(e._s(e.$t("login")))])],1)],1)],1)],1)],1)],1)],1)],1)},[],!1,null,null,null);l.options.__file="login.vue";t.default=l.exports}}]);