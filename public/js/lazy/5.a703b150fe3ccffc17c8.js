(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{118:function(t,e,n){"use strict";n.r(e);n(37);var r=n(26),a=n(20),o=n.n(a);window.videojs=o.a,n(55);var i={components:{videoPlayer:r.videoPlayer},middleware:"auth",metaInfo:function(){return{title:this.$t("home")}},data:function(){return{playerOptions:{preload:"auto",autoplay:!0,language:"zh-CN",aspectRatio:"16:9",fluid:!0,sources:[{withCredentials:!1,type:"application/x-mpegURL",src:"https://logos-channel.scaleengine.net/logos-channel/live/biblescreen-ad-free/playlist.m3u8"}],controlBar:{timeDivider:!1,durationDisplay:!1},flash:{hls:{withCredentials:!1}},html5:{hls:{withCredentials:!1}}}}},methods:{playerReadied:function(t){t.tech_.hls.xhr.beforeRequest=function(t){return t}}}},s=(n(56),n(1)),l=Object(s.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("video-player",{staticClass:"vjs-custom-skin",attrs:{options:t.playerOptions},on:{ready:t.playerReadied}}),t._v(" "),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.$t("you_are_logged_in")))]),t._v(" "),n("div",[t._v("Located two hours south of Sydney in the "),n("br"),t._v("Southern Highlands of New South Wales, ...")])])]),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{flat:"",color:"orange"}},[t._v("Share")]),t._v(" "),n("v-btn",{attrs:{flat:"",color:"orange"}},[t._v("Explore")])],1)],1)},[],!1,null,null,null);l.options.__file="home.vue";e.default=l.exports},13:function(t,e,n){var r=n(57);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(10)(r,a);r.locals&&(t.exports=r.locals)},41:function(t,e){},56:function(t,e,n){"use strict";var r=n(13);n.n(r).a},57:function(t,e,n){(t.exports=n(9)(!1)).push([t.i,"\n.vjs-big-play-button{\r\n     /*\r\n      播放按钮换成圆形\r\n     */\r\n    height: 2em;\r\n    width: 2em;\r\n    line-height: 2em;\r\n    border-radius: 1em;\n}\n.video-player-box{  \r\n        height: 100% !important;  \r\n        width: 100% !important;\n}  \r\n",""])}}]);