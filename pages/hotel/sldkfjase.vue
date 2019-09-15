
<template>
  <div class="details">
    <div class="mianbao">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/hotel' }">酒店</el-breadcrumb-item>
        <el-breadcrumb-item>南京酒店</el-breadcrumb-item>
        <el-breadcrumb-item>{{hotelData.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="zhobu">
      <el-row class="dianming">
        <div class="Hotel_name">
          <span>{{hotelData.name}}</span>
          <span class="colote el-icon-star-on"></span>
          <span class="colote el-icon-star-on"></span>
          <span class="colote el-icon-star-on"></span>
          <span class="colote el-icon-star-on"></span>
          <span class="colote el-icon-star-on"></span>
          <div class="textying">{{hotelData.alias}}</div>
          <div>
            <span class="el-icon-location-outline"></span>
            {{hotelData.address}}
          </div>
        </div>
      </el-row>
    </div>
    <div class="datu">
      <div class="datee">
        <el-row class="gaoai">
          <el-col class="datuu" :span="15">
            <img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg" alt />
          </el-col>
          <el-col class="xiaottu" :span="9">
            <img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg" alt />
            <img src="http://157.122.54.189:9093/images/hotel-pics/2.jpeg" alt />
            <img src="http://157.122.54.189:9093/images/hotel-pics/3.jpeg" alt />
            <img src="http://157.122.54.189:9093/images/hotel-pics/4.jpeg" alt />
            <img src="http://157.122.54.189:9093/images/hotel-pics/5.jpeg" alt />
            <img src="http://157.122.54.189:9093/images/hotel-pics/6.jpeg" alt />
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="various_price">
      <el-table class="bianshou" @row-click="dianji" :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="价格来源" width="400"></el-table-column>
        <el-table-column prop="bestType" label="低价房型" width="400"></el-table-column>
        <el-table-column label="低价房型" class="colorred">
          <template class="redorg" slot-scope="scope">
            <span class="spanred">￥{{scope.row.price}}</span>起
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="maplan">
      <el-row class="mapda">
        <el-col class="map_ditu" :span="16">
          <div class="dituweiz"></div>
          <div id="container"></div>
        </el-col>
        <el-col class="map_right" :span="8">
          <el-tabs v-model="activeName">
            <el-tab-pane label="风景" name="first">
              <div class="onedemo">
                <p
                  @mouseenter="zuobiao(index)"
                  v-for="(item, index) in landscape"
                  :key="index"
                >{{item.name}}</p>
              </div>
            </el-tab-pane>
            <el-tab-pane label="交通" name="second">
              <div class="tewdemo">
                <p v-for="(item, index) in jindainjiao" :key="index">{{item.name}}</p>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      activeName: "first",
      hotelData: {},
      landscape: {},
      jindainjiao: [],
      buting: [],
      shunbb: []
    };
  },

  mounted() {
    this.$axios({
      url: "/hotels",
      params: {
        id: 1
      }
    }).then(res => {
      console.log(res, "445");
      this.hotelData = res.data.data[0];
      this.tableData = res.data.data[0].products;
      this.$store.commit("ditu/ditujuzhon", this.hotelData);
    });
    this.$axios({
      url:
        "https://restapi.amap.com/v3/place/text?keywords=&city=%E5%8D%97%E4%BA%AC&location=118.871811,31.328468&types=%E9%A3%8E%E6%99%AF%E5%90%8D%E8%83%9C&output=json&page=1&offset=10&key=79041dfa1c752f49599e2b507c64da42"
    }).then(res => {
      this.landscape = res.data.pois;
    });
    this.$axios({
      url:
        "https://restapi.amap.com/v3/place/text?keywords=&city=%E5%8D%97%E4%BA%AC&location=118.871811,31.328468&types=%E4%BA%A4%E9%80%9A%E8%AE%BE%E6%96%BD%E6%9C%8D%E5%8A%A1&output=json&page=1&offset=10&key=79041dfa1c752f49599e2b507c64da42"
    }).then(res => {
      console.log(res);
      this.jindainjiao = res.data.pois;
    });
  },
  updated() {
    this.loadmap();
    if (this.activeName === "first") {
      this.buting = this.landscape;
      return;
    } else {
      return (this.buting = this.jindainjiao);
    }
  },
  methods: {
    loadmap() {
      let _this = this;
      window.onLoad = function() {
        console.log(_this.hotelData, "4444");
        console.log(_this.biaosize, "chengg");
        var map = new AMap.Map("container");
        var map = new AMap.Map("container", {
          zoom: 15, //级别
          center: [118.874503, 31.329444], //中心点坐标
          viewMode: "3D" //使用3D视图
        });
        console.log(_this.landscape, "进店");
        let shunboj = [];
        for (let i = 0; i < _this.buting.length; i++) {
          shunboj.push(_this.buting[i].location.split(",").map(Number));
        }
        console.log(shunboj, "shun");
        let fuckyou = [];
        for (let i = 0; i < shunboj.length; i++) {
          var marker = new AMap.Marker({
            position: new AMap.LngLat(...shunboj[i]), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: _this.buting[i].name
          });
          fuckyou.push(marker);
        }
        // 将创建的点标记添加到已有的地图实例：
        map.add(fuckyou);
        function zuobiao(index) {
          console.log(index)
        }
      };
      var url =
        "https://webapi.amap.com/maps?v=1.4.15&key=	744f1f3c00c95ef7123cb8ede6aa2a32&callback=onLoad";
      var jsapi = document.createElement("script");
      jsapi.charset = "utf-8";
      jsapi.src = url;
      document.head.appendChild(jsapi);
    },
    zuobiao(index) {
      // console.log(this.$store.state.ditu.ditusize[0])
      this.biaosize = this.landscape[index].location;
      this.shunbb = this.biaosize.split(",").map(Number);
      console.log(this.shunbb, "数组");
      console.log(this.biaosize);

      // console.log(ditusiz,'33');
    },
    dianji() {
      window.open("https://hotels.ctrip.com/hotel/694679.html");
    }
  }
};
</script>

<style lang="less" scoped>
.details {
  width: 1000px;
  margin: 0 auto;
  #container {
    margin-bottom: 200px;
    width: 650px;
    height: 360px;
  }
  .mianbao {
    padding: 15px 0;
  }
  .zhobu {
    .dianming {
      .Hotel_name {
        div {
          &:nth-last-child(1) {
            font-size: 14px;
            span {
              font-size: 14px;
              color: #000;
            }
          }
        }
        span {
          &:nth-child(1) {
            font-size: 25px;
          }
        }
        .textying {
          color: #666;
          font-size: 14px;
        }
        .colote {
          color: #ff9900;
        }
      }
    }
  }
  .datu {
    margin-top: 50px;
    .datee {
      .gaoai {
        .datuu {
          height: 360px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .xiaottu {
          height: 360px;
          padding-left: 7px;
          img {
            margin-left: 20px;
            margin-bottom: 10px;
            width: 160px;
          }
        }
      }
    }
  }
  .various_price {
    margin: 30px 0;
    .bianshou {
      cursor: pointer;
    }
  }
  .spanred {
    color: #f90;
  }
  .maplan {
    .mapda {
      .map_ditu {
        position: relative;
        .dituweiz {
          width: 30px;
          height: 30px;
          background-color: red;
          position: absolute;
          top: 424px;
          left: 265px;
        }
      }
      .map_right {
        height: 360px;
        .onedemo {
          padding: 10px;
          height: 280px;
          overflow: scroll;
          p {
            margin: 12px 0;
            font-size: 14px;
            color: #666;
          }
        }
        .tewdemo {
          padding: 10px;
          height: 280px;
          overflow: scroll;
          p {
            margin: 12px 0;
            font-size: 14px;
            color: #666;
          }
        }
      }
    }
  }
}
</style>