<template>
  <section id="choose">
    <v-container>
      <h2>NIMA UCHUN BIZNI TANLASHADI ?</h2>
      <v-row>
          <v-col data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500" v-for="(n,i) in card" :key="n._id" :name="i" cols="12" lg="3" md="6">
            <v-card
              color="transparent"
              class="mx-auto"
              width="200"
              elevation="0"
              :id="n._id"
            >
              <img :src="n.img" alt="">
              <p class="title">
                {{ n.title }}
              </p>
            </v-card>
          </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
  import img1 from "../assets/img/cardSvg/1.svg";
  import img2 from "../assets/img/cardSvg/2.svg";
  import img3 from "../assets/img/cardSvg/3.svg";
  import img4 from "../assets/img/cardSvg/4.svg";

  export default {
    
    name: 'ChooseUse',
    data: () => ({
      card:[
        {
          _id:'1',
          img: img1,
          title:'Ishga professional va punktual tarzda yondashuv'
        },
        {
          _id:'2',
          img: img2,
          title:'Minimalizmdan Maksimalizmgacha bo’lgan faoliyatning aniq strategiya'
        },
        {
          _id:'3',
          img: img3,
          title:'Samarali xizmat ortidan ko’zlangan yuqori natija'
        },
        {
          _id:'4',
          img: img4,
          title:'Halol mehnat. Mijozlarning rizoligiga erishish'
        }
      ]
    }),
  }
</script>
<style lang="scss" scoped>
  section#choose{
     padding: 80px 0; 
     text-align: center;
     background: url('../assets/img/sectionBg.jpg') no-repeat center center ;
     background-size: cover;
     filter: grayscale(50%);
     h2{
       font-family: "Montserrat";
       font-style: normal;
       font-weight: bold;
       font-size: 36px;
       line-height: 44px;
       color: #FFFFFF;
       margin-bottom: 80px;
     }
     .title{
       font-family: "Ubuntu" !important;
      font-style: normal;
      font-weight: normal;
      font-size: 20px !important;
      line-height: 23px !important;
      text-align: center !important;
      color: #FFFFFF !important;
      margin-top: 40px !important;
     }
  }
</style>
