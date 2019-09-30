<template>
<div >

  <!-- <div class="portfolio-modal modal fade" id="portfolioModal4" role="dialog" > -->
    <div class="modal-dialog modal-xl --primary" role="document">
      <div class="modal-content">
        <div class="modal-body text-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <!-- Modal - Title -->
                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Register</h2>
                <!-- Icon Divider -->
                <div class="divider-custom">
                  <div class="divider-custom-line"></div>
                  <div class="divider-custom-icon">
                    <i class="fas fa-star"></i>
                  </div>
                  <div class="divider-custom-line"></div>
                </div>

                <div class="card-body">
                  <form @submit.prevent = "onSubmit1()">
                  <div class="form-group">
                    <label for="">Username</label>
                    <input type="text" class="form-control" v-model="form.username">
                    </div>
                  <div class="form-group">
                    <label for="">Password</label>
                    <input type="text" class="form-control" v-model="form.password">
                  </div>
                  <div class="form-group">
                    <label for="">Owner-name</label>
                    <input type="text" class="form-control" v-model="form.ownerName">
                  </div>
                  <div class="form-group">
                    <label for="">Shop-name</label>
                    <input type="text" class="form-control" v-model="form.shopName">
                  </div>
                  <div class="form-group">
                    <label for="">Shop-Detail</label>
                    <input type="text" class="form-control" v-model="form.detailshop">
                  </div>
                  <div class="form-group">
                    <label for="">E-mail</label>
                    <input type="text" class="form-control" v-model="form.email">
                  </div>

                  <div class="form-group portfolio-modal modal fade"  id="app" aria-hidden="true" tabindex="-1" aria-labelledby="portfolioModal4Label">
                    <input type="text" class="form-control" v-model="form.picshop" >
                  </div>
                  

                  <button type="submit" class="btn btn-info" href="#" >สมัครสมาชิก</button>
                  <button  class="btn btn-info" >รีเซ็ต</button>
                  </form>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->



</div>
</template>

<script>
import axios from "axios";

import Index from '@/views/home/Index';
import Register from '@/views/home/Register';
import Navbarweb from '@/views/home/Navbarweb';
import Login from '@/views/home/Login';



export default {

  components: {
    Register,
    Login,
    Navbarweb
  },

 data() {
   return {
     form: {
      username: "",
      password: "",
      ownerName: "",
      shopName: "",
      detailshop:"",
      email: ""
     }
   }
 },
 methods: {

   onSubmit1() {
     axios
      .post("https://ezpayapplication.herokuapp.com/register",this.form)
      .then( function (result) {
        this.DirectLogin()
      })
      
    },
     DirectLogin(){
        this.$router.push({ name : "login"});
    }
    
 }
}
</script>
