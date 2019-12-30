<template>
  <div>
    <nav>
      商城
    </nav>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" class="img" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Shopping",
  data() {
    return {
      images: [
        require("../assets/img/shopping/banner left.png"),
        require("../assets/img/shopping/banner right.png")
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
nav {
  height: 0.94rem;
  line-height: 0.94rem;
  font-size: 0.32rem;
  text-align: center;
  color: #ffffff;
}

.img {
  width: 100%;
  height: 2.62rem;
}
</style>
