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
                                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">เพิ่มสินค้า</h2>
                                <!-- Icon Divider -->
                                <div class="divider-custom">
                                    <div class="divider-custom-line"></div>
                                    <div class="divider-custom-icon">
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div class="divider-custom-line"></div>
                                </div>

                                <form @submit.prevent = "AddProduct()">
                                    ชื่อสินค้า       <br> <input type="text" name="productname" v-model="form.productName"><br><br>
                                    ราคาสินค้า     <br> <input type="text" name="productprice" v-model="form.productPrice"><br><br>
                                    ช่องที่ขายสินค้า 
                                    <select v-model="form.productSlot">
                                        <option value=NULL>ว่าง</option>
                                        <option v-for="index in 20" :key="index">
                                            <option value=index>{{index}}</option>
                                        </option>
                                    </select>
                                    |
                                    สถานะสินค้า 
                                <select v-model="form.statusId" name="statusId">
                                    <option value="">Please select one</option>
                                    <option v-bind:value="option.statusId" v-for="(option,id_status) in options.id_status" :key="id_status">
                                        {{option.statusName}}
                                    </option>
                                </select>
                                    
                                    <br><br>
                                
                                    <button class="btn btn-primary" href="#" data-dismiss="modal" type="submit" value="Submit">ยืนยัน</button>&nbsp;
                                    <button class="btn btn-primary" href="#" data-dismiss="modal" @click="onReset();">รีเซ็ต</button>
                                </form>
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
            id_status : []
        },
        form: {
            productName: '',
            productPrice: '',
            productSlot: '',
            statusId:'',
            shopId:'',
            createBy:'',
            updateBy:''
        }
    }
    },
  created() {
      this.getStatus()
      
  },
    methods: {
    AddProduct() {
      const shop_id = localStorage.getItem('shopid')
      this.form.shopId = shop_id
      this.form.createBy = shop_id
      this.form.updateBy = shop_id
      
      axios.post("/api/product",this.form)
      .then( function (result) {
          this.alertify.success('Success message');
          this.$router.push({ name : "product"});
      }).catch((err)=>{
          this.alertify.success('Error message');          
      })
    },
    DirectProduct() {
        this.$router.push({ name : "product"});
    },
    getStatus() {
        axios.get('/api/status')
        .then(res => {
             this.options.id_status = res.data;
        })
    },
    onReset() {
        this.form = {
            productName: "",
            productPrice: "",
            productSlot: "",
            statusId:""
        }
    }
  }
}
</script>

