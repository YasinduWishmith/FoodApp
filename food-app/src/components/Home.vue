<template>
  <div class="Base">
    <div class="list">
      <CategoryList />
    </div>
    <div class="items">
      <DrinkItems />
    </div>
    hellloooooooooo
  </div>
</template>

<script>
import CategoryList from "./CategoriesHome";
import DrinkItems from "./DrinkItems";

export default {
    name : 'Home',
  components: {
    CategoryList,
    DrinkItems
  }
};
</script>

<style>
</style>