<template>
  <div>
    <div class="card mb-3" id="cardouter" v-for="(glass,index) in glasses" :key="index">
      <h5 class="card-header" id="header">{{glass.strDrink}}</h5>
      <div class="card-body"></div>
      <img
        style="height: 200px; width: 100%; display: block;"
        :src=glass.strDrinkThumb
        alt="Card image"
      />
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "DrinkItems",
  data() {
    return {
      glasses: []
    };
  },
  beforeMount() {
    this.getItemList();
  },
  methods: {
    getItemList() {
      const axios = require("axios");

      axios({
        method: "GET",
        url: "https://the-cocktail-db.p.rapidapi.com/filter.php",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
          "x-rapidapi-key": "7eb7cb0097msh13df13840eefc10p1c7773jsn226625744505"
        },
        params: {
          c: "Shot"
        }
      })
        .then(response => {
          // console.log(response);
          response.data["drinks"].forEach(element => {
            this.glasses.push(element);
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
#cardouter {
  width: 200px;
}
#header{
  background-color:rgb(32, 145, 116)
}
</style>