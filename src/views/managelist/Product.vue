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
                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">จัดการสินค้าที่ร้าน</h2>
                            <div class="divider-custom">
                                <div class="divider-custom-line"></div>
                                <div class="divider-custom-icon">
                                    <i class="fas fa-star"></i>
                                </div>
                                <div class="divider-custom-line"></div>
                            </div>
                            <div>
                                <button class="btn btn-primary" href="#" @click="DirectProductAdd()" data-dismiss="modal">เพิ่มสินค้า</button>
                                &emsp;&emsp;&emsp;
                                <button class="btn btn-primary" href="#" @click="DirectProductKeep()" data-dismiss="modal">เรียกคืนสินค้าที่เก็บ</button>
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
                                                        <th style="text-align:center;">สถานะสินค้า</th>
                                                        <th style="text-align:center;">เลขช่องที่ขายสินค้า</th>
                                                        <th style="text-align:center;">จัดการ</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(option,index) in options.id_product" :key="index" v-show="option.statusId !== null">
                                                        <td>{{option.productName}}</td>
                                                        <td>{{option.productPrice}}&nbsp;บาท</td>
                                                        <td v-if="option.statusId == 1">Available</td>
                                                        <td v-if="option.statusId == 2">Empty</td>
                                                        <td v-if="option.statusId == 3">Waiting</td>
                                                        <td>{{option.productSlot}}</td>
                                                        <td><button><i class="fas fa-pencil-alt" v-on:click="editproduct(option.productId);"></i></button>&nbsp;
                                                        <button><i class="fas fa-trash-alt" v-on:click="keepproduct(option.productId);"></i></button></td>
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
      this.getproduct();
  },
    methods: {
    DirectProductAdd(){
        this.$router.push({ name : "productadd"});
    },
    DirectProductKeep(){
        this.$router.push({ name : "productkeep"});
    },
    getproduct() {
        const id = localStorage.getItem('shopid')
        axios.get('https://ezpayapplication.herokuapp.com/api/product/' + id)
        .then(res => {
            this.options.id_product = res.data;
        })
        // .catch(err => {
        // })
    },
    editproduct(id_product){
        localStorage.setItem('product_id',id_product);
        this.$router.push({ name : "productedit"});
    },
    keepproduct(id_product){
        let data = {
            statusId:''
        }
        axios.put('https://ezpayapplication.herokuapp.com/api/product/' + id_product,data)
        .then(res => {
            this.alertify.success('Success message');
        })
        setTimeout(() => this.isHidden = false, 500);
        this.$router.push({ name : "productkeep"});
    }
  }
}
</script>

