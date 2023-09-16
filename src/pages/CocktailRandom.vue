<script setup>
import { ref, computed } from "vue";
import AppLayout from "../components/AppLayout.vue";
import { useRoute, useRouter } from "vue-router";
import { COCKTAIL_BY_RANDOM, INGREDIENT_PIC } from "../constants/index.js";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const route = useRoute();
const router = useRouter();
const goBack = () => {
  router.go(-1);
};

const cocktail = ref(null);
const cocktailId = computed(() => route.path.split("/").pop());

const ingredients = computed(() => {
  const ingredients = [];

  for (let i = 1; i <= 15; i++) {
    if (!cocktail.value[`strIngredient${i}`]) break;
    const ingredient = cocktail.value[`strIngredient${i}`];

    ingredients.push(ingredient);
  }
  return ingredients;
});

async function getCockatil() {
  const data = await axios.get(COCKTAIL_BY_RANDOM);
  cocktail.value = data?.data?.drinks[0];
}
getCockatil();
</script>

<template>
  <div v-if="cocktail" class="wrap">
    <AppLayout :imgUrl="cocktail.strDrinkThumb" :backFunc="goBack">
      <div class="wrapper">
        <div class="info">
          <div class="title">{{ cocktail.strDrink }}</div>
          <div class="line"></div>
          <div class="slider">
            <swiper
              :slides-per-view="3"
              :space-between="50"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
              class="swiper"
            >
              <swiper-slide v-for="(ingredient, key) in ingredients" :key="key">
                <img :src="`${INGREDIENT_PIC}${ingredient}-Small.png`" />
                <div class="name">
                  {{ ingredient }}
                </div>
              </swiper-slide>
            </swiper>
          </div>

          <div class="instructions">
            {{ cocktail.strInstructions }}
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<style lang="scss" scoped>
@import url("../assets/styles/main.scss");
.slider {
  padding: 50px 0;
}
.swiper {
  width: 100%;
}
.name{
        font-size: 16px;
        padding-top: 20px;
}
</style>
