<template>
  <div>
    <nav>
      商城
    </nav>
    <div class="content">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" class="img" />
        </van-swipe-item>
      </van-swipe>
      <div class="points">
        <div class="title" @click="linkToExchange">
          <span>积分兑换礼品</span>
          <img src="../assets/img/shopping/more.png" alt="" />
        </div>
        <div class="block">
          <div v-for="(item, index) in points" :key="index" class="list">
            <img :src="item.img" alt="" />
            <div class="information">
              <span class="price"> ￥{{ item.price }} </span>
              <i class="exchange">
                {{ item.exchange }}
              </i>
            </div>
            <p class="describe">{{ item.title }}</p>
          </div>
        </div>
      </div>
      <div class="points">
        <div class="title" v-on:click="linkTo">
          <span>热销榜单</span>
          <img src="../assets/img/shopping/more.png" alt="" />
        </div>
        <div class="block">
          <div v-for="(item, index) in hotsale" :key="index" class="list">
            <img :src="item.img" alt="" />
            <div class="information">
              <span class="price"> ￥{{ item.price }} </span>
            </div>
            <p class="describe">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "../components/tabbar";
export default {
  name: "Shopping",
  components: { tabbar },
  data() {
    return {
      images: [
        require("../assets/img/shopping/banner left.png"),
        require("../assets/img/shopping/banner right.png"),
        require("../assets/img/shopping/image banner.png")
      ],
      points: [
        {
          title: "女朋友小仙女专用座贴纸",
          img: require("../assets/img/shopping/image2.png"),
          price: "10",
          exchange: "500积分可兑换"
        },
        {
          title: "汽车饰品创意陶瓷招财猫挂饰",
          img: require("../assets/img/shopping/image1.png"),
          price: "19",
          exchange: "800积分可兑换"
        },
        {
          title: "活性炭去除甲醛除碳汽车用",
          img: require("../assets/img/shopping/image4.png"),
          price: "29",
          exchange: "1500积分可兑换"
        }
      ],
      hotsale: [
        {
          title: "车载手机支架磁铁吸盘式支撑",
          img: require("../assets/img/shopping/image3.png"),
          price: "88"
        },
        {
          title: "汽车后视镜防雨贴膜全屏倒车镜",
          img: require("../assets/img/shopping/image6.png"),
          price: "165"
        },
        {
          title: "车载手机支架磁铁吸盘式支撑",
          img: require("../assets/img/shopping/image5.png"),
          price: "56"
        }
      ]
    };
  },
  methods: {
    linkTo() {
      this.$router.push({
        name: "hotsale"
      });
    },
    linkToExchange() {
      this.$router.push({
        name: "exchange"
      });
    }
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

.content {
  position: absolute;
  top: 0.95rem;
  left: 0;
  right: 0;
  bottom: 1rem;
  overflow-y: auto;
  .van-swipe {
    margin-top: 0.2rem;
    height: 2.63rem;
    .img {
      width: 100%;
      height: 2.62rem;
    }
  }
  .points {
    padding: 0 0.3rem;
    border-bottom: 0.01rem solid rgba(234, 234, 234, 1);
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.2rem;
      span {
        font-size: 0.36rem;
        color: #333;
        font-weight: bold;
      }
      img {
        width: 0.16rem;
        height: 0.3rem;
      }
    }
    .block {
      display: flex;
      justify-content: space-between;
      .list {
        height: 3.3rem;
        width: 2.16rem;
        margin: 0.2rem 0 0.25rem;
        img {
          width: 2rem;
        }
        .describe {
          font-size: 0.26rem;
          color: #000;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .information {
          height: 0.2rem;
          font-size: 0.2rem;
          display: flex;
          justify-content: space-between;
          color: #666;
          margin-bottom: 0.2rem;
          align-items: center;
          .price {
            font-size: 0.28rem;
            color: #ff1a1a;
          }
        }
      }
    }
  }
}
</style>
