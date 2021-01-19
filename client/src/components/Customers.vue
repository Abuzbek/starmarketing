<template>
  <section id="customers">
    <v-container>
      <h2>Mijozlarimiz</h2>
      <v-row class="justify-center">
        <v-col data-aos="slide-up" data-aos-duration="1500" data-aos-delay="300" class="col" v-for="(n,i) in card" :key="n.img" cols="6" lg="2" md="3" sm="6"  >
          <a :href="n._id">
            <img :src="n.img" :alt="i">
          </a>
          
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
  import img9 from "../assets/logo/omar logo .png";
  import img10 from "../assets/logo/azizoff.png";
  import img11 from "../assets/logo/befrelancer.png";



  // import $ from 'jquery'
  
  export default {
    
    name: 'ChooseUse',
    data: () => ({
      card:[
        {
          _id:'https://www.instagram.com/cloud9_itcompany/',
          img: img4,
        },
        {
          _id:'http://instagram.com/arabtili_onlayn_kurs',
          img: img2,
        },
        {
          _id:'https://www.instagram.com/avlod21/',
          img: img3,
        },
        {
          _id:'https://www.instagram.com/believelc/',
          img: img1,
        },
        {
          _id:'https://www.instagram.com/dilmurodstyle/',
          img: img5,
        },
        {
          _id:'https://www.instagram.com/eko_zamin/',
          img: img6,
        },
        {
          _id:'https://www.instagram.com/imkonsavdomarkazi/',
          img: img7,
        },
        {
          _id:'https://www.instagram.com/mashhura_2020/',
          img: img8,
        },
        {
          _id:'https://www.instagram.com/omarformen/',
          img: img9,
        },
        {
          _id:'https://www.instagram.com/azizoffservice/',
          img: img10,
        },
        {
          _id:'https://www.instagram.com/befreelanceruz/',
          img: img11,
        },
      ]
    }),
  }
</script>
<style lang="scss" scoped>
  section#customers{
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
       margin:0 auto 20px auto;
       max-width:80%;
       height: auto;
     }
     .col{
       display: flex;
       justify-content: center;
       align-items: center;
       padding: 40px;
     }
     
  }
   @media (max-width:500px) {
    section#customers{
      text-align: center;
      .col{
       padding: 20px;
     }
    }
  }
</style>
