<template>
<section id="design">
  <v-container>
    <h2>PR xizmati</h2>
    <v-row>
      <v-col data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" cols="12" md="6">
        <img :src="require('../assets/img/Group (3).svg')" alt="">
      </v-col>
      <v-col data-aos="fade-down" data-aos-duration="1500" data-aos-delay="300" cols="12" md="6">
        <ul>
          <v-col>
            <li>PR MAQOLALAR YOZISH</li>
            <li>PRESS-RELIZ YOZISH</li>
            <li>IJTIMOIY TARMOQLARDA REKLAMA </li>
            <li>AXBOROT, HISOBOT XATLARI, <br>
            BAYONOTNOMALAR MATNINI YOZIB BERISH </li>
            <li>IJTIMOIY TARMOQLARDA REKLAMA </li>
            <li>TELEKANALLARDA REKLAMA</li>
            <li>RADIOKANALLARDA REKLAMA </li>
            <li>GAZETA VA JURNALLARDAGI REKLAMA </li>
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
      background: #031133 ;
      position: relative;
      padding-top: 80px;
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
        margin-top: 100px;
        li{
          font-family: 'Ubuntu';
          font-style: normal;
          font-weight: normal;
          font-size: 24px;
          line-height: 28px;
          /* identical to box height */
          color: #FFFFFF;
          margin-bottom: 30px;
          list-style-image: url('../assets/img/Vector.png');
          list-style-position: 10px;
        }
      }
      }
      @media (max-width:600px) {
        section#design ul{
          margin-top:20px;
        }
      }
      @media (max-width:500px) {
        section#design {
          text-align: center;
        }
        section#design ul li{
          list-style: none;
        }
      }
</style>
