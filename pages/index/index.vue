<template>
  <view>
    <!-- 轮播图 -->
    <swiper
      class="swiper"
      autoplay
      circular
      interval="3000"
      indicator-dots
      indicator-color="rgba(255, 255, 255, .8)"
      indicator-active-color="#b50e02"
    >
      <swiper-item v-for="(item, index) in swiperList" :key="index">
        <image class="swiper-img" :src="item.img" mode="widthFix" />
      </swiper-item>
    </swiper>
    <!-- 导航 -->
    <view class="nav">
      <view class="nav-item" v-for="(item, index) in navList" :key="index">
        <view :class="item.icon" @click="goto(item.path)"></view>
        <text>{{item.name}}</text>
      </view>
    </view>
    <!-- 推荐商品 -->
    <view class="goods">
      <view class="goods-title">
        <text>推荐商品</text>
      </view>
      <goods-list :goods="goodsList" @goodsClick="goToContent"></goods-list>
    </view>
  </view>
</template>

<script>
import goods from "../../components/goodsList";
export default {
  data() {
    return {
      //轮播图数据
      swiperList: [],
      //商品数据
      goodsList: [],
      navList: [
        {
          name: "迅梦超市",
          icon: "iconfont icon-ziyuan",
          path: "../../pages/shops/shops",
        },
        {
          name: "社区图片",
          icon: "iconfont icon-tupian",
          path: "../../pages/pics/pics",
        },
        {
          name: "学习视频",
          icon: "iconfont icon-shipin",
          path: "../../pages/videos/videos",
        },
        {
          name: "联系我们",
          icon: "iconfont icon-guanyuwomen",
          path: "../../pages/contact/contact",
        },
      ],
    };
  },
  onLoad() {
    this.getSwipers();
    this.getGoodsList();
  },
  components: {
    "goods-list": goods,
  },
  methods: {
    //获取轮播图数据
    async getSwipers() {
      const { data } = await this.$myRequest({ url: "/api/getlunbo" });
      this.swiperList = data.message;
    },
    //获取商品列表
    async getGoodsList() {
      const { data } = await this.$myRequest({
        url: "/api/getgoods?pageindex=1",
      });
      this.goodsList = data.message;
    },
    //跳转界面
    goto(url) {
      uni.navigateTo({ url: url });
    },
    //跳转商品详情页
    goToContent(id) {
      uni.navigateTo({
        url: "../../pages/goodsContent/goodsContent?id=" + id,
      });
    },
  },
};
</script>

<style lang="less">
.swiper {
  height: 380rpx;
  .swiper-img {
    width: 100%;
    height: 380rpx !important;
  }
}
.nav {
  display: flex;
  text-align: center;
  font-size: 30rpx;

  .nav-item {
    flex: 1;
  }
  .iconfont {
    width: 120rpx;
    height: 120rpx;
    text-align: center;
    font-size: 50rpx;
    line-height: 120rpx;
    color: #fff;
    background-color: #b50e02;
    border-radius: 60rpx;
    margin: 10px auto;
  }
  .icon-tupian {
    font-size: 45rpx;
  }
}
.goods {
  margin-top: 20rpx;
  background-color: #eeeeee;
  overflow: hidden;
  .goods-title {
    height: 100rpx;
    margin: 10rpx 0;
    line-height: 100rpx;
    color: #b50e03;
    text-align: center;
    background-color: #fff;
    letter-spacing: 40rpx;
    text {
      font-size: 38rpx;
    }
  }
}
</style>
