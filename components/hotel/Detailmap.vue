<template>
  <div class="Detailmap">
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [],
      hotelData: {}
    }
  },
  mounted () {
    this.$axios({
      url: "/hotels",
      params: {
        id: this.$route.query.id
      }
    }).then(res => {
      console.log(res, "445");
      this.hotelData = res.data.data[0];
      this.tableData = res.data.data[0].products;
      this.$store.commit("ditu/ditujuzhon", this.hotelData);
    });
  },
  methods: {
    dianji() {
      window.open("https://hotels.ctrip.com/hotel/694679.html");
    }
  }
}
</script>

<style lang="less" scoped>
.Detailmap{
  .spanred {
    color: #f90;
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
}
</style>