<template>
  <div class="contact">
    <header-web />
    <background-navigation
      title="Liên Hệ"
      :backgroundImage="require('@/assets/Action/actionNavibackground.png')"
    />
    <div class="contact-container">
      <div class="contact-info">
        <div class="info-card">
          <div class="icon">
            <img src="../assets/contact/icon1.png" alt="" />
          </div>
          <h3>Địa Chỉ</h3>
          <p>224 Bà Triệu, Phường Quang Trung, TP Kon Tum</p>
        </div>
        <div class="info-card">
          <div class="icon">
            <img src="../assets/contact/icon2.png" alt="" />
          </div>
          <h3>Điện Thoại</h3>
          <p>060.3862573</p>
        </div>
        <div class="info-card">
          <div class="icon">
            <img src="../assets/contact/icon3.png" alt="" />
          </div>
          <h3>Fax</h3>
          <p>060.3862573</p>
        </div>
        <div class="info-card">
          <div class="icon">
            <img src="../assets/contact/icon4.png" alt="" />
          </div>
          <h3>Mail</h3>
          <p>BenhviendakhoaKonTum@gmail.com</p>
        </div>
      </div>
      <div class="contact-box">
        <div class="map-container">
          <!-- You can embed a Google Map here -->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.231936732168!2d107.99599417579459!3d14.355984983017306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316bff09880b7e61%3A0xfd1cb1ac7a6f054c!2zQuG7h25oIHZp4buHbiDEkGEga2hvYSB04buJbmggS29uIFR1bQ!5e0!3m2!1svi!2s!4v1728725666653!5m2!1svi!2s"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="form-container">
          <h2>LIÊN HỆ VỚI CHÚNG TÔI</h2>
          <form>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Họ tên"
            />

            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email"
            />

            <textarea
              id="message"
              name="message"
              required
              placeholder="Nội dung"
            ></textarea>

            <button type="submit">GỬI YÊU CẦU</button>
          </form>
        </div>
      </div>
    </div>
    <footerVue />
  </div>
</template>

<script>
import BackgroundNavigation from "../components/backgroundNavigation.vue";
import headerWeb from "../components/headerWeb.vue";
import footerVue from "@/components/footerVue.vue";
export default {
  components: { headerWeb, BackgroundNavigation, footerVue },
};
</script>

<style lang="scss" scoped>
$primary-color: #28a745;
textarea#message {
  height: 187px;
}
.contact-info {
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  gap: 25px;
  .info-card {
    flex: 1;
    text-align: center;
    padding: 40px;
    border-radius: 8px;
    transition: transform 0.2s;
    background-color: #f8f9fa;
    width: calc(100% / 4);
    word-wrap: break-word;
    &:hover {
      transform: scale(1.05);
    }

    .icon {
      font-size: 40px;
      color: $primary-color; // Using the same primary color defined earlier
      margin-bottom: 10px;
      img {
        width: 75px;
      }
    }

    h3 {
      margin: 10px 0;
      font-size: 18px;
    }

    p {
      font-size: 16px;
      margin: 0;
    }
  }
}

.contact-container {
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
}
.contact-box {
  display: flex;
  margin: 50px 0;
  .map-container {
    flex: 1;
    border-right: 1px solid #ccc;
  }

  .form-container {
    flex: 1;
    padding: 20px 50px;
    background-color: #f7f9fb;

    h2 {
      text-align: center;
      margin-bottom: 20px;
    }

    label {
      display: block;
      margin-bottom: 5px;
    }

    input,
    textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button {
      width: 100%;
      padding: 10px;
      background-color: $primary-color;
      border: none;
      color: white;
      font-size: 16px;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: darken($primary-color, 10%);
      }
    }
  }
}
@media (max-width: 480px) {
  .contact-container[data-v-24a1d1ea] {
    padding: 0 10px;
  }
  .contact-info[data-v-24a1d1ea] {
    flex-direction: column;
    .info-card[data-v-24a1d1ea] {
      width: 100%;
    }
  }
  .contact-box .map-container[data-v-24a1d1ea] {
    text-align: center;
  }
  iframe {
    width: 100%;
  }
  .contact-box[data-v-24a1d1ea] {
    flex-direction: column;
  }
}
@media (max-width: 576px) {
  .contact-container[data-v-24a1d1ea] {
    padding: 0 10px;
  }
  .contact-info[data-v-24a1d1ea] {
    flex-direction: column;
    .info-card[data-v-24a1d1ea] {
      width: 100%;
    }
  }
  .contact-box .map-container[data-v-24a1d1ea] {
    text-align: center;
  }
  iframe {
    width: 100%;
  }
  .contact-box[data-v-24a1d1ea] {
    flex-direction: column;
  }
}
@media (min-width: 577px) and (max-width: 768px) {
  .contact-container[data-v-24a1d1ea] {
    padding: 0 10px;
  }
  .contact-box .map-container[data-v-24a1d1ea] {
    text-align: center;
  }
  iframe {
    width: 100%;
  }
}
@media (min-width: 769px) and (max-width: 992px) {
  .contact-container[data-v-24a1d1ea] {
    padding: 0 10px;
  }
  .contact-box .map-container[data-v-24a1d1ea] {
    text-align: center;
  }
  iframe {
    width: 100%;
  }
}

@media (min-width: 993px) and (max-width: 1200px) {
  .contact-container[data-v-24a1d1ea] {
    padding: 0 10px;
  }
}
@media (min-width: 1201px) and (max-width: 1540px) {
}
@media (min-width: 1528px) {
}
</style>
