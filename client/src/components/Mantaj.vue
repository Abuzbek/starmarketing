<template>
<section id="design">
  <div class="custom-shape-divider-top-1605180170">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
  <v-container>
    <h2>Video syomka va montaj </h2>
    <v-row>
      <v-col data-aos="fade-up" data-aos-duration="1500" data-aos-delay="700" cols="12" md="6">
        <ul>
          <v-col>
            <li>Video syomka</li>
            <li>Video montaj</li>
            <li>Proyektli videolar </li>
            <li>Reklama ro’liklari tayyorlash </li>
            <li>Onlayn darslar syomkasi va montaji </li>
            <li>Ssenariyli materiallar syomkasi </li>
          </v-col>
        </ul>
      </v-col>
      <v-col data-aos="fade-down" data-aos-duration="1500" data-aos-delay="700" cols="12" md="6">
        <img :src="require('../assets/img/Group (2).svg')" alt="">
      </v-col>
    </v-row>
  </v-container>
    <div class="custom-shape-divider-bottom-1605178751">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
      </svg>
  </div>
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
    section#design{
      background: #040B21 ;
      box-shadow: 0px 8px 7px rgba(0, 0, 0, 0.5);
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
      .custom-shape-divider-bottom-1605178751 {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          transform: rotate(180deg);
      }

      .custom-shape-divider-bottom-1605178751 svg {
          position: relative;
          display: block;
          width: calc(135% + 1.3px);
          height: 81px;
      }

      .custom-shape-divider-bottom-1605178751 .shape-fill {
          fill: #031133;
          box-shadow: 0px 8px 7px rgba(0, 0, 0, 0.5);
      }
      .custom-shape-divider-top-1605180170 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
      }

      .custom-shape-divider-top-1605180170 svg {
          position: relative;
          display: block;
          width: calc(135% + 1.3px);
          height: 135px;
      }

      .custom-shape-divider-top-1605180170 .shape-fill {
          fill: #031133;
          box-shadow: 0px 8px 7px rgba(0, 0, 0, 0.5);
      }

      }
      @media (max-width:600px) {
        section#design ul{
          margin-top:20px;
        }
      }
      @media (max-width:500px) {
        section#design ul li{
          list-style: none;
        }
        section#design{
          text-align: center;
        }
      }
</style>
