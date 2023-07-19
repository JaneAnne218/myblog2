<template>
   <audio controls ref="audioPlayer">
    <source src="../audio/控制狂.mp3" />
   </audio>
    <div>      
      <LyricsScroll :lyrics="songLyrics" :currentTime="currentTime"></LyricsScroll>
    </div>
  </template>
  
  <script>
  import LyricsScroll from './scroll.vue';
  
  export default {
    name: 'App',
    components: {
      LyricsScroll
    },
    data() {
      return {
        songLyrics: [
  { text: "拍照时 角度和方向", time: "00:10.78" },
  { text: "没问题 都配合的", time: "00:15.70" },
  { text: "睡着时 做梦的重量", time: "00:20.29" },
  { text: "云要多高 天要多蓝", time: "00:24.97" },
  { text: "先对照色票", time: "00:27.22" },
  { text: "我往前跑 迷幻的神态都做到", time: "00:32.77" },
  { text: "回头的次数刚刚好", time: "00:33.39" },
  { text: "控制狂 你到底想怎样", time: "00:36.95" },
  { text: "因为你我想要大声唱", time: "00:40.64" },
  { text: "Wow wow wow", time: "00:43.50" },
  { text: "控制狂 你美丽的声响", time: "00:50.54" },
  { text: "沿着你我流进了海洋", time: "00:53.78" },
  { text: "Wow wow wow", time: "00:56.78" },
  { text: "没道理 都迷恋的", time: "01:10.38" },
  { text: "一整天 绕圈圈打转", time: "01:13.75" },
  { text: "没办法 都需要的", time: "01:16.50" },
  { text: "一整夜 不可征服之幻", time: "01:20.30" },
  { text: "没有钟表", time: "01:23.49" },
  { text: "对着爱这个主题思考", time: "01:26.55" },
  { text: "我就想要", time: "01:29.97" },
  { text: "把所有生命都消耗", time: "01:33.03" },
  { text: "研究你所有的无聊", time: "01:36.34" },
  { text: "控制狂 亲密得就好像", time: "01:39.84" },
  { text: "蛋壳里的蛋白和蛋黄", time: "01:43.49" },
  { text: "Wow wow wow", time: "01:46.55" },
  { text: "控制狂 你美丽的声响", time: "01:53.11" },
  { text: "沿着你我流进了海洋", time: "01:56.66" },
  { text: "Wow wow wow", time: "01:59.91" },
  { text: "控制狂 你到底想怎样", time: "02:39.42" },
  { text: "因为你我想要大声唱", time: "02:43.17" },
  { text: "Wow wow wow", time: "02:45.97" },
  { text: "控制狂 你美丽的声响", time: "02:52.72" },
  { text: "沿着你我流进了海洋", time: "02:56.15" },
  { text: "Wow wow wow", time: "02:59.89" },
  { text: "听你安排的豢养", time: "03:05.96" },
  { text: "听你所有的话 谁在乎太阳", time: "03:08.77" },
  { text: "盲目的手 抚慰我的擦伤", time: "03:15.35" },
  { text: "让你命令我歌唱 让你将我捆绑", time: "03:19.10" },
  { text: "谁在乎光亮 丢掉自由", time: "03:25.99" },
  { text: "就是自由的方法", time: "03:29.35" },
  { text: "Wow wow wow", time: "03:32.09" },
  { text: "Wow wow wow", time: "03:39.08" },
  { text: "没什么 我可以的", time: "03:58.86" }
],
 currentTime: 0
      }
    },
    mounted() {
      const audio = this.$refs.audioPlayer;
      audio.addEventListener('timeupdate', this.handleTimeUpdate);
    },
    methods: {
      handleTimeUpdate(event) {
  
        this.currentTime = event.target.currentTime;
      }
    }
  }
  </script>
  
  <style>
  /* 其他样式 */
  </style>
  