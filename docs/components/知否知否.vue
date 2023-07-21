<template>
   <audio controls ref="audioPlayer">
    <source src="../audio/知否知否.mp3" />
   </audio>
    <div>      
      <LyricsScroll :lyrics="songLyrics" :currentTime="currentTime"></LyricsScroll>
    </div>
</template>
  
  <script>
  import LyricsScroll from './scroll2.vue';
  
  export default {
    name: 'App',
    components: {
      LyricsScroll
    },
    data() {
      return {
        songLyrics: [
  { "time": "00:24.76", "text": "一朝花开傍柳，寻香误觅亭侯" },
  { "time": "00:34.13", "text": "纵饮朝霞半日晖，风雨着不透" },
  { "time": "00:43.24", "text": "一任宫长骁瘦，台高冰泪难流" },
  { "time": "00:53.03", "text": "锦书送罢蓦回首，无余岁可偷" },
  { "time": "01:02.79", "text": "昨夜雨疏风骤，浓睡不消残酒" },
  { "time": "01:07.27", "text": "试问卷帘人，却道海棠依旧" },
  { "time": "01:11.22", "text": "知否 知否" },
  { "time": "01:15.98", "text": "应是绿肥红瘦" },
  { "time": "01:21.25", "text": "昨夜雨疏风骤，浓睡不消残酒" },
  { "time": "01:25.63", "text": "试问卷帘人，却道海棠依旧" },
  { "time": "01:29.83", "text": "知否 知否" },
  { "time": "01:34.43", "text": "应是绿肥红瘦" },
  { "time": "02:20.20", "text": "一朝花开傍柳，寻香误觅亭侯" },
  { "time": "02:29.84", "text": "纵饮朝霞半日晖，风雨着不透" },
  { "time": "02:38.76", "text": "一任宫长骁瘦，台高冰泪难流" },
  { "time": "02:48.30", "text": "锦书送罢蓦回首，无余岁可偷" },
  { "time": "02:57.88", "text": "昨夜雨疏风骤，浓睡不消残酒" },
  { "time": "03:02.57", "text": "试问卷帘人，却道海棠依旧" },
  { "time": "03:06.70", "text": "知否 知否" },
  { "time": "03:11.50", "text": "应是绿肥红瘦" },
  { "time": "03:16.62", "text": "昨夜雨疏风骤，浓睡不消残酒" },
  { "time": "03:20.84", "text": "试问卷帘人，却道海棠依旧" },
  { "time": "03:25.11", "text": "知否 知否" },
  { "time": "03:29.67", "text": "应是绿肥红瘦" },
  { "time": "03:35.26", "text": "昨夜雨疏风骤，浓睡不消残酒" },
  { "time": "03:39.56", "text": "试问卷帘人，却道海棠依旧" },
  { "time": "03:43.52", "text": "知否 知否" },
  { "time": "03:48.28", "text": "应是绿肥红瘦" },
  { "time": "03:53.60", "text": "昨夜雨疏风骤，浓睡不消残酒" },
  { "time": "03:57.100", "text": "试问卷帘人，却道海棠依旧" },
  { "time": "04:02.15", "text": "知否 知否" },
  { "time": "04:06.83", "text": "应是绿肥红瘦" },
  { "time": "04:13.86", "text": "知否 知否" },
  { "time": "04:19.38", "text": "应是绿肥红瘦" }
],
 currentTime: 0
      }
    },
    mounted() {
      const audio = this.$refs.audioPlayer;
      audio.addEventListener('timeupdate', this.handleTimeUpdate);
      console.log("handleTimeUpdate",this.handleTimeUpdate)
    },
    methods: {
      handleTimeUpdate(event) {
        console.log(event)
        this.currentTime = event.target.currentTime;
      }
    }
  }
  </script>
  
  <style>
  /* 其他样式 */
  </style>
  