<template>
  <div class="lyrics-scroll">
    <ul ref="lyricsList">
      <li
        v-for="(lyric, index) in lyrics"
        :key="index"
        :data-time="lyric.time"
      >
        {{ lyric.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    lyrics: {
      type: Array,
      required: true,
    },
    currentTime: {
      type: Number,
      required: true,
    },
  },
  mounted() {
  

  },
  methods: {

    scrollLyrics() {
    const currentTime = this.currentTime;
    const lyricsList = this.$refs.lyricsList;
    const lyricsLines = lyricsList.querySelectorAll('li');
    const lineHeight = lyricsLines[0].offsetHeight;
    for (let i = 0; i < lyricsLines.length; i++) {
      const time = lyricsLines[i].getAttribute("data-time");
      const [minutes, seconds] = time.split(":");
      const lineTime = minutes * 60 + parseFloat(seconds);
      if (currentTime >= lineTime) {
        lyricsList.style.transform = `translateY(-${i * lineHeight}px)`;
      }
    }
  }
  },
  watch: {
    currentTime() {
      this.scrollLyrics();
    },
  },
};
</script>

<style scoped>
.vp-doc li + li {
  margin-top: 0 !important;
}

.lyrics-scroll {
  position: absolute;
  top: 89%;
  left: 82%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 100px;
  overflow: hidden;
}

.lyrics-scroll ul {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  transition: transform 0.3s ease-in-out;
}

.lyrics-scroll li {
  height: 20px;
  line-height: 20px;
}
</style>
