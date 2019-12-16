<template>
  <div class="Base">
    <div class="list">
      <CategoryList />
    </div>
    <div class="items" v-if="true">
      <DrinkItems />
    </div>
    <div v-if="true">
     <DetailsOfDrink/>
    </div>
  </div>
</template>

<script>
import CategoryList from "./CategoriesHome";
import DrinkItems from "./DrinkItems";
import DetailsOfDrink from "./DetailsOfDrikns";

export default {
    name : 'Home',
  components: {
    CategoryList,
    DrinkItems,
    DetailsOfDrink
  }
};
</script>

<style>
.Base{
  width: 100%;
}
.list{
  width: 30%;
  float: left
}
.items{
  width: 70%;
  float: right;
}

</style>