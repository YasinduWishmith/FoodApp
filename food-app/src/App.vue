<template>
<div>
  <NavBar/>
  <div><CategoryList/></div>
   <div><DrinkItems/></div>
   
</div>

</template>

<script>
import CategoryList from './components/CategoriesHome'
import DrinkItems from './components/DrinkItems'

export default {

  name: 'app',
  components: {
    CategoryList,
    DrinkItems
  },
  data() {
    return {
     
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
