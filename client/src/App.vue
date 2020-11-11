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
          class="shrink ml-12"
          contain
          :src="require('./assets/img/logo.svg')"
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
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Choise from './components/Choise';
import ChooseUse from './components/ChooseUse';


export default {
  name: 'App',
  components: {
    Header,Choise,ChooseUse
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&family=Ubuntu:wght@300;400;500;700&display=swap');
  $color : #040B21;
  .color{
    background: $color;
  }
</style>
