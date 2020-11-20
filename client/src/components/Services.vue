<template>
  <section id="services">
    <v-container>
      <v-row>
        <v-col cols="12" lg="10" class="mx-auto">
          <v-row>
             <v-col v-for="(n,i) in card" :key="n._id" :name="i" cols="12" lg="4" md="6">
            <v-card
              color="transparent"
              class="mx-auto card_service"
              width="270"
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
        </v-col>
         
      </v-row>
    </v-container>
  </section>
</template>
<script>
  import img1 from "../assets/img/cardSvg/Group (5).svg";
  import img2 from "../assets/img/cardSvg/Group (6).svg";
  import img3 from "../assets/img/cardSvg/Group (7).svg";

  export default {
    
    name: 'ChooseUse',
    data: () => ({
      card:[
        {
          _id:'1',
          img: img1,
          title:'SEO, Youtube optimizatsiya'
        },
        {
          _id:'2',
          img: img2,
          title:'Web dasturlash xizmati'
        },
        {
          _id:'3',
          img: img3,
          title:'Murakkab telegram botlar xizmati' 
        },
      ]
    }),
  }
</script>
<style lang="scss" scoped>
  section#services{
     padding: 80px 0; 
     text-align: center;
     background: #031133;
     background-size: cover;
     .card_service{
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: space-between;
       height: 100% !important;
     }
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
       font-family: 'Ubuntu';
       font-style: normal;
       font-weight: normal;
       font-size: 28px;
       line-height: 32px;
       text-align: center;
       color: #FFFFFF;
       padding: 5px 30px;
       margin-top: 32px;
     }
  }
  @media (max-width:500px) {
    section#services {
      text-align: center;
    }
  }
</style>
