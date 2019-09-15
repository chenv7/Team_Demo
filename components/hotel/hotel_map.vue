<template>
  <div class="hotel_map">
    <el-row type="flex">
      <el-col :span="4">
        <el-input placeholder="目的地"></el-input>
      </el-col>
      <el-col :span="16">
        <el-date-picker
          v-model="value6"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
        <el-select v-model="value7" placeholder="请选择">
          <el-option-group v-for="group in options3" :key="group.label" :label="group.label">
            <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-option-group>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-button type="primary">查看价格</el-button>
      </el-col>
    </el-row>
    <!-- 地图区域 -->
    <el-row type="flex" class="kuangkuang">
      <el-col :span="14" class="quyu">
        <el-row type="flex">
          <el-col :span="3">
            <span>区域:</span>
          </el-col>
          <el-col :span="21">
            <a>全部</a>
            <a href v-for="(e,i) in data" :key="i" class="areas">{{e.name}}</a>
            <el-row type="flex">
              <el-col :span="24">
                <div class="fuhao"><i class="el-icon-d-arrow-right"></i><span>等43个区域</span></div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row type="flex" class="gonglve">
          <el-col :span="3">
            <span>攻略:</span>
          </el-col>
          <el-col :span="21">
            <span>北京，你想要的都能在这找到。博古通今，兼容并蓄，天下一城，如是帝都。 景点以故宫为中心向四处辐射；地铁便宜通畅，而且覆盖绝大多数景点。 由于早上有天安门升旗仪式，所以大多数人选择在天安门附近住宿。</span>
          </el-col>
        </el-row>
        <el-row type="flex" class="xingxing">
          <el-col :span="3">
            <span>均价&nbsp;&nbsp;&nbsp;&nbsp;:</span>
          </el-col>
          <el-col :span="6">
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i> ￥332
          </el-col>
          <el-col :span="6">
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i> ￥521
          </el-col>
          <el-col :span="9">
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i> ￥521
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="10">
        <div id="container"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: {}
    }
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
      value7: ""
    };
  },
  mounted() {
    window.onLoad = function() {
      var map = new AMap.Map("container");
    };
    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=86a32ed5ac2d661a18261d5aa64e2ccc&callback=onLoad";
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }
};
</script>
<style lang="less" scoped>
.kuangkuang {
  margin: 20px 0;
  font-size: 14px;
  color: #666;
  padding-left: 5px;

  .quyu{
    padding-right: 5px;
    .fuhao{
      i{
        color:#ff9900;
        transform: rotate(90deg);
        margin-right:5px;
      }
    }
  }
  a {
    &:hover {
      color: #0099ff;
      text-decoration: underline;
    }
  }
  .xingxing {
    i {
      color: #ff9900;
    }
  }
  .gonglve {
    margin: 20px 0;
  }
  .areas {
    margin: 0 10px;
  }
}
#container {
  width: 420px;
  height: 260px;
}
</style>