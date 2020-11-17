<template>
  <section id="services">
    <v-container>
      <h2>Mijozlarimiz</h2>
      <v-row>
        <v-col v-for="(n,i) in card" :key="n.img" cols="6" lg="2" md="3" sm="4">
          <img :src="n.img" :alt="i">
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
  import img1 from "../assets/img/image 30.png";
  import img2 from "../assets/img/image 31.png";
  import img3 from "../assets/img/Vector1.png";

  export default {
    
    name: 'ChooseUse',
    data: () => ({
      card:[
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
     box-shadow: inset 0px 8px 7px rgba(0, 0, 0, 0.5);
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
       margin-bottom: 80px;
     }
  }
   @media (max-width:500px) {
    section#services{
      text-align: center;
    }
  }
</style>
