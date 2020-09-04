<template>
  <view class="bg">
    <goods-list :goods="goodsList" @goodsClick="goToContent"></goods-list>
    <view class="isOver" v-if="flag">—————— 我是有底线的 ——————</view>
  </view>
</template>

<script>
import goods from "../../components/goodsList";
export default {
  data() {
    return {
      //商品数据
      goodsList: [],
      //商品页码
      goodsPages: 1,
      //底线显示
      flag: false,
    };
  },
  onLoad() {
    this.getGoodsList();
  },
  onReachBottom() {
    if (this.goodsList.length < this.goodsPages * 10) return (this.flag = true);
    this.goodsPages++;
    this.getGoodsList();
  },
  onPullDownRefresh() {
    this.goodsList = [];
    this.goodsPages = 1;
    this.flag = false;
    setTimeout(() => {
      this.getGoodsList(() => {
        uni.stopPullDownRefresh();
      });
    }, 1000);
  },
  components: {
    "goods-list": goods,
  },
  methods: {
    //获取商品列表
    async getGoodsList(callback) {
      const { data } = await this.$myRequest({
        url: "/api/getgoods?pageindex=" + this.goodsPages,
      });
      this.goodsList = [...this.goodsList, ...data.message];
      callback && callback();
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

<style>
.bg {
  min-height: 100vh;
  background-color: #eee;
}
.isOver {
  height: 70rpx;
  line-height: 70rpx;
  font-size: 14px;
  color: #ccc;
  text-align: center;
}
</style>
