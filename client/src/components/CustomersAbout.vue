<template>
<section id="customersAbout">
    <v-container>
        <v-row>
            <v-col cols="12" md="6" class="mx-auto">
                  <h2>Mijozlarimiz biz haqimizda</h2>
            </v-col>
        </v-row>
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="(n,i) in cardSwiper" :key="n._id" :name="i">
                <v-card
                 shaped
                 class="card_swiper"
                >
                  <h4>{{ n.title }}</h4>
                  <p>{{ n.text }}</p>
                </v-card>
                  <img
                    style="margin-top:15px;"
                    width="56px"
                    height="56px"
                    :src="n.img"
                    alt=""
                  >
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </v-container>
</section>
</template>
<script>
    import photo from "../assets/img/Photo.png";
    import photo1 from "../assets/img/Photo1.png";
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
              title:'Muslima Muxammedova',
              text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis',
              img:photo,
          },
          {
              _id:'2',
              title:'Muslima Muxammedova',
              text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis',
              img:photo1,
          },
          {
              _id:'3',
              title:'Muslima Muxammedova',
              text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis',
              img:photo,
          },
          {
              _id:'4',
              title:'Muslima Muxammedova',
              text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis',
              img:photo1,
          }
        ],
        swiperOption: {
          slidesPerView: 2,
          spaceBetween: 30,
          breakpoints: {
            1024: {
              slidesPerView: 2,
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
    section#customersAbout{
        background: #040B21 url('../assets/img/bg.svg') no-repeat center center / cover ;
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
          .swiper {
            height: 100%;
            width: 100%;
            padding: 40px 40px;
            .swiper-slide {
              display: flex;
              flex-direction: column;
              align-items: center;
                .card_swiper{
                  width: 80%;
                  margin: 10px auto;
                  padding: 32px;
                  padding-bottom: 40px;
                  padding-top: 20px;
                  background: linear-gradient(76.22deg, #1E57A8 -56.82%, #B13ACA 100.71%);
                  box-shadow: 0px 6px 8px rgba(30, 87, 168, 0.3);   
                  text-align: center;
                  &::after{
                    content: '';
                    display: block;
                    background: #B13ACA;
                    width: 20px;
                    height: 20px;
                    transform: rotate(45deg) translateX(-50%);
                    position: absolute;
                    bottom: -14px;
                    z-index: -1;
                    left: 50%;
                  }
                  h4{
                      font-family: 'Ubuntu';
                      font-style: normal;
                      font-weight: normal;
                      font-size: 24px;
                      line-height: 28px;
                      /* identical to box height */
                      text-align: center;
                      color: #FFFFFF;
                  }
                  p{
                      font-family: Ubuntu;
                      font-style: normal;
                      font-weight: normal;
                      font-size: 18px;
                      line-height: 24px;
                      text-align: center;
                      font-feature-settings: 'liga' off;
                      color: #FFFFFF;
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
        }
        @media (max-width:500px) {
          section#customersAbout{
            text-align: center;
          }
        }
        @media(max-width:400px){
          section#customersAbout .swiper .swiper-slide .card_swiper{
            height: 170px;
            overflow: auto;
            padding: 20px;
          }
        }
</style>
