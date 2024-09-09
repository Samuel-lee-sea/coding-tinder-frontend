<template>
  <van-nav-bar
    title="title"
    left-arrow
  >
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>


  <van-tabbar v-model="active" >
    <van-tabbar-item icon="home-o" name="index">home</van-tabbar-item>
    <van-tabbar-item icon="search" name="search">search</van-tabbar-item>
    <van-tabbar-item icon="friends-o" name="team">team</van-tabbar-item>
  </van-tabbar>


</template>

<script setup>
    import { ref } from 'vue';
   

    // const onClickLeft = () => alert('left');
    // const onClickRight = () => alert('right');

    const active = ref("index");
</script>

<style scoped>
  .van-nav-bar {
      width: 100%;
      left: 0;
      top: 0;
      position: fixed;
  }
</style>