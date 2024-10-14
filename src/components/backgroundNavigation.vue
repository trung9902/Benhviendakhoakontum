<template>
  <div class="backgroundNavigation-box">
    <div
      class="backgroundNavigation"
      :style="{ backgroundImage: 'url(' + backgroundImage + ')' }"
    >
      <h1>{{ title }}</h1>
    </div>
    <ul class="navigation__list">
      <li class="navigation__item">
        <a href="" class="navigation__link">Trang chủ</a>
      </li>
      <li class="navigation__item">
        <a href="" class="navigation__link">{{ title }} </a>
      </li>
      <li class="navigation__item" v-show="title1">
        <a href="" class="navigation__link">{{ title1 }} </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    title1: String,
    backgroundImage: String, // Thêm prop để nhận ảnh background
  },
};
</script>

<style lang="scss" scoped>
.backgroundNavigation {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 244px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #242424;
  color: #fff;
  text-align: center;
  h1 {
    text-transform: uppercase;
    font-size: 30px;
  }
}
.navigation__list {
  width: 1200px;
  max-width: 100%;
  margin: 20px auto;
  display: flex;
  .navigation__item {
    list-style-type: none;
    a {
      color: #000;
    }
  }

  .navigation__item + .navigation__item::before {
    content: ">";
    padding: 5px;
  }
}
@media (max-width: 480px) {
  .navigation__list[data-v-4a4e9e1c] {
    padding: 0 10px;
  }
}
@media (max-width: 576px) {
  .navigation__list[data-v-4a4e9e1c] {
    padding: 0 10px;
  }
}
@media (min-width: 577px) and (max-width: 768px) {
  .navigation__list[data-v-4a4e9e1c] {
    padding: 0 10px;
  }
}
@media (min-width: 769px) and (max-width: 992px) {
  .navigation__list[data-v-4a4e9e1c] {
    padding: 0 10px;
  }
}
@media (min-width: 993px) and (max-width: 1200px) {
  .navigation__list[data-v-4a4e9e1c] {
    padding: 0 10px;
  }
}
</style>
