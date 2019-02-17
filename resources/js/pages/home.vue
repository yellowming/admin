<template>
<v-card>
          <video-player class="vjs-custom-skin" 
      :options="playerOptions" 
      @ready="playerReadied">
    </video-player>
  
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ $t('you_are_logged_in') }}</h3>
              <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
            </div>
          </v-card-title>
  
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
    
</template>

<script>
  
  import 'video.js/dist/video-js.css'
  import { videoPlayer } from 'vue-video-player'

  import videojs from 'video.js'
  window.videojs = videojs
  require('videojs-contrib-hls/dist/videojs-contrib-hls.js')
  
  export default {
    components: {
      videoPlayer
    },
    middleware: 'auth',
    metaInfo () {
      return { title: this.$t('home') }
    },
    data() {
      return {
        playerOptions: {
			preload: 'auto',
          autoplay: true,
			language: 'zh-CN',
			aspectRatio: '16:9',
			fluid: true,
          sources: [{
            withCredentials: false,
            type: "application/x-mpegURL",
            src: "https://logos-channel.scaleengine.net/logos-channel/live/biblescreen-ad-free/playlist.m3u8"
          }],
          controlBar: {
            timeDivider: false,
            durationDisplay: false
          },
          flash: { hls: { withCredentials: false }},
          html5: { hls: { withCredentials: false }}
        }

      }
    },
    methods: {
      playerReadied(player) {
        //var hls = player.tech({ IWillNotUseThisInPlugins: true }).hls
        player.tech_.hls.xhr.beforeRequest = function(options) {
          return options
        }
      }
    }
  }
</script>

<style>
.vjs-big-play-button{
     /*
      播放按钮换成圆形
     */
    height: 2em;
    width: 2em;
    line-height: 2em;
    border-radius: 1em;
  }
.video-player-box{  
        height: 100% !important;  
        width: 100% !important;  
    }  
</style>
