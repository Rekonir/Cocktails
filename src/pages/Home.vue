<script setup>
import {ref} from 'vue'
import AppLayout from "../components/AppLayout.vue";
import { useRootStore } from "../stores/root";
import { storeToRefs } from "pinia";

const rootStore = useRootStore();
rootStore.getIngredients();

const { ingredients, cocktails } = storeToRefs(rootStore);
const ingredient = ref(null)

const getCockatils=()=>{
  rootStore.getCocktails(ingredient.value)
}
</script>

<template>
  <AppLayout imgUrl="src//assets/img/Bg.svg">
    <div class="wrapper">
      <div class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
        <div class="select-wrapper">
          <el-select
            v-model="ingredient"
            placeholder="Choose main ingredient"
            size="select"
            @change="getCockatils"
          >
            <el-option
              v-for="item in ingredients"
              :key="item.strIngredient1"
              :label="item.strIngredient1"
              :value="item.strIngredient1"
            />
          </el-select>
        </div>
        <div class="text">
          Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by ingredient through our cocktail generator.
        </div>
        <img src="/src/assets/img/Cocktails.svg" alt="Cocktails" class="img">
      </div>
    </div>
  </AppLayout>
</template>

<style lang="scss" scoped>
@import url("../assets/styles/main.scss");
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.info {
  padding: 80px 0;
  text-align: center;
}
.select-wrapper{
  padding: 50px;
}
.select{
  width: 220px;
}
.text{
  max-width: 516px;
  margin: 0;
  padding: 50px;
  line-height: 36px;
  letter-spacing: 0.1em;
  color: #d3d3d3;
}
.img{
  margin-top: 60px;
}

</style>
