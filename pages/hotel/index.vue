<template>
  <div class="hotel">
    <!-- 面包屑区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="mianbao">
      <el-breadcrumb-item>酒店</el-breadcrumb-item>
      <el-breadcrumb-item>南京市酒店预订</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 输入框内容区 -->
    <HotelMap :data="hotelData" />
  </div>
</template>

<script>
import HotelMap from "@/components/hotel/hotel_map";
export default {
  components: {
    HotelMap
  },
  mounted() {
    /* 请求酒店数据 */
    this.$axios({
      url: "http://157.122.54.189:9095/hotels?",
    }).then(res => {
      console.log(res.data.data[0]);
      this.hotelData = res.data.data[0].scenic;
    });
  },
  data() {
    return {
      value6: "",
      options3: [
        {
          label: "热门城市",
          options: [
            {
              value: "Shanghai",
              label: "上海"
            },
            {
              value: "Beijing",
              label: "北京"
            }
          ]
        }
      ],
      value7: "",
      hotelData: []
    };
  }
};
</script>

<style lang="less" scoped>
.hotel {
  width: 1000px;
  margin: 0 auto;
  .mianbao {
    padding: 15px 0;
  }
}
</style>