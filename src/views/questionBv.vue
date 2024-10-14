<template>
  <div class="question">
    <header-web />
    <background-navigation
      title="Hỏi đáp"
      :backgroundImage="require('@/assets/Action/actionNavibackground.png')"
    />
    <div class="question-container">
      <div class="question-container__box">
        <div class="question-container__category">
          <label for="" class="question-container__label">Danh mục</label>
          <select name="title" id="" class="question-container__select">
            <option value="0" class="question-container__option">meo</option>
            <option value="1" class="question-container__option">meo</option>
            <option value="2" class="question-container__option">meo</option>
            <option value="3" class="question-container__option">meo</option>
          </select>
        </div>
        <div class="question-container__content">
          <h2 class="question-container__content-h1">hỏi đáp</h2>
          <div
            class="question-card"
            v-for="(item, index) in listData"
            :key="index"
          >
            <div class="question-card__header">
              <span class="question-card__category">{{ item.category }}</span>
              <span class="question-card__author">{{ item.author }}</span>
              <span class="question-card__date">Đã hỏi: {{ item.date }}</span>
            </div>
            <h3 class="question-card__title">{{ item.title }}</h3>
            <p class="question-card__description">
              {{ item.description }}
            </p>
            <div class="setbutton">
              <router-link to="/DetailQuestion">
                <button class="question-card__button">
                  {{ item.buttonText }}
                </button>
              </router-link>
            </div>
          </div>
          <div class="param-number">
            <li class="actice">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </div>
        </div>
      </div>
      <question-box-2 :parentOpenClose="openModal" />
    </div>
    <div id="questionModal" class="modal" v-show="isOpenModal">
      <div class="modal-content">
        <span class="close-btn" @click="closeModal">&times;</span>
        <h2>ĐẶT CÂU HỎI</h2>

        <form>
          <div class="form-group">
            <input type="text" id="fullname" placeholder="Họ tên*" />
          </div>

          <div class="form-group">
            <input type="tel" id="phone" placeholder="Số điện thoại*" />
          </div>

          <div class="form-group">
            <input type="email" id="email" placeholder="Email" />
          </div>

          <div class="form-group">
            <input type="text" id="title" placeholder="Tiêu đề câu hỏi*" />
          </div>

          <div class="form-group">
            <textarea
              id="message"
              rows="4"
              placeholder="Nhập vấn đề sức khỏe gặp phải*"
            ></textarea>
          </div>

          <button type="submit" class="submit-btn">GỬI YÊU CẦU</button>
        </form>
      </div>
    </div>
    <footerVue />
  </div>
</template>

<script>
import BackgroundNavigation from "../components/backgroundNavigation.vue";
import headerWeb from "../components/headerWeb.vue";
import QuestionBox2 from "../components/Question-box2.vue";
import footerVue from "@/components/footerVue.vue";
export default {
  components: { headerWeb, BackgroundNavigation, QuestionBox2, footerVue },
  data() {
    return {
      isOpenModal: false,
      listData: [
        {
          category: "Bảo hiểm y tế",
          author: "Minh Ngọc",
          date: "Ngày 27/07/2023",
          title: "Cắt amidan có được hưởng BHYT không?",
          description:
            "Chào các bác sĩ của Bệnh viện An Việt, tháng trước em có cho con lên khám tại Bệnh viện mình và được chỉ định cắt amidan vì bị viêm amidan mãn tính. Nhưng vì công việc cá nhân rồi dịch bệnh nên giờ em vẫn chưa đưa cháu đi cắt amidan được. Các bác sĩ cho em hỏi cắt amidan có được hưởng bảo hiểm không ạ và chi phí khoảng bao nhiêu để em chuẩn bị ạ.",
          buttonText: "Xem câu trả lời",
        },
        {
          category: "Tai Mũi Họng",
          author: "Minh Ngọc",
          date: "Ngày 27/07/2023",
          title: "Chảy máu mũi nguyên nhân do đâu?",
          description:
            "Chào bác sĩ. Hôm qua khi đang ngồi làm việc thì bị chảy máu mũi. Không biết đây có phải dấu hiệu bất thường gì không ạ?",
          buttonText: "Xem câu trả lời",
        },
        {
          category: "Tai Mũi Họng",
          author: "Minh Ngọc",
          date: "Ngày 27/07/2023",
          title: "Bệnh viêm mũi có chữa được không",
          description:
            "Xin chào chuyên mục tư vấn sức khỏe bệnh viện Thu Cúc, tôi bị bệnh viêm mũi đã 7 năm nay, chữa cũng nhiều nơi, nhưng đa số tôi dùng thuốc men, có ai mách cho thuốc tốt tôi cũng cố gắng tìm đến tận nơi, tuy nhiên chỉ thời gian đầu dùng thuốc là tôi thấy đỡ, sau đó không biết có phải do nhờn thuốc hay không mà tôi lại thấy bệnh như cũ. Chuyên mục cho tôi hỏi bệnh viêm mũi có chữa được không? Xin cảm ơn.",
          buttonText: "Xem câu trả lời",
        },
        {
          category: "Nội Tổng hợp",
          author: "Minh Ngọc",
          date: "Ngày 27/07/2023",
          title:
            "Đau nửa đầu thường diễn ra bao lâu? Khi nào cần đi khám ngay?",
          description:
            "Chào bác sĩ, em thỉnh thoảng hay cảm thấy đau nửa bên đầu, có lần đau bên trái sau đó chuyển sang bên phải đầu. Đau kèm cảm giác giật nhói nhói, đau mỗi cơn vài giây và hỏi ngay cảm giác vẫn đau âm ỉ sau giấc ngủ. Bác sĩ cho em hỏi đau nửa đầu thường diễn ra trong bao lâu thì hết và khi nào cần đi khám ngay ạ?",
          buttonText: "Xem câu trả lời",
        },
      ],
    };
  },
  methods: {
    openModal() {
      this.isOpenModal = true; // Mở modal
    },
    closeModal() {
      this.isOpenModal = false; // Đóng modal
      console.log(this.isOpenModal);
    },
  },
};
</script>

<style lang="scss" scoped>
.question-container {
  display: flex;
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  gap: 45px;
  .question-container__content-h1 {
    color: #00a651;
    text-align: center;
    font-weight: bold;
    margin: 25px 0;
  }
  .question-container__box {
    width: 70%;
    .question-container__category {
      display: flex;
      padding: 25px;
      background-color: #f8f9fa;
      border-radius: 6px;
      flex-direction: column;
      gap: 15px;
    }
    .question-container__select {
      display: flex;
      flex-direction: column;
      padding: 14px;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 6px;
      width: 100%;
    }
  }
  .question-container-box2 {
    width: 25%;
  }
  .question-card {
    border-bottom: 1px solid #e0e0e0;
    padding: 15px 0;
    background-color: #fff;
    .setbutton {
      text-align: right;
    }
    &__header {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }

    &__category {
      background-color: #00a651;
      color: white;
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 14px;
      margin-right: 10px;
    }

    &__author {
      color: #e53935;
      font-weight: bold;
      margin-right: 10px;
    }

    &__date {
      color: #757575;
      font-size: 12px;
    }

    &__title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
      color: #333;
    }

    &__description {
      font-size: 14px;
      color: #666;
      margin-bottom: 20px;
    }

    &__button {
      background-color: #fff;
      color: #00a651;
      border: 1px solid #00a651;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 14px;
      font-weight: bold;
    }

    &__button:hover {
      background-color: #00a651;
      color: #fff;
    }
  }
  .param-number {
    display: flex;
    justify-content: flex-end;
    gap: 9px;
    margin: 10px 0;
  }
  .param-number li {
    padding: 0px 6px;
    border-radius: 4px;
    list-style-type: none;
    color: #939597;
  }

  .param-number li.actice {
    background-color: #33d898;
    color: #fff;
  }
}
// modal
/* Ẩn modal mặc định */
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

/* Nội dung modal */
.modal-content {
  background-image: url(../assets/bg-modal.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #f7f9fb;
  border-radius: 20px;
  animation: in 0.4s linear;
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  h2 {
    text-align: center;
  }
}

/* Đóng modal */
.close-btn {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close-btn:hover,
.close-btn:focus {
  color: black;
  cursor: pointer;
}

/* Form styles */
.form-group {
  margin-bottom: 15px;
}

input[type="text"],
input[type="tel"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.submit-btn {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #218838;
}
@media (max-width: 480px) {
  .question-container[data-v-46076918] {
    padding: 10px;
  }
  .question-container__box[data-v-46076918] {
    width: 100%;
  }
  .question-container[data-v-46076918] {
    flex-direction: column;
  }
}
@media (max-width: 576px) {
  .question-container[data-v-46076918] {
    padding: 10px;
  }
  .question-container__box[data-v-46076918] {
    width: 100%;
  }
  .question-container[data-v-46076918] {
    flex-direction: column;
  }
  .param-number[data-v-46076918] {
    display: flex;
    justify-content: center;
    gap: 9px;
    margin: 10px 0;
  }
  .question-container-box2[data-v-46076918] {
    width: 100%;
  }
}
@media (min-width: 577px) and (max-width: 768px) {
  .question-container[data-v-46076918] {
    padding: 10px;
  }
  .question-container[data-v-46076918] {
    gap: 25px;
  }
}
@media (min-width: 769px) and (max-width: 992px) {
  .question-container[data-v-46076918] {
    padding: 10px;
  }
  .question-container[data-v-46076918] {
    gap: 25px;
  }
}
@media (min-width: 993px) and (max-width: 1200px) {
  .question-container[data-v-46076918] {
    padding: 10px;
  }
  .question-container[data-v-46076918] {
    gap: 25px;
  }
}
@media (min-width: 1201px) and (max-width: 1540px) {
}
@media (min-width: 1528px) {
}
</style>
