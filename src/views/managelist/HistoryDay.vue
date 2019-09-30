<template>
    <div>
        <Navbarweb></Navbarweb>
        <br><br>
        <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-body text-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">ประวัติขายสินค้ารายวัน</h2>
                            <div class="divider-custom">
                                <div class="divider-custom-line"></div>
                                <div class="divider-custom-icon">
                                    <i class="fas fa-star"></i>
                                </div>
                                <div class="divider-custom-line"></div>
                            </div>
                            <div>
                                <button class="btn btn-primary" href="#" @click="DirectHistoryMonth()" data-dismiss="modal">ประวัติขายสินค้ารายเดือน</button>
                                &emsp;&emsp;&emsp;
                                <button class="btn btn-primary" href="#" @click="DirectHistoryAll()" data-dismiss="modal">ประวัติขายสินค้าทั้งหมด</button>
                            </div>
                            <br>
                            <form>
                                <h3>เลือกวันที่</h3> 
                                <div align="center"><datepicker :language="th"  v-model="datetimePicker" format="dd-MM-yyyy"  v-on:change="TimeC"></datepicker></div>
                            </form>            
                            <button v-on:click="TimeC">ค้นหา</button>
                            <br><br>            
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
                                                        <th style="text-align:center;">วันที่ออกใบเสร็จ</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(option,index) in options.id_bill" :key="index">
                                                        <th>{{option.id_bill}}</th>
                                                        <td>{{option.name_product}}</td>
                                                        <td>{{option.price_product}}&nbsp;บาท</td>
                                                        <td>{{option.bill_datetime}}&nbsp;{{option.bill_time}}</td>
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

import Index from '@/views/home/Index';
import Navbarweb from '@/views/home/Navbarweb';
import Register from '@/views/home/Register';
import Login from '@/views/home/Login';

var moment = require('moment');


//datepicker
import Datepicker from "vuejs-datepicker/dist/vuejs-datepicker.esm.js";
import * as lang from "vuejs-datepicker/src/locale";
import {th} from 'vuejs-datepicker/dist/locale'

const state = {
  date1: new Date()
};

export default {
    components: {
    Index,
    Register,
    Navbarweb,
    Login,
    Datepicker
  },
    data() {
        return {
            state:{
                startDate: moment(),
            },
              th: th,
            options: {
                id_bill : [],
                timeselect:[]
            },
            format: "dd-MM-yyyy",
            datetimePicker: null,
            language: "en",
            languages: lang,
            moment:moment,
        }
    },
    created() {
      this.gethistoryday();
    },
    methods: {
    DirectHistoryMonth(){
        this.$router.push({ name : "historymonth"});
    },
    DirectHistoryAll(){
        this.$router.push({ name : "historyall"});
    },
    gethistoryday(dater) {
        moment.locale('nl');
        var timenow = moment().format('DD-MM-YYYY');

        const id = localStorage.getItem('shopid')
        axios.get('https://ezpayapp.azurewebsites.net/api/gethistoryday/' + id +","+ timenow)
        .then(res => {
            this.options.id_bill = res.data;
        })
    },
    TimeC: function (event) {
        
        // var month = this.datetimePicker.toLocaleString("en-US", { month: 'short' })
        var ms = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var dater = (this.datetimePicker.getMonth()+1) + '-' + (this.datetimePicker.getDate()) + '-' + this.datetimePicker.getFullYear();
        dater = moment(dater).format('DD-MM-YYYY');
        // console.log(dater);
        const id = localStorage.getItem('shopid')
        axios.get('https://ezpayapp.azurewebsites.net/api/gethistoryday/' + id +","+ dater)
        .then(res => {
            this.options.id_bill = res.data;
        })
        // console.log(this.options.id_bill);
    }
  }
}
</script>

