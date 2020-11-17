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
      <Team/>
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
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';


export default {
  name: 'App',
  components: {
    Header,Choise,
    ChooseUse,Tarrifs,
    Design,Mantaj,
    Pr,Market,
    Services,Customers,
    CustomersAbout,Team,
    Contact, Footer
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&family=Ubuntu:wght@300;400;500;700&display=swap');
  .d-none_Logolg{
      display: none ;
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
