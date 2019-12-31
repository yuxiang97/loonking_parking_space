<template>
  <div>
    <nav>
      我的订单
    </nav>
    <div class="content">
      <van-tabs @click="onClick">
        <van-tab title="停车订单">
          <div>
            <div class="list">
              <p class="time">
                本月
              </p>
              <div
                class="information"
                v-for="(item, index) in thisMonth"
                :key="index"
              >
                <img :src="item.img" alt="" />
                <div class="text">
                  <p class="place">{{ item.title }}</p>
                  <i>{{ item.date }}</i>
                </div>
                <div class="plateNumber">{{ item.licensePlate }}</div>
                <div class="price">{{ item.price }}</div>
              </div>
            </div>
            <div class="list">
              <p class="time">
                九月
              </p>
              <div
                class="information"
                v-for="(item, index) in sep"
                :key="index"
              >
                <img :src="item.img" alt="" />
                <div class="text">
                  <p class="place">{{ item.title }}</p>
                  <i>{{ item.date }}</i>
                </div>
                <div class="plateNumber">{{ item.licensePlate }}</div>
                <div class="price">{{ item.price }}</div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="商城订单">
          <div class="box" v-for="(item, index) in shoppingOrder" :key="index">
            <div class="header">
              <img :src="item.nameImg" alt="" />
              <span>{{ item.name }}</span>
            </div>
            <div class="details">
              <img :src="item.img" alt="" />
              <div class="text">
                <p class="designation">
                  {{ item.title }}
                </p>
                <p class="color">
                  {{ item.color }}
                </p>
              </div>
              <div class="other">
                <p class="price">{{ item.price }}</p>
                <p class="num">{{ item.num }}</p>
                <p class="preferential">
                  {{ item.preferential }}
                </p>
                <div>
                  <span>实付:</span>
                  <i class="realPay">{{ item.realPay }}</i>
                </div>
              </div>
            </div>
            <van-button color="#8D8D8D" plain>查看物流</van-button>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "../components/tabbar";
export default {
  name: "Order",
  components: { tabbar },
  data() {
    return {
      thisMonth: [
        {
          title: "临停-ETCP停车场",
          img: require("../assets/img/order/img1.png"),
          price: "-3.00",
          date: "10月27日 12:25",
          licensePlate: "陕A1233H"
        },
        {
          title: "临停-华润置地停车场",
          img: require("../assets/img/order/img2.png"),
          price: "-5.00",
          date: "10月25日 10:05",
          licensePlate: "陕9877H"
        }
      ],
      sep: [
        {
          title: "临停-唐乐宫停车场",
          img: require("../assets/img/order/img3.png"),
          price: "-6.00",
          date: "9月20日 18:41",
          licensePlate: "陕1222H"
        },
        {
          title: "临停-华润置地停车场",
          img: require("../assets/img/order/img4.png"),
          price: "-5.00",
          date: "10月25日 10:05",
          licensePlate: "陕9877H"
        },
        {
          title: "临停-华润置地停车场",
          img: require("../assets/img/order/img5.png"),
          price: "-5.00",
          date: "10月25日 10:05",
          licensePlate: "陕9877H"
        }
      ],
      shoppingOrder: [
        {
          title: "定制创意小仙女专座贴副驾 驶女朋友专用装饰车贴",
          name: "舒倚安琪舰店",
          nameImg: require("../assets/img/order/shoppingOrder/img4.png"),
          img: require("../assets/img/order/shoppingOrder/img1.png"),
          color: "颜色分类：七彩 猫咪款式【私人定制】",
          price: "￥21.8",
          preferential: "积分抵扣：￥-10.00",
          num: "x1",
          realPay: "￥11.8"
        },
        {
          title: "车内除味竹炭包石墨烯活性碳除甲醛汽车用品",
          name: "永嘉兴车品专营店",
          nameImg: require("../assets/img/order/shoppingOrder/img2.png"),
          img: require("../assets/img/order/shoppingOrder/img3.png"),
          color: "颜色分类：七彩 猫咪款式【私人定制】",
          price: "158",
          preferential: "",
          num: "x1",
          realPay: "￥158"
        }
      ]
    };
  },
  methods: {
    onClick() {}
  }
};
</script>

<style lang="scss">
nav {
  font-size: 0.32rem;
  color: #fffefe;
  line-height: 0.94rem;
}
.content {
  position: absolute;
  top: 0.95rem;
  left: 0;
  right: 0;
  bottom: 1rem;
  overflow-y: auto;
  .van-tabs__wrap.van-hairline--top-bottom {
    height: 1.3rem;
  }
  .van-tabs--line {
    height: 1.3rem;
  }
  .van-tabs__nav {
    height: 1.3rem;
    .van-tab {
      height: 0.7rem;
      line-height: 0.7rem;
      border: 0.01rem solid #ff803d;
      z-index: 10;
      margin: 0.3rem 0;
    }
  }
  .van-tabs__nav--line {
    padding: 0;
  }
  .van-tabs__line {
    height: 0;
    background: black;
  }
  .list {
    .time {
      line-height: 0.64rem;
      background: #eaeaea;
      font-size: 0.26rem;
      color: #333;
      text-align: center;
    }
    .information {
      height: 1.22rem;
      display: flex;
      justify-content: space-between;
      border-bottom: 0.01rem solid rgba(234, 234, 234, 1);
      img {
        height: 0.82rem;
        width: 0.82rem;
        margin: 0.2rem 0 0 0.3rem;
      }
      .text {
        padding: 0.32rem 0 0 0.2rem;
        width: 40%;
        height: 100%;
        box-sizing: border-box;
        .place {
          font-size: 0.26rem;
          color: #666;
        }
        i {
          display: block;
          font-size: 0.24rem;
          color: #9b9b9b;
        }
      }
      .plateNumber {
        font-size: 0.24rem;
        color: #666;
        width: 18%;
        line-height: 1.22rem;
      }
      .price {
        font-size: 0.32rem;
        width: 15%;
        line-height: 1.22rem;
      }
    }
  }
  .box {
    width: 6.9rem;
    height: 3.26rem;
    margin: 0 auto 0.2rem;
    background: #f9fefe;
    border-radius: 0.2rem;
    position: relative;
    .header {
      height: 0.6rem;
      width: 100%;
      display: flex;
      padding: 0.2rem 0 0 0.2rem;
      img {
        width: 0.6rem;
        height: 0.6rem;
      }
      span {
        color: #4f4f4f;
        font-size: 0.3rem;
        margin-left: 0.18rem;
        line-height: 0.6rem;
      }
    }
    .details {
      height: 1.46rem;
      width: 100%;
      margin-top: 0.2rem;
      display: flex;
      img {
        height: 1.46rem;
      }
      .text {
        margin-left: 0.15rem;
        width: 50%;
        height: 100%;
        .designation {
          font-size: 0.26rem;
          color: #666;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .color {
          width: 90%;
          margin-top: 0.2rem;
          font-size: 0.22rem;
          color: #c1c1c1;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }
      .other {
        width: 30%;
        text-align: right;
        font-size: 0.22rem;
        .price {
          font-size: 0.26rem;
          color: #333;
        }
        .num {
          color: #ababab;
        }
        .preferential {
          color: #c1c1c1;
          margin-top: 0.2rem;
        }
        div {
          .realPay {
            font-size: 0.24rem;
            color: #ff0909;
          }
        }
      }
    }
    .van-button {
      width: 1.46rem;
      height: 0.4rem;
      border-radius: 0.2rem;
      font-size: 0.22rem;
      padding: 0;
      line-height: 0.35rem;
      position: absolute;
      bottom: 0.2rem;
      right: 0.2rem;
    }
  }
}
</style>
