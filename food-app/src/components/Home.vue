<template>
  <div class="Base">
    <div class="list">
      <CategoryList />
    </div>
    <div class="items" v-if="true">
      <DrinkItems />
    </div>
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