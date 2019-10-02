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
                                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">โปรไฟล์ร้าน</h2>
                                <!-- Icon Divider -->
                                <div class="divider-custom">
                                    <div class="divider-custom-line"></div>
                                    <div class="divider-custom-icon">
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div class="divider-custom-line"></div>
                                </div>
                                ชื่อร้านค้า       <br> <input type="text" name="shopName" v-model="form.shopName"><br><br>
                                ชื่อเจ้าของร้านค้า  <br> <input type="text" name="ownerName" v-model="form.ownerName"><br><br>
                                รายละเอียดร้านค้า <br> <input type="text" name="detailShop" style="height:200px" v-model="form.detailShop"><br><br>
                                <!-- <input type="file" name="fileupload" value="fileupload" id="fileupload"> <label for="fileupload">เลือกรูปภาพหน้าร้านค้า</label> -->

                                <br><br>
                                <button class="btn btn-primary" data-dismiss="modal" type="submit" value="Submit" href="#" v-on:click="seteditdata()">ยืนยัน</button>&nbsp;
                                <button class="btn btn-primary" href="#" data-dismiss="modal" v-on:click="onReset();"> รีเซ็ต</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          <!-- <div class="container">
            <div class="large-12 medium-12 small-12 cell">
              <label>File
                <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
              </label>
                <button v-on:click="submitFile()">Submit</button>
            </div>
          </div> -->
    </div>
</template>

<script>
import axios from "axios";
import Navbarweb from '@/views/home/Navbarweb';

export default {
    components: {
    Navbarweb,
  },
  data(){
      return {
        form : {
            shopName : '',
            detailShop:'',
            ownerName:'',
        },
        file: ''
      }
    },
      created() {
      this.getprofile();
  },
methods: {
  getprofile() {
      const id = localStorage.getItem('shopid');
      axios.get('/api/shop' + id)
      .then(res => {
          this.form.shopName = res.data.shopName;
          this.form.detailShop = res.data.detailShop;
          this.form.ownerName = res.data.ownerName;
          // this.form.picshop = res.data.picshop;
      })
      .catch(err => {

      })
    },
  // submitFile(){
  //   let formData = new FormData();
  //   formData.append('file', this.file);
  //   axios.post( 'https://ezpayapp.azurewebsites.net/api/uploadfile', formData,
  //               {
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       }
  //     }
  //   ).then(function(){
  //     console.log('SUCCESS!!');
  //   })
  //   .catch(function(){
  //     console.log('FAILURE!!');
  //   });
  // },
  onReset() {
      this.form = {
            shopName :"",
            detailShop:"",
            ownerName:"",
            email:"",
      }
  },
  seteditdata(){
        const id = localStorage.getItem('shopid');
        axios.put('/api/shop'+ id,this.form)
        .then(res => {
            this.alertify.success('Success message');
            this.$router.push({ name : "index"});
        })
        // setTimeout(() => this.isHidden = false, 1000);  
  },
    handleFileUpload(){
        this.file = this.$refs.file.files[0];
      },

    DirectIndex(){
        this.$router.push({ name : "index"});
    },
  }
}
</script>