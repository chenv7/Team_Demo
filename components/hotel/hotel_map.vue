<template>
  <div class="hotel_map">
    <!-- 地图区域 -->
    <el-row type="flex" class="kuangkuang">
      <el-col :span="14" class="quyu" ref="aeras">
        <el-row type="flex">
          <el-col :span="3">
            <span>区域:</span>
          </el-col>
          <el-col :span="21">
            <el-row type="flex" justify>
              <el-col :span="24" :class="{quyu2 : isHidden}">
                <a>全部</a>
                <a href v-for="(e,i) in data" :key="i" class="areas">{{e.name}}</a>
              </el-col>
            </el-row>
            <el-row type="flex">
              <el-col :span="24">
                <div class="fuhao" @click="isHidden=!isHidden" style="cursor: pointer">
                  <i class="el-icon-d-arrow-right" ref="icons"></i>
                  <span>等43个区域</span>
                </div>
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
      mapList: [],
      isHidden: true
    };
  },
  mounted() {
    //地图引入
    let mapData = [];
    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=86a32ed5ac2d661a18261d5aa64e2ccc&callback=onLoad";
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
    //请求数据，渲染区域部分
    this.$axios({
      url: "http://157.122.54.189:9095/hotels?&city=74&scenic=3231"
    }).then(res => {
      console.log(res);
      let ditu = res.data.data;
      ditu.forEach(e => {
        this.mapList.push(e.location);
        this.mapData = this.mapList;
      });
      console.log(this.mapList);
      //将数据转化为 [{键：值},{键：值}] 类型
      let mapDataList = [];
      // console.log(mapDataList, "zui");
      for (let i = 0; i < this.mapData.length; i++) {
        if (i < 10) {
          mapDataList.push(this.mapData[i].longitude, this.mapData[i].latitude);
        }
      } //将数据转成{[{数据},{数据}] 类型
      window.onLoad = function() {
        var map = new AMap.Map("container", {
          center: [118.793579, 31.98425], //地图首先显示的坐标
          viewMode: "3D" //使用3D视图,
        });
        //创建地图标点
        console.log(ditu, "zuixin");

        let marker1 = new AMap.Marker({
          position: new AMap.LngLat(mapDataList[0], mapDataList[1]),
          content: `<div class="nibaba">1</div>`,
          title: `${ditu[0].name}`
        });
        let marker2 = new AMap.Marker({
          position: new AMap.LngLat(mapDataList[2], mapDataList[3]),
          content: `<div class="nibaba">2</div>`,
          title: `${ditu[1].name}`
        });
        // console.log(marker2, "2");
        let marker3 = new AMap.Marker({
          position: new AMap.LngLat(mapDataList[4], mapDataList[5]),
          content: `<div class="nibaba">3</div>`,
          title: `${ditu[2].name}`
        });
        // console.log(marker3, "3");
        let marker4 = new AMap.Marker({
          position: new AMap.LngLat(mapDataList[6], mapDataList[7]),
          content: `<div class="nibaba">4</div>`,
          title: `${ditu[3].name}`
        });
        // console.log(marker4, "4");
        let marker5 = new AMap.Marker({
          position: new AMap.LngLat(mapDataList[8], mapDataList[9]),
          content: `<div class="nibaba">5</div>`,
          title: `${ditu[4].name}`
        });
        // console.log(marker5, "5");
        let marker6 = new AMap.Marker({
          position: new AMap.LngLat(mapDataList[10], mapDataList[11]),
          content: `<div class="nibaba">6</div>`,
          title: `${ditu[5].name}`
        });
        // console.log(marker6, "6");
        let marker7 = new AMap.Marker({
          position: new AMap.LngLat(mapDataList[12], mapDataList[13]),
          content: `<div class="nibaba">7</div>`,
          title: `${ditu[6].name}`
        });
        // console.log(marker7, "7");
        let marker8 = new AMap.Marker({
          position: new AMap.LngLat(mapDataList[14], mapDataList[15]),
          content: `<div class="nibaba">8</div>`,
          title: `${ditu[7].name}`
        });
        // console.log(marker8, "8");
        let marker9 = new AMap.Marker({
          position: new AMap.LngLat(mapDataList[16], mapDataList[17]),
          content: `<div class="nibaba">9</div>`,
          title: `${ditu[8].name}`
        });
        let marker10 = new AMap.Marker({
          position: new AMap.LngLat(mapDataList[18], mapDataList[19]),
          content: `<div class="nibaba">10</div>`,
          title: `${ditu[9].name}`
        });
        // console.log(marker9, "9");
        map.add([
          marker1,
          marker2,
          marker3,
          marker4,
          marker5,
          marker6,
          marker7,
          marker8,
          marker9,
          marker10
        ]);
      };
    });
  },
  methods: {
    //点击人数未定的框框弹出事件
    /*areaChange() {
       if (this.aerapanduan === false) {
        this.$refs.aeras.$el.childNodes[0].childNodes[2].childNodes[0].style.height =
          "42px";
        this.$refs.aeras.$el.childNodes[0].childNodes[2].childNodes[0].removeAttribute('overflow');
        this.$refs.icons.style.transform = "rotateZ(90deg)";
        this.aerapanduan = true;
      } else if (this.aerapanduan === true) {
        this.$refs.aeras.$el.childNodes[0].childNodes[2].childNodes[0].style.height =
          "152px";
        
        this.$refs.icons.style.transform = "rotateZ(270deg)";
        this.aerapanduan = false;
      } 
    }*/
  }
};
</script>
<style lang="less" scoped>
.kuangkuang {
  margin: 20px 0;
  font-size: 14px;
  color: #666;
  padding-left: 5px;

  .quyu {
    padding-right: 5px;
    .quyu2 {
      overflow: hidden;
      height: 42px;
    }
    .fuhao {
      width: 100px;
      i {
        color: #ff9900;
        transform: rotateZ(90deg);
        margin-right: 5px;
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
/deep/ .nibaba {
  display: inline-block;
  width: 22px;
  height: 36px;
  text-align: center;
  line-height: 24px;
  background: url("https://webapi.amap.com/theme/v1.3/markers/b/mark_b.png");
  background-size: 22px 36px;
  color: #fff;
  font-size: 20px;
}
</style>