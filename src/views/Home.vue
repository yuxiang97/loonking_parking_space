<template>
  <div class="home">
    <div v-if="flag" class="start">
      <div class="page">
        <div class="start-page">
          <img src="../assets/img/home/start-icon.png" alt="" />
          <span>找车位</span>
        </div>
        <p>智能找车位，第一时间找到属于你的车位</p>
      </div>
    </div>
    <div v-else>
      <nav>
        <img src="../assets/img/home/icon6.png" alt="g" />
      </nav>
      <div class="content">
        <van-field placeholder="请输入您的目的地或当前所在地" />
        <div class="item">
          <a href="">
            <img src="../assets/img/home/icon8.png" alt="" />
            <span>加油站</span>
          </a>
          <a href="">
            <img src="../assets/img/home/icon9.png" alt="" />
            <span>洗车</span>
          </a>
          <a href="">
            <img src="../assets/img/home/icon10.png" alt="" />
            <span>维修/保养</span>
          </a>
        </div>
        <div class="parking">
          <div class="title">
            <span>
              附近的停车场/车位
            </span>
            <i>长安北路</i>
          </div>
          <baidu-map :center="center" :zoom="zoom" @ready="handler" class="map">
          </baidu-map>
        </div>
      </div>
      <tabbar></tabbar>
    </div>
  </div>
</template>

<script>
import tabbar from "../components/tabbar";
export default {
  name: "home",
  components: {
    tabbar
  },
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3,
      flag: true
    };
  },
  mounted() {
    const self = this;
    setTimeout(() => {
      self.flag = false;
    }, 2000);
  },
  methods: {
    handler() {
      this.center.lng = 108.953736;
      this.center.lat = 34.246433;
      this.zoom = 15;
    }
  }
};
</script>

<style lang="scss">
.start {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  z-index: 50;
  .page {
    position: absolute;
    bottom: 1rem;
    .start-page {
      height: 0.94rem;
      display: flex;
      margin: 0 0 0.26rem 1.87rem;

      img {
        width: 0.94rem;
        height: 0.94rem;
      }

      span {
        font-size: 0.8rem;
        color: #ff7126;
        line-height: 0.94rem;
        margin-left: 0.33rem;
      }
    }
    p {
      font-size: 0.2rem;
      margin-left: 1.88rem;
    }
  }
}
nav {
  width: 100%;
  height: 0.94rem;
  background: #ff7126;
  position: relative;
  text-align: center;
  img {
    width: 0.6rem;
    height: 0.6rem;
    margin-bottom: 0.14rem;
  }
}

.content {
  position: absolute;
  top: 0.95rem;
  left: 0;
  right: 0;
  bottom: 1rem;
  overflow-y: auto;
  .van-cell {
    width: 6.9rem;
    margin: 0.14rem auto 0;
    .van-field__control {
      width: 6.9rem;
      height: 0.6rem;
      display: block;
      border-radius: 0.2rem;
      padding-left: 0.74rem;
      box-sizing: border-box;
      background: rgba(241, 248, 246, 1);
    }
  }
  .item {
    height: 2.32rem;
    width: 100%;
    display: flex;
    border-bottom: 0.02rem solid #eee;
    a {
      display: block;
      width: 1.3rem;
      height: 1.5rem;
      margin: 0.44rem 0.7rem 0;
      img {
        width: 1.1rem;
        height: 1.1rem;
      }
      span {
        font-size: 0.23rem;
        display: block;
        line-height: 0.1rem;
        color: #b0b0b0;
        text-align: center;
      }
    }
  }
  .parking {
    height: auto;
    padding: 0 0.3rem;
    .title {
      height: 1rem;
      width: 100%;
      display: flex;
      align-items: center;
      span {
        color: #333;
        font-size: 0.36rem;
        font-weight: bold;
      }
      i {
        font-size: 0.26rem;
        color: #666;
        margin-left: 0.17rem;
      }
    }
    .map {
      width: 100%;
      height: 7.5rem;
    }
  }
}
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.98rem;
  display: flex;
}
</style>
