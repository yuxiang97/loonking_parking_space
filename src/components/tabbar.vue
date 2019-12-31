<template>
  <div class="tabber">
    <router-link class="link" :to="{ name: 'home' }">
      <img
        v-if="$route.name === 'home'"
        src="../assets/img/tab-bar/parking-.png"
        alt=""
      />
      <img v-else src="../assets/img/tab-bar/Parking.png" alt="" />
      <span>找车位</span>
    </router-link>
    <router-link class="link" :to="{ name: 'shopping' }">
      <img
        v-if="$route.name === 'shopping'"
        src="../assets/img/tab-bar/shopping-.png"
        alt=""
      />
      <img v-else src="../assets/img/tab-bar/shopping.png" alt="" />
      <span>商城</span>
    </router-link>
    <router-link class="link" :to="{ name: 'order' }">
      <img
        v-if="$route.name === 'order'"
        src="../assets/img/tab-bar/od-.png"
        alt=""
      />
      <img v-else src="../assets/img/tab-bar/od.png" alt="" />
      <span>订单</span>
    </router-link>
    <router-link class="link" :to="{ name: 'my' }">
      <img
        v-if="$route.name === 'my'"
        src="../assets/img/tab-bar/my-.png"
        alt=""
      />
      <img v-else src="../assets/img/tab-bar/my.png" alt="" />
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "tabbar"
};
</script>

<style lang="scss" scoped>
.tabber {
  height: 0.98rem;
  width: 100%;
  display: flex;
  background: rgba(249, 249, 249, 1);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  a {
    /*display: block;*/
    width: 25%;
    height: 0.98rem;
    color: #b0b0b0;
    img {
      display: block;
      margin: 0 auto;
      width: 0.5rem;
      height: 0.5rem;
    }
    span {
      font-size: 0.2rem;
      display: block;
      line-height: 0.6rem;
      /*color: #b0b0b0;*/
      text-align: center;
    }
    &.red-active {
      color: #ff7126;
    }
  }
}
</style>
