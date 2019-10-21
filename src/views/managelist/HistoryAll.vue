<template>
  <div>
    <Navbarweb></Navbarweb>
    <br />
    <br />
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content">
        <div class="modal-body text-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <h2
                  class="portfolio-modal-title text-secondary text-uppercase mb-0"
                >ประวัติขายสินค้าทั้งหมด</h2>
                <div class="divider-custom">
                  <div class="divider-custom-line"></div>
                  <div class="divider-custom-icon">
                    <i class="fas fa-star"></i>
                  </div>
                  <div class="divider-custom-line"></div>
                </div>
                <!-- <div>
                                <button class="btn btn-primary" href="#" @click="DirectHistoryDay()" data-dismiss="modal">ประวัติขายสินค้ารายวัน</button>
                                &emsp;&emsp;&emsp;
                                <button class="btn btn-primary" href="#" @click="DirectHistoryMonth()" data-dismiss="modal">ประวัติขายสินค้ารายเดือน</button>
                </div>-->
                <br />
                <div class="row">
                  <div class="col-md-12" id="showuserall">
                    <div class="card">
                      <div class="card-body">
                        <table class="table table-head-bg-success">
                          <thead>
                            <tr>
                              <th style="text-align:center;">เลขที่ใบเสร็จ</th>
                              <th style="text-align:center;">ชื่อสินค้า</th>
                              <th style="text-align:center;">ราคาสินค้า</th>
                              <th style="text-align:center;">สถานะ</th>
                              <th style="text-align:center;">วันที่ออกใบเสร็จ</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(option,index) in options.id_bill" :key="index">
                              <th>{{option.billId}}</th>
                              <td>{{option.productName}}</td>
                              <td>{{option.amount}}&nbsp;บาท</td>
                              <td>{{option.status}}</td>
                              <td>{{option.created}}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Index from "@/views/home/Index";
import Navbarweb from "@/views/home/Navbarweb";
import Register from "@/views/home/Register";
import Login from "@/views/home/Login";

export default {
  components: {
    Index,
    Register,
    Navbarweb,
    Login
  },
  data() {
    return {
      options: {
        id_bill: []
      }
    };
  },
  created() {
    this.gethistoryall();
  },
  methods: {
    DirectHistoryMonth() {
      this.$router.push({ name: "historymonth" });
    },
    DirectHistoryDay() {
      this.$router.push({ name: "historyday" });
    },
    gethistoryall() {
      const id = localStorage.getItem("shopid");
      axios.get("https://ezpayapplication.herokuapp.com/api/getListBuying/" + id).then(res => {
        let current_datetime = new Date(res.data.created);

        this.options.id_bill = res.data;
        
      });
      // .catch(err => {
      // })
    }
  }
};
</script>

