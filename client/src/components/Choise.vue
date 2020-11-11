<template>
    <v-container fluid class="pad_none">
        <v-row>
            <v-col cols="6" lg="3" md="4" sm="6" xs="6" class="back" >
                <h2>Smm</h2>
            </v-col>
            <v-col cols="6" lg="3" md="4" sm="6" xs="6" class="back" >
                <h2>Dizayn Marketing</h2>
            </v-col>
            <v-col cols="6" lg="3" md="4" sm="6" xs="6" class="back" >
                <h2>Seo optimizatsiya</h2>
            </v-col>
            <v-col cols="6" lg="3" md="4" sm="6" xs="6" class="back" >
                <h2>Marketing</h2>
            </v-col>
            <v-col cols="6" lg="3" md="4" sm="6" xs="6" class="back" >
                <h2>Web dasturlash</h2>
            </v-col>
            <v-col cols="6" lg="3" md="4" sm="6" xs="6" class="back" >
                <h2>Telegram botlar</h2>
            </v-col>
            <v-col cols="6" lg="3" md="4" sm="6" xs="6" class="back" >
                <h2>Video syomka va montaj</h2>
            </v-col>
            <v-col cols="6" lg="3" md="4" sm="6" xs="6" class="back" >
                <h2>Pr xizmatlari</h2>
            </v-col>

        </v-row>
    </v-container>
</template>
<script>
  export default {
    name: 'Choise',
    data: () => ({
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
    .back:hover{
        background: rgba(0, 51, 153, 0.3);
        transition: 0.5s;
    }
    .pad_none{
        padding-bottom: 0 !important; 
        padding-top: 0 !important;
        border-top: 1px solid #0077ff;
        background: #040B21;
    }
</style>
