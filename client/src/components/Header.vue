<template>
<header id="header">
  <v-container style="position:relative; z-index:2;">
      <v-row >
        <v-col
          cols="12"
          md="5"
        >
          <div class="header_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
             <h1 id="quote">STAR MARKETING</h1>
             <h4>DIGITAL COMPANY</h4>
             <p>Emotsiya sotamiz ishonch sotib olamiz! </p>
            <v-btn
              tile
              color="#CC3333"
              large
              dark
              style="font-family: 'Ubuntu',
              sans-serif;font-weight:300;"
              class="rounded-lg"
            >
                <v-img
                  :src="require('../assets/img/play.svg')"
                  width="13px"
                  class="mr-5"
                />
              Showreel
            </v-btn>
            <div  class="d-flex align-center header_social">
              <a href="#!"><img :src="require('../assets/img/instagram.svg')" alt=""></a>
              <a href="#!"><img :src="require('../assets/img/facebook.svg')" alt=""></a>
              <a href="#!"><img :src="require('../assets/img/telegram.svg')" alt=""></a>
            </div>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="7"
        >
          <img data-aos="fade-down" data-aos-duration="1500" data-aos-delay="300" class="header_img" :src="require('../assets/img/header_img.svg')" alt="">
        </v-col>
      </v-row>
  </v-container>
</header>
</template>

<script>
  export default {
    name: 'Header',
    data: () => ({
    }),
  }
</script>
<style lang="scss" scoped>
  header{
    background: #040B21 url('../assets/img/bg.svg') no-repeat center center / cover ;
    position: relative;
    .header_title{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      height: calc(100vh - 120px);
      h1{
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 64px;
        line-height: 78px;
        color: white;
      }
      h4{
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        color: #545454;
      }
      p{
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: normal;
        font-size: 28px;
        color: #FFFFFF;
        margin: 45px 0;
      }
      .header_social{
        margin-top: 50px;
        img{
          margin-right: 40px;
        }
      }
    }
    img.header_img{
      width: 100%;
      height: auto;
    }
    
  }
  @media (max-width:1264px) {
    img.header_img{
      display: none;
    }
  }
  @media (max-width:624px) {
    header{
      .header_title{
        h1{
          font-size: 40px;
        }
        h4{
          font-size: 21px;
        }
        p{
          font-size: 20px;
        }
      }
    }
  }
  @media (max-width:500px) {
    header .header_title{
      align-items: center;
    }
  }
</style>
