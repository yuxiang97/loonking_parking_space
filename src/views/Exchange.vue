<template>
  <div>
    <nav>
      积分兑换礼品
      <div @click="$router.back(-1)">
        <img src="../assets/img/exchange/more.png" alt="" />
      </div>
    </nav>
    <div class="content">
      <div class="block">
        <div v-for="(item, index) in exchange" :key="index" class="list">
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
  </div>
</template>

<script>
export default {
  name: "Exchange",
  data() {
    return {
      exchange: [
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
        },
        {
          title: "全新一代黑科技免擦拭玻璃油膜",
          img: require("../assets/img/exchange/img1.png"),
          price: "38",
          exchange: "1800积分可兑换"
        },
        {
          title: "车钥匙挂件创意男士车钥匙挂件",
          img: require("../assets/img/exchange/img2.png"),
          price: "24",
          exchange: "800积分可兑换"
        },
        {
          title: "汽车湖景枕靠车载腰靠一对",
          img: require("../assets/img/exchange/img3.png"),
          price: "20",
          exchange: "1500积分可兑换"
        },
        {
          title: "车载手机支架仪表盘台前档玻璃导航",
          img: require("../assets/img/exchange/img6.png"),
          price: "39",
          exchange: "1800积分可兑换"
        },
        {
          title: "汽车香水车载香薰车用出风口香水座",
          img: require("../assets/img/exchange/img5.png"),
          price: "21",
          exchange: "900积分可兑换"
        },
        {
          title: "车仆汽车除臭剂去除异味",
          img: require("../assets/img/exchange/img4.png"),
          price: "32",
          exchange: "1500积分可兑换"
        },
        {
          title: "车载手机支架仪表盘台前档玻璃导航",
          img: require("../assets/img/exchange/img7.png"),
          price: "39",
          exchange: "1800积分可兑换"
        },
        {
          title: "汽车香水车载香薰车用出风口香水座",
          img: require("../assets/img/exchange/img8.png"),
          price: "21",
          exchange: "900积分可兑换"
        },
        {
          title: "车仆汽车除臭剂去除异味",
          img: require("../assets/img/exchange/img9.png"),
          price: "32",
          exchange: "1500积分可兑换"
        }
      ]
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
  position: absolute;
  top: 0.95rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  padding: 0.3rem;
  .block {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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
</style>
