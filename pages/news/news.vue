<template>
  <view>
    <news-list :news="newsList" @itemClick="goContent"></news-list>
  </view>
</template>

<script>
import news from "../../components/newsList";
export default {
  data() {
    return {
	//资讯列表数据
      newsList: [],
    };
  },
  components: {
    "news-list": news,
  },
  onLoad() {
    this.getNewsList();
  },
  methods: {
    //获取资讯列表
    async getNewsList() {
      const { data } = await this.$myRequest({ url: "/api/getnewslist" });
      this.newsList = data.message;
	},
	//跳转详情页
    goContent(id) {
      uni.navigateTo({ url: "../../pages/news-content/news-content?id=" + id });
    },
  },
};
</script>

<style lang="less">
</style>
