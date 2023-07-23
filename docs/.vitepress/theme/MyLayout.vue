<!-- .vitepress\theme\MyLayout.vue -->
<script setup>
import DefaultTheme from 'vitepress/theme'
import ValineComment from './ValineComment.vue';
import Comments from './comments.vue';
import Title from './Title.vue';
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-before>
      <Title />
    </template>
    <template #doc-after>
      <!-- <ValineComment /> -->
      <Comments />
    </template>
  </Layout>
</template>
