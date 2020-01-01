<template>
  <div>
    <nav>
      我的
    </nav>
    <div class="content">
      <div class="userinfo">
        <img src="../assets/img/my/img.png" alt="" />
        <div class="username">昵称</div>
        <div class="vip">会员等级</div>
      </div>
      <div class="list">
        <router-link to="">
          <span>
            <img src="../assets/img/my/icon3.png" alt="" />
          </span>
          <i>我的钱包</i>
        </router-link>
        <router-link to="">
          <span>
            <img src="../assets/img/my/icon4.png" alt="" />
          </span>
          <i>我的积分</i>
        </router-link>
        <router-link to="">
          <span>
            <img src="../assets/img/my/icon7.png" alt="" />
          </span>
          <i>领取红包</i>
        </router-link>
      </div>
      <div class="list">
        <router-link to="">
          <span>
            <img src="../assets/img/my/icon1.png" alt="" />
          </span>
          <i>新手指南</i>
        </router-link>
        <router-link to="">
          <span>
            <img src="../assets/img/my/icon5.png" alt="" />
          </span>
          <i>设置</i>
        </router-link>
        <router-link to="">
          <span>
            <img src="../assets/img/my/icon6.png" alt="" />
          </span>
          <i>意见反馈</i>
        </router-link>
        <router-link to="">
          <span>
            <img src="../assets/img/my/icon2.png" alt="" />
          </span>
          <i>关于找车位</i>
        </router-link>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "../components/tabbar";
export default {
  name: "My",
  components: { tabbar }
};
</script>

<style lang="scss" scoped>
.content {
  position: absolute;
  top: 0.95rem;
  left: 0;
  right: 0;
  bottom: 1rem;
  overflow-y: auto;
  .userinfo {
    height: 2.73rem;
    text-align: center;
    border-bottom: 0.01rem solid #e8e8e8;
    img {
      width: 1.02rem;
      height: 1.02rem;
      margin-top: 0.4rem;
    }
    .username {
      font-size: 0.3rem;
      color: #666;
    }
    .vip {
      font-size: 0.24rem;
      color: #2f2f2f;
    }
  }
  .list {
    margin-top: 0.12rem;
    a {
      display: flex;
      height: 0.88rem;
      display: flex;
      justify-content: space-between;
      span {
        display: block;
        width: 16%;
        height: 100%;
        background: white;
        position: relative;
        img {
          width: 0.34rem;
          height: 0.3rem;
          position: absolute;
          top: 50%;
          left: 50%;
          margin-top: -0.17rem;
          margin-left: -0.15rem;
        }
      }
      i {
        flex: 1;
        font-size: 0.26rem;
        color: #2f2f2f;
        line-height: 0.88rem;
        border-bottom: 0.02rem solid #e8e8e8;
      }
    }
  }
}
</style>
