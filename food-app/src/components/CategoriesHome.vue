<template>
  <div>
    <div class="list-group">
      <a
        href="#"
        class="list-group-item list-group-item-action active w-25 m-1"
        v-for="item in items"
        :key="item"
      >{{item}}</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CategoryList",
  data() {
    return {
      items: []
    };
  },
  beforeMount() {
    this.getCatList();
  },
  methods: {
    getCatList() {
      console.log("success");
      axios({
        method: "GET",
        url: "https://the-cocktail-db.p.rapidapi.com/list.php",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
          "x-rapidapi-key": "7eb7cb0097msh13df13840eefc10p1c7773jsn226625744505"
        },
        params: {
          c: "list"
        }
      })
        .then(response => {
        //   console.log(response);
          response.data["drinks"].forEach(element => {
            this.items.push(element.strCategory);
            //   console.log(element.strCategory);
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
</style>