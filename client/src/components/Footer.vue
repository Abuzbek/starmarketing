<template>
<section id="footer">
  <v-container>
    <v-row>
      <v-col style="text-align:center;" cols="12" md="6">
        <img style="max-width:100%;height:auto;" :src="Logo" alt="">
        <p>Emotsiya sotamiz ishonch sotib olamiz!</p>
      </v-col>
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12" md="6">
            <a href="#!" class="map">
               Shayxontohur tumani
              <br>
              Beruniy metrosi
            </a>
          </v-col>
          <v-col cols="12" md="6">
            <a href="tel:+998 99 092 97 32">+998 99 092 97 32</a>
            <a href="tel:+998 33 160 01 80">+998 33 160 01 80</a>
            <div class="d-flex align-center justify-center header_social">
              <a href="https://www.instagram.com/starproductionuz/"><img :src="require('../assets/img/instagram.svg')" alt=""></a>
              <a href="https://www.facebook.com/Start-Marketing-Digital-Company-103463551590128"><img :src="require('../assets/img/facebook.svg')" alt=""></a>
              <a href="https://t.me/smm_starmarketing"><img :src="require('../assets/img/telegram.svg')" alt=""></a>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="footer">
        <p>© 2020 Star Marketing. All rights reserved.</p>
      </v-col>
    </v-row>
  </v-container>
</section>
</template>
<script>
import Logo from '../assets/images/loggooo 1.svg'

  export default {
    name: 'Footer',
    data() {
      return {
        Logo
      }
    }
  }
</script>
<style lang="scss" scoped>
#footer{
  background: #040B21;
  p{
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    margin-top: 20px;
  }
  a{
    display: block;
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 10px;
    text-decoration: none;
    &.map{
      font-family: "Ubuntu";
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 34px;
      text-align: center;
      color: #FFFFFF;
    }
  }
  .header_social{
    img{
      margin-right: 20px;
      margin-left: 20px;
      margin-top:20px;
    }
  }
  .footer{
    p{
      font-family: "Ubuntu";
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
      color: #FFFFFF;
      opacity: 0.4;
    }
  }
}
</style>
