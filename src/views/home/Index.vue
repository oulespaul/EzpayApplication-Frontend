
<template>
    <div>
    <Navbarweb/>
    <header class="masthead bg-picshop text-white text-center">
        <div class="container d-flex align-items-center flex-column">

            <!-- Masthead Avatar Image -->
            <!-- <img class="masthead-avatar mb-5" src="@/assets/imgshop/shop-cartoon-png-2.png" /> -->

            <!-- Masthead Heading -->
            <h1 class="masthead-heading text-uppercase mb-0">{{options.shopname}}</h1>
            <br>
                
            <!-- Icon Divider -->
            <div class="divider-custom divider-light">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon">
                    <i class="fas fa-star"></i>
                </div>
                <div class="divider-custom-line"></div>
            </div>

            <!-- Masthead Subheading -->
            <p class="masthead-subheading font-weight-light mb-0">{{options.shopdetail}}</p>
        </div>
    </header>

    <section class="bg-primary text-white mb-0" id="about">
        <div class="container">
            
            <section class=" portfolio" id="portfolio">
            <div class="container">
                <br>
            <!-- About Section Heading -->
                <h2 class="page-section-heading text-center text-uppercase text-white">เมนูจัดการร้าน</h2>

                <!-- Icon Divider -->
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon">
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="divider-custom-line"></div>
                </div>

            <div class="row">
                <!-- Item 1 -->
                <div class="col-md-6 col-lg-4">
                    <div class="portfolio-item mx-auto" href="#" @click="DirectProfile()">
                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="portfolio-item-caption-content text-center text-white">
                                <b><i>โปรไฟล์ร้าน</i></b>
                            </div>
                        </div>
                        <img class="img-fluid" src="@/assets/img/portfolio/cabin.png" alt="">
                    </div>
                </div> <!--มีรูปโปรไฟล์ร้าน รายละเอียดร้านค้า ที่อยู่ที่ตั้ง เบอร์โทรศัพท์-->

                <!-- Item 2 -->
                <div class="col-md-6 col-lg-4">
                    <div class="portfolio-item mx-auto" href="#" @click="DirectProduct()">
                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="portfolio-item-caption-content text-center text-white">
                                <b><i>จัดการสินค้าของร้าน</i></b>
                            </div>
                        </div>
                        <img class="img-fluid" src="@/assets/img/portfolio/cake.png" alt="">
                    </div>
                </div> <!--แก้ไขชื่อสินค้า ราคา สถานะของสินค้า-->

                <!-- Item 3 -->
                <div class="col-md-6 col-lg-4">
                    <div class="portfolio-item mx-auto" href="#" @click="DirectHistoryAll()">
                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="portfolio-item-caption-content text-center text-white">
                                <b><i>ประวัติการขายสินค้า</i></b>
                            </div>
                        </div>
                        <img class="img-fluid" src="@/assets/img/portfolio/day.png" alt="">
                    </div>
                </div> <!--ประวัติการขายสินค้ารายวัน-->

            </div>
            </div>
            </section>

        </div>
    </section>

    </div>

</template>

<script>
import axios from "axios";
import Navbarweb from '@/views/home/Navbarweb';
import Register from '@/views/home/Register';
export default {

  components: {
    Register,
    Navbarweb
  },
  data() {
      return {
          options: {
              shopname : '',
              shopdetail : ''
          }
      }
  },
  created() {
      this.search();
  },
  methods: {
    
    search() {
          const id = localStorage.getItem('shopid')
          axios.get('/api/shop'+ id)
          .then(res => {
              console.log(res.data)
              this.options.shopname = res.data.shopName;
              this.options.shopdetail = res.data.detailShop;
              this.options.picshop = res.data.picshop;
          })
          .catch(err => {

          })
      },
    DirectProfile(){
        this.$router.push({ name : "profile"});
    },
    DirectProduct(){
        this.$router.push({ name : "product"});
    },
    DirectSecurity(){
        this.$router.push({ name : "security"});
    },
    DirectHistoryAll(){
        this.$router.push({ name : "historyall"});
    },
  }
}
</script>
