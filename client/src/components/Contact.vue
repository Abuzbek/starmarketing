<template>
  <section id="services">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <h3>Biz bilan bog’laning</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna,</p>
          <div class="adress">
            <img :src="require('../assets/img/adress.svg')" alt="">
            Manzil
          </div>
           <div class="phone">
            <a href="">
             Yunusobod 3/4 Beruniy metrosi
           </a>
          </div>
          <div class="adress">
            <img :src="require('../assets/img/phone.svg')" alt="">
            Telefon
          </div>
          <div class="phone">
            <a href="">+998 99 998 99 88</a>
            <a href="">+998 99 998 88 99</a>
          </div>
          <div class="social d-flex align-center ">
            <a href="">
              <img :src="require('../assets/img/instagram.svg')" alt="">
            </a>
            <a href="">
              <img :src="require('../assets/img/facebook.svg')" alt="">
            </a>
            <a href="">
              <img :src="require('../assets/img/telegram.svg')" alt="">
            </a>
          </div>
          <a href=""></a>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="contact_card">
            <h2>Contact form</h2>
            <v-text-field
              dark
              class="input_form"
              label="Ismingiz"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
            <v-text-field
              dark
              label="Telefon"
              :rules="rules"
              class="input_form"
              hide-details="auto"
            ></v-text-field>
             <v-select
              dark
              :items="items"
              label="Sizni qaysi xizmatlarimiz qiziqtiradi?"
              class="input_form"
              outlined
            ></v-select>
            <v-textarea
              dark
              outlined
              name="input-7-4"
              label="Bizga yozing"
            ></v-textarea>
            <v-btn
              tile
              color="#CC3333"
              large
              dark
              style="font-family: 'Ubuntu',
              sans-serif;font-weight:300;"
              class="rounded-lg"
            >
              Yuborish
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div style="position:relative;overflow:hidden;"><a href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Ташкент</a><a href="https://yandex.uz/maps/10335/tashkent/?ll=69.215268%2C41.352830&mode=whatshere&utm_medium=mapframe&utm_source=maps&whatshere%5Bpoint%5D=69.216200%2C41.352678&whatshere%5Bzoom%5D=17&z=17.4" style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс.Карты — поиск мест и адресов, городской транспорт</a><iframe src="https://yandex.uz/map-widget/v1/-/CCUAyGByCB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
  </section>
</template>
<script>

  export default {
    name: 'ChooseUse',
    data: () => ({
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
      items: ['SMM', 'Dizayn Marketing', 'Seo optimizatsiya', 'Marketing', 'Web dasturlash','Telegram botlar', 'Video syomka va montaj' , 'Pr xizmatlari'],
    }),
  }
</script>
<style lang="scss" scoped>
  section#services{
     padding-top: 80px; 
     text-align: center;
     background: #040B21;
     background-size: cover;
     box-shadow: inset 0px 8px 7px rgba(0, 0, 0, 0.5);
     h3{
       font-family: 'Montserrat';
       font-style: normal;
       font-weight: bold;
       font-size: 36px;
       line-height: 44px;
       color: #FFFFFF;
       &::after{
        content: '';
        display: block;
        width: 100px;
        height: 4px;
        background: #CC3333;
        border-radius: 6px;
        margin: 20px auto 50px auto;
       }
     }
     p{
       font-family: 'Ubuntu';
       font-style: normal;
       font-weight: normal;
       font-size: 18px;
       line-height: 21px;
       text-align: center;
       color: #FFFFFF;
       max-width: 480px;
       margin: auto;
     }
     .adress{
       display: flex;
       justify-content: center;
       align-items: center;
       margin-top: 50px;
       margin-bottom: 20px;
       color: white;
       font-family: 'Ubuntu';
       font-size: 28px;
       line-height: 32px;
       text-align: center;
       color: #FFFFFF;
       img{
         margin-right: 15px;
         max-width: 100%;
         height: auto;
       }
     }
     .phone{
       a{
         font-family: 'Ubuntu';
         font-style: normal;
         font-weight: normal;
         font-size: 24px;
         line-height: 28px;
         text-align: center;
         color: #FFFFFF;
         text-decoration: none;
         &:last-child{
           margin-left: 15px;
         }
       }
     }
     .social{
       justify-content: center;
       a{
         margin-left: 15px;
         margin-right: 15px;
         margin-top: 20px;
       }
     }
    .contact_card{
      background: #040B21;
      box-shadow: 0px 2px 10px 6px rgba(0, 0, 0, 0.5);
      padding: 30px 65px 20px 65px;
      max-width: 540px;
      margin: auto;
      h2{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 44px;
        color: #FFFFFF;
      }
      .input_form{
        margin-bottom: 30px;
        color: white;
        
      }
    }
  }
  @media(max-width:500px){
    section#services .contact_card{
      background: #040B21;
      box-shadow: 0px 2px 10px 6px rgba(0, 0, 0, 0.5);
      padding: 30px 15px 20px 15px;
      max-width: 540px;
      margin: 30px auto 0px auto;
    }
  }
</style>
