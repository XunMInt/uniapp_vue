<template>
  <view class="body">
    <swiper class="swiper" autoplay circular interval="3000" indicator-dots>
      <swiper-item v-for="(item, index) in goodsSwiper" :key="index">
        <image :src="item.src" />
      </swiper-item>
    </swiper>
    <view class="goods" v-for="(item, index) in goodsInfo" :key="index">
      <view class="price">
        <text>￥{{item.sell_price}}</text>
        <text>
          <s>￥{{item.market_price}}</s>
        </text>
      </view>
      <view class="name">{{item.title}}</view>

      <view class="modle">
        <view>货号：{{item.goods_no}}</view>
        <view>库存：{{item.stock_quantity}}</view>
      </view>
      <view class="title">详情介绍</view>
      <view class="content">
        <rich-text :nodes="goodsContent"></rich-text>
      </view>
    </view>
    <view class="bottom">
      <uni-goods-nav
        
        :options="options"
        :buttonGroup="buttonGroup"
        @click="onClick"
        @buttonClick="buttonClick"
      />
    </view>
  </view>
</template>

<script>
import uniGoodsNav from "@/components/uni-goods-nav/uni-goods-nav.vue";
export default {
  data() {
    return {
      //查询ID
      id: 0,
      //商品详情轮播图
      goodsSwiper: [],
      //商品参数
      goodsInfo: [],
      //商品详情介绍
      goodsContent: "",
      options: [
        {
          icon: "headphones",
          text: "客服",
        },
        {
          icon: "shop",
          text: "店铺",
          info: 0,
          infoBackgroundColor: "#007aff",
          infoColor: "red",
        },
        {
          icon: "cart",
          text: "购物车",
          info: 2,
        },
      ],
      buttonGroup: [
        {
          text: "加入购物车",
          backgroundColor: "#ff0000",
          color: "#fff",
        },
        {
          text: "立即购买",
          backgroundColor: "#ffa200",
          color: "#fff",
        },
      ],
    };
  },
  components: { uniGoodsNav },
  onLoad(options) {
    this.id = options.id;
    this.getGoodsSwiper();
    this.getGoodsInfo();
    this.getGoodsContetn();
  },
  methods: {
    //获取商品详情轮播图
    async getGoodsSwiper() {
      const { data } = await this.$myRequest({
        url: "/api/getthumimages/" + this.id,
      });
      this.goodsSwiper = data.message;
    },
    //获取商品参数
    async getGoodsInfo() {
      const { data } = await this.$myRequest({
        url: "/api/goods/getinfo/" + this.id,
      });
      this.goodsInfo = data.message;
    },
    //获取商品详情介绍
    async getGoodsContetn() {
      const { data } = await this.$myRequest({
        url: "/api/goods/getdesc/" + this.id,
      });
      this.goodsContent = data.message[0].content;
    },
    onClick(e) {
      uni.showToast({
        title: `点击${e.content.text}`,
        icon: "none",
      });
    },
    buttonClick(e) {
      console.log(e);
      this.options[2].info++;
    },
  },
};
</script>

<style lang="less">
uni-page-body,
.body {
  height: 100%;
}
.swiper {
  width: 750rpx;
  height: 700rpx;
  image {
    width: 100%;
    height: 100%;
  }
}
.goods {
  .price {
    padding: 0 20rpx;
    text:nth-child(1) {
      font-size: 34rpx;
      color: #b50e03;
      line-height: 80rpx;
      margin-right: 20rpx;
    }
    text:nth-child(2) {
      font-size: 28rpx;
      color: #ccc;
    }
  }
  .name {
    padding: 0rpx 20rpx;
    padding-bottom: 20rpx;
    font-size: 32rpx;
    line-height: 60rpx;
    border-bottom: 5px solid #eee;
  }
  .modle {
    padding: 0 20rpx;
    font-size: 32rpx;
    line-height: 70rpx;
    border-bottom: 5px solid #eee;
  }
  .title {
    padding: 0 20rpx;
    font-size: 32rpx;
    line-height: 70rpx;
    border-bottom: 1px solid #eee;
  }
  .content {
    // padding: 20rpx;
    font-size: 28rpx;
    color: #333;
	line-height: 50rpx;
	margin-bottom: 100rpx;
  }
}
.bottom {
  position: fixed;
  width: 750rpx;
  bottom: 0;
}
</style>
