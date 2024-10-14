<template>
  <div class="home">
    <headerVue />
    <!-- content -->

    <div class="content">
      <div class="content-slide">
        <div class="slide-item">
          <img
            class="slide-image"
            :src="require('@/assets/picture-slide.png')"
            alt="Slide 1"
          />
        </div>
        <div class="slide-item setslide">
          <img
            class="slide-image"
            :src="require('@/assets/picture-slide.png')"
            alt="Slide 2"
          />
        </div>
        <div class="slide-item setslide">
          <img
            class="slide-image"
            :src="require('@/assets/picture-slide.png')"
            alt="Slide 3"
          />
        </div>
      </div>
      <!-- card -->
      <div class="card-container">
        <div class="card-white">
          <img class="icon shield" src="../assets/shield-icon.png" />
          <div class="icon-box">
            <h3>Khám bệnh bảo hiểm y tế</h3>
            <p>Hướng dẫn khám bệnh BHYT tại bệnh viện đa khoa tỉnh Kon Tum</p>
          </div>
          <a href="#"><img src="../assets/icon-muitenxuong.png" alt="" /></a>
        </div>
        <div class="card">
          <img class="icon stethoscope" src="../assets/stethoscope-icon.png" />
          <div class="icon-box">
            <h3>Hướng dẫn khám bệnh</h3>
            <p>Các lưu ý khi đến khám chữa bệnh</p>
          </div>
          <a href="#"
            ><img src="../assets/icon-muitenxuong-while.png" alt=""
          /></a>
        </div>
        <div class="card-white">
          <img class="icon process" src="../assets/process-icon.png" />
          <div class="icon-box">
            <h3>Quy trình khám bệnh</h3>
            <p>Hướng dẫn các bước khám bệnh</p>
          </div>
          <a href="#"><img src="../assets/icon-muitenxuong.png" alt="" /></a>
        </div>
        <router-link to="/appointment">
          <div class="card">
            <img src="../assets/calendar-icon.png" class="icon calendar" />
            <div class="icon-box">
              <h3>Lịch khám bệnh</h3>
              <p>Lịch, giờ khám bệnh từ các khoa</p>
            </div>
            <a href="#"
              ><img src="../assets/icon-muitenxuong-while.png" alt=""
            /></a>
          </div>
        </router-link>
        <router-link to="/question">
          <div class="card-white">
            <img class="icon chat" src="../assets/chat-icon.png" />
            <div class="icon-box">
              <h3>Giải đáp tư vấn</h3>
              <p>Trả lời câu hỏi, tư vấn sức khỏe</p>
            </div>
            <a href="#"><img src="../assets/icon-muitenxuong.png" alt="" /></a>
          </div>
        </router-link>
        <router-link to="/listDoctor">
          <div class="card">
            <img class="icon doctor" src="../assets/doctor-icon.png" />
            <div class="icon-box">
              <h3>Tìm bác sĩ</h3>
              <p>Tìm, xem lịch khám của bác sĩ ở tất cả các khoa</p>
            </div>
            <a href="#"
              ><img src="../assets/icon-muitenxuong-while.png" alt=""
            /></a>
          </div>
        </router-link>
      </div>
      <!-- news -->
      <section class="news-section">
        <div class="news-section-title">
          <h2>TIN MỚI NHẤT</h2>
          <img src="../assets/news/news-icon.png" alt="" />
        </div>

        <div class="news-container">
          <div class="news-card" v-for="(news, index) in newsList" :key="index">
            <img :src="news.imageSrc" alt="" />
            <div class="news-info">
              <div class="news-date">
                <span class="day">{{ news.day }}</span>
                <span class="month-year">{{ news.monthYear }}</span>
              </div>
              <p class="news-title">{{ news.title }}</p>
            </div>
          </div>
        </div>
      </section>
      <!-- work -->
      <section class="work-section">
        <div class="news-section-title">
          <h2>Hoạt động</h2>
          <img src="../assets/news/news-icon.png" alt="" />
        </div>
        <div class="work-container center">
          <!-- Loop qua các phần tử của works để tạo slide -->
          <div v-for="(work, index) in works" :key="index" class="work-slide">
            <img :src="work.img" alt="work image" />
            <h3>{{ work.title }}</h3>
            <p>{{ work.description }}</p>
          </div>
        </div>
      </section>
      <!-- service -->
      <section class="service-section">
        <div class="service-section-title">
          <h2>Dịch vụ</h2>
          <img src="../assets/news/news-icon.png" alt="" />
        </div>
        <div class="service-container">
          <!-- Nhóm 5 ảnh đầu tiên -->
          <div class="group-1">
            <div class="service-item">
              <img src="../assets/service/service1.png" alt="Service 1" />
              <p>bảng giá dịch vụ bệnh viện</p>
            </div>
            <div class="service-item">
              <img src="../assets/service/service2.png" alt="Service 2" />
              <p>dịch vụ tiêm phòng vác xin</p>
            </div>
            <div class="service-item">
              <img src="../assets/service/service3.png" alt="Service 3" />
              <p>hướng dẫn khám bệnh</p>
            </div>
            <div class="service-item">
              <img src="../assets/service/service4.png" alt="Service 4" />
              <p>đặt lịch hẹn khám</p>
            </div>
            <div class="service-item">
              <img src="../assets/service/service5.png" alt="Service 5" />
              <p>khám và tầm soát sức khoẻ</p>
            </div>
          </div>

          <!-- Nhóm 4 ảnh sau -->
          <div class="group-2">
            <div class="service-item">
              <img src="../assets/service/service6.png" alt="Service 6" />
              <p>khám chữa bệnh ngoại trú</p>
            </div>
            <div class="service-item">
              <img src="../assets/service/service7.png" alt="Service 7" />
              <p>bảo hiểm y tế</p>
            </div>
            <div class="service-item">
              <img src="../assets/service/service8.png" alt="Service 8" />
              <p>điều trị nội trú</p>
            </div>
            <div class="service-item">
              <img src="../assets/service/service9.png" alt="Service 9" />
              <p>thẻ hội viên</p>
            </div>
          </div>
        </div>
      </section>
      <!-- video -->
      <section class="video-section">
        <div class="video-section-title">
          <h2>Video</h2>
          <img src="../assets/news/news-icon.png" alt="News Icon" />
        </div>
        <div class="video-container">
          <!-- Thẻ div đầu tiên -->
          <div class="video-item video-item-1">
            <img src="../assets/video/video-item1.png" alt="" />
            <i class="fa-regular fa-circle-play setPlayItem1"></i>
            <p>
              BỆNH VIỆN ĐA KHOA TỈNH KON TUM - VỊ THẾ VÀ SỨ MỆNH CỦA BỆNH VIỆN
              HẠNG I
            </p>
          </div>
          <!-- Thẻ div thứ hai -->
          <div class="video-item video-item-2">
            <div class="sub-item">
              <img src="../assets/video/video-item2.png" alt="" />
              <i class="fa-regular fa-circle-play setplayitem2"></i>
            </div>
            <!-- Thẻ div 2 -->
            <div class="sub-item">
              <img src="../assets/video/video-item3.png" alt="" />
              <i class="fa-regular fa-circle-play setplayitem2"></i>
            </div>
            <!-- Thẻ div 3 -->
            <div class="sub-item">
              <img src="../assets/video/video-item4.png" alt="" />
              <i class="fa-regular fa-circle-play setplayitem2"></i>
            </div>
          </div>
        </div>
      </section>
      <!-- architecture -->
      <section class="architecture-section">
        <div class="architecture-picture">
          <img src="../assets/architecture/architecture-picture.png" alt="" />
        </div>
        <div class="architecture-container">
          <div class="architecture-section-title">
            <h2>kiến thức</h2>
            <img src="../assets/news/news-icon.png" alt="News Icon" />
          </div>
          <div class="architecture-slide">
            <div class="architecture-slide-item">
              <h3>NGÀY QUỐC TẾ NGƯỜI CAO TUỔI 1-10-2023</h3>
              <p>
                Năm 2023, ngày Quốc tế Người cao tuổi rơi vào Chủ nhật với chủ
                đề là “Gia đình và xã hội hãy tạo điều kiện để người cao tuổi
                sống vui, sống khỏe, sống có ích”. Chủ đề này nhằm đẩy mạnh
                tuyên truyền, xóa bỏ những định kiến trong việc chăm sóc sức
                khỏe người lớn tuổi tại các cơ sở tập trung, đồng thời nâng cao
                nhận thức việc chăm sóc sức khỏe, phụng dưỡng người cao tuổi,
                không xem người cao tuổi là gánh nặng.
              </p>
            </div>
            <div class="architecture-slide-item">
              <h3>NGÀY QUỐC TẾ NGƯỜI CAO TUỔI 1-10-2023</h3>
              <p>
                Năm 2023, ngày Quốc tế Người cao tuổi rơi vào Chủ nhật với chủ
                đề là “Gia đình và xã hội hãy tạo điều kiện để người cao tuổi
                sống vui, sống khỏe, sống có ích”. Chủ đề này nhằm đẩy mạnh
                tuyên truyền, xóa bỏ những định kiến trong việc chăm sóc sức
                khỏe người lớn tuổi tại các cơ sở tập trung, đồng thời nâng cao
                nhận thức việc chăm sóc sức khỏe, phụng dưỡng người cao tuổi,
                không xem người cao tuổi là gánh nặng.
              </p>
            </div>
            <div class="architecture-slide-item">
              <h3>NGÀY QUỐC TẾ NGƯỜI CAO TUỔI 1-10-2023</h3>
              <p>
                Năm 2023, ngày Quốc tế Người cao tuổi rơi vào Chủ nhật với chủ
                đề là “Gia đình và xã hội hãy tạo điều kiện để người cao tuổi
                sống vui, sống khỏe, sống có ích”. Chủ đề này nhằm đẩy mạnh
                tuyên truyền, xóa bỏ những định kiến trong việc chăm sóc sức
                khỏe người lớn tuổi tại các cơ sở tập trung, đồng thời nâng cao
                nhận thức việc chăm sóc sức khỏe, phụng dưỡng người cao tuổi,
                không xem người cao tuổi là gánh nặng.
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- health -->
      <section class="health-section">
        <div class="health-section-title">
          <h2>sức khoẻ thuờng thức</h2>
          <img src="../assets/news/news-icon.png" alt="News Icon" />
        </div>
        <div class="health-container">
          <div class="health-group">
            <div class="health-item_img">
              <img
                src="../assets/health/health-1.png"
                alt=""
                class="health-item1"
              />
              <div class="health-img_title">
                <h3>THUỐC LÁ CÓ TÁC HẠI NGHIÊM TRỌNG SỨC KHỎE CON NGƯỜI</h3>
                <p>
                  Ở nước ta, mỗi năm có khoảng 40.000 người tử vong vì các bệnh
                  có liên quan đến thuốc lá và 33 triệu người không hút thuốc bị
                  ảnh hưởng do hít khói thuốc thụ động. Khói thuốc lá gây ra
                  nhiều bệnh mãn tính như tim mạch, đột quỵ, bệnh phổi, loãng
                  xương... và có thể gây ung thư với mọi cơ quan trong cơ thể
                  của bạn: phổi, bàng quang, máu, cổ tử cung, đại tràng, thực
                  quản, thận, vòm họng, gan, tụy, dạ dày.
                </p>
                <img
                  src="../assets/icon-muitenxuong-while.png"
                  alt=""
                  class="icon-health"
                />
              </div>
            </div>

            <div class="health-item_img">
              <img src="../assets/health/health-2.png" alt="" />
            </div>
          </div>

          <div class="health-group">
            <div class="health-item_img">
              <img src="../assets/health/health-3.png" alt="" />
            </div>
            <div class="health-item_img">
              <img src="../assets/health/health-4.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <!-- kindness -->
      <section class="kindness-section">
        <div class="health-section-title">
          <h2>sức khoẻ thuờng thức</h2>
          <img src="../assets/news/news-icon.png" alt="News Icon" />
        </div>
        <div class="kindness-container">
          <!-- First Card -->
          <div class="kindness-card">
            <img src="../assets/kindness/kindness1.png" alt="Image 1" />
            <div class="kindness-card-content">
              <h3>Tủ áo quần từ thiện - “Sưởi ấm” bệnh nhân nghèo</h3>
              <p>
                Vận động quyên góp trong cán bộ công nhân viên, các nhà hảo tâm
                ở các nơi những bộ quần áo cũ giúp đỡ người nhà và bệnh nhân
                nghèo vượt qua những lúc khó khăn.
              </p>
            </div>
          </div>

          <!-- Second Card -->
          <div class="kindness-card">
            <img src="../assets/kindness/kindness2.png" alt="Image 2" />
            <div class="kindness-card-content">
              <h3>
                Gia đình Mẹ Trần Thị Liên - Bé Đào Văn Quân trân thành cảm ơn
              </h3>
              <p>
                Các nhà hảo tâm đang công tác tại Bệnh viện đa khoa tỉnh Kon Tum
                và các nhà hảo tâm đang sinh sống và làm việc trong và ngoài
                tỉnh Kon Tum và bạn Bùi Xuân Thành.
              </p>
            </div>
          </div>

          <!-- Third Card -->
          <div class="kindness-card">
            <img src="../assets/kindness/kindness3.png" alt="Image 3" />
            <div class="kindness-card-content">
              <h3>Thư kêu gọi quyên góp ủng hộ bé Đào Văn Quân</h3>
              <p>
                Thư kêu gọi quyên góp ủng hộ bé Đào Văn Quân - mẹ Trần Thị Liên
                hiện công tác tại khoa Ngoại Tổng hợp - Bệnh viện đa khoa tỉnh
                Kon Tum.
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- gratitude -->
      <section class="gratitude-section">
        <div class="health-section-title">
          <h2>góc tri ân</h2>
          <img src="../assets/news/news-icon-while.png" alt="News Icon" />
        </div>

        <div class="gratitude-container">
          <!-- First Card -->
          <div class="gratitude-card">
            <div class="gratitude-text">
              <img src="../assets/gratitude/quote.png" alt="Quote Icon" />
              <p>
                Kính tặng Y Bác sĩ Khoa Nội Tổng hợp Bệnh viện đa khoa tỉnh Kon
                Tum.
              </p>
            </div>
            <div class="gratitude-info">
              <img
                src="../assets/gratitude/gratitude1.png"
                alt="Nguyễn Ngọc Liên"
              />
              <div class="gratitude-person">
                <h3>Bệnh nhân suyễn</h3>
                <p>Nguyễn Ngọc Liên</p>
              </div>
              <img
                src="../assets/icon-muitenxuong.png"
                alt="Arrow Icon"
                class="icon-health"
              />
            </div>
          </div>

          <!-- Second Card -->
          <div class="gratitude-card">
            <div class="gratitude-text">
              <img src="../assets/gratitude/quote.png" alt="Quote Icon" />
              <p>
                Chúng tôi là gia đình bệnh nhân Trương Thị Kim Anh khoa sản xin
                được gửi lời tri ân tới các bác sĩ khám bệnh điều trị,...
              </p>
            </div>
            <div class="gratitude-info">
              <img
                src="../assets/gratitude/gratitude2.png"
                alt="Phan Thái Nguyễn"
              />
              <div class="gratitude-person">
                <h3>Chồng bệnh nhân</h3>
                <p>Phan Thái Nguyễn</p>
              </div>
              <img
                src="../assets/icon-muitenxuong.png"
                alt="Arrow Icon"
                class="icon-health"
              />
            </div>
          </div>

          <!-- Third Card -->
          <div class="gratitude-card">
            <div class="gratitude-text">
              <img src="../assets/gratitude/quote.png" alt="Quote Icon" />
              <p>
                Kính tặng Y Bác sĩ Khoa Nội Tổng hợp Bệnh viện đa khoa tỉnh Kon
                Tum.
              </p>
            </div>
            <div class="gratitude-info">
              <img
                src="../assets/gratitude/gratitude1.png"
                alt="Nguyễn Ngọc Liên"
              />
              <div class="gratitude-person">
                <h3>Bệnh nhân suyễn</h3>
                <p>Nguyễn Ngọc Liên</p>
              </div>
              <img
                src="../assets/icon-muitenxuong.png"
                alt="Arrow Icon"
                class="icon-health"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    <FooterVue />
  </div>
</template>

<script>
import headerVue from "@/components/headerWeb.vue";
// import ModalHome from "@/components/ModalHome.vue";
import $ from "jquery";
import "slick-carousel";
import FooterVue from "@/components/footerVue.vue";
export default {
  name: "HomeView",
  components: { headerVue, FooterVue },
  data() {
    return {
      newsList: [
        {
          imageSrc: require("../assets/news/news-image1.png"),
          day: "24",
          monthYear: "07/2024",
          title: "Yêu cầu báo giá vật tư y tế",
        },
        {
          imageSrc: require("../assets/news/news-image2.png"),
          day: "24",
          monthYear: "07/2024",
          title: "Yêu cầu báo giá hóa chất sinh phẩm",
        },
        {
          imageSrc: require("../assets/news/news-image3.png"),
          day: "24",
          monthYear: "07/2024",
          title: "Yêu cầu báo giá thuốc",
        },
        {
          imageSrc: require("../assets/news/news-image4.png"),
          day: "18",
          monthYear: "06/2024",
          title: "Thực hiện công tác cải cách hành chính Nhà nước bệnh viện",
        },
      ],
      works: [
        {
          img: require("../assets/work/Untitled-12.png"),
          title: "MỔ ĐẺ THÀNH CÔNG CHO SẢN PHỤ SINH 3",
          description: "",
        },
        {
          img: require("../assets/work/Untitled-12.png"),
          title: "MỔ ĐẺ THÀNH CÔNG CHO SẢN PHỤ SINH 3",
          description: "",
        },
        {
          img: require("../assets/work/Untitled-13.png"),
          title: "LIÊN TIẾP 3 TRẺ EM NHẬP VIỆN DO NGỘ ĐỘC CHẤT TẨY RỬA",
          description:
            "Chỉ trong vòng chưa đầy 01 tuần, Bệnh viện đa khoa tỉnh Kon Tum đã tiếp nhận điều trị, cấp cứu cho ba bệnh nhi nhập viện do ngộ độc chất tẩy rửa, trong đó một bé đã tử vong.",
        },
        {
          img: require("../assets/work/Untitled-14.png"),
          title:
            "PHẪU THUẬT DỊ DẠNG LỒNG NGƯC BỞI CÁC BÁC SĨ BỆNH VIỆN ĐẠI HỌC Y DƯỢC TP HỒ CHÍ MINH",
          description: "",
        },
      ],
      service: [
        {
          img: require("../assets/service/service1.png"),
        },
        {
          img: require("../assets/service/service2.png"),
        },
        {
          img: require("../assets/service/service3.png"),
        },
        {
          img: require("../assets/service/service4.png"),
        },
        {
          img: require("../assets/service/service5.png"),
        },
        {
          img: require("../assets/service/service6.png"),
        },
        {
          img: require("../assets/service/service7.png"),
        },
        {
          img: require("../assets/service/service8.png"),
        },
        {
          img: require("../assets/service/service9.png"),
        },
      ],
    };
  },
  mounted() {
    $(".content-slide").slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: "linear",
      nextArrow:
        "<button type='button' class='slick-next pull-right setcontentbuttonslide'><i class='fas fa-chevron-left'></i></button>",
    });
    $(".architecture-slide").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });

    this.$nextTick(() => {
      // Khởi tạo Slick sau khi DOM đã render
      $(".center").slick({
        infinite: true,
        centerMode: true,
        // centerMode: true,
        centerPadding: "0",
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
        prevArrow:
          "<button type='button' class='slick-prev pull-left setWorkbutton'><i class='fas fa-chevron-left'></i></button>",
        nextArrow:
          "<button type='button' class='slick-next pull-right setWorkbutton'><i class='fas fa-chevron-right'></i></button>",
      });
    });
  },
};
</script>
<style scoped lang="scss">
$cololFull: #00a651;
.architecture-picture {
  position: relative;
}
img.slide-image {
  height: 593px;
  width: 100%;
  object-fit: cover;
}
::v-deep .slick-prev:before {
  content: "←";
  font-size: 40px;
  color: $cololFull;
}
::v-deep .slick-next:before {
  content: "←";
  font-size: 40px;
  color: $cololFull;
}
::v-deep .slick-next {
  transform: rotate(180deg);
}
::v-deep .slick-dots {
  bottom: 24px !important;
}
::v-deep .slick-slide {
  transition: all 0.3s ease-in-out; // Hiệu ứng chuyển đổi mượt mà khi chuyển slide
}

::v-deep .slick-center {
  transform: scale(1.3); // Phóng to slide ở giữa (tăng 20%)
  z-index: 2; // Đảm bảo rằng slide ở giữa nằm trên các slide khác
  height: 100px;
}

::v-deep .slick-slide:not(.slick-center) {
  opacity: 0.7; // Giảm độ mờ của các slide bên cạnh
  margin: 40px 0;
  height: 300px; // Chiều cao ban đầu của các slide bên cạnh
}
::v-deep .setcontentbuttonslide {
  display: none !important;
}
::v-deep .setWorkbutton {
  top: 36% !important;
  z-index: 1;
}
::v-deep .setslide {
  height: 560px !important;
}
// card
.card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 145px;

  .card {
    gap: 15px;
    background-color: $cololFull;
    padding: 20px;
    width: 303px;
    color: #fff;
    text-align: center;
    position: relative;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    height: 100%;
    .icon {
      font-size: 40px;
      margin-bottom: 15px;
    }

    h3 {
      font-size: 16px;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      margin-bottom: 20px;
    }

    a {
      position: absolute;
      bottom: 10px;
      right: 10px;
      color: #fff;
      font-size: 24px;
      text-decoration: none;
    }
  }
  .icon-box {
    text-align: justify;
  }
  .card-white {
    color: #000;
    padding: 20px;
    width: 303px;
    text-align: center;
    position: relative;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    height: 100%;
    display: flex;
    gap: 15px;
    align-items: center;
    a {
      position: absolute;
      bottom: 10px;
      right: 10px;
      color: #fff;
      font-size: 24px;
      text-decoration: none;
    }
    h3 {
      font-size: 16px;
      margin-bottom: 10px;
      color: $cololFull;
    }

    p {
      font-size: 14px;
      margin-bottom: 20px;
      color: #9ca0a2;
    }
  }
}
// news
.news-section {
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  .news-section-title {
    text-align: center;
    margin-bottom: 50px;
    margin-top: 100px;
  }
  h2 {
    font-size: 34px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .news-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  .news-card {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 8px;
    img {
      object-fit: cover;
      width: 100%;
      height: 225px;
      border-radius: 8px 8px 0px 0;
    }
    .news-info {
      display: flex;
      margin-top: -5px;
      .news-date {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: $cololFull;
        color: #fff;
        padding: 12px;
        border-radius: 0 0 0px 8px;
        .day {
          font-size: 34px;
        }
        .month-year {
          font-size: 20px;
        }
        .day + .month-year {
          border-top: 1px solid #fff;
        }
      }
      .news-title {
        font-size: 18px;
        padding: 25px;
      }
    }
  }
}
// work
.work-section {
  background: url("../assets/work/background-work.png");
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 140px;
  .news-section-title {
    text-align: center;
    padding-bottom: 50px;
    h2 {
      font-size: 34px;
      text-transform: uppercase;
    }
  }
  .work-container {
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    padding-bottom: 120px;
    .work-slide {
      padding: 0 30px;
      img {
        width: 100%;
        height: 265px;
        object-fit: cover;
      }
    }
  }
}
// service
.service-section {
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  .service-section-title {
    text-align: center;
    margin-bottom: 50px;
    margin-top: 25px;
    h2 {
      font-size: 34px;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
  }
  .service-container {
    display: flex;
    gap: 20px;
    flex-direction: column;
  }
  .group-1 {
    display: flex;
    gap: 20px;
    .service-item {
      text-align: center;
      padding: 25px;
      border: 1px solid green;
      width: calc(100% / 5);
      border-radius: 7px;
      p {
        text-transform: uppercase;
        padding-top: 25px;
      }
    }
  }
  .group-2 {
    display: flex;
    gap: 20px;
    justify-content: center;
    .service-item {
      text-align: center;
      padding: 25px;
      border: 1px solid green;
      width: calc(100% / 5);
      border-radius: 7px;
      p {
        text-transform: uppercase;
        padding-top: 25px;
      }
    }
  }
}
// video
section.video-section {
  background: url("../assets/video/video-backgroud.png");
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 140px;

  .video-section-title {
    text-align: center;
    padding: 50px 0;
    h2 {
      font-size: 34px;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
  }
  .video-container {
    display: flex;
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    gap: 34px;
    padding-bottom: 100px;
    img {
      border-radius: 7px;
    }
    .video-item.video-item-1 {
      position: relative;
      width: 80%;
      img {
        width: 100%;
        height: 100%;
      }
      p {
        font-weight: bold;
        padding-top: 15px;
      }
      i.fa-regular.fa-circle-play.setPlayItem1 {
        position: absolute;
        left: 10px;
        bottom: 13px;
        font-size: 37px;
        color: #fff;
      }
    }
    .video-item.video-item-2 {
      width: 25%;
      display: flex;
      gap: 25px;
      flex-direction: column;
      .sub-item {
        width: 100%;
        position: relative;
        img {
          width: 100%;
        }
        i.fa-regular.fa-circle-play.setplayitem2 {
          position: absolute;
          left: 10px;
          bottom: 13px;
          font-size: 37px;
          color: #fff;
        }
      }
    }
  }
}
//
section.architecture-section {
  display: flex;
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  gap: 36px;
  margin-top: 105px;
  .architecture-picture {
    width: 50%;
    position: relative;
    img {
      width: 100%;
      border-radius: 30px 0px 30px 0px;
      position: relative;
    }
  }
  .architecture-picture::before {
    content: "";
    position: absolute;
    top: -23px;
    right: 22px;
    bottom: 0;
    left: -22px;
    border: 2px solid #00a14b;
    border-radius: 30px 0 0 0;
    z-index: 0;
    transform: translate(5px, 5px);
    height: 76%;
  }
  .architecture-container {
    width: 47%;
    .architecture-section-title {
      text-align: center;
      margin-bottom: 50px;
      h2 {
        font-size: 34px;
        text-transform: uppercase;
        margin-bottom: 20px;
      }
    }
    .architecture-slide {
      border: 1px solid $cololFull;
      height: 45%;
      border-radius: 0px 30px 0 30px;
      .architecture-slide-item {
        padding: 0 50px;
        p {
          margin-top: 20px;
          font-size: 14px;
        }
      }
    }
  }
}
.health-section-title {
  text-align: center;
  margin-bottom: 50px;
  h2 {
    margin-bottom: 20px;
    text-transform: uppercase;
  }
}
//
.health-container {
  display: flex;
  gap: 20px;
  margin: 0 30px;
  .health-group {
    display: flex;
    gap: 25px;
  }
  .health-item_img {
    width: calc(100% - 20px / 4);
    position: relative;
    img {
      width: 100%;
      height: 481px;
    }
    .health-img_title {
      position: absolute;
      height: 81%;
      width: 82%;
      top: 0;
      margin: 40px;
      background: rgb(3 211 74 / 50%);
      padding: 40px;
      color: #fff;
      h3 {
        font-size: 18px;
      }
      p {
        font-size: 14px;
      }
    }
  }
}
.icon-health {
  width: 21px !important;
  height: auto !important;
  position: absolute;
  right: 28px;
  bottom: 37px;
}
// kindness
.kindness-section {
  width: 1200px;
  max-width: 100%;
  margin: 120px auto;
  .kindness-container {
    display: flex;
    gap: 25px;
    .kindness-card {
      height: fit-content;
      width: calc(100% / 3);
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      border-radius: 8px;
      img {
        width: 100%;
        height: 230px;
        object-fit: cover;
        border-radius: 8px 8px 0px 0;
      }
      .kindness-card-content {
        padding: 25px;
        height: 180px;
        p {
          margin-top: 15px;
          font-size: 14px;
        }
      }
    }
  }
}
//gratitude
.gratitude-section {
  background: url("../assets/gratitude/backgrond.png");
  background-size: cover;
  background-repeat: no-repeat;
  .health-section-title {
    padding-top: 50px;
    h2 {
      color: #fff;
      font-size: 34px;
    }
  }
  .gratitude-container {
    display: flex;
    gap: 25px;
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    padding: 50px 0;
    .gratitude-card {
      height: 240px;
      padding: 25px;
      background-color: #fff;
      width: calc(100% / 3);
      border-radius: 0 30px 0 30px;
      .gratitude-text {
        display: flex;
        align-items: flex-start;
        gap: 5px;
        height: 60%;
        p {
          margin-top: 33px;
          color: $cololFull;
        }
      }
      .gratitude-info {
        display: flex;
        gap: 10px;
        position: relative;
        img {
          width: 71px;
          height: 63px;
          border-radius: 55%;
          object-fit: cover;
        }
        .icon-health {
          right: 0;
          bottom: 0;
        }
      }
    }
  }
}

// reponsive
@media (max-width: 480px) {
}
@media (max-width: 576px) {
  .news-section {
    padding: 10px;
    .news-container[data-v-9ea40744] {
      grid-template-columns: 1fr;
    }
  }
  .work-container[data-v-9ea40744] {
    width: 86%;
  }
  .architecture-section {
    width: 90% !important;
    align-items: flex-end;
    margin: 105px auto !important;
    .architecture-picture[data-v-9ea40744]::before {
      height: 95%;
    }
    .architecture-section-title[data-v-9ea40744] {
      text-align: center;
      margin-bottom: 15px;
    }
  }
  .service-section {
    padding: 10px;
  }
  .video-section {
    padding: 10px;
  }
  .health-container[data-v-9ea40744] {
    display: flex;
    gap: 20px;
    margin: 0 30px;
    flex-direction: column;
  }
  .gratitude-container[data-v-9ea40744] {
    display: flex;
    gap: 25px;
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    padding: 50px 10px;
  }
  .kindness-container[data-v-9ea40744] {
    padding: 10px;
    flex-direction: column;
    .kindness-card {
      height: auto;
      width: 100%;
      .kindness-card-content[data-v-9ea40744] {
        height: 100%;
      }
    }
  }
  .card-container {
    height: auto;
    .card[data-v-9ea40744] {
      height: auto;
    }
    .card-white {
      height: auto;
    }
  }
  .gratitude-container[data-v-9ea40744][data-v-9ea40744] {
    gap: 15px;
    flex-direction: column;
    .gratitude-card[data-v-9ea40744] {
      height: 249px !important;
      width: 100%;
      .icon-health[data-v-9ea40744] {
        right: 0;
        bottom: -30px;
      }
    }
  }
  .service-section .group-1[data-v-9ea40744] {
    flex-direction: column;
    .service-item[data-v-9ea40744] {
      width: 100%;
    }
  }
  .service-section .group-2[data-v-9ea40744] {
    flex-direction: column;
    .service-item[data-v-9ea40744] {
      width: 100%;
    }
  }
  .video-container[data-v-9ea40744] {
    display: flex;
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    gap: 34px;
    padding-bottom: 100px;
    flex-direction: column;
    .video-item-1[data-v-9ea40744] {
      position: relative;
      width: 100% !important;
      .setPlayItem1[data-v-9ea40744] {
        bottom: 67px !important;
      }
    }
    .video-item-2[data-v-9ea40744] {
      width: 100% !important;
    }
  }
  section.architecture-section[data-v-9ea40744] {
    flex-direction: column-reverse;
    .architecture-container[data-v-9ea40744] {
      width: 100%;
    }
    .architecture-picture[data-v-9ea40744] {
      width: 95% !important;
    }
  }
  .health-container .health-group[data-v-9ea40744] {
    display: flex;
    gap: 25px;
    flex-direction: column;
  }
  section.architecture-section
    .architecture-container
    .architecture-slide[data-v-9ea40744] {
    border: 1px solid #00a651;
    height: 45%;
    border-radius: 0px 30px 0 30px;
    width: 96%;
  }
  .iconSMS[data-v-d17866ea] {
    right: -1px !important;
  }
  .icon-up[data-v-d17866ea] {
    right: 23px !important;
  }
  ::v-deep .slick-slide:not(.slick-center) {
    opacity: 0.7;
    margin: 40px 0;
    height: auto;
  }
}
@media (min-width: 577px) and (max-width: 768px) {
  .news-section {
    padding: 10px;
  }
  .work-container[data-v-9ea40744] {
    width: 90%;
  }
  .architecture-section {
    width: 90% !important;
    align-items: flex-end;
    margin: 105px auto !important;
    .architecture-picture[data-v-9ea40744]::before {
      height: 95%;
    }
    .architecture-section-title[data-v-9ea40744] {
      text-align: center;
      margin-bottom: 15px;
    }
  }
  .service-section {
    padding: 10px;
  }
  .video-section {
    padding: 10px;
  }
  .health-container[data-v-9ea40744] {
    display: flex;
    gap: 20px;
    margin: 0 30px;
    flex-direction: column;
  }
  .gratitude-container[data-v-9ea40744] {
    display: flex;
    gap: 25px;
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    padding: 50px 10px;
  }
  .kindness-container[data-v-9ea40744] {
    padding: 10px;
    .kindness-card {
      height: auto;
      .kindness-card-content[data-v-9ea40744] {
        height: 100%;
      }
    }
  }
  .card-container {
    height: auto;
    .card[data-v-9ea40744] {
      height: auto;
    }
    .card-white {
      height: auto;
    }
  }
  .gratitude-container[data-v-9ea40744][data-v-9ea40744] {
    gap: 15px;

    .gratitude-card[data-v-9ea40744] {
      height: 345px !important;
      .icon-health[data-v-9ea40744] {
        right: 0;
        bottom: -30px;
      }
    }
  }
  ::v-deep .slick-slide:not(.slick-center) {
    opacity: 0.7;
    margin: 40px 0;
    height: auto;
  }
}
@media (min-width: 769px) and (max-width: 992px) {
  .news-section {
    padding: 10px;
  }
  .work-container[data-v-9ea40744] {
    width: 90%;
  }
  .architecture-section {
    width: 90% !important;
    align-items: flex-end;
    margin: 105px auto !important;
    .architecture-picture[data-v-9ea40744]::before {
      height: 95%;
    }
    .architecture-section-title[data-v-9ea40744] {
      text-align: center;
      margin-bottom: 15px;
    }
  }
  .service-section {
    padding: 10px;
  }
  .video-section {
    padding: 10px;
  }
  .health-container[data-v-9ea40744] {
    display: flex;
    gap: 20px;
    margin: 0 30px;
    flex-direction: column;
  }
  .gratitude-container[data-v-9ea40744] {
    display: flex;
    gap: 25px;
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    padding: 50px 10px;
  }
  .kindness-container[data-v-9ea40744] {
    padding: 10px;
    .kindness-card {
      height: auto;
      .kindness-card-content[data-v-9ea40744] {
        height: 100%;
      }
    }
  }
  .card-container {
    height: auto;
    .card[data-v-9ea40744] {
      height: auto;
    }
    .card-white {
      height: auto;
    }
  }
  .gratitude-container[data-v-9ea40744][data-v-9ea40744] {
    gap: 15px;

    .gratitude-card[data-v-9ea40744] {
      height: 345px !important;
      .icon-health[data-v-9ea40744] {
        right: 0;
        bottom: -30px;
      }
    }
  }
  ::v-deep .slick-slide:not(.slick-center) {
    opacity: 0.7;
    margin: 40px 0;
    height: auto;
  }
}
@media (min-width: 993px) and (max-width: 1200px) {
  .news-section {
    padding: 10px;
    .news-section-title[data-v-9ea40744] {
      margin-top: 200px;
    }
  }
  .work-section[data-v-9ea40744] {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  .architecture-section {
    width: 90% !important;
    align-items: flex-end;
    margin: 105px auto !important;
    .architecture-picture[data-v-9ea40744]::before {
      height: 95%;
    }
    .architecture-section-title[data-v-9ea40744] {
      text-align: center;
      margin-bottom: 15px;
    }
  }
  .service-section {
    padding: 10px;
  }
  .video-section {
    padding: 10px;
  }
  .health-container[data-v-9ea40744] {
    display: flex;
    gap: 20px;
    margin: 0 30px;
    flex-direction: column;
  }
  .gratitude-container[data-v-9ea40744] {
    display: flex;
    gap: 25px;
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    padding: 50px 10px;
  }
  .kindness-container[data-v-9ea40744] {
    padding: 10px;
  }
  ::v-deep .slick-slide:not(.slick-center) {
    opacity: 0.7;
    margin: 40px 0;
    height: auto;
  }
}
@media (min-width: 1201px) and (max-width: 1540px) {
  .news-section .news-section-title[data-v-9ea40744] {
    margin-top: 200px;
  }
}
@media (min-width: 1528px) {
}
</style>
