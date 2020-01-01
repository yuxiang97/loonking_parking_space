<template>
  <div>
    <nav>
      热销榜单
      <div @click="$router.back(-1)">
        <img src="../assets/img/hotsale/more.png" alt="" />
      </div>
    </nav>
    <div class="content">
      <div class="block">
        <div v-for="(item, index) in commodity" :key="index" class="list">
          <img :src="item.img" alt="" />
          <div class="information">
            <span class="price"> ￥{{ item.price }} </span>
          </div>
          <p class="describe">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hotsale",
  data() {
    return {
      commodity: [
        {
          title: "车载手机支架磁铁吸盘式支撑",
          img: require("../assets/img/hotsale/img1.png"),
          price: "88"
        },
        {
          title: "汽车后视镜防雨贴膜全屏倒车镜",
          img: require("../assets/img/hotsale/img3.png"),
          price: "165"
        },
        {
          title: "车载手机支架磁铁吸盘式支撑",
          img: require("../assets/img/hotsale/img2.png"),
          price: "56"
        },
        {
          title: "四季通用汽车坐垫全包小车座椅垫",
          img: require("../assets/img/hotsale/img4.png"),
          price: "498"
        },
        {
          title: "普利邦车载空气净化器",
          img: require("../assets/img/hotsale/img5.png"),
          price: "1580"
        },
        {
          title: "CL小型迷你车载冰箱冷热两用",
          img: require("../assets/img/hotsale/img6.png"),
          price: "417"
        },
        {
          title: "途雅汽车香水车载座式香水",
          img: require("../assets/img/hotsale/img7.png"),
          price: "138"
        },
        {
          title: "汽车脚垫全包围丝圈脚垫",
          img: require("../assets/img/hotsale/img8.png"),
          price: "568"
        },
        {
          title: "米乔人体工学汽车腰靠腰垫",
          img: require("../assets/img/hotsale/img9.png"),
          price: "179"
        },
        {
          title: "途雅汽车香水车载座式香水",
          img: require("../assets/img/hotsale/img10.png"),
          price: "138"
        },
        {
          title: "汽车脚垫全包围丝圈脚垫",
          img: require("../assets/img/hotsale/img11.png"),
          price: "568"
        },
        {
          title: "米乔人体工学汽车腰靠腰垫",
          img: require("../assets/img/hotsale/img12.png"),
          price: "179"
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
