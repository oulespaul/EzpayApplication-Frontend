<template>
    <div>
    <div class="modal-dialog modal-xl --primary" role="document">
      <div class="modal-content">
        <div class="modal-body text-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <!-- Modal - Title -->
                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Login</h2>
                <!-- Icon Divider -->
                <div class="divider-custom">
                  <div class="divider-custom-line"></div>
                  <div class="divider-custom-icon">
                    <i class="fas fa-star"></i>
                  </div>
                  <div class="divider-custom-line"></div>
                </div>
                    <form @submit.prevent = "onLogin()">
                        <input type="text" class="form-control" v-model="form.username" >
                        <input type="text" class="form-control" v-model="form.password">
                        <button class="btn-btn-success">Login</button>
                        <button class="btn-btn-success" href="#" @click="DirectRegister()">สมัครสมาชิก</button>
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
export default {
     data() {
        return {
        form: {
            username: "tatchapong",
            password: "Gear"
        }
   }
 },
    methods: {
        onLogin() {
            axios.post('https://ezpayapp.azurewebsites.net/api/login',this.form)
                .then(res => {
                    localStorage.setItem('shopid',res.data.shop_id);
                    if(res.data.status_admin == true)
                    {
                        this.DirectIndexAdmin();
                    }else{
                        this.DirectIndexUser();
                    }
                    
                    this.alertify.success('Success message');
                  
                })
                .catch(err => {
                    this.onReset();
                      this.alertify.error('Error message');
                })
        },
        onReset() {
            this.form = {
                username: "",
                password: ""
            }
        },
        DirectIndexUser() {
            this.$router.push({ name : "index"});
        },
        DirectIndexAdmin() {
            this.$router.push({ name : "indexadmin"});
        },
        DirectRegister() {
            this.$router.push({ name : "register"});
        }
    }
}
</script>
