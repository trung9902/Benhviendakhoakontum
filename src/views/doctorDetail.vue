<template>
  <div class="doctorDetail">
    <header-web />
    <background-navigation
      title="danh sách bác sĩ"
      :title1="istDoctor.name"
      :backgroundImage="require('@/assets/Action/actionNavibackground.png')"
    />
    <div class="doctorDetail-container">
      <div class="doctor-profile">
        <div class="doctor-info">
          <img
            src="../assets/listDoctor/doctor10.png"
            alt="Doctor Image"
            class="doctor-image"
          />
          <h2 class="doctor-title">BSCKI</h2>
          <p class="doctor-specialty">Bùi Thái Bình</p>
          <button class="register-btn" @click="openModal">Đăng ký khám</button>
        </div>

        <div class="doctor-tabs">
          <h2></h2>
          <ul class="tab-list">
            <li
              class="tab"
              :class="{ active: activeTab === 'chucVuHienTai' }"
              @click="setActiveTab('chucVuHienTai')"
            >
              Chức vụ hiện tại
            </li>
            <li
              class="tab"
              :class="{ active: activeTab === 'hocVan' }"
              @click="setActiveTab('hocVan')"
            >
              Học vấn
            </li>
            <li
              class="tab"
              :class="{ active: activeTab === 'hocHamHocVi' }"
              @click="setActiveTab('hocHamHocVi')"
            >
              Học hàm / Học vị
            </li>
            <li
              class="tab"
              :class="{ active: activeTab === 'quaTrinhCongTac' }"
              @click="setActiveTab('quaTrinhCongTac')"
            >
              Quá trình công tác
            </li>
            <li
              class="tab"
              :class="{ active: activeTab === 'lichKham' }"
              @click="setActiveTab('lichKham')"
            >
              Lịch khám
            </li>
          </ul>
          <div class="content">
            <div v-if="activeTab === 'chucVuHienTai'">
              <p>Đây là nội dung Chức vụ hiện tại.</p>
            </div>
            <div v-if="activeTab === 'hocVan'">
              <p>Đây là nội dung Học vấn.</p>
            </div>
            <div v-if="activeTab === 'hocHamHocVi'">
              <p>Đây là nội dung Học hàm / Học vị.</p>
            </div>
            <div v-if="activeTab === 'quaTrinhCongTac'">
              <p>Đây là nội dung Quá trình công tác.</p>
            </div>
            <div v-if="activeTab === 'lichKham'">
              <p>Đây là nội dung Lịch khám.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="doctor-same-department">
        <h1 class="doctor-same-department__title">Bác sĩ cùng khoa</h1>
        <div class="doctor-same-department__list">
          <div class="doctor-same-department__item">
            <div class="list-doctor__item">
              <img
                src="../assets/listDoctor/doctor1.png"
                alt=""
                class="list-doctor__image"
              />
              <div class="list-doctor__details">
                <h3 class="list-doctor__name">Lê Anh Quốc</h3>
                <div class="list-doctor__info">
                  <div class="list-doctor__info-item">
                    <img
                      src="../assets/listDoctor/icon1.png"
                      class="list-doctor__icon"
                    />
                    <p class="list-doctor__text">BS. CKI</p>
                  </div>
                  <div class="list-doctor__info-item">
                    <img
                      src="../assets/listDoctor/icon2.png"
                      class="list-doctor__icon"
                    />
                    <p class="list-doctor__text">Mắt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="doctor-same-department__item">
            <div class="list-doctor__item">
              <img
                src="../assets/listDoctor/doctor1.png"
                alt=""
                class="list-doctor__image"
              />
              <div class="list-doctor__details">
                <h3 class="list-doctor__name">Lê Anh Quốc</h3>
                <div class="list-doctor__info">
                  <div class="list-doctor__info-item">
                    <img
                      src="../assets/listDoctor/icon1.png"
                      class="list-doctor__icon"
                    />
                    <p class="list-doctor__text">BS. CKI</p>
                  </div>
                  <div class="list-doctor__info-item">
                    <img
                      src="../assets/listDoctor/icon2.png"
                      class="list-doctor__icon"
                    />
                    <p class="list-doctor__text">Mắt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="doctor-same-department__item">
            <div class="list-doctor__item">
              <img
                src="../assets/listDoctor/doctor1.png"
                alt=""
                class="list-doctor__image"
              />
              <div class="list-doctor__details">
                <h3 class="list-doctor__name">Lê Anh Quốc</h3>
                <div class="list-doctor__info">
                  <div class="list-doctor__info-item">
                    <img
                      src="../assets/listDoctor/icon1.png"
                      class="list-doctor__icon"
                    />
                    <p class="list-doctor__text">BS. CKI</p>
                  </div>
                  <div class="list-doctor__info-item">
                    <img
                      src="../assets/listDoctor/icon2.png"
                      class="list-doctor__icon"
                    />
                    <p class="list-doctor__text">Mắt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" id="registerModal" v-show="isOpenModal">
      <div class="modal__content">
        <span class="modal__close" @click="closeModal()">&times;</span>
        <h2 class="modal__title">Đăng Ký Khám Bệnh</h2>

        <form class="modal__form">
          <input
            type="text"
            id="name"
            placeholder="Họ tên"
            class="modal__input"
          />

          <input
            type="text"
            id="phone"
            placeholder="Số điện thoại"
            class="modal__input"
          />

          <select id="service" class="modal__select">
            <option value="" disabled selected>Chọn loại dịch vụ khám</option>
            <option value="service1">Dịch vụ 1</option>
            <option value="service2">Dịch vụ 2</option>
          </select>

          <select id="specialty" class="modal__select">
            <option value="" disabled selected>Chọn chuyên khoa</option>
            <option value="specialty1">Chuyên khoa 1</option>
            <option value="specialty2">Chuyên khoa 2</option>
          </select>

          <select id="doctor" class="modal__select">
            <option value="" disabled selected>Chọn bác sĩ</option>
            <option value="doctor1">Bác sĩ 1</option>
            <option value="doctor2">Bác sĩ 2</option>
          </select>

          <textarea
            id="notes"
            placeholder="Nhập vấn đề sức khỏe cần khám"
            class="modal__textarea"
          ></textarea>

          <button type="submit" class="modal__submit">Đăng Ký</button>
        </form>
      </div>
    </div>

    <footer-vue />
  </div>
</template>

<script>
import BackgroundNavigation from "../components/backgroundNavigation.vue";
import FooterVue from "../components/footerVue.vue";
import headerWeb from "../components/headerWeb.vue";
export default {
  components: { headerWeb, BackgroundNavigation, FooterVue },
  data() {
    {
      return {
        isOpenModal: false,
        activeTab: "chucVuHienTai",
        istDoctor: [
          {
            img: require("../assets/icon-bv.png"), // Hình ảnh chung (bạn có thể thay đổi nếu cần)
            name: "Lê Anh Quốc",
            Ck: "Mắt",
            Cv: "BS. CKI",
            GT: "male",
          },
          {
            img: require("../assets/listDoctor/doctor1.png"), // Hình ảnh của bác sĩ mới
            name: "Trần Quốc Thái",
            Ck: "Khoa Lao",
            Cv: "BS. CKI",
            GT: "male",
          },
          {
            img: require("../assets/listDoctor/doctor2.png"), // Hình ảnh của bác sĩ mới
            name: "Đặng Văn Long",
            Ck: "Ngoại Tổng Hợp",
            Cv: "BS. CKI",
            GT: "male",
          },
          {
            img: require("../assets/listDoctor/doctor3.png"), // Hình ảnh của bác sĩ mới
            name: "Lê Hữu Lợi",
            Ck: "Khám Nội A",
            Cv: "ThS. BS",
            GT: "male",
          },
          {
            img: require("../assets/listDoctor/doctor4.png"), // Hình ảnh của bác sĩ mới
            name: "Phạm Thị Thu Trang",
            Ck: "Tai - Mũi - Họng",
            Cv: "BS. CKI",
            GT: "female",
          },
          {
            img: require("../assets/listDoctor/doctor5.png"), // Hình ảnh của bác sĩ mới
            name: "Ngô Văn Minh",
            Ck: "Tai - Mũi - Họng",
            Cv: "BS. CKI",
            GT: "male",
          },
          {
            img: require("../assets/listDoctor/doctor6.png"), // Hình ảnh của bác sĩ mới
            name: "Nguyễn Ngọc Diệu",
            Ck: "Răng - Hàm - Mặt",
            Cv: "ThS. BS",
            GT: "male",
          },
          {
            img: require("../assets/listDoctor/doctor7.png"), // Hình ảnh của bác sĩ mới
            name: "Trần Thị Thu Trang",
            Ck: "Giải Phẫu Bệnh",
            Cv: "BS. CKI",
            GT: "female",
          },
          {
            img: require("../assets/listDoctor/doctor8.png"), // Hình ảnh của bác sĩ mới
            name: "Quách Thị Thanh Hà",
            Ck: "Giải Phẫu Bệnh",
            Cv: "BS. CKI",
            GT: "female",
          },
          {
            img: require("../assets/listDoctor/doctor9.png"), // Hình ảnh của bác sĩ mới
            name: "Bùi Thái Bình",
            Ck: "Khoa Cấp Cứu",
            Cv: "BS. CKI",
            GT: "male",
          },
          {
            img: require("../assets/listDoctor/doctor10.png"), // Hình ảnh của bác sĩ mới
            name: "Nguyễn Cảnh Sơn",
            Ck: "Khoa Cấp Cứu",
            Cv: "BS. CKI",
            GT: "male",
          },
          {
            img: require("../assets/listDoctor/doctor11.png"), // Hình ảnh của bác sĩ mới
            name: "Võ Ngọc Hải",
            Ck: "Khoa Thăm Dò Chức Năng",
            Cv: "BS. CKI",
            GT: "male",
          },
        ],
      };
    }
  },
  methods: {
    openModal() {
      this.isOpenModal = true; // Mở modal
    },
    closeModal() {
      this.isOpenModal = false; // Đóng modal
      console.log(this.isOpenModal);
    },
    setActiveTab(tabName) {
      this.activeTab = tabName;
      console.log(this.activeTab);
    },
  },
};
</script>

<style lang="scss" scoped>
.backgroundNavigation-box {
  padding-top: 168px;
}
.doctor-profile {
  display: flex;
  align-items: flex-start;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  gap: 30px;
}
ul.tab-list {
  list-style-type: none;
  display: flex;
  gap: 10px;
  border-bottom: 3px solid #28a745;
}
li.tab {
  padding: 10px;
  color: #818486;
}
.doctor-info {
  text-align: center;
  img {
    border-radius: 10px;
    width: 200px;
  }
}

.doctor-title {
  font-size: 18px;
  margin: 10px 0;
}

.doctor-specialty,
.doctor-department {
  font-size: 16px;
  font-weight: bold;
}

.register-btn {
  margin-top: 15px;
  padding: 10px 20px;
  color: #28a745;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  border: 1px solid #28a745;
}

.doctor-tabs {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 70%;
}

.tab {
}

.tab.active {
  background-color: #28a745;
  color: white;
  border-radius: 10px 10px 0px 0px;
}

.tab:not(.active):hover {
  background-color: #e7f3eb;
}
.doctor-same-department {
  width: 1200px;
  max-width: 100%;
  margin: 43px auto;
  h1.doctor-same-department__title {
    font-size: 24px;
    border-bottom: 2px solid #28a745;
    width: fit-content;
    margin: 25px 0;
  }
  .doctor-same-department__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    .list-doctor__item {
      display: flex;
      gap: 20px;
      border: 1px solid #ccc;
      border-radius: 10px;
      padding: 15px;
      .list-doctor__image {
        border-radius: 50%;
        width: 29%;
        height: 108px;
      }

      .list-doctor__details {
        display: flex;
        gap: 15px;
        flex-direction: column;
        .list-doctor__info {
          display: flex;
          gap: 15px;
          flex-direction: column;
          .list-doctor__info-item {
            display: flex;
            gap: 12px;
          }
        }
      }
    }
  }
}
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

  &__content {
    background-image: url(../assets/bg-modal.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #f7f9fb;
    border-radius: 20px;
    animation: in 0.4s linear;
    background-color: #fff;
    margin: 10% auto;
    padding: 20px;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;
    position: relative;
  }

  &__close {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 30px;
    color: #333;
    cursor: pointer;
  }

  &__title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
  }

  &__input,
  &__select,
  &__textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #858585;
  }

  &__submit {
    width: 100%;
    background-color: #00a651;
    color: white;
    padding: 15px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: #008c4a;
    }
  }
}
@media (max-width: 480px) {
}
@media (max-width: 576px) {
  .doctor-profile[data-v-583f076a] {
    flex-direction: column;
  }
  .doctor-info[data-v-583f076a] {
    text-align: center;
    width: 100%;
  }
  .doctor-tabs[data-v-583f076a] {
    width: 100%;
  }
  .doctor-same-department[data-v-583f076a] {
    padding: 10px;
  }
  .doctor-same-department .doctor-same-department__list[data-v-583f076a] {
    grid-template-columns: 1fr;
  }
}
@media (min-width: 577px) and (max-width: 768px) {
  .doctor-same-department[data-v-583f076a] {
    padding: 10px;
  }
}
@media (min-width: 769px) and (max-width: 992px) {
  .doctor-same-department[data-v-583f076a] {
    padding: 10px;
  }
}
@media (min-width: 993px) and (max-width: 1200px) {
  .doctor-same-department[data-v-583f076a] {
    padding: 10px;
  }
}
@media (min-width: 1201px) and (max-width: 1540px) {
}
@media (min-width: 1528px) {
}
</style>
