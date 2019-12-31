<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: true
    };
  },
  mounted() {
    this.flag = false;
    // const self = this;
    /*setTimeout(() => {
      self.flag = false;
    }, 2000);*/
  }
};
</script>
<style></style>
