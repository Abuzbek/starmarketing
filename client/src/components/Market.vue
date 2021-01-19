<template>
<section id="market">
  <v-container>
    <h2>Marketing</h2>
    <v-row class="reverseColumn">
      <v-col data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" cols="12" md="6">
        <ul>
          <v-col>
            <li><span class="spanIn"><img :src="require('../assets/img/Vector.svg')" alt=""><span>Pr maqolalar yozish</span></span></li>
            <li><span class="spanIn"><img :src="require('../assets/img/Vector.svg')" alt=""><span>Marketing strategiyalari  uchun  <br> yordam </span></span></li>
            <li><span class="spanIn"><img :src="require('../assets/img/Vector.svg')" alt=""><span>Sotuv bo’limi sistemasi va <br> sotuvchilarni o’qitish dasturi  </span></span></li>
            <li></li>
            <li><span class="spanIn"><img :src="require('../assets/img/Vector.svg')" alt=""><span>Leadlar tayyorlash va ulardan <br> samarali foyda olish </span></span></li>
            <li><span class="spanIn"><img :src="require('../assets/img/Vector.svg')" alt=""><span>Sotuv strategiyasi va effektiv <br> reklamalar yaratish </span></span></li>
          </v-col>
        </ul>
      </v-col>
      <v-col class="d-flex justify-center align-center" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="500" cols="12" md="6">
        <img :src="require('../assets/img/Group (4).svg')" alt=""> 
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
    section#market{
      background: #040B21 ;
      position: relative;
      padding-top: 120px;
      padding-bottom: 120px;
      h2{
        font-family: "Montserrat";
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 44px;
        /* identical to box height */
        color: #FFFFFF;
        text-align: center;
        margin-bottom: 56px;
      }
      img{
        width: 80%;
        height: 80%;
      }
      ul{
        margin-top: 40px;
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
      @media (max-width:959px) {
        .reverseColumn{
          flex-direction: column-reverse;
        }
      }
      @media (max-width:700px) {
        section#market ul{
          li{
            .spanIn{
              margin-left: 70px !important;
            }
          }
        }
      }
      @media (max-width:600px) {
        section#market ul{
          margin-top:20px;
          li{
            justify-content: center;
            .spanIn{
              margin-left: 0 !important;
              img{
                display: none;
              }
            }
          }
        }
      }
      @media (max-width:500px) {
        section#market{
          text-align: center;
        }
        section#market ul li{
          list-style: none;
        }
      }
</style>
