<template>
  <div class="headerr">
    <div class="containerr">
      <div class="header-items">
        <div class="header__logo">
          <div class="header__logo-img">
            <img src="../assets/icon-bv.png" alt="logo" />
          </div>
          <div class="header-logo-title">
            <h1>bệnh viện đa khoa tỉnh kon tum</h1>
            <p>
              chất lượng bệnh viện -An toàn người bệnh là mục tiêu của chsung
              tôi
            </p>
          </div>
        </div>
      </div>
      <div class="header-item">
        <div class="header__hotline">
          <div class="header__hotline-box">
            <div class="hotline-item">
              <span class="hotline-item__icon">🚑</span>
              <span class="hotline-item__label">Cấp cứu:</span>
              <span class="hotline-item__number">02603 862 572</span>
            </div>
            <div class="hotline-item">
              <span class="hotline-item__icon">📞</span>
              <span class="hotline-item__label">Hotline:</span>
              <span class="hotline-item__number">02603 700 555</span>
            </div>
          </div>
          <div class="header__nav">
            <div class="header__nav-item">Kiến thức</div>
            <div class="header__nav-item">Tấm lòng vàng</div>
            <div class="header__nav-item">Góc tri ân</div>
            <div class="header__nav-item">
              VI <span class="header__nav-item--dropdown">▼</span>
            </div>
            <div class="header__nav-item">
              <a href="#" class="header__nav-link">Đăng ký</a>
              <span> | </span>
              <a href="#" class="header__nav-link">Đăng nhập</a>
            </div>
          </div>
        </div>
        <div class="nav-menu-box">
          <ul class="nav-menu">
            <li class="nav-item">
              <a href="" class="nav-link">
                <img
                  src="../assets/icon- home.png"
                  alt="Home Icon"
                  class="icon-home"
                />
              </a>
            </li>
            <router-link to="/" class="routerlink" active-class="active">
              <li class="nav-item">
                <a href="#" class="nav-link">Giới thiệu</a>
              </li>
            </router-link>
            <router-link to="/action" class="routerlink" active-class="active">
              <li class="nav-item">
                <a href="#" class="nav-link"
                  >Hoạt Động
                  <div class="action-active">
                    <ul>
                      <li>Tổng quan bệnh viện</li>
                      <li>Sơ đồ tổ chức</li>
                      <li>Ban giám đốc</li>
                      <li>Phòng chức năng</li>
                      <li>Khoa lâm sàng</li>
                      <li>Khoa cận lâm sàng</li>
                      <li>Đảng ủy</li>
                      <li>Đoàn thanh niên</li>
                      <li>Công đoàn</li>
                      <li>Chính sách chất lượng</li>
                    </ul>
                  </div>
                </a>
              </li>
            </router-link>
            <router-link to="/" class="routerlink" active-class="active">
              <li
                class="nav-item"
                :class="{ active: activeMenu === 'services' }"
                @click="setActive('services')"
              >
                <a href="" class="nav-link">Dịch Vụ</a>
              </li>
            </router-link>
            <router-link to="/action" class="routerlink" active-class="active">
              <li class="nav-item">
                <a href="" class="nav-link">Tin Tức - Sự Kiện</a>
              </li>
            </router-link>
            <router-link to="/" class="routerlink" active-class="active">
              <li
                class="nav-item"
                :class="{ active: activeMenu === 'recruitment' }"
                @click="setActive('recruitment')"
              >
                <a href="" class="nav-link">Tuyển Dụng</a>
              </li>
            </router-link>
            <router-link
              to="/contactBv"
              class="routerlink"
              active-class="active"
              ><li class="nav-item">
                <a href="" class="nav-link">Liên Hệ</a>
              </li></router-link
            >
            <router-link to="/question" class="routerlink" active-class="active"
              ><li class="nav-item">
                <a href="" class="nav-link">Hỏi Đáp</a>
              </li></router-link
            >
            <router-link to="/" class="routerlink" active-class="active">
              <li class="nav-item">
                <a href="" class="nav-link">Thư Viện</a>
              </li>
            </router-link>
            <li class="nav-item-search">
              <a href="" class="nav-link">
                <div class="search">
                  <img
                    src="../assets/icon-search.png"
                    alt="Search Icon"
                    class="icon-search"
                  />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <i class="fa-solid fa-bars tiles" @click="openModal"></i>
      <modal-home
        :isopenModal="isopenModal"
        @close-modal="hideModal"
        class="modalHomeSet"
      />
    </div>
  </div>
</template>

<script>
import ModalHome from "./ModalHome.vue";
export default {
  components: { ModalHome },
  data() {
    return {
      activeMenu: "home",
      isopenModal: false,
      isActive: false,
    };
  },
  methods: {
    setActive(menuItem) {
      this.activeMenu = menuItem; // Cập nhật menu được chọn
    },
    openModal() {
      this.isopenModal = true; // Hiển thị modal khi click mở
      document.body.style.overflow = "hidden";
    },
    hideModal() {
      this.isopenModal = false; // Ẩn modal khi click đóng
      document.body.style.overflow = ""; // Khôi phục cuộn khi modal tắt
    },
  },
  watch: {
    $route(to) {
      this.activeMenu = to.name; // Cập nhật activeMenu khi route thay đổi
    },
  },
};
</script>

<style scoped lang="scss">
$cololFull: #00a651;
.headerr[data-v-50a213b2] {
  width: 100%;
  position: fixed;
  z-index: 1;
  background-color: #fff;
}
.containerr {
  display: flex;
  justify-content: space-around;
}
.header__logo {
  display: flex;
  align-items: center;
}

.header-logo-title {
  h1 {
    font-size: 26px;
    color: $cololFull;
  }
  p {
    font-size: 16px;
    color: #ed1c24;
  }
}
.header-items {
  width: 40%;
  padding: 25px 40px;
  border-top: 6px solid #00a651;
}
.header-item {
  display: flex;
  flex-direction: column;
  gap: 45px;
  width: 60%;
  padding-bottom: 20px;
}
.header__logo {
  display: flex;
  gap: 17px;
}
.header__hotline {
  display: flex;
  justify-content: space-between;
  background-color: #00a651;
  border-radius: 0px 0px 0px 200px;
  padding: 15px 40px;
  color: #fff;
  .header__hotline-box {
    display: flex;
    gap: 30px;
  }
}
.header__nav {
  display: flex;
  gap: 25px;
}
.header__nav-item a {
  text-decoration: none;
  color: #fff;
}
ul.nav-menu {
  display: flex;
  list-style-type: none;
  gap: 20px;
  justify-content: center;
  a {
    text-decoration: none;
    color: #000;
  }
}
.routerlink.active {
  border-bottom: 3px solid $cololFull;
}
.nav-link {
  li {
    padding: 10px;
    width: 258px;
  }
}
.nav-item:hover .action-active {
  display: block;
}
.action-active {
  display: none;
  position: absolute;
  background-color: #fff;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-top: 3px solid $cololFull;
  z-index: 1;
  ul {
    list-style-type: none;
  }
}
@media (max-width: 480px) {
  .containerr[data-v-50a213b2] {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 6px solid #00a651;
  }
  i.fa-solid.fa-bars.tiles[data-v-50a213b2] {
    display: block;
    font-size: 44px;
    position: unset;
    padding-right: 20px;
  }
  .header-items[data-v-50a213b2] {
    width: 100%;
    padding: 10px 0 !important;
    border-top: none;
  }
  .header-item {
    display: none;
    height: auto !important;
    padding-bottom: 20px;
  }
}
@media (max-width: 576px) {
  i.fa-solid.fa-bars.tiles[data-v-50a213b2] {
    display: block;
    font-size: 44px;
    position: unset;
    padding-right: 20px;
  }
  .header-items[data-v-50a213b2] {
    width: 100%;
    padding: 25px 40px;
    border-top: none;
  }
  .header-item {
    display: none;
    height: auto !important;
    padding-bottom: 20px;
  }
}
@media (min-width: 577px) and (max-width: 768px) {
  i.fa-solid.fa-bars.tiles[data-v-50a213b2] {
    display: block;
    font-size: 44px;
    position: absolute;
    top: 70px;
    right: 27px;
  }
  .header-items[data-v-50a213b2] {
    width: 100%;
    padding: 25px 40px;
    border-top: 6px solid #00a651;
  }
  .header-item[data-v-50a213b2] {
    width: 76%;
    display: none;
    height: auto;
  }
  .header__hotline[data-v-50a213b2][data-v-50a213b2] {
    padding: 15px 14px;
    justify-content: space-evenly;
    gap: 17px;
    flex-direction: column;
    align-items: flex-end;
  }
  .header__hotline .header__hotline-box[data-v-50a213b2] {
    gap: 18px;
  }
  .header__nav[data-v-50a213b2] {
    gap: 18px;
  }
  ul.nav-menu[data-v-50a213b2] {
    flex-wrap: wrap;
  }
}
@media (min-width: 769px) and (max-width: 992px) {
  i.fa-solid.fa-bars.tiles[data-v-50a213b2] {
    display: block;
    font-size: 44px;
    position: absolute;
    top: 70px;
    right: 27px;
  }
  .header-items[data-v-50a213b2] {
    width: 100%;
    padding: 25px 40px;
    border-top: 6px solid #00a651;
    height: auto;
  }
  .header-item[data-v-50a213b2] {
    width: 76%;
    display: none;
  }
  .header__hotline[data-v-50a213b2][data-v-50a213b2] {
    padding: 15px 14px;
    justify-content: space-evenly;
    gap: 17px;
    flex-direction: column;
    align-items: flex-end;
  }
  .header__hotline .header__hotline-box[data-v-50a213b2] {
    gap: 18px;
  }
  .header__nav[data-v-50a213b2] {
    gap: 18px;
  }
  ul.nav-menu[data-v-50a213b2] {
    flex-wrap: wrap;
  }
}
@media (min-width: 993px) and (max-width: 1200px) {
  .modalHomeSet {
    display: none;
  }
  .header-item[data-v-50a213b2] {
    width: 76%;
  }
  .header-items[data-v-50a213b2] {
    width: 40%;
    padding: 23px 0px;
    border-top: 6px solid #00a651;
  }
  .header__hotline[data-v-50a213b2][data-v-50a213b2] {
    padding: 15px 14px;
    justify-content: space-evenly;
    gap: 17px;
    flex-direction: column;
    align-items: flex-end;
  }
  .header__hotline .header__hotline-box[data-v-50a213b2] {
    gap: 18px;
  }
  .header__nav[data-v-50a213b2] {
    gap: 18px;
  }
  ul.nav-menu[data-v-50a213b2] {
    flex-wrap: wrap;
  }
}
@media (min-width: 1201px) and (max-width: 1540px) {
  .modalHomeSet {
    display: none;
  }
  .header-item[data-v-50a213b2] {
    width: 76%;
  }
  .header__hotline[data-v-50a213b2] {
    padding: 15px 14px;
    justify-content: space-evenly;
  }
  .header__hotline .header__hotline-box[data-v-50a213b2] {
    gap: 2px;
  }
  .header__nav[data-v-50a213b2] {
    gap: 4px;
  }
}
@media (min-width: 1528px) {
  .modalHomeSet {
    display: none;
  }
}
i.fa-solid.fa-bars.tiles {
  display: none;
  font-size: 44px;
  position: absolute;
  top: 70px;
  right: 27px;
}
</style>
