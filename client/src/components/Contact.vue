<template>
  <section id="contact">
    <v-container>
      <v-row>
        <v-col data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500" cols="12" md="6">
          <h3>Biz bilan bog’laning</h3>
          <p>Emotsiya sotamiz ishonch sotib olamiz!</p>
          <div class="adress">
            <img :src="require('../assets/img/adress.svg')" alt="">
            Manzil
          </div>
           <div class="phone">
            <a href="">
             Shayxontohur tumani Beruniy metrosi
           </a>
          </div>
          <div class="adress">
            <img :src="require('../assets/img/phone.svg')" alt="">
            Telefon
          </div>
          <div class="phone">
             <a href="tel:+998 99 092 97 32">+998 99 092 97 32</a>
              <a href="tel:+998 33 160 01 80">+998 33 160 01 80</a>
          </div>
          <div class="social d-flex align-center ">
            <a href="https://www.instagram.com/starproductionuz/">
              <img :src="require('../assets/img/instagram.svg')" alt="">
            </a>
            <a href="https://www.facebook.com/Start-Marketing-Digital-Company-103463551590128">
              <img :src="require('../assets/img/facebook.svg')" alt="">
            </a>
            <a href="https://t.me/smm_starmarketing">
              <img :src="require('../assets/img/telegram.svg')" alt="">
            </a>
          </div>
          <a href=""></a>
        </v-col>
        <v-col data-aos="fade-down" data-aos-duration="1500" data-aos-delay="500" cols="12" md="6">
          <v-card class="contact_card">
            <h2>Contact form</h2>
            <v-text-field
              dark
              class="input_form"
              label="Ismingiz"
              :rules="rules"
              hide-details="auto"
              v-model="name"

            ></v-text-field>
            <v-text-field
              dark
              label="Telefon"
              :rules="rules"
              class="input_form"
              hide-details="auto"
              v-model="number"
            ></v-text-field>
             <v-select
              dark
              :items="items"
              label="Sizni qaysi xizmatlarimiz qiziqtiradi?"
              class="input_form"
              outlined
              v-model="categories"
            ></v-select>
            <v-textarea
              dark
              outlined
              name="input-7-4"
              label="Bizga yozing"
              v-model="message"
            ></v-textarea>
            <v-btn
              @click="submitbtn"
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
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11982.58843740213!2d69.2104013862915!3d41.33828640280658!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7b28c283edeb9cd4!2sAvlod21!5e0!3m2!1sru!2s!4v1607070478935!5m2!1sru!2s" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
  </section>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'ChooseUse',
    data: () => ({
      name:'',
      number:'+998',
      categories:'',
      message:'',
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
      items: ['SMM', 'Dizayn Marketing', 'Seo optimizatsiya', 'Marketing', 'Web dasturlash','Telegram botlar', 'Video syomka va montaj' , 'Pr xizmatlari'],
    }),
    methods: {
      submitbtn(){
        console.log({
          name: this.name,
          number: this.number,
          categories: this.categories,
          message: this.message
        });
        axios.post('/api', {
          name: this.name,
          number: this.number,
          categories: this.categories,
          message: this.message
        })
        this.name = ''
        this.number = ''
        this.categories = ''
        this.message = ""
        window.location.reload()
      }
    }
  }
</script>
<style lang="scss" scoped>
  section#contact{
     padding-top: 80px; 
     text-align: center;
     background: #031133;
     background-size: cover;
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
      background: #031133;
      box-shadow: 0px 2px 10px 6px rgba(0, 0, 0, 0.5);
      padding: 30px 65px 20px 65px;
      max-width: 540px;
      margin:0 auto 50px auto;
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
  iframe{
    background: #031133;
    opacity: 0.5;
  }
  @media(max-width:500px){
    section#contact .contact_card{
      background: #040B21;
      box-shadow: 0px 2px 10px 6px rgba(0, 0, 0, 0.5);
      padding: 30px 15px 20px 15px;
      max-width: 540px;
      margin: 30px auto 0px auto;
    }
  }
</style>
