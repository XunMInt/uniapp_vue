<template>
  <view>
    <view class="new" v-for="item in contentList" :key="item.id">
      <view class="title">{{item.title}}</view>
      <view class="info">
        <text class="time">发表时间：{{item.add_time | dateFromat}}</text>
        <text class="click">浏览：{{item.click}}</text>
      </view>
      <view class="content">
		  <rich-text :nodes="item.content"></rich-text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
      //资讯内容
      contentList: [],
    };
  },
  onLoad(options) {
	this.id = options.id;
	this.getContentList();
  },
  methods: {
    //获取内容列表
    async getContentList() {
      const { data } = await this.$myRequest({ url: "/api/getnew/" + this.id });
	  this.contentList = data.message;
	  console.log(this.contentList);
    },
  },
};
</script>

<style lang="less" scoped>
.new {
  padding: 20rpx;
  .title {
    font-size: 35rpx;
    text-align: center;
    font-weight: bold;
  }
  .info {
    overflow: hidden;
    font-size: 25rpx;
    margin: 20rpx 0;
    padding-bottom: 10rpx;
    border-bottom: 2px solid #000;
    .time {
      float: left;
    }
    .click {
      float: right;
    }
  }
  .content {
    float: left;
    line-height: 60rpx;
    font-size: 30rpx;
    text-indent: 2em;
  }
}
</style>>

