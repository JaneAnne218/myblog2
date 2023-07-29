<template>
    <div class="ball"></div>
</template>
<script lang="ts" setup>
</script>
<style scoped>
.ball {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #fff 10%, #f00 70%);
  box-shadow: 0 0 10px rgba(0,0,0,0.5),
              0 0 20px rgba(0,0,0,0.3) inset;
}
</style>