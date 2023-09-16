<script setup>
import AppLayout from "../components/AppLayout.vue";
import { useRootStore } from "../stores/root";
import { storeToRefs } from "pinia";
import CockltailsThumb from "../components/CockltailsThumb.vue";

const rootStore = useRootStore();
rootStore.getIngredients();

const { ingredients, ingredient, cocktails } = storeToRefs(rootStore);

const getCockatils = () => {
  rootStore.getCocktails(rootStore.ingredient);
};
const removeIngreditnt = () => {
  rootStore.setIngredient(null)
};
</script>

<template>
  <AppLayout imgUrl="src/assets/img/Bg.svg" :backFunc="removeIngreditnt" :isBackBtnVisible="!!ingredient">
    <div class="wrapper">
      <div v-if="!ingredient || !cocktails" class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
        <div class="select-wrapper">
          <el-select
            v-model="ingredient"
            placeholder="Choose main ingredient"
            size="large"
            class="select"
            filterable
            allow-create
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
          Try our delicious cocktail recipes for every occasion. Find delicious
          cocktail recipes by ingredient through our cocktail generator.
        </div>
        <img src="/src/assets/img/Cocktails.svg" alt="Cocktails" class="img" />
      </div>
      <div v-else class="info">
        <div class="title">
          COCKTAILS WITH Midori melon liqueur {{ ingredient }}
        </div>
        <div class="line"></div>
        <div class="cocktails">
          <CockltailsThumb
            v-for="cocktail in cocktails"
            :key="cocktail.idDrink"
            :cocktail="cocktail"
          />
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<style lang="scss" scoped>
@import url("../assets/styles/main.scss");

.select-wrapper {
  padding: 50px;
}
.select {
  width: 220px;
}
.text {
  max-width: 516px;
  margin: 0;
  padding: 50px;
  line-height: 36px;
  letter-spacing: 0.1em;
  color: #d3d3d3;
}
.img {
  margin-top: 60px;
}
.cocktails {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  flex-wrap: wrap;
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
