<template>
  <div class="question-container-box2">
    <div class="question-container">
      <button class="question-container__button" @click="parentOpenClose">
        <img src="../assets/iconQuestion.png" alt="" /> Đặt Câu Hỏi
      </button>

      <div class="question-container__box">
        <h3 class="question-container__title">Câu Hỏi Mới Nhất</h3>
        <ul class="question-container__list">
          <li class="question-container__item">
            1. Khi nào cần chụp cọng hướng từ cột sống thắt lưng?
          </li>
          <li class="question-container__item">
            2. Khi nào cần chụp cọng hướng từ cột sống thắt lưng?
          </li>
          <li class="question-container__item">
            3. Khi nào cần chụp cọng hướng từ cột sống thắt lưng?
          </li>
          <li class="question-container__item">
            4. Khi nào cần chụp cọng hướng từ cột sống thắt lưng?
          </li>
          <li class="question-container__item">
            5. Khi nào cần chụp cọng hướng từ cột sống thắt lưng?
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    parentOpenClose: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.question-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  &__button {
    background-color: #009a00;
    color: white;
    border: none;
    padding: 20px 0px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    width: 100%;
    img {
      margin-right: 15px;
    }
  }

  &__icon {
    margin-right: 8px;
  }

  &__box {
    margin-top: 15px;
    border: 1px solid #009a00;
    border-radius: 5px;
    padding: 15px;
  }

  &__title {
    color: #009a00;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    text-transform: uppercase;
    text-align: center;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    font-size: 16px;
    padding: 25px 0;
    border-bottom: 1px solid #eaeaea;

    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
