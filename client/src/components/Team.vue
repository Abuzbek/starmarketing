<template>
<section id="team">
    <v-container>
        <v-row>
            <v-col cols="12" md="6" class="mx-auto">
                  <h2>Bizning jamoamiz</h2>
                  <p>Yuqori maxoratli, katta tajribali mutaxassislarimiz proyektingizni yuqori sifatda bajarishga tayyor </p>
            </v-col>
        </v-row>
          <swiper class="swiper d-none_sm" :options="swiperOption">
            <swiper-slide v-for="(n,i) in cardSwiper" :key="n._id" :name="i">
                <v-card
                 shaped
                 class="card_swiper"
                 color="transparent"
                 elevation="0"
                >
                <img
                    style="margin-top:15px;"
                    :src="n.img"
                    alt=""
                  >
                  <h4>{{ n.title }}</h4>
                  <p>{{ n.text }}</p>
                </v-card>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <v-row class="d-none_lg">
          <v-col cols="12" sm="12" v-for="(n,i) in cardSwiper" :key="n._id" :name="i">
           <v-card
           shaped
           class="card-swiper"
           color="#031133"
           elevation="2"
          >
          <img
              style="margin-top:15px;"
              :src="n.img"
              alt=""
            >
            <h4>{{ n.title }}</h4>
            <p>{{ n.text }}</p>
        </v-card>
        </v-col>
        </v-row>
        
        
    </v-container>
</section>
</template>
<script>
    import photo from "../assets/images/man1_03.png";
    import photo1 from "../assets/images/man2_06.png";
    import photo2 from "../assets/images/man3_06.png";
    import SwiperCore, { Pagination } from 'swiper';
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/swiper-bundle.css'
    SwiperCore.use([ Pagination ]);      
  export default {
    name: 'CustomersAbout',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        cardSwiper:[
          {
              _id:'1',
              title:'Manager',
              img:photo,
          },
          {
              _id:'2',
              title:'Web developer',
              img:photo1,
          },
          {
              _id:'3',
              title:'SMM specialist',
              img:photo2,
          },
          {
              _id:'3',
              title:'Android developer',
              img:photo1,
          },
          {
              _id:'4',
              title:'Web design',
              img:photo,
          }
        ],
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          breakpoints: {
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            }
          },
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    }
  }
</script>
<style lang="scss">
    section#team{
        background: #040B21 url('../assets/img/Group 321.svg') no-repeat;
        background-position: 6% 80%;
        position: relative;
        box-shadow: inset 0px -8px 7px rgba(0, 0, 0, 0.5);
        padding: 80px 0;
         h2{
          font-family: "Montserrat";
          font-style: normal;
          font-weight: bold;
          font-size: 36px;
          line-height: 44px;
          color: #FFFFFF;
          text-align: center;
          margin-bottom: 35px;
        }
        p{
          font-family: 'Ubuntu';
          font-style: normal;
          font-weight: normal;
          font-size: 24px;
          line-height: 28px;
          text-align: center;
          color: #FFFFFF;
        }
          .swiper {
            height: 100%;
            width: 100%;
            padding: 0 40px;
            .swiper-slide {
              display: flex;
              flex-direction: column;
              align-items: center;
                .card_swiper{
                  width: 80%;
                  height: 100%;
                  margin: 10px auto;
                  padding: 32px;
                  padding-bottom: 40px;
                  padding-top: 20px;
                  text-align: center;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  align-items: center;
                  img{
                    height: 336px;
                    filter: drop-shadow(30px 10px 4px  rgba(0, 0, 0, 0.5));
                  }
                  h4{
                    font-family: 'Ubuntu';
                    font-style: normal;
                    font-weight: normal;
                    font-size: 24px;
                    line-height: 28px;
                    text-align: center;
                    color: #FFFFFF;
                    margin-top: 20px;
                    filter: drop-shadow(30px 10px 4px  rgba(0, 0, 0, 0.5));
                  }
                }
            }
            .swiper-pagination {
              .swiper-pagination-bullet{
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: transparent;
                border: 1px solid white;
                &.swiper-pagination-bullet-active{
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  background: white;
                }
              }
            }
          }
          .d-none_lg{
            display: none;
          }
          .card-swiper{
            padding: 32px;
            padding-bottom: 40px;
            padding-top: 20px;
            text-align: center;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            align-items: center;
            img{
              height: auto;
              max-width: 100%;
              filter: drop-shadow(30px 10px 4px  rgba(0, 0, 0, 0.5));
            }
            h4{
              font-family: 'Ubuntu';
              font-style: normal;
              font-weight: normal;
              font-size: 24px;
              line-height: 28px;
              text-align: center;
              color: #FFFFFF;
              margin-top: 20px;
              filter: drop-shadow(30px 10px 4px  rgba(0, 0, 0, 0.5));
            }
          }
        }
        @media(max-width:500px){
          .d-none_lg{
            display: block !important;
          }
          .d-none_sm{
            display: none;
          }
        }
</style>
