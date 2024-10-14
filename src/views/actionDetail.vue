<template>
  <div class="actionDetail">
    <header-web />
    <ul class="navigation__list">
      <li class="navigation__item">
        <a href="" class="navigation__link">Trang chủ</a>
      </li>
      <li class="navigation__item">
        <a href="" class="navigation__link">{{ title }}</a>
      </li>
      <li class="navigation__item" v-show="title1">
        <a href="" class="navigation__link">{{ title1 }} </a>
      </li>
    </ul>
    <div class="detail-container content-container">
      <ActionDetail_content />
      <Content_action2 />
    </div>
    <div class="sameCategory">
      <h2>tin cùng chuyên mục</h2>
      <div class="sameCategory-list">
        <div
          class="sameCategory-item"
          v-for="(item, index) in listNewCategary"
          :key="index"
        >
          <img :src="item.img" alt="" />
          <h3>{{ item.title }}</h3>
        </div>
      </div>
    </div>
    <footer-vue />
  </div>
</template>

<script>
import ActionDetail_content from "../components/actionDetail_content.vue";
import Content_action2 from "../components/content_action2.vue";
import FooterVue from "../components/footerVue.vue";
import headerWeb from "../components/headerWeb.vue";
export default {
  data() {
    return {
      listNewCategary: [
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
  props: {
    title: String,
    title1: String,
  },
  components: { headerWeb, Content_action2, ActionDetail_content, FooterVue },
};
</script>

<style scoped lang="scss">
ul.navigation__list {
  padding-top: 168px;
}
.navigation__list {
  width: 1200px;
  max-width: 100%;
  margin: 0px auto;
  display: flex;
  .navigation__item {
    list-style-type: none;
    a {
      color: #000;
    }
  }

  .navigation__item + .navigation__item::before {
    content: ">";
    padding: 5px;
  }
}
@media (max-width: 480px) {
  ul.navigation__list[data-v-2c72787e] {
    padding-top: 170px;
  }
  .detail-container {
    padding: 10px;
    .content-item2 {
      width: 100%;
    }
  }
  .sameCategory[data-v-2c72787e] {
    padding: 10px;
  }
  .detail-container[data-v-2c72787e] {
    gap: 24px;
  }
  .actionDetail_content[data-v-96eef41e] {
    width: 100%;
  }
  .detail-container[data-v-2c72787e] {
    flex-direction: column;
  }
  .sameCategory-list[data-v-2c72787e] {
    grid-template-columns: 1fr !important;
  }
}
@media (max-width: 576px) {
  ul.navigation__list[data-v-2c72787e] {
    padding-top: 170px;
  }
  .detail-container {
    padding: 10px;
    .content-item2 {
      width: 100%;
    }
  }
  .sameCategory[data-v-2c72787e] {
    padding: 10px;
  }
  .detail-container[data-v-2c72787e] {
    gap: 24px;
  }
  .actionDetail_content[data-v-96eef41e] {
    width: 100%;
  }
  .detail-container[data-v-2c72787e] {
    flex-direction: column;
  }
  .sameCategory-list[data-v-2c72787e] {
    grid-template-columns: 1fr !important;
  }
}
@media (min-width: 577px) and (max-width: 768px) {
  ul.navigation__list[data-v-2c72787e] {
    padding-top: 220px;
  }
  .detail-container {
    padding: 10px;
  }
  .sameCategory[data-v-2c72787e] {
    padding: 10px;
  }
  .detail-container[data-v-2c72787e] {
    gap: 24px;
  }
}
@media (min-width: 769px) and (max-width: 992px) {
  ul.navigation__list[data-v-2c72787e] {
    padding-top: 220px;
    // padding: 0 10px;
  }
  .detail-container {
    padding: 10px;
  }
  .sameCategory[data-v-2c72787e] {
    padding: 10px;
  }
  .detail-container[data-v-2c72787e] {
    gap: 24px;
  }
}
@media (min-width: 993px) and (max-width: 1200px) {
  ul.navigation__list[data-v-2c72787e] {
    padding-top: 220px;
  }
  .detail-container {
    padding: 10px;
  }
  .sameCategory[data-v-2c72787e] {
    padding: 10px;
  }
}
.detail-container {
  padding-top: 10px;
  display: flex;
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  gap: 46px;
}
.sameCategory {
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  h2 {
    border-bottom: 4px solid #03a753;
    width: fit-content;
    margin: 50px 0;
    padding-bottom: 5px;
    font-weight: 400;
    text-transform: uppercase;
  }
  .sameCategory-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 25px;
    .sameCategory-item {
      img {
        width: 100%;
        height: 230px;
        border-radius: 10px;
      }
    }
  }
}
.activity-share-button {
  border: none;
  padding: 7px 14px;
  border-radius: 30px;
  background-color: #03a753;
}
</style>
