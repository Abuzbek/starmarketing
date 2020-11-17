<template>
<section id="market">
  <v-container>
    <h2>Marketing</h2>
    <v-row>
      <v-col cols="12" md="6">
        <ul>
          <v-col>
            <li>MARKETING STRATEGIYALARI UCHUN <br> YORDAM </li>
            <li>SOTUV BO’LIMI SISTEMASI VA <br> SOTUVCHILARNI O’QITISH DASTURI </li>
            <li>LEADLAR TAYYORLASH VA ULARDAN <br> SAMARALI FOYDA OLISH </li>
            <li>SOTUV STRATEGIYASI VA EFFEKTIV <br> REKLAMALAR YARATISH </li>
          </v-col>
        </ul>
      </v-col>
      <v-col cols="12" md="6">
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
        section#market ul{
          margin-top:20px;
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
