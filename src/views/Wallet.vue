<template>
  <div>
    <nav>
      设置
      <div @click="$router.back(-1)">
        <img src="../assets/img/exchange/more.png" alt="" />
      </div>
    </nav>
    <ul>
      <li @click="linkTo()">
        <span>
          <img src="../assets/img/wallet/chongzhi.png" alt="" />
          <i>充值</i>
        </span>
        <img src="../assets/img/wallet/more.png" alt="" class="more" />
      </li>
      <li>
        <span>
          <img src="../assets/img/wallet/voucher.png" alt="" />
          <i>优惠券</i>
        </span>
        <img src="../assets/img/wallet/more.png" alt="" class="more" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "wallet",
  methods: {
    linkTo() {
      this.$router.push({
        name: "top-up"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  position: relative;
  div {
    position: absolute;
    top: 0.3rem;
    left: 0.34rem;
    img {
      width: 0.25rem;
      height: 0.4rem;
    }
  }
}
ul {
  padding: 0 0.3rem;
  box-sizing: border-box;
  li {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 1.11rem;
    align-items: center;
    border-bottom: 0.01rem solid rgba(225, 225, 225, 1);

    span {
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;

      img {
        float: left;
        width: 0.4rem;
        height: 0.35rem;
      }

      i {
        font-size: 0.3rem;
        color: #7a7a7a;
        margin-left: 0.26rem;
      }
    }

    .more {
      width: 0.16rem;
      height: 0.4rem;
    }
  }
}
</style>
