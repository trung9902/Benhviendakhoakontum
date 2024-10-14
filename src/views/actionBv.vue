<template>
  <div class="action-container">
    <header-web />
    <div class="content-action">
      <backgroundNavigation
        title="hoạt động"
        :backgroundImage="require('@/assets/Action/actionNavibackground.png')"
      />
      <div class="content-container">
        <!-- <content_action /> -->
        <div class="content-item1">
          <div class="content-listNew">
            <router-link to="/action/detail">
              <div class="FeaturedNews">
                <img :src="listNew[0].img" alt="Tin nổi bật" />
                <div class="news-details">
                  <p class="news-date">{{ listNew[0].date }}</p>
                  <h3>{{ listNew[0].title }}</h3>
                  <p>{{ listNew[0].description }}</p>
                </div>
              </div>
            </router-link>
            <router-link to="/action/detail">
              <div
                class="lisNew-Item"
                v-for="(item, index) in listNew.slice(1)"
                :key="index"
              >
                <img :src="item.img" alt="" />
                <div class="news-details">
                  <p class="news-date">{{ item.date }}</p>
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </router-link>
          </div>
          <div class="param-number">
            <li class="actice">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </div>
        </div>
        <Content_action2 />
      </div>
    </div>
    <!-- <footer-vue /> -->
    <footer-vue />
  </div>
</template>

<script>
import backgroundNavigation from "@/components/backgroundNavigation.vue";
import HeaderWeb from "../components/headerWeb.vue";
import FooterVue from "../components/footerVue.vue";
// import ContentAction from "../components/content-action.vue";
import Content_action2 from "../components/content_action2.vue";
export default {
  data() {
    return {
      selectedNews: null,
      listNew: [
        {
          img: require("../assets/Action/news/news-item.png"),
          date: "29/07/2024",
          title:
            "Bệnh viện đa khoa tỉnh Kon Tum tổ chức tọa đàm kỷ niệm 77 năm ngày Thương binh – Liệt sĩ (27/7/1947-27/7/2024)",
          description:
            "Phát huy truyền thống “ Uống nước nhớ nguồn”, “Ăn quả nhớ người trồng cây”, đẩy mạnh các...",
        },
        {
          img: require("../assets/Action/news/news-item1.png"),
          date: "18/07/2024",
          title: "Liên tiếp 3 trẻ em nhập viện do ngộ độc chất tẩy rửa",
          description:
            "Chỉ trong vòng chưa đầy 01 tuần, Bệnh viện đa khoa tỉnh Kon Tum đã tiếp nhận điều trị, cấp cứu cho...F",
        },
        {
          img: require("../assets/Action/news/news-item2.png"),
          date: "18/07/2024",
          title: "Mổ đẻ thành công cho sản phụ sinh ba",
          description:
            "Sản phụ 40 tuổi, ngụ ở xã Đăk Hà, huyện Tu Mơ Rông vừa được các bác sỹ Bệnh viện đa...",
        },
        {
          img: require("../assets/Action/news/news-item3.png"),
          date: "18/07/2024",
          title:
            "Phẫu thuật dị dạng lồng ngực bởi các bác sỹ Bệnh viện Đại học Y dược TP Hồ Chí Minh",
          description:
            "Từ ngày 15 đến 16/7, tại Bệnh viện đa khoa tỉnh Kon Tum, 13 trường hợp dị dạng lồng ngực...",
        },
        {
          img: require("../assets/Action/news/news-item4.png"),
          date: "18/07/2024",
          title: "Lấy người bệnh là trung tâm, tận tụy phục vụ",
          description:
            "Vừa qua, Bệnh viện đa khoa tỉnh Kon Tum đã được công nhận bệnh viện hạng I với quy mô 750 giường theo...",
        },
      ],
    };
  },
  components: {
    backgroundNavigation,
    HeaderWeb,
    FooterVue,
    Content_action2,
  },
};
</script>

<style lang="scss" scoped>
$cololFull: #00a651;
.action-container {
  height: 100%;
}
.content-action {
  padding-top: 160px;
  padding-bottom: 50px;
}
.FeaturedNews {
  display: flex;
  gap: 10px;
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  img {
    width: 70%;
    border-radius: 12px;
  }
}
.content-container {
  display: flex;
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  gap: 46px;
}
.content-item1 {
  width: 70%;
}
.lisNew-Item {
  display: flex;
  gap: 10px;
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
  img {
    width: 40%;
    height: 238px;
    border-radius: 12px;
  }
}
.content-item2 {
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.news-details {
  display: flex;
  flex-direction: column;
  gap: 15px;
  h3 {
    color: #000;
  }
  p {
    color: #000;
  }
  p.news-date {
    display: block;
    width: fit-content;
    padding: 10px;
    background-color: $cololFull;
    color: #fff;
  }
}
.content-item {
  border: 1px solid #2fd6af;
  border-radius: 10px;
  h2 {
    text-align: center;
    padding-top: 20px;
    color: $cololFull;
  }
  .list-item-news {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    .item-new {
      display: flex;
      gap: 10px;
      img {
        width: 46%;
        height: 110px;
        border-radius: 10px;
      }
    }
    .item-new + .item-new {
      border-top: 1px solid #ccc;
      padding-top: 20px;
    }
  }
  .featured-news {
    padding: 20px;

    img {
      width: 100%;
    }
    h3 {
      padding-bottom: 20px;
    }
    .listTexxt_new {
      border-top: 1px solid #ccc;
      padding-top: 20px;
    }
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
@media (max-width: 480px) {
  .content-container[data-v-67176a44] {
    display: flex;
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    gap: 46px;
    padding: 0 10px;
    flex-direction: column;
    .content-item1[data-v-67176a44] {
      width: 100%;
      img {
        object-fit: cover;
      }
    }
    .content-item2[data-v-67176a44] {
      width: 100%;
      img {
        object-fit: cover;
      }
    }
  }
  .param-number[data-v-67176a44] {
    display: flex;
    justify-content: center;
    gap: 9px;
    margin: 10px 0;
  }
}
@media (max-width: 576px) {
  .content-container[data-v-67176a44] {
    display: flex;
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    gap: 46px;
    padding: 0 10px;
    flex-direction: column;
    .content-item1[data-v-67176a44] {
      width: 100%;
      img {
        object-fit: cover;
      }
    }
    .content-item2[data-v-67176a44] {
      width: 100%;
      img {
        object-fit: cover;
      }
    }
  }
  .param-number[data-v-67176a44] {
    display: flex;
    justify-content: center;
    gap: 9px;
    margin: 10px 0;
  }
}
@media (min-width: 577px) and (max-width: 768px) {
  .content-container[data-v-67176a44] {
    display: flex;
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    gap: 46px;
    padding: 0 10px;
  }
}
@media (min-width: 769px) and (max-width: 992px) {
  .content-container[data-v-67176a44] {
    display: flex;
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    gap: 46px;
    padding: 0 10px;
  }
}
@media (min-width: 993px) and (max-width: 1200px) {
  .content-container[data-v-67176a44] {
    display: flex;
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    gap: 46px;
    padding: 0 10px;
  }
}
@media (min-width: 1201px) and (max-width: 1540px) {
}
@media (min-width: 1528px) {
}
</style>
