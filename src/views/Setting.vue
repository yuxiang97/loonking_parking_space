<template>
  <div>
    <nav>
      设置
      <div @click="$router.back(-1)">
        <img src="../assets/img/exchange/more.png" alt="" />
      </div>
    </nav>
    <div class="content">
      <ul>
        <li>
          <span>
            <img src="../assets/img/setting/infor.png" alt="" />
            <i>通知</i>
          </span>
          <img src="../assets/img/setting/more.png" alt="" class="more" />
        </li>
        <li>
          <span>
            <img src="../assets/img/setting/changenumber.png" alt="" />
            <i>切换账号</i>
          </span>
          <img src="../assets/img/setting/more.png" alt="" class="more" />
        </li>
        <li>
          <span>
            <img src="../assets/img/setting/logput.png" alt="" />
            <i>当前版本</i>
          </span>
          <img src="../assets/img/setting/more.png" alt="" class="more" />
        </li>
        <li>
          <span>
            <img src="../assets/img/setting/currentversion.png" alt="" />
            <i>注销</i>
          </span>
          <img src="../assets/img/setting/more.png" alt="" class="more" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "setting"
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
}
</style>
