<template>
<section id="design">
  <v-container>
    <h2>Grafik dizayn</h2>
    <v-row>
      <v-col data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" cols="12" md="6">
        <img :src="require('../assets/img/Group (1).svg')" alt="">
      </v-col>
      <v-col data-aos="fade-down" data-aos-duration="1500" data-aos-delay="300" cols="12" md="6">
        <ul>
          <v-col>
            <v-row>
              <v-col cols="12" md="6" style="padding:0 !important;">
                <li> <img :src="require('../assets/img/Vector.svg')" alt=""> <span>Flayer</span> </li>
                <li> <img :src="require('../assets/img/Vector.svg')" alt=""> <span>Banner</span> </li>
              </v-col>
              <v-col cols="12" md="6" style="padding:0 !important;">
                <li> <img :src="require('../assets/img/Vector.svg')" alt=""> <span>Buklet</span> </li>
                <li> <img :src="require('../assets/img/Vector.svg')" alt=""> <span>Logotip</span> </li>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12"  style="padding:0 !important;">
                <li> <img :src="require('../assets/img/Vector.svg')" alt=""> <span>Mahsulot qadoqlash dizayni</span> </li>
                <li> <img :src="require('../assets/img/Vector.svg')" alt=""> <span>Tahririyat dizayni</span> </li>
              </v-col>
            </v-row>
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
      background: #040B21 url('../assets/Rectangle 26.png') no-repeat center center / cover;
      box-shadow: 0px 8px 7px rgba(0, 0, 0, 0.5);
      position: relative;
      padding-top: 50px;
      padding-bottom: 80px;
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
        margin-top: 100px;
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
            img{
              max-width: 30px;
              height: 30px;
              margin-right: 30px;
            }
        }
      }
      }
      @media (max-width:500px) {
        section#design ul {
          margin-top:20px;
        }
        section#design{
          text-align: center;
        }
      }
      @media (max-width:500px) {
        section#design ul li{
          list-style: none;
        }
      }
</style>
