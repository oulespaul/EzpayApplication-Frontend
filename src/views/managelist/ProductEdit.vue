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
                                ชื่อสินค้า       <br> <input type="text" align="center" name="productname" v-model="form.productName"><br><br>
                                ราคาสินค้า     <br> <input type="text" align="center" name="productprice" v-model="form.productPrice"><br><br>
                                ช่องที่ขายสินค้า 
                                <select v-model="form.productSlot">
                                    <option value=NULL>ว่าง</option>
                                    <option v-for="index in 20" :key="index">
                                            <option value=index>{{index}}</option>
                                    </option>
                                </select>
                                
                                สถานะสินค้า
                                <select v-model="form.statusId" name="statusId">
                                    <option v-for="(option,index) in options" :key="index">
                                            <option value=index>{{option.statusName}}</option>
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
            productName:'',
            productPrice:'',
            productSlot:'',
            statusId:''
        },
        options: []
    }
   },
   
  created() {
      this.getStatus()
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
    getStatus() {
        axios.get('/api/status')
        .then(res => {
             this.options = res.data
        })
    },
    geteditdata(){
        const productid = localStorage.getItem('product_id')
        axios.get('/api/productByPid/'+ productid)
        .then(res => {
            this.form.productName = res.data.productName;
            this.form.productPrice = res.data.productPrice;
            this.form.productSlot = res.data.productSlot;
            this.form.statusId = res.data.statusId === 1 ? "Available" : res.data.statusId === 2 ? "Empty" : res.data.statusId === 3 ? "Waiting" : null;
        })
    },
    getslotproductdata(){
        // const shopid = localStorage.getItem('shopid')
        // axios.get('https://ezpayapp.azurewebsites.net/api/numslotproduct/'+ shopid)
        // .then(res => {
        //     this.options.productSlot_have = res.data.productSlot;
        //     console.log(res.data)
        // })
    },
    seteditdata(){
        const productid = localStorage.getItem('product_id')
        this.form.statusId = this.form.statusId === "Available" ? 1 : this.form.statusId === "Empty" ? 2 : this.form.statusId === "Waiting" ? 3 : null;
        axios.put('/api/product/'+ productid,this.form)
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

