<template>
    <v-container fluid class="pad_none">
        <v-row>
            <v-col v-for="(n,i) in item" :key="n.title" :name="i" cols="6" lg="3" md="4" sm="6" xs="6" class="back" >
                <h2>{{ n.title }}</h2>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
  export default {
    name: 'Choise',
    data: () => ({
        item:[
           {title:'SMM'},
           {title:'Dizayn Marketing'},
           {title:'Seo optimizatsiya'},
           {title:'Marketing'},
           {title:'Web dasturlash'},
           {title:'Telegram botlar'},
           {title:'Video syomka va montaj'},
           {title:'Pr xizmatlari'},
        ]
    }),
  }
</script>
<style lang="scss" scoped>
    .back{
        background: rgb(8, 29, 71, 0.15);
        text-align: center;
        color: white ;
        border: 1px solid #000000;
        padding-top: 36px;
        padding-bottom: 36px;
        transition: 0.5s;
    }
    .pad_none{
        padding-bottom: 0 !important; 
        padding-top: 0 !important;
        background: #040B21;
    }
    @media (max-width:500px) {
      .pad_none{
          display: none;
      }
    }
</style>
