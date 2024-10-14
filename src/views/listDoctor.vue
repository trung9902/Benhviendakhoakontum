<template>
  <div class="listDoctor">
    <header-web />
    <background-navigation
      title="danh sách bác sĩ"
      :backgroundImage="require('@/assets/Action/actionNavibackground.png')"
    />
    <div class="search-bar">
      <div class="search-bar__item">
        <input
          id="doctorName"
          v-model="searchFields.name"
          placeholder="Nhập họ tên bác sĩ"
        />
      </div>
      <div class="search-bar__item">
        <select id="specialty" v-model="searchFields.specialty">
          <option value="">Chọn chuyên khoa</option>
          <option
            v-for="specialty in listDoctor"
            :key="specialty.Ck"
            :value="specialty.Ck"
          >
            {{ specialty.Ck }}
          </option>
        </select>
      </div>
      <div class="search-bar__item">
        <select id="position" v-model="searchFields.position">
          <option value="">Chọn chức vụ</option>
          <option
            v-for="doctor in filteredDoctors"
            :key="doctor.Cv"
            :value="doctor.Cv"
          >
            {{ doctor.Cv }}
          </option>
        </select>
      </div>
      <div class="search-bar__item">
        <select id="degree" v-model="searchFields.degree">
          <option value="">Chọn học hàm / học vị</option>
          <option
            v-for="doctor in filteredDoctors"
            :key="doctor.Cv"
            :value="doctor.Cv"
          >
            {{ doctor.Cv }}
          </option>
        </select>
      </div>
      <div class="search-bar__item">
        <select id="gender" v-model="searchFields.gender">
          <option value="">Chọn giới tính</option>
          <option value="male">Nam</option>
          <option value="female">Nữ</option>
        </select>
      </div>
      <button class="search-bar__button" @click="search">TÌM KIẾM</button>
    </div>
    <router-link to="/listDoctor/listDoctorDetail">
      <div class="lisDocter-items">
        <div
          class="list-doctor__item"
          v-for="(item, index) in filteredDoctors"
          :key="index"
        >
          <img :src="item.img" alt="" class="list-doctor__image" />
          <div class="list-doctor__details">
            <h3 class="list-doctor__name">{{ item.name }}</h3>
            <div class="list-doctor__info">
              <div class="list-doctor__info-item">
                <img
                  src="../assets/listDoctor/icon1.png"
                  class="list-doctor__icon"
                />
                <p class="list-doctor__text">{{ item.Cv }}</p>
              </div>
              <div class="list-doctor__info-item">
                <img
                  src="../assets/listDoctor/icon2.png"
                  class="list-doctor__icon"
                />
                <p class="list-doctor__text">{{ item.Ck }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </router-link>
    <div class="param-number">
      <li class="actice">1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </div>
    <footerVue />
  </div>
</template>

<script>
import footerVue from "@/components/footerVue.vue";
import BackgroundNavigation from "../components/backgroundNavigation.vue";
import headerWeb from "../components/headerWeb.vue";
export default {
  data() {
    return {
      showDoctors: false,
      searchFields: {
        name: "",
        specialty: "",
        position: "",
        degree: "",
        gender: "",
      },
      listDoctor: [
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
      filteredDoctors: [],
    };
  },
  created() {
    // Khi component được khởi tạo, hiển thị danh sách đầy đủ
    this.filteredDoctors = this.listDoctor;
  },
  // methods: {
  //   searchDoctors() {
  //     this.showDoctors = true; // Hiện danh sách bác sĩ khi nhấn nút tìm kiếm
  //     console.log(this.filteredDoctors); // Hiển thị danh sách bác sĩ đã lọc ra console
  //   },
  // },
  methods: {
    search() {
      let doctors = this.listDoctor; // Start with the full list

      // Filter by name
      if (this.searchFields.name) {
        doctors = doctors.filter((doctor) =>
          doctor.name
            .toLowerCase()
            .includes(this.searchFields.name.toLowerCase())
        );
      }

      // Filter by specialty
      if (this.searchFields.specialty) {
        doctors = doctors.filter(
          (doctor) => doctor.Ck === this.searchFields.specialty
        );
      }

      // Filter by position
      if (this.searchFields.position) {
        doctors = doctors.filter(
          (doctor) => doctor.Cv === this.searchFields.position
        );
      }

      // Filter by degree
      if (this.searchFields.degree) {
        doctors = doctors.filter(
          (doctor) => doctor.Cv === this.searchFields.degree
        );
      }

      // Filter by gender
      if (this.searchFields.gender) {
        doctors = doctors.filter(
          (doctor) => doctor.GT === this.searchFields.gender
        );
      }

      this.filteredDoctors = doctors;
    },
  },

  components: { headerWeb, BackgroundNavigation, footerVue },
};
</script>

<style lang="scss" scoped>
$cololFull: #00a651;
.backgroundNavigation-box {
  padding-top: 160px;
}
.lisDocter-items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  gap: 25px;
  .list-doctor__item {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    justify-content: space-evenly;
    color: #000;
    .list-doctor__image {
      border-radius: 50%;
      height: 70%;
      width: 32%;
    }
    .list-doctor__info-item {
      display: flex;
      gap: 15px;
      .list-doctor__details {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      .list-doctor__info {
        display: flex;
        gap: 10px;
        flex-direction: column;
      }
    }
  }
}
.search-bar {
  width: 1200px;
  max-width: 100%;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  background-color: #f8f9fa;
  gap: 15px;
}
select#specialty {
  padding: 13px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
#octorName,
#degree,
#position,
#gender,
#doctorName {
  padding: 13px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
button.search-bar__button {
  padding: 0 20px;
  border-radius: 10px;
  border: none;
  background-color: $cololFull;
  color: #fff;
}
.param-number {
  display: flex;
  justify-content: flex-end;
  gap: 9px;
  width: 1200px;
  max-width: 100%;
  margin: 20px auto;
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
@media (max-width: 480px) {
}
@media (max-width: 576px) {
  .lisDocter-items[data-v-c545a312] {
    display: grid;
    grid-template-columns: 1fr;
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    gap: 13px;
  }
  button.search-bar__button[data-v-c545a312] {
    padding: 15px 20px;
  }
  #specialty,
  #octorName[data-v-c545a312],
  #degree[data-v-c545a312],
  #position[data-v-c545a312],
  #gender[data-v-c545a312],
  #doctorName[data-v-c545a312] {
    padding: 13px;
    border: 1px solid #ccc;
    border-radius: 10px;
    width: 100%;
  }
  .search-bar[data-v-c545a312][data-v-c545a312] {
    padding: 20px 10px;
    flex-direction: column;
  }
  .lisDocter-items[data-v-c545a312] {
    padding: 0 10px;
  }
  .param-number[data-v-c545a312] {
    padding: 0 10px;
  }
}
@media (min-width: 577px) and (max-width: 768px) {
  .lisDocter-items[data-v-c545a312] {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    gap: 13px;
  }
  button.search-bar__button[data-v-c545a312] {
    padding: 15px 20px;
  }
  #specialty,
  #octorName[data-v-c545a312],
  #degree[data-v-c545a312],
  #position[data-v-c545a312],
  #gender[data-v-c545a312],
  #doctorName[data-v-c545a312] {
    padding: 13px;
    border: 1px solid #ccc;
    border-radius: 10px;
    width: 100%;
  }
  .search-bar[data-v-c545a312][data-v-c545a312] {
    padding: 20px 10px;
    flex-direction: column;
  }
  .lisDocter-items[data-v-c545a312] {
    padding: 0 10px;
  }
  .param-number[data-v-c545a312] {
    padding: 0 10px;
  }
}

@media (min-width: 769px) and (max-width: 992px) {
  .lisDocter-items[data-v-c545a312] {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    gap: 13px;
  }
  button.search-bar__button[data-v-c545a312] {
    padding: 15px 20px;
  }
  #specialty,
  #octorName[data-v-c545a312],
  #degree[data-v-c545a312],
  #position[data-v-c545a312],
  #gender[data-v-c545a312],
  #doctorName[data-v-c545a312] {
    padding: 13px;
    border: 1px solid #ccc;
    border-radius: 10px;
    width: 100%;
  }
  .search-bar[data-v-c545a312][data-v-c545a312] {
    padding: 20px 10px;
    flex-direction: column;
  }
  .lisDocter-items[data-v-c545a312] {
    padding: 0 10px;
  }
  .param-number[data-v-c545a312] {
    padding: 0 10px;
  }
}
@media (min-width: 993px) and (max-width: 1200px) {
  .search-bar[data-v-c545a312] {
    padding: 20px 10px;
  }
  .lisDocter-items[data-v-c545a312] {
    padding: 0 10px;
  }
  .param-number[data-v-c545a312] {
    padding: 0 10px;
  }
}
@media (min-width: 1201px) and (max-width: 1540px) {
}
@media (min-width: 1528px) {
}
</style>
