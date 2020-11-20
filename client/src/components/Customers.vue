<template>
  <section id="services">
    <v-container>
      <h2>Mijozlarimiz</h2>
      <v-row>
        <v-col data-aos="slide-up" data-aos-duration="1500" data-aos-delay="300" class="col" v-for="(n,i) in card" :key="n.img" cols="4" lg="2" md="3" sm="4" :class="n.class">
          <img :src="n.img" :alt="i">
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
  import img1 from "../assets/logo/beileve.png";
  import img2 from "../assets/logo/BAYNA_.png";
  import img3 from "../assets/logo/Avlod21.png";
  import img4 from "../assets/logo/cloud logo.png";
  import img5 from "../assets/logo/Dilmurod_style.png";
  import img6 from "../assets/logo/eko zamin.png";
  import img7 from "../assets/logo/logo (2).png";
  import img8 from "../assets/logo/mashhura.png";
  // import $ from 'jquery'
  
  export default {
    
    name: 'ChooseUse',
    data: () => ({
      card:[
        {
          _id:'1',
          img: img4,
        },
        {
          _id:'2',
          img: img2,
        },
        {
          _id:'3',
          img: img3,
        },
        {
          _id:'1',
          img: img1,
        },
        {
          _id:'2',
          img: img5,
        },
        {
          _id:'3',
          img: img6,
        },
        {
          _id:'1',
          img: img7,
        },
        {
          _id:'2',
          img: img8,
        },
        {
          _id:'3',
          img: img3,
        },
        {
          _id:'1',
          img: img1,
        },
        {
          _id:'2',
          img: img2,
        },
        {
          _id:'3',
          img: img3,
        },
      ]
    }),
  }
</script>
<style lang="scss" scoped>
  section#services{
     padding: 80px 0; 
     text-align: center;
     background: #040B21;
     background-size: cover;
     h2{
       font-family: 'Montserrat';
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 44px;
      color: #FFFFFF;
      margin-bottom: 75px;
     }
     img{
       margin:0 auto 80px auto;
       max-width:80%;
       height: auto;
     }
     .col{
       display: flex;
       justify-content: center;
       align-items: center;
     }
     
  }
   @media (max-width:500px) {
    section#services{
      text-align: center;
    }
  }
</style>
