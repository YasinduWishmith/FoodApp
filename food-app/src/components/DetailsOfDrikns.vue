<template>
  <div>
    <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
      <div class="card-header">{{drink}}</div>
      <div class="card-body">
        <h6 class="card-title">{{drinkCategory}} Category</h6>
        <p
          class="card-text"
        >It's looks like a {{drinkGlass}}. It is {{drinkAlcoholic}}. It should {{drinkInstruction}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../EventBus';
export default {
  name: "DetailsOfDrink",

  data() {
      return{
       drinkCategory:"",
      drinkAlcoholic:"",
      drinkGlass:"",
      drinkInstruction:"",
      drink:"",
      itemId:""
      }
    //   
    //   

  },

  beforeMount(){
    // this.getDetails(this.itemId);
  },
  methods: {

      getItemId(){
         EventBus.$on('getId', glass=>{
           this.itemId = glass;
           console.log(this.itemId);

        //    getDetails(this.itemId);

           EventBus.$off("getId", glass);
         });
      },

    getDetails(key) {
      const axios = require("axios");

      axios({
        method: "GET",
        url: "https://the-cocktail-db.p.rapidapi.com/lookup.php",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
          "x-rapidapi-key": "7eb7cb0097msh13df13840eefc10p1c7773jsn226625744505"
        },
        params: {
          i: ""+key+""
        }
      })
        .then(response => {
          console.log(response.data['drinks'][0]['idDrink']);

        //  for(i=0;i<response.data['drinks'][0])

           this.drinkCategory = response.data['drinks'][0]['strCategory'];
           this.drinkAlcoholic = response.data['drinks'][0]['strAlcoholic'];
           this.drinkGlass = response.data['drinks'][0]['strGlass'];
           this.drinkInstruction = response.data['drinks'][0]['strInstructions'];
           this.drink = response.data['drinks'][0]['strDrink'];
           
           
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