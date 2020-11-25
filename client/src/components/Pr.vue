<template>
<section id="design">
  <v-container>
    <h2>PR xizmati</h2>
    <v-row>
      <v-col data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" class="d-flex justify-center align-center" cols="12" md="6">
        <img :src="require('../assets/img/Group (3).svg')" alt="">
      </v-col>
      <v-col data-aos="fade-down" data-aos-duration="1500" data-aos-delay="300" cols="12" md="6">
        <ul>
          <v-col>
            <li><span class="spanIn"><img :src="require('../assets/img/Vector.svg')" alt=""><span>Pr maqolalar yozish</span></span></li>
            <li><span class="spanIn"><img :src="require('../assets/img/Vector.svg')" alt=""><span>Press-relize kesish</span></span></li>
            <li> <span class="spanIn"><img :src="require('../assets/img/Vector.svg')" alt=""><span>Ijtimoiy tarmoqlarda reklama</span></span></li>
            <li> <span class="spanIn"><img :src="require('../assets/img/Vector.svg')" alt=""><span>Axborat, hisob xatlar, <br>
            bayonnomalar matnini yozib berish</span></span></li>
            <li><span class="spanIn"><img :src="require('../assets/img/Vector.svg')" alt=""><span>Telekanallarda reklama</span></span></li>
            <li><span class="spanIn"><img :src="require('../assets/img/Vector.svg')" alt=""><span>Radiokanallarda reklama</span></span> </li>
            <li><span class="spanIn"><img :src="require('../assets/img/Vector.svg')" alt=""><span>Gazeta va jurnallardagi reklama </span></span></li>
          </v-col>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</section>
</template>
<script>
  export default {
    name: 'Design',
    data() {
      return {
      }
    }
  }
</script>
<style lang="scss" scoped>
    section#design{
      background: #040B21 url('../assets/Rectangle 27.png') no-repeat center center / cover;
      position: relative;
      padding-top: 120px;
      padding-bottom: 120px;
      h2{
        font-family: "Montserrat";
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 44px;
        margin-bottom: 56px;
        /* identical to box height */
        color: #FFFFFF;
        text-align: center;
      }
      img{
        width: 80%;
        height: 80%;
      }
      ul{
        margin-top: 90px;
        li{
            display: flex;
            justify-content: start;
            align-items: center;
            font-family: "Ubuntu";
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            margin-bottom: 30px;
            color: #FFFFFF;
            span.spanIn{
              margin-left: 150px;
              display: flex;
              align-items: center;
              img{
                max-width: 30px;
                height: 30px;
                margin-right: 30px;
              } 
            }
            
        }
      }
      }
      @media (max-width:600px) {
        section#design ul{
          margin-top:20px;
          li{
            justify-content: center;
            .spanIn{
              margin-left: 0px !important;
              img{
                display: none;
              }
            }
          }
        }
      }
      @media (max-width:500px) {
        section#design {
          text-align: center;
        }
        section#design ul li{
          list-style: none;
          img{
            display: none;
          }
        }
      }
</style>
