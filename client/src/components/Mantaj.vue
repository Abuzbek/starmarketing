<template>
<section id="design">
  <v-container>
    <h2>Video syomka va montaj </h2>
    <v-row>
      <v-col data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" cols="12" md="6">
        <ul>
          <v-col>
            <li><span class="spanIn"><img :src="require('../assets/img/Vector.svg')" alt=""> <span>Video syomka</span></span>  </li>
            <li><span class="spanIn"> <img :src="require('../assets/img/Vector.svg')" alt=""> <span>Video montaj</span></span> </li>
            <li><span class="spanIn"><img :src="require('../assets/img/Vector.svg')" alt=""> <span>Proyektli videolar </span> </span> </li>
            <li><span class="spanIn"><img :src="require('../assets/img/Vector.svg')" alt=""> <span>Reklama ro’liklari tayyorlash </span> </span> </li>
            <li><span class="spanIn"><img :src="require('../assets/img/Vector.svg')" alt=""> <span>Onlayn darslar syomkasi va montaji</span></span>  </li>
            <li><span class="spanIn"> <img :src="require('../assets/img/Vector.svg')" alt=""> <span>Ssenariyli materiallar syomkasi </span></span> </li>
          </v-col>
        </ul>
      </v-col>
      <v-col data-aos="fade-down" data-aos-duration="1500" data-aos-delay="400" cols="12" md="6">
        <img :src="require('../assets/img/Group (2).svg')" alt="">
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
      background: #040B21 ;
      box-shadow: 0px 8px 7px rgba(0, 0, 0, 0.5);
      position: relative;
      padding-top: 30px;
      padding-bottom: 20px;
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
            line-height: 21px;
            margin-bottom: 30px;
            color: #FFFFFF;
            span.spanIn{
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
      @media (max-width:1265px) {
        section#design ul li span.spanIn{
          margin-left: 30px;
        }
      }
      @media (max-width:600px) {
        section#design ul{
          margin-top:20px;
          padding-left: 0;
          li{
            justify-content: center;
            .spanIn{
              margin-left: 0;
              img{
                display: none;
              }
            }
          }
        }
      }
      @media (max-width:500px) {
        section#design ul li{
          list-style: none;
        }
        section#design{
          text-align: center;
        }
      }
</style>
