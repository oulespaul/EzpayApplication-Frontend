<template>
    <nav class="navbar navbar-expand-lg bg-primary text-uppercase fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#" @click="DirectIndex()">EzPay</a>
            <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-picshop text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mx-0 mx-lg-1">
                        <a href="#" class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" @click="DirectIndex()">หน้าหลัก</a>
                    </li>
                    <!-- <li class="nav-item mx-0 mx-lg-1">
                        <a href="#" class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" @click="DirectManage()">จัดการร้าน</a>
                    </li> -->
                    <li class="nav-item mx-0 mx-lg-1">
                        <a href="#" class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" @click="logout()">ออกจากระบบ</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
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
  data(){
      return{
          image:['/src/assets/img/Shop.png']
      }
  },
  methods: {
    
    logout() {
          localStorage.removeItem('shopid');
          this.onRedirectToAction();
    },
    onRedirectToAction() {
            this.$router.push({ name : "login"});
    },
    DirectManage(){
        this.$router.push({ name : "listmanage"});
    },
    DirectIndex(){
        this.$router.push({ name : "index"});
    }
  }
}

</script>
