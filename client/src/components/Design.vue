<template>
<section id="design">
  <v-container>
    <h2>Grafik dizayn</h2>
    <v-row>
      <v-col cols="12" md="6">
        <img :src="require('../assets/img/Group (1).svg')" alt="">
      </v-col>
      <v-col cols="12" md="6">
        <ul>
          <v-col>
            <v-row>
              <v-col cols="12" md="6">
                <li>Flayer</li>
                <li>Banner</li>
              </v-col>
              <v-col cols="12" md="6">
                <li>Buklet</li>
                <li>Logotip</li>
              </v-col>
            </v-row>
            <li>Mahsulot qadoqlash dizayni</li>
            <li>Tahririyat dizayni</li>
          </v-col>
        </ul>
      </v-col>
    </v-row>
  </v-container>
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
      background: #031133 ;
      box-shadow: 0px 8px 7px rgba(0, 0, 0, 0.5);
      position: relative;
      padding-top: 80px;
      padding-bottom: 120px;
      h2{
        font-family: "Montserrat";
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 44px;
        margin-bottom: 56px;
        /* identical to box height */
        color: #FFFFFF;
        text-align: center;
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
      }
      @media (max-width:500px) {
        section#design ul {
          margin-top:20px;
        }
        section#design{
          text-align: center;
        }
      }
      @media (max-width:500px) {
        section#design ul li{
          list-style: none;
        }
      }
</style>
