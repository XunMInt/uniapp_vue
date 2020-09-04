<template>
  <view class="body">
    <scroll-view class="left" scroll-y>
      <view
        :class="isAction == index ? 'action': '' "
        v-for="(item,index) in cateList"
        :key="item.id"
        @click="switchTab(index,item.id)"
      >{{item.title}}</view>
    </scroll-view>
    <scroll-view class="right" scroll-y>
      <view v-for="(item, index) in contentList" :key="index">
        <image :src="item.img_url" mode="widthFix" @click="previewImage(item.img_url)" />
        <view class="text">{{item.title}}</view>
      </view>
      <view v-if="contentList.length === 0">暂无数据</view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      //分类数据
      cateList: [],
      //内容数据
      contentList: [],
      //高亮选项
      isAction: 0,
    };
  },
  onLoad() {
    this.getCatesLIst();
  },
  methods: {
    //获取分类列表
    async getCatesLIst() {
      const { data } = await this.$myRequest({ url: "/api/getimgcategory" });
      this.cateList = data.message;
      this.switchTab(0, this.cateList[0].id);
    },
    //切换内容
    async switchTab(index, id) {
      this.isAction = index;
      const { data } = await this.$myRequest({ url: "/api/getimages/" + id });
      this.contentList = data.message;
    },
    //预览图片
    previewImage(current) {
      const urls = this.contentList.map((item) => {
        return item.img_url;
      });
      uni.previewImage({
        current,
        urls,
      });
    },
  },
};
</script>

<style lang="less">
uni-page-body,
.body {
  display: flex;
  height: 100%;
}
.left {
  width: 200rpx;
  height: 100%;
  border-right: 1px solid #eee;
  view {
    height: 60px;
    line-height: 60px;
    color: #333;
    text-align: center;
    font-size: 30rpx;
    border-top: 1px solid #eee;
  }
  .action {
    background-color: #b50e02;
    color: #fff;
    font-weight: bold;
  }
}
.right {
  width: 550rpx;
  height: 100%;
  image {
    width: 530rpx;
    margin: 10rpx;
    border-radius: 5px;
  }
  .text {
    font-size: 30rpx;
    margin: 10rpx;
    line-height: 60rpx;
  }
}
</style>
