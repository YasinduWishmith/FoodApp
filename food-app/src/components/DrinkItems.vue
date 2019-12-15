<template>
  <b-container fluid>
<div class="row">
   <div class="card col-3 itemcard"  v-for="(glass,index) in glasses" :key="index">
     <div class="card title">
      <h5 class="card-header" id="header">{{glass.strDrink}}</h5>
     </div>
      <img
        style="height: 200px; width: 100%; display: block;"
        :src="glass.strDrinkThumb"
        alt="Card image"
      />
      
    </div>
</div>
  </b-container>
</template>

<script>
// import axios from "axios";
import { EventBus } from "../EventBus";

export default {
  name: "DrinkItems",
  data() {
    return {
      glasses: [],
      itemName: ""
    };
  },
  beforeMount() {
    this.getItemName();
    // this.getItemList();
  },
  methods: {
    getItemName() {
      EventBus.$on("itemName", aItem => {
        this.itemName = aItem;
        console.log(this.itemName);
        
        this.getItemList(this.itemName);

        EventBus.$off("itemName", aItem);
      });
    },


    getItemList(key) {
      const axios = require("axios");
      console.log(key);

      axios({
        method: "GET",
        url: "https://the-cocktail-db.p.rapidapi.com/filter.php",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
          "x-rapidapi-key": "7eb7cb0097msh13df13840eefc10p1c7773jsn226625744505"
        },

        params: {
          c: "" + key + ""
        }
      })
        .then(response => {
          // console.log(response);
          this.glasses = [];
          response.data["drinks"].forEach(element => {
            this.glasses.push(element);
          });
            console.log(this.glasses);
        })
        .catch(error => {
          console.log(error);
        });
    }
    // this.clear();
  },

};
</script>

<style>
/* #cardouter {
  width: 200px;
} */
#header {
  background-color: rgb(32, 145, 116);
}
.card.col-3.itemcard {
   padding-left: 8px; 
   padding-right: 8px; 
    margin-bottom: 20px;
 
}
</style>