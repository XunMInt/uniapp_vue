<template>
  <view>
    <view class="goods-list">
      <view class="goods-item" v-for="(item, index) in goods" :key="index" @click="goodsItemClick(item.id)">
        <view class="item-img">
          <image :src="item.img_url" mode="widthFix" />
        </view>
        <view class="item-price">
          <text class="price-original">￥{{item.sell_price}}</text>
          <s class="price-Present">￥{{item.market_price}}</s>
        </view>
        <view class="item-name">{{item.title}}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["goods"],
  methods: {
    goodsItemClick(id){
      this.$emit('goodsClick',id)
    }
  },
};
</script>

<style lang="less">
.goods-list {
  padding: 0 15rpx;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .goods-item {
    width: 48.8%;
    background-color: #fff;
    margin: 10rpx 0;
    .item-img {
      width: 80%;
      height: 270rpx;
      padding: 20rpx;
      margin-left: 20rpx;
      image {
        width: 100%;
      }
    }
    .item-price {
      margin-left: 10rpx;
      .price-original {
        color: #b50e03;
        font-size: 36rpx;
        margin-right: 10rpx;
      }
      .price-Present {
        color: #ccc;
        font-size: 14px;
      }
    }
    .item-name {
      margin-left: 10rpx;
      margin-bottom: 10rpx;
      font-size: 28rpx;
      padding: 10rpx;
      line-height: 50rpx;
    }
  }
}
</style>
