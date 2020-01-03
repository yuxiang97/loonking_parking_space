<template>
  <div>
    <nav>
      充值
      <div @click="$router.back(-1)">
        <img src="../assets/img/exchange/more.png" alt="" />
      </div>
    </nav>
    <div class="content">
      <div class="money">
        充值金额
      </div>
      <div class="choose">
        <div class="bottom">
          选择充值方式
        </div>
        <van-radio-group v-model="radio">
          <div class="list">
            <div>
              <img src="../assets/img/top-up/wechat.png" alt="" />
              <span>微信</span>
            </div>
            <van-radio name="0" checked-color="#07c160" icon-size=".3rem" />
          </div>
          <div class="list">
            <div>
              <img src="../assets/img/top-up/zhifubao.png" alt="" />
              <span>支付宝</span>
            </div>
            <van-radio name="1" checked-color="#07c160" icon-size=".3rem" />
          </div>
        </van-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top-up",
  data() {
    return {
      radio: ""
    };
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
.content {
  padding: 0 0.3rem;
  .money {
    width: 6.9rem;
    height: 0.86rem;
    text-align: center;
    line-height: 0.86rem;
    margin: 0.4rem 0;
    border: 0.02rem solid rgba(255, 113, 38, 1);
    box-sizing: border-box;
    border-radius: 0.2rem;
    font-size: 0.34rem;
    color: #696969;
  }
  .choose {
    font-size: 0.36rem;
    color: #393939;
    .bottom {
      padding-bottom: 0.2rem;
      border-bottom: 0.01rem solid rgba(239, 239, 239, 1);
    }
    .list {
      height: 0.69rem;
      border-bottom: 0.01rem solid rgba(239, 239, 239, 1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 0.69rem;
      div {
        img {
          width: 0.3rem;
          height: 0.3rem;
        }
        span {
          margin-left: 0.4rem;
          font-size: 0.26rem;
          color: #676767;
        }
      }
    }
  }
}
</style>
