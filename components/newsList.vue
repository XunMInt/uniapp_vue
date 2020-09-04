<template>
  <view>
    <view class="news">
      <view class="news-item" v-for="item in news" :key="item.id" @click="itemClick(item.id)">
        <image :src="item.img_url" mode="widthFix" />
        <view class="news-right">
          <view class="news-title">{{item.title}}</view>
          <view class="news-bottom">
            <text class="news-time">发表时间：{{item.add_time | dateFromat}}</text>
            <text>浏览：{{item.click}}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
	props:['news'],
  data() {
    return {};
  },
  methods: {
    itemClick(id){
      this.$emit('itemClick',id);
    }
  },
};
</script>

<style lang="less">
.news {
  .news-item {
    position: relative;
    padding: 10rpx 20rpx 0rpx 20rpx;
    border-bottom: 1px solid #b50e02;
    image {
      width: 200rpx;
      height: 150rpx;
    }
    .news-right {
      width: 500rpx;
      float: right;
      .news-title {
        font-size: 30rpx;
      }
      .news-bottom {
		  position: absolute;
		  bottom: 10rpx;
        font-size: 24rpx;
        .news-time {
          margin-right: 30rpx;
        }
      }
    }
  }
}
</style>
