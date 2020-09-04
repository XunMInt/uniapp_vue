<template>
  <view>
    <image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg" />
    <view class="text">
      <view @click="callPhone">联系电话：400-800-8800（点击拨打）</view>
      <view>联系地址：浙江省杭州市滨江区网商路699号滨江新园区阿里巴巴集团</view>
    </view>
    <map class="map" :longitude="longitude" :latitude="latitude" scale="16" :markers="markers"></map>
  </view>
</template>

<script>
export default {
  data() {
    return {
      //地图经度
      longitude: 120.198685,
      //地图维度
      latitude: 30.195567,
      //标记配置项
      markers: [
        {
          id: 1,
          longitude: 120.198685,
          latitude: 30.195567,
          iconPath: "../../static/icon/taobao.jpg",
          width: 30,
          height: 30,
        },
      ],
    };
  },
  methods: {
    //拨打电话
    callPhone() {
      uni.makePhoneCall({ phoneNumber: "4008008800" });
    },
  },
};
</script>

<style lang="less">
.img {
  width: 750rpx;
  height: 320rpx;
}
.text {
  padding: 20rpx;
  view {
    font-size: 30rpx;
    line-height: 50rpx;
    border-bottom: 1px solid #eee;
  }
  view:nth-child(1) {
    padding-bottom: 20rpx;
  }
  view:nth-child(2) {
    padding: 10rpx 0;
  }
}
.map {
  width: 750rpx;
  height: 750rpx;
}
</style>
