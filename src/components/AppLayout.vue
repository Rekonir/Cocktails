<script setup>
import { Back } from "@element-plus/icons-vue";
const props = defineProps({
  imgUrl: {
    type: String,
    required: true,
  },
  backFunc: {
    type: Function,
    required: true,
  },
  isBackBtnVisible: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div class="root">
    <div :style="`background-image: url(${imgUrl})`" class="img"></div>
    <div class="main">
      <div class="btns">
        <el-button
          type="primary"
          :icon="Back"
          circle
          class="back"
          @click="backFunc"
          v-if="isBackBtnVisible"
        />
        <el-button class="btn">Get random cocktail</el-button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";
.root {
  display: flex;
  min-height: 100vh;
  background: $color-back;
  width: 100%;
  margin: 0;
}
.img {
  width: 50%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
}
.main {
  width: 50%;
  padding: 32px 20px;
}
.btn {
  font-size: 16px;
  font-family: "Raleway", sans-serif;
  background-color: $color-pink;
  border-color: $color-pink;
  color: $color-text;
  &:hover,
  &:active,
  &:focus {
    background-color: darken($color-pink, 10%);
    border-color: darken($color-pink, 10%);
    color: $color-text;
  }
}
.btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 40px;
}
.back {
  border-color: $color-muted;
  background: transparent;
  &:hover,
  &:active,
  &:focus {
    border-color: $color-pink;
    background: transparent;
  }
  &:focus {
    background: transparent;
    border-color: $color-muted;
  }
}
</style>
