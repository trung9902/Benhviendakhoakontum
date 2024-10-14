<template>
  <div class="questionDetail">
    <header-web />
    <background-navigation
      title="Hỏi đáp"
      title1="Tai Mũi Họng"
      :backgroundImage="require('@/assets/Action/actionNavibackground.png')"
    />
    <div class="questionDetail-container">
      <div class="questionDetail-container-box1">
        <div class="question-card">
          <div class="question-card__header">
            <span class="question-card__category">Bảo hiểm y tế</span>
            <span class="question-card__author">Minh Ngọc</span>
            <span class="question-card__date">Đã hỏi: Ngày 27/07/2023</span>
          </div>
          <h3 class="question-card__title">
            Cắt amidan có được hưởng BHYT không?
          </h3>
          <p class="question-card__description">
            Chào các bác sĩ của Bệnh viện An Việt, tháng trước em có cho con lên
            khám tại Bệnh viện mình và được chỉ định cắt amidan vì bị viêm
            amidan mãn tính. Nhưng vì công việc cá nhân rồi dịch bệnh nên giờ em
            vẫn chưa đưa cháu đi cắt amidan được. Các bác sĩ cho em hỏi cắt
            amidan có được hưởng bảo hiểm không ạ và chi phí khoảng bao nhiêu để
            em chuẩn bị ạ.
          </p>
        </div>
        <div class="answer">
          <h3 class="answer__title">Trả lời</h3>
          <p class="answer__content">
            Chị Ngọc thân mến, cảm ơn chị đã gửi câu hỏi. Chúng tôi xin được trả
            lời câu hỏi của chị như sau:<br /><br />
            Viêm họng là bệnh mà khi họng và hầu bị viêm. Phần lớn các trường
            hợp bị viêm họng, cổ họng người bệnh thường sưng, đỏ, đau rát và
            bệnh có thể kéo dài. Nếu mới có triệu chứng đau họng thì người bệnh
            có thể áp dụng các bài thuốc dân gian để giảm bớt các triệu chứng
            viêm họng.<br /><br />
            – Uống chanh tươi, mật ong và muối: Khi bị đau họng, lấy một ly nước
            ấm, thêm chút nước cốt chanh và mật ong. Khuấy đều chúng rồi uống.
            Mỗi ngày làm 2 lần, uống 2-3 ngày họng sẽ không còn cảm giác bị đau.
            Trong mật ong có chất kháng sinh tư nhiên giúp tiêu diệt những vi
            khuẩn không tốt.<br />
            <br />
            – Ngậm mật ong gừng: Gừng kết hợp với mật ong được coi như vị thần
            dược trong điều trị chứng viêm họng ở nhiều người. Gừng rửa sạch và
            tráng lại bằng nước sôi để nguội sau đó giã mát, lấy một thìa mật
            ong vừa phải trộn đều với gừng vừa giã và ngậm. Từ từ nuốt, họng sẽ
            thấy dịu đi trong chốc lát. <br />
            <br />
            – Súc miệng nước muối: Nước muối pha loãng có tác dụng kháng viêm,
            làm sạch họng. Sau khi ăn và trước khi đi ngủ nên súc miệng với nước
            muối pha loãng để làm sạch cổ họng của mình.<br /><br />
            Cũng cần chú ý rằng, những cách trên là mẹo chữa triệu chứng. Để
            chữa viêm họng hiệu quả, chị nên đến gặp bác sĩ chuyên khoa tai mũi
            họng để được thăm khám và điều trị sớm. Chị cũng tránh không nên nằm
            phòng điều hòa quá lạnh, nên mua máy phun sương tạo độ ẩm trong
            phòng lạnh tránh tình trạng họng bị khô rát.
            <br />
          </p>
          <div class="activity-header">
            <b class="activity-subject"
              ><i class="fa-solid fa-tag seticontag" style="color: #46bf80"></i
              >Chủ đề: <span>Tai Mũi Họng</span></b
            >
            <button class="activity-share-button">Chia sẻ</button>
          </div>
          <div class="related-question">
            <h1 class="related-question__title">Câu hỏi liên quan</h1>
            <div class="related-question__item-box">
              <div class="related-question__item">
                <h3 class="related-question__item-title">
                  Cách điều trị viêm amidan với cơ thể rất nhạy cảm với thời
                  tiết
                </h3>
                <p class="related-question__item-content">
                  Xin chào chuyên mục tư vấn sức khỏe Bệnh viện Thu Cúc, bé nhà
                  tôi rất nhạy cảm với thời tiết, hễ thay trời đang nắng nóng
                  trở lạnh thì rất dễ bị viêm Amidan. Tôi rất lo lắng về tình
                  trạng này của con. Chuyên mục tư vấn giúp tôi cách trị viêm
                  amidan hiệu quả. Xin cảm ơn và mong nhận câu trả lời.
                </p>
              </div>
              <div class="related-question__item">
                <h3 class="related-question__item-title">
                  Cách điều trị viêm amidan với cơ thể rất nhạy cảm với thời
                  tiết
                </h3>
                <p class="related-question__item-content">
                  Xin chào chuyên mục tư vấn sức khỏe Bệnh viện Thu Cúc, bé nhà
                  tôi rất nhạy cảm với thời tiết, hễ thay trời đang nắng nóng
                  trở lạnh thì rất dễ bị viêm Amidan. Tôi rất lo lắng về tình
                  trạng này của con. Chuyên mục tư vấn giúp tôi cách trị viêm
                  amidan hiệu quả. Xin cảm ơn và mong nhận câu trả lời.
                </p>
              </div>
              <div class="related-question__item">
                <h3 class="related-question__item-title">
                  Cách điều trị viêm amidan với cơ thể rất nhạy cảm với thời
                  tiết
                </h3>
                <p class="related-question__item-content">
                  Xin chào chuyên mục tư vấn sức khỏe Bệnh viện Thu Cúc, bé nhà
                  tôi rất nhạy cảm với thời tiết, hễ thay trời đang nắng nóng
                  trở lạnh thì rất dễ bị viêm Amidan. Tôi rất lo lắng về tình
                  trạng này của con. Chuyên mục tư vấn giúp tôi cách trị viêm
                  amidan hiệu quả. Xin cảm ơn và mong nhận câu trả lời.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuestionBox2 :parentOpenClose="openModal" />
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
    <FooterVue />
  </div>
</template>

<script>
import BackgroundNavigation from "../components/backgroundNavigation.vue";
import FooterVue from "../components/footerVue.vue";
import headerWeb from "../components/headerWeb.vue";
import QuestionBox2 from "../components/Question-box2.vue";
export default {
  data() {
    return {
      isOpenModal: false,
    };
  },
  components: { headerWeb, BackgroundNavigation, QuestionBox2, FooterVue },
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
.backgroundNavigation-box {
  padding-top: 168px;
}
.questionDetail-container {
  display: flex;
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  gap: 40px;
  padding-bottom: 40px;
  .questionDetail-container-box1 {
    width: 80%;
  }
}
.question-card {
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
.answer {
  .answer__content {
    margin-bottom: 35px;
  }
  .answer__title {
    margin: 25px 0;
    border-bottom: 3px solid #00a651;
    width: fit-content;
    font-size: 18px;
  }
  .answer__content {
    line-height: 1.5;
  }
}
.activity-header {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  .activity-share-button {
    border: none;
    padding: 7px 14px;
    border-radius: 30px;
    background-color: #03a753;
    color: #fff;
  }
}
.activity-subject {
  span {
    font-weight: 200;
    padding-left: 10px;
  }
  .seticontag {
    padding-right: 5px;
  }
}
h1.related-question__title {
  width: 24%;
  margin: 25px 0;
  border-bottom: 3px solid #00a651;
  font-size: 24px;
}
.related-question__item {
  padding: 25px 0;
  .related-question__item-title {
    font-size: 18px;
    padding-bottom: 15px;
  }
  .related-question__item-content {
    font-size: 14px;
    color: #757575;
  }
}
.related-question__item + .related-question__item {
  border-top: 1px solid #ccc;
}
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
  .questionDetail-container[data-v-32f78cf1] {
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: column;
  }
  .questionDetail-container .questionDetail-container-box1[data-v-32f78cf1] {
    width: 100%;
  }
  h1.related-question__title[data-v-32f78cf1] {
    width: 40%;
  }
}
@media (max-width: 576px) {
  .questionDetail-container[data-v-32f78cf1] {
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: column;
  }
  .questionDetail-container .questionDetail-container-box1[data-v-32f78cf1] {
    width: 100%;
  }
  h1.related-question__title[data-v-32f78cf1] {
    width: 40%;
  }
}
@media (min-width: 577px) and (max-width: 768px) {
  .questionDetail-container[data-v-32f78cf1] {
    padding-left: 10px;
    padding-right: 10px;
  }
  h1.related-question__title[data-v-32f78cf1] {
    width: 40%;
  }
}
@media (min-width: 769px) and (max-width: 992px) {
  .questionDetail-container[data-v-32f78cf1] {
    padding-left: 10px;
    padding-right: 10px;
  }
  h1.related-question__title[data-v-32f78cf1] {
    width: 40%;
  }
}
@media (min-width: 993px) and (max-width: 1200px) {
  .questionDetail-container[data-v-32f78cf1] {
    padding-left: 10px;
    padding-right: 10px;
  }
}
@media (min-width: 1201px) and (max-width: 1540px) {
}
@media (min-width: 1528px) {
}
</style>
