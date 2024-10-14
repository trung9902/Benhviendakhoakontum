<template>
  <div class="modalHome" v-show="isopenModal">
    <div
      class="header-item"
      :style="isopen ? { height: 'auto' } : { height: 'auto' }"
    >
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
          <div class="box">
            <i class="fa-solid fa-xmark close" @click="closeModal"></i>
            <div class="search-box">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                class="search-input"
              />
            </div>
          </div>
          <li class="nav-item">
            <a href="" class="nav-link"> Home </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Giới thiệu</a>
          </li>
          <li class="nav-item setcha">
            <a href="#" class="nav-link active"
              >Hoạt Động
              <div class="action-active" v-show="isopen">
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
            <i
              class="fa-solid fa-chevron-down dowup"
              :class="{ rotate: isopen }"
              @click="toggleVisibility"
            ></i>
          </li>
          <li class="nav-item"><a href="" class="nav-link">Dịch Vụ</a></li>
          <li class="nav-item">
            <a href="" class="nav-link">Tin Tức - Sự Kiện</a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link">Tuyển Dụng</a>
          </li>
          <li class="nav-item"><a href="" class="nav-link">Liên Hệ</a></li>
          <li class="nav-item"><a href="" class="nav-link">Hỏi Đáp</a></li>
          <li class="nav-item"><a href="" class="nav-link">Thư Viện</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isopen: false,
      isRotated: false,
    };
  },
  methods: {
    toggleVisibility() {
      this.isopen = !this.isopen; // Thay đổi trạng thái để tắt/bật
    },
    closeModal() {
      this.$emit("close-modal"); // Phát ra sự kiện 'close-modal' cho component cha
    },
  },
  props: ["isopenModal"], // Nhận trạng thái để hiển thị hoặc ẩn modal
};
</script>

<style scoped lang="scss">
i.fa-solid.fa-xmark.close {
  font-size: 29px;
  text-align: right;
  display: block;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
  width: 95%;
  max-width: 100%;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #fff;
  margin: 0 10px;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus-within {
    border-color: #0088cc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .search-input {
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    font-size: 16px;
    border-radius: 20px;
    background-color: transparent;
    transition: all 0.3s ease-in-out;

    &::placeholder {
      color: #aaa;
      font-style: italic;
    }
  }
}

.modalHome {
  // display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  overflow-y: auto;
  /* Cho phép cuộn dọc trong modal */
  overflow-x: hidden;
  /* Ẩn cuộn ngang */
  box-sizing: border-box;
}
.header-item[data-v-361871a8] {
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  background-color: #fff;
  width: 58%;
  padding-bottom: 20px;
  .header__hotline {
    display: flex;
    flex-direction: column-reverse;
  }
}
.nav-item {
  display: flex;
  padding: 20px 9px;
  justify-content: space-between;
  a {
    color: #000;
    width: 100%;
    font-weight: bold;
  }
}
.nav-item + .nav-item {
  border: 1px solid #ccc;
}
.header__nav-item {
  padding: 20px 9px;
  font-weight: bold;
}
.header__nav-item + .header__nav-item {
  border: 1px solid #ccc;
}
.action-active {
  width: 100%;
  padding-top: 20px;
  li {
    font-weight: 200;
  }
  ul {
    border-top: 1px solid #ccc;
    li {
      padding: 20px 9px;
    }
    li + li {
      border-top: 1px solid #ccc;
    }
  }
}
.hotline-item + .hotline-item {
  border: 1px solid #ccc;
}

.hotline-item {
  padding: 20px 9px;
  color: #00a651;
}
.header__nav-item a {
  cursor: pointer;
  color: #000;
}
.dowup {
  right: 15px;
  position: absolute;
  transition: transform 0.5s ease;
}
.setcha {
  position: relative;
}
.dowup.rotate {
  transform: rotate(180deg);
}
</style>
