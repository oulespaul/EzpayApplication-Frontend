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
                                <!-- Portfolio Modal - Title -->
                                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">แก้ไขสินค้า</h2>
                                <!-- Icon Divider -->
                                <div class="divider-custom">
                                    <div class="divider-custom-line"></div>
                                    <div class="divider-custom-icon">
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div class="divider-custom-line"></div>
                                </div>
                                ชื่อสินค้า       <br> <input type="text" align="center" name="productname" v-model="form.name_product"><br><br>
                                ราคาสินค้า     <br> <input type="text" align="center" name="productprice" v-model="form.price_product"><br><br>
                                ช่องที่ขายสินค้า 
                                <select v-model="form.slot_product">
                                    <option value=NULL>ว่าง</option>
                                    <option v-for="index in 20" :key="index">
                                            <option value=index>{{index}}</option>
                                    </option>
                                </select>
                                
                                สถานะสินค้า
                                <select v-model="form.status_id"  name="status_id">
                                    <option v-bind:value="options.id_status3">{{form.status_name2}}</option>
                                    <option v-bind:value="option.status_id" v-for="(option,id_status) in options.id_status" :key="id_status">
                                        {{option.status_name}}
                                    </option>
                                </select>
                                <br><br>
                               
                                <button class="btn btn-primary" href="#" @click="seteditdata()" data-dismiss="modal" type="submit" value="Submit">ยืนยัน</button>&nbsp;
                                <button class="btn btn-primary" href="#" data-dismiss="modal">รีเซ็ต</button>
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

export default {
    components: {
    Index,
    Register,
    Navbarweb,
    Login
  },
   data() {
    return {
        form : {
            status_id : '',
            name_product:'',
            price_product:'',
            status_name2:'',
        },
        options: {
            id_status : [],
            name_product : [],
            price_product :[],
            slot_product : [],
            status_name : [],
            id_status2 : [],
            slot_product_have : [],
            slot_product_zz : [5,2,6,4],
            slot_all :[1,2,3,4,5,6,7,8,9,10],
        }
    }
   },
   
  created() {
      this.getdata()
      this.geteditdata()
      this.getslotproductdata();
  },
    methods: {

    DirectProduct() {
        this.$router.push({ name : "product"});
    },
    slot_no_have() {
        this.$router.push({ name : "product"});
    },
    getdata() {
        axios.get('https://ezpayapp.azurewebsites.net/api/getmasterdata')
        .then(res => {
             this.options.id_status = res.data;
        })
    },
    geteditdata(){
        const productid = localStorage.getItem('product_id')
        axios.get('https://ezpayapp.azurewebsites.net/api/getproductedit/'+ productid)
        .then(res => {
            this.form.name_product = res.data.name_product;
            this.form.price_product = res.data.price_product;
            this.form.slot_product = res.data.slot_product;
            this.form.status_name2 = res.data.status_name;
            this.options.id_status3 = res.data.status_id;
        })
    },
    getslotproductdata(){
        const shopid = localStorage.getItem('shopid')
        axios.get('https://ezpayapp.azurewebsites.net/api/numslotproduct/'+ shopid)
        .then(res => {
            this.options.slot_product_have = res.data.slot_product;
            console.log(res.data)
        })
    },
    seteditdata(){
        const productid = localStorage.getItem('product_id')
        axios.put('https://ezpayapp.azurewebsites.net/api/updateproduct/'+ productid,this.form)
        .then(res => {
            this.alertify.success('Success message');
            localStorage.removeItem('product_id');
            setTimeout(() => this.isHidden = false, 500);
            this.$router.push({ name : "product"});
        })

    },
  }
}
</script>

