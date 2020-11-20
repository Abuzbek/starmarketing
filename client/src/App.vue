<template>
  <v-app>
    <v-app-bar
      app
      color="#040B21"
      dark
      height="90px"
      elevate-on-scroll
    >
      <div class="d-flex align-center">
        <v-btn
          class="mx-2 btnToggleMenu"
          fab
          dark
          color="#031133"
        >
          <v-icon
          dark
          >
            fas fa-bars
          </v-icon>
    </v-btn>
        <v-img
          alt="star Logo"
          class="shrink ml-12 d-none_Logomd"
          contain
          :src="require('./assets/images/loggooo 1.svg')"
          transition="scale-transition"
          height="64px"
        />
        <v-img
          alt="star Logo"
          class="shrink ml-4 d-none_Logolg"
          contain
          :src="require('./assets/images/logo.png')"
          transition="scale-transition"
          height="64px"
        />
      </div>
      <v-spacer></v-spacer>
      <div class="navbar_drawer">
          <v-btn
          data-src="#header"
          color="transparent"
          class="ml-6 btnSrc"
         >
          Bosh sahifa
        </v-btn >
         <v-btn
          data-src="#tariffs"
          color="transparent"
          class="ml-6 btnSrc"
         >
          Xizmatlarimiz
        </v-btn >
        <v-btn
          data-src="#customersAbout"
          color="transparent"
          class="ml-6 btnSrc"
        >
          Sharhlar
        </v-btn>
        <v-btn
          data-src="#contact"
          color="#CC3333"
          class="ml-6 mr-12 btnSrc"
        >
          Kontakt
        </v-btn>
      </div>
       
    </v-app-bar>

    <v-main>
      <Header/>
      <Choise/>
      <ChooseUse/>
      <Tarrifs/>
      <Design/>
      <Mantaj/>
      <Pr/>
      <Market/>
      <Services/>
      <Customers/>
      <CustomersAbout/>
      <!-- <Team/> -->
      <Contact/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Choise from './components/Choise';
import ChooseUse from './components/ChooseUse';
import Tarrifs from './components/Tarrifs';
import Design from './components/Design';
import Mantaj from './components/Mantaj';
import Pr from './components/Pr';
import Market from './components/Market';
import Services from './components/Services';
import Customers from './components/Customers';
import CustomersAbout from './components/CustomersAbout';
// import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import $ from 'jquery'
 import AOS from 'aos'
  import  'aos/dist/aos.css'
 const links = ('.btnSrc');

export default {
  name: 'App',
  components: {
    Header,Choise,
    ChooseUse,Tarrifs,
    Design,Mantaj,
    Pr,Market,
    Services,Customers,
    CustomersAbout,
    Contact, Footer
  },

  data: () => ({
    // 
  }),
  created(){
    AOS.init();
  },
  mounted () {
    $('.btnToggleMenu').click(function(){
        $('.navbar_drawer').slideToggle()
      
    })
    $(links).on('click', function (e) {
        e.preventDefault();
        $(links).removeClass('active');
        $(this).addClass('active');
        var id = $(this).attr('data-src');
        var target = $(id).offset().top - 100;
        $('html, body').animate({
            scrollTop: target,
        }, 1000);
    });
  }
};
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&family=Ubuntu:wght@300;400;500;700&display=swap');
  .btnToggleMenu{
    display: none;
  }
  .d-none_Logolg{
      display: none ;
    }
    .btnSrc{
      &.active{
        background: #CC3333 !important;
      }
    }
    .btnSrc{
      box-shadow: none !important;
    }
    @media (max-width:1230px) {
      .btnToggleMenu{
        display: block;
      }
      .navbar_drawer{
        height: auto;
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        position: absolute;
        width: 95%;
        top: 95px;
        left: 10px;
        right: 10px;
        background:#031133;
        border-radius: 1em;
        overflow: hidden;
        transition: display 1s ,  0.3s opacity  !important;
        opacity: 1;
        .btnSrc{
          margin: 20px;
          box-shadow: none !important;
        }
      }
    }
  @media (max-width:450px) {
    .d-none_Logomd{
      display: none;
    }
    .d-none_Logolg{
      display: block !important;
    }
  }
</style>
