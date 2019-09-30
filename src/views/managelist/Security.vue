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
                                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">จัดการบัญชีและธนาคาร</h2>
                                <!-- Icon Divider -->
                                <div class="divider-custom">
                                    <div class="divider-custom-line"></div>
                                    <div class="divider-custom-icon">
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div class="divider-custom-line"></div>
                                </div>
                                <div>
                                    รหัสผ่านใหม่่      <br> <input type="text" name="newpassword" value=""><br><br>
                                    รหัสผ่านใหม่่อีกครั้ง  <br> <input type="text" name="newpasswordagain" value=""><br><br>
                                    รหัสผ่านเดิมเพื่อยืนยัน  <br> <input type="text" name="verifypassword" value=""><br><br>
                                    
                                    <button class="btn btn-primary" data-dismiss="modal" type="submit" value="Submit" href="#" @click="DirectManage()">เปลี่ยนรหัสผ่าน</button>&nbsp;
                                    <button class="btn btn-primary" href="#" data-dismiss="modal">รีเซ็ต</button>
                                </div>
                                <br>
                                <div>
                                    บัญชีธนาคาร     <br> <input type="text" name="bankaccount" value=""><br><br>
                                    รหัสผ่านเดิมเพื่อยืนยัน  <br> <input type="text" name="verifypassword" value=""><br><br>
                                    
                                    <button class="btn btn-primary" data-dismiss="modal" type="submit" value="Submit" href="#" @click="DirectManage()">เปลี่ยนบัญชีธนาคาร</button>&nbsp;
                                    <button class="btn btn-primary" href="#" data-dismiss="modal">รีเซ็ต</button>
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
  data(){
      return{
          image:['/src/assets/img/Shop.png']
      }
  },
  methods: {
    DirectManage(){
        this.$router.push({ name : "listmanage"});
    }
  }
}

</script>