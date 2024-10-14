<template>
  <div class="footer-wrapper">
    <div class="footer">
      <!-- Footer Main Section -->
      <div class="footer-main">
        <img
          src="../assets/icon-bv.png"
          alt="Footer Logo"
          class="footer-main-logo"
        />
        <div class="footer-main-content">
          <h1 class="footer-main-title">BỆNH VIỆN ĐA KHOA TỈNH KON TUM</h1>
          <div class="footer-main-icons">
            <!-- Icon Item 1 -->
            <div class="footer-main-icon-item">
              <img
                src="../assets/footer/icon/map.png"
                alt="Icon 1"
                class="footer-main-icon"
              />
              <p class="footer-main-icon-text">
                224 Bà Triệu, Phường Quang Trung, TP.Kon Tum
              </p>
            </div>
            <!-- Icon Item 2 -->
            <div class="footer-main-icon-item">
              <img
                src="../assets/footer/icon/phone.png"
                alt="Icon 2"
                class="footer-main-icon"
              />
              <p class="footer-main-icon-text">060.3862573</p>
            </div>
            <!-- Icon Item 3 -->
            <div class="footer-main-icon-item">
              <img
                src="../assets/footer/icon/prin.png"
                alt="Icon 3"
                class="footer-main-icon"
              />
              <p class="footer-main-icon-text">060.3862573</p>
            </div>
            <!-- Icon Item 4 -->
            <div class="footer-main-icon-item">
              <img
                src="../assets/footer/icon/mail.png"
                alt="Icon 4"
                class="footer-main-icon"
              />
              <p class="footer-main-icon-text">
                Benhviendakhoatinhkontum@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Form Section -->
      <div class="footer-form">
        <div class="footer-form-item">
          <label for="footer-form-select-1" class="footer-form-label"
            >website liên kết</label
          >
          <select
            name="option"
            id="footer-form-select-1"
            class="footer-form-select"
          >
            <option value="option1">Cục quản lý khám chữa bệnh</option>
            <option value="option2">
              Một tùy chọn khác rất dài để kiểm tra
            </option>
          </select>
        </div>
        <div class="footer-form-item">
          <label for="footer-form-select-2" class="footer-form-label"
            >kết nối với chúng tôi</label
          >
          <div class="footer-form-icons">
            <img src="../assets/footer/fb.png" class="footer-form-icon" />
            <img src="../assets/footer/x.png" class="footer-form-icon" />
            <img src="../assets/footer/insta.png" class="footer-form-icon" />
            <img src="../assets/footer/skype.png" class="footer-form-icon" />
          </div>
        </div>
      </div>

      <!-- Footer Stats Section -->
      <div class="footer-stats">
        <h3 class="footer-stats-title">số lượt truy cập</h3>
        <div class="footer-stats-box">
          <div class="footer-stats-row">
            <span class="footer-stats-label">Vis. today</span>
            <span class="footer-stats-value">100</span>
          </div>
          <hr />
          <div class="footer-stats-row">
            <span class="footer-stats-label">Pages</span>
            <span class="footer-stats-value">700 000</span>
          </div>
          <hr />
          <div class="footer-stats-row">
            <span class="footer-stats-label">Online</span>
            <span class="footer-stats-value">0</span>
          </div>
        </div>
      </div>
    </div>
    <div class="iconSMS">
      <img src="../assets/iconSMS.png" alt="" />
    </div>
    <i
      class="fa-solid fa-circle-chevron-up icon-up"
      v-if="showUp"
      @click="scrollToTop()"
    ></i>

    <!-- Copyright Section -->
    <div class="footer-copyright">
      <p>Copyright © 2024, bản quyền thuộc về BỆNH VIỆN ĐA KHOA TỈNH KON TUM</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showUp: false,
    };
  },
  methods: {
    handleScroll() {
      // Check if the page has been scrolled more than 400 pixels
      this.showUp = window.pageYOffset > 400;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    // Thêm trình lắng nghe sự kiện cuộn khi component được gắn vào DOM
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    // Xóa trình lắng nghe sự kiện cuộn khi component bị hủy
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
$cololFull: #00a651;
.footer-wrapper {
  background-color: #f5f5f5;
  padding-top: 50px;
}
.footer {
  display: flex;
  width: 1200px;
  max-width: 100%;
  margin: 30px auto;
  justify-content: space-between;
  label {
    font-size: 18px;
    font-weight: bold;
  }
  .footer-main {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    .footer-main-content {
      display: flex;
      flex-direction: column;
      gap: 25px;
      h1.footer-main-title {
        font-size: 39px;
        width: 335px;
        color: $cololFull;
      }
    }
    .footer-main-icons {
      display: flex;
      flex-direction: column;
      gap: 15px;
      .footer-main-icon-item {
        display: flex;
        gap: 10px;
        img {
          object-fit: contain;
        }
      }
    }
  }
  .footer-form {
    display: flex;
    flex-direction: column;
    gap: 50px;
    .footer-form-item {
      display: flex;
      flex-direction: column;
      gap: 20px;
      select#footer-form-select-1 {
        padding: 9px;
        border-radius: 7px;
        border: 1px solid #ccc;
      }
      .footer-form-icons {
        display: flex;
        gap: 9px;
      }
    }
  }
  .footer-stats {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .footer-stats-box {
      background-color: $cololFull;
      padding: 5px;
      color: #fff;
      .footer-stats-row {
        display: flex;
        justify-content: space-between;
        gap: 80px;
      }
    }
  }
}
.footer-copyright {
  text-align: center;
  padding: 10px 0;
  background-color: $cololFull;
  color: #fff;
}
.iconSMS {
  position: fixed;
  right: 36px;
  bottom: 129px;
}
.icon-up {
  position: fixed;
  right: 56px;
  bottom: 64px;
  font-size: 53px;
}
.icon-up::before {
  color: #6b6b6b;
}
@media (max-width: 480px) {
}
@media (max-width: 576px) {
  .iconSMS[data-v-d17866ea] {
    right: -1px !important;
  }
  .icon-up[data-v-d17866ea] {
    right: 23px !important;
  }
  .footer[data-v-d17866ea] {
    flex-direction: column;
    padding: 0 20px;
    gap: 30px;
    .footer-main[data-v-d17866ea] {
      flex-direction: column;
    }
    .footer-stats .footer-stats-box[data-v-d17866ea] {
      width: 197px;
    }

    .footer-form-item select#footer-form-select-1[data-v-d17866ea] {
      padding: 9px;
      border-radius: 7px;
      border: 1px solid #ccc;
      width: 270px;
    }
  }
}
@media (min-width: 577px) and (max-width: 768px) {
  .footer[data-v-d17866ea] {
    flex-direction: column;
    padding: 0 20px;
    gap: 30px;
    .footer-main[data-v-d17866ea] {
      flex-direction: column;
    }
    .footer-stats .footer-stats-box[data-v-d17866ea] {
      width: 197px;
    }

    .footer-form-item select#footer-form-select-1[data-v-d17866ea] {
      padding: 9px;
      border-radius: 7px;
      border: 1px solid #ccc;
      width: 270px;
    }
  }
}
@media (min-width: 769px) and (max-width: 992px) {
  .footer[data-v-d17866ea] {
    flex-direction: column;
    padding: 0 20px;
    gap: 30px;
    .footer-main[data-v-d17866ea] {
      flex-direction: column;
    }
    .footer-stats .footer-stats-box[data-v-d17866ea] {
      width: 197px;
    }

    .footer-form-item select#footer-form-select-1[data-v-d17866ea] {
      padding: 9px;
      border-radius: 7px;
      border: 1px solid #ccc;
      width: 270px;
    }
  }
}
@media (min-width: 993px) and (max-width: 1200px) {
  .footer[data-v-d17866ea] {
    padding: 0 20px;
  }
}
@media (min-width: 1201px) and (max-width: 1540px) {
}
@media (min-width: 1528px) {
}
select.footer-form-select option {
  width: 250px; /* Đảm bảo chiều rộng của option tương ứng với select */
}
</style>
