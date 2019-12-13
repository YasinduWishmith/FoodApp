<template>
    <div>
        helloooooooo
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DrinkItems",
  data() {
    return {
      items: []
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
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>