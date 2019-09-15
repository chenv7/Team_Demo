<template>
  <div class="detail">
    <el-row type="flex">
      <el-col>
        <div class="content">
          <CityTop :data="destData" />
          <CityMiddle :data="destData" />
          <CityBottom />
        </div>
      </el-col>
      <el-col>
        <CityAside :data="destData" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CityAside from "@/components/post/cityAside";
import CityTop from "@/components/post/cityTop";
import CityBottom from "@/components/post/cityBottom";
import CityMiddle from "@/components/post/cityMiddle";
export default {
  components: {
    CityAside,
    CityTop,
    CityBottom,
    CityMiddle
  },
  data() {
    return {
      destData: {
        data: [{ title: "" }]
      }
    };
  },
  methods: {
    init() {
      const { id } = this.$route.query;
      this.$axios({
        url: "/posts",
        params: { id }
      })
        .then(res => {
          console.log(res.data);
          this.destData = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  watch: {
    "$route.fullPath": {
      handler(newPath, oldPath) {
        this.init();
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {
    // console.log(this.$route.query)
    this.init();
  }
};
</script>

<style lang='less' scoped>
.detail {
  margin: 0 auto;
  width: 1000px;
  .content {
    // background-color: red;
    width: 700px;
  }
  .aside {
    // background-color: blue;
    width: 280px;
    margin-left: 20px;
  }
}
</style>