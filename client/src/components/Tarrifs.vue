<template>
<section id="tariffs">
    <v-container>
        <v-row>
            <v-col cols="12" md="6" class="mx-auto">
                <v-card
                  class="transparent card_tarrifs"
                  elevation="0"
                >
                    <img :src="require('../assets/img/tarrifs.svg')" alt="">
                    <h2>SMM <br> TARIFLARIMIZ</h2>
                </v-card>
            </v-col>
        </v-row>
          <swiper class="swiper d-none_md" :options="swiperOption">
            <swiper-slide v-for="(n,i) in cardSwiper" :key="n._id" :name="i">
                <v-card
                 class="card_swiper"
                 color="#040B21"
                 :style="n.boxShadow"
                 style="border-radius:6px;"
                >
                    <div class="topCard d-flex justify-center flex-column align-center   ">
                        <h4 :style="'color:'+n.colorText">{{ n.title }}</h4>
                        <ul>
                            <li> <img :src="require('../assets/img/Vector.png')" alt=""> <span>{{n.ulLi.one}}</span> </li>
                            <li> <img :src="require('../assets/img/Vector.png')" alt=""> <span>{{n.ulLi.two}}</span> </li>
                            <li> <img :src="require('../assets/img/Vector.png')" alt=""> <span>{{n.ulLi.tree}}</span> </li>
                            <li> <img :src="require('../assets/img/Vector.png')" alt=""> <span>{{n.ulLi.four}}</span> </li>
                            <li v-if="n.ulLi.five"> <img :src="require('../assets/img/Vector.png')" alt=""> <span>{{n.ulLi.five}}</span> </li>
                            <li v-if="n.ulLi.six"> <img :src="require('../assets/img/Vector.png')" alt=""> <span>{{n.ulLi.six}}</span> </li>
                            <li v-if="n.ulLi.seven"> <img :src="require('../assets/img/Vector.png')" alt=""> <span>{{n.ulLi.seven}}</span> </li>
                            <li v-if="n.ulLi.eight"> <img :src="require('../assets/img/Vector.png')" alt=""> <span>{{n.ulLi.eight}}</span> </li>
                            <li v-if="n.ulLi.nine"> <img :src="require('../assets/img/Vector.png')" alt=""> <span>{{n.ulLi.nine}}</span> </li>
                            <li v-if="n.ulLi.ten"> <img :src="require('../assets/img/Vector.png')" alt=""> <span>{{n.ulLi.ten}}</span> </li>
                        </ul>
                    </div>
                    <div class="bottomCard">
                        <p>Postlar soni: 15+</p>
                    </div>
                </v-card>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <v-row class="d-none_lg">
          <v-col v-for="(n,i) in cardSwiper" :key="n._id" :name="i" cols="12">
             <v-card
                 shaped
                 class="card_swiper"
                 color="#040B21"
                 :style="n.boxShadow"
                >
                    <div class="topCard d-flex justify-center flex-column align-center">
                        <h4 :style="'color:'+n.colorText">{{ n.title }}</h4>
                        <ul>
                            <li>{{n.ulLi.one}}</li>
                            <li>{{n.ulLi.two}}</li>
                            <li>{{n.ulLi.tree}}</li>
                            <li>{{n.ulLi.four}}</li>
                            <li v-if="n.ulLi.five">{{n.ulLi.five}}</li>
                            <li v-if="n.ulLi.six">{{n.ulLi.six}}</li>
                            <li v-if="n.ulLi.seven">{{n.ulLi.seven}}</li>
                            <li v-if="n.ulLi.eight">{{n.ulLi.eight}}</li>
                            <li v-if="n.ulLi.nine">{{n.ulLi.nine}}</li>
                            <li v-if="n.ulLi.ten">{{n.ulLi.ten}}</li>
                        </ul>
                    </div>
                    <div class="bottomCard">
                        <p>Postlar soni: 15+</p>
                    </div>
                </v-card>
          </v-col>
        </v-row>
    </v-container>
    <!-- <div class="custom-shape-divider-bottom-1605178751">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
    </div> -->
</section>
</template>
<script>
    import SwiperCore, { Navigation } from 'swiper';
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/swiper-bundle.css'
    SwiperCore.use([ Navigation ]);      
  export default {
    name: 'swiper-example-multiple-slides-per-biew',
    title: 'Multiple slides per view',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        cardSwiper:[
          {
              _id:'1',
              boxShadow:'box-shadow: 0px 0px 8px rgba(77, 182, 254, 0.3);',
              colorText:'#4DB6FE',
              title:'Modest',
              ulLi:{
                 one:'Tarmoq marketingi strategiyasi',
                 two:'Kopirayting',
                 tree:'Dizayn',
                 four:'Targeting'
              }
          },
          {
              _id:'2',
              boxShadow:'box-shadow: 0px 0px 8px rgba(246, 206, 72, 0.3);',
              colorText:'#F6CE48',
              title:'Average',
              ulLi:{
                 one:'Tarmoq marketingi strategiyasi',
                 two:'Kopirayting',
                 tree:'Dizayn',
                 four:'Targeting',
                 five:'Reklama videosi',
                 six: 'Stories'
              }
          },
          {
              _id:'3',
              boxShadow:'box-shadow: 0px 0px 8px rgba(202, 64, 170, 0.3);',
              colorText:'#CA40AA',
              title:'Bright',
              ulLi:{
                 one:'Tarmoq marketingi strategiyasi',
                 two:'Kopirayting',
                 tree:'Dizayn',
                 four:'Targeting',
                 five:'Reklama videosi',
                 six:'Stories ',
                 seven:'Seo optimizatsiya',
                 eight:'Moushn videos'
              }
          },
          {
              _id:'4',
              boxShadow:'box-shadow: 0px 0px 8px rgba(203, 35, 109, 0.3);',
              colorText:'#CB236D',
              title:'Star',
              ulLi:{
                 one:'Tarmoq marketingi strategiyasi',
                 two:'Kopirayting',
                 tree:'Dizayn',
                 four:'Targeting',
                 five:'Reklama videosi',
                 six:'Stories ',
                 seven:'Seo optimizatsiya',
                 eight:'Moushn videos',
                 nine:'PR material',
                 ten:'Video kontent' 
              }
          }
        ],
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          breakpoints: {
            1440: {
              slidesPerView: 3,
              spaceBetween: 30
            },
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
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
    section#tariffs{
        background: #040B21 url('../assets/img/bg.svg') no-repeat center center / cover ;
        position: relative;
        padding: 80px 0;
        .card_tarrifs{
            display: flex;
            justify-content:center;
            align-items: center;
            margin-bottom: 50px;
             h2{
                font-family: "Montserrat";
                font-style: normal;
                font-weight: bold;
                font-size: 36px;
                line-height: 44px;
                color: #FFFFFF;
                margin-left: 30px;
            }
        }
          .swiper {
            height: 100%;
            width: 100%;
            padding: 0 40px;
            .swiper-slide {
                .card_swiper{
                    width: 65%;
                    margin: 10px auto;
                    height: 580px;
                    padding: 30px;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: space-between;
                    h4{
                        font-family: 'Ubuntu';
                        font-style: normal;
                        font-weight: bold;
                        font-size: 28px;
                        line-height: 32px;
                        margin-bottom: 30px ;
                    }
                    ul{
                        li{
                            list-style-image: url('../assets/img/Vector.png');
                            font-family: "Ubuntu";
                            font-style: normal;
                            font-weight: normal;
                            font-size: 18px;
                            line-height: 21px;
                            margin-bottom: 20px;
                            color: #FFFFFF;
                        }
                    }
                    p{
                        text-align: center;
                        font-family: "Ubuntu";
                        font-style: normal;
                        font-weight: normal;
                        font-size: 18px;
                        line-height: 21px;
                        /* identical to box height */
                        color: #FFFFFF;
                    }
                }
            }

               .swiper-button-prev{
                   width: 60px;
                   height: 60px;
                   color: white !important;
                   background: #CC3333;
                   border-radius: 4px;
                   transform: translateX(-10px);
                   &::after{
                     font-size: 22px;
                     font-weight: 900;
                   }
               }
               .swiper-button-next{
                   width: 60px;
                   height: 60px;
                   color: white !important;
                   background: #CC3333;
                   border-radius: 4px;
                   transform: translateX(10px);
                   &::after{
                     font-size: 22px;
                     font-weight: 900;
                   }
               }
               .swiper-button-disabled{
                 display: none;
               }
            }
            .d-none_lg{
              display: none;
            }
        }
         .card_swiper{
          width: 65%;
          margin: 10px auto;
          height: auto;
          padding: 30px;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: space-between;
          h4{
              font-family: 'Ubuntu';
              font-style: normal;
              font-weight: bold;
              font-size: 28px;
              line-height: 32px;
              margin-bottom: 30px ;
          }
          ul{
            margin-bottom: 20px;
              li{
                  display: flex;
                  justify-content: start;
                  align-items: center;
                  font-family: "Ubuntu";
                  font-style: normal;
                  font-weight: normal;
                  font-size: 18px;
                  line-height: 21px;
                  margin-bottom: 20px;
                  color: #FFFFFF;
                  img{
                    max-width: 100%;
                    height: 100%;
                    margin-right: 20px;
                  }
              }
          }
          p{
              text-align: center;
              font-family: "Ubuntu";
              font-style: normal;
              font-weight: normal;
              font-size: 18px;
              line-height: 21px;
              /* identical to box height */
              color: #FFFFFF;
          }
        }
@media(max-width:624px){
     section#tariffs{
       .card_tarrifs{
         flex-direction: column;
         text-align: center;
         h4{
           margin-top:20px;
         }
       }
     }
   }
   @media(max-width:624px){
     section#tariffs{
       .card_tarrifs{
         flex-direction: column;
         text-align: center;
         h4{
           margin-top:20px;
         }
       }
     }
   }
   @media (max-width:600px) {
     .d-none_md{
       display: none;
     }
     .d-none_lg{
       display: block !important;
     }
   }
  @media (max-width:500px) {
    .card_swiper ul li{
      list-style: none;
    }
    .card_swiper{
      text-align: center;
    }
  }   
  @media (max-width:400px) {
    .card_swiper{
    width: 80%;
    margin: 10px auto;
    height: auto;
    padding: 14px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
}
  }         
</style>
