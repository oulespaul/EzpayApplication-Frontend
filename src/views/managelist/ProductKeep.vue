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
                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">จัดการสินค้าที่เก็บ</h2>
                            <div class="divider-custom">
                                <div class="divider-custom-line"></div>
                                <div class="divider-custom-icon">
                                    <i class="fas fa-star"></i>
                                </div>
                                <div class="divider-custom-line"></div>
                            </div>
                            <div>
                                <button class="btn btn-primary" href="#" @click="DirectProduct()" data-dismiss="modal">ย้อนกลับ</button>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-md-12" id="showuserall">
                                    <div class="card">
                                        <div class="card-body">
                                            <table class="table table-head-bg-success">
                                                <thead>
                                                    <tr>
                                                        <th style="text-align:center;">ชื่อสินค้า</th>
                                                        <th style="text-align:center;">ราคาสินค้า</th>
                                                        <th style="text-align:center;">สถานะ</th>
                                                        <th style="text-align:center;">จัดการ</th> 
                                                        <!-- เมนูเรียกคืนหรือลบ -->
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(option,index) in options.id_product" :key="index">
                                                        <td>{{option.name_product}}</td>
                                                        <td>{{option.price_product}}&nbsp;บาท</td>
                                                        <td>{{option.status_name}}</td>
                                                        <td><button><i class="fas fa-trash-restore" v-on:click="restoreproduct(option.id_product,2)"></i></button>&nbsp;
                                                        </td>
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
                id_product : []
            }
        }
    },
  created() {
      this.getproductkeep();
  },
    methods: {
    DirectProduct(){
        this.$router.push({ name : "product"});
    },
    getproductkeep() {
        const id = localStorage.getItem('shopid')
        axios.get('https://ezpayapp.azurewebsites.net/api/getshopproductkeep/' + id)
        .then(res => {
            this.options.id_product = res.data;
        })
        // .catch(err => {
        // })
    },
    // setproductkeep(){
    //     axios.put('http://localhost:44369/api/setproductedit/'+ productid,this.form)
    //     .then(res => {

    //         this.alertify.success('Success message');
    //     })
    //     localStorage.removeItem('product_id');
    //     this.$router.push({ name : "product"});
    // },
    restoreproduct(product_id,status_id_U){
        axios.put('https://ezpayapp.azurewebsites.net/api/putproduct/' + product_id +","+ status_id_U)
        .then(res => {

            this.alertify.success('Success message');
        })
        this.$router.push({ name : "product"});
    }
  }
}
</script>

