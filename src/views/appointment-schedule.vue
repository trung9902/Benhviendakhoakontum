<template>
  <div class="appointment-schedule">
    <header-web />
    <div class="modal"></div>
    <background-navigation
      title="lịch khám bệnh"
      :backgroundImage="require('@/assets/Action/actionNavibackground.png')"
    />
    <!-- Table for medical appointment schedule -->
    <div class="schedule-table">
      <table>
        <tr>
          <th>Phòng Khám</th>
          <th>Bác Sĩ</th>
          <th>Lịch Khám</th>
        </tr>
        <template
          v-for="(department, deptIndex) in scheduleData"
          :key="deptIndex"
        >
          <tr>
            <td :rowspan="department.doctors.length">
              {{ department.department }}
            </td>
            <td>{{ department.doctors[0].name }}</td>
            <td>{{ department.doctors[0].schedule }}</td>
          </tr>
          <template
            v-for="(doctor, index) in department.doctors.slice(1)"
            :key="index"
          >
            <tr>
              <td>{{ doctor.name }}</td>
              <td>{{ doctor.schedule }}</td>
            </tr>
          </template>
        </template>
      </table>
      <div class="param-number">
        <li class="actice">1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
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
    return {
      scheduleData: [
        {
          department: "Khoa Mắt",
          doctors: [
            {
              name: "BS. Trần Thị Anh Nhung",
              schedule: "Thứ 2 - Thứ 6: Sáng: 7h00-11h00, Chiều: 1h-5h",
            },
            {
              name: "BS.CKI. Lê Ánh Quốc",
              schedule: "Thứ 2 - Thứ 6: Sáng: 7h00-11h00, Chiều: 1h-5h",
            },
            {
              name: "BS.CKI. Tô Vi Thảo",
              schedule: "Thứ 2 - Thứ 6: Chiều: 1h-5h",
            },
            {
              name: "BS.CKI. Đặng Nữ Phương Tâm",
              schedule: "Thứ 2 - Thứ 6: Sáng: 7h00-11h00",
            },
          ],
        },
        {
          department: "Khoa Tai - Mũi - Họng",
          doctors: [
            {
              name: "BS.CKI. Phạm Thị Thu Trang",
              schedule: "Thứ 2 - Thứ 6: Sáng: 7h00-11h00, Chiều: 1h-5h",
            },
            {
              name: "BS. Ngô Văn Minh",
              schedule: "Thứ 2 - Thứ 6: Sáng: 7h00-11h00",
            },
            {
              name: "BS.CKI. Lê Thị Mộng Thu",
              schedule: "Thứ 2 - Thứ 6: Sáng: 7h00-11h00",
            },
            {
              name: "BS.CKI. Trương Thị Kiều Oanh",
              schedule: "Thứ 2 - Thứ 6: Chiều: 1h-5h",
            },
          ],
        },
        {
          department: "Khoa Răng - Hàm - Mặt",
          doctors: [
            {
              name: "BS. Trần Hoàng Vũ",
              schedule: "Thứ 2 - Thứ 6: Sáng: 7h00-11h00, Chiều: 1h-5h",
            },
            {
              name: "ThS.BS. Nguyễn Ngọc Diệu",
              schedule: "Thứ 2 - Thứ 6: Sáng: 7h00-11h00",
            },
            {
              name: "ThS.BS. Nguyễn Ngọc Diệu",
              schedule: "Thứ 2 - Thứ 6: Sáng: 7h00-11h00",
            },
            {
              name: "BS. Vũ Kim Quang",
              schedule: "Thứ 2 - Thứ 6: Chiều: 1h-5h",
            },
          ],
        },
        {
          department: "Khoa Lão học",
          doctors: [
            {
              name: "BS. Nguyễn Thị Nữ",
              schedule: "Thứ 2 - Thứ 6: Sáng: 7h00-11h00",
            },
            {
              name: "BS. Hoàng Ngọc Anh Kiên",
              schedule: "Thứ 2 - Thứ 6: Chiều: 1h-5h",
            },
            {
              name: "BS. Lê Thị Bình",
              schedule: "Thứ 2 - Thứ 6: Sáng: 7h00-11h00",
            },
            {
              name: "BS. Đỗ Thị Giang",
              schedule: "Thứ 2 - Thứ 6: Chiều: 1h-5h",
            },
            {
              name: "BS.CKI. Hà Thị Huyền",
              schedule: "Thứ 2 - Thứ 6: Sáng: 7h00-11h00",
            },
          ],
        },
        {
          department: "Khoa Thẩm định chức năng & nội soi",
          doctors: [
            {
              name: "BS.CKI. Võ Ngọc Hải",
              schedule: "Thứ 2 - Thứ 6: Sáng: 7h00-11h00",
            },
            {
              name: "BS.CKI. Lê Văn Khánh",
              schedule: "Thứ 2 - Thứ 6: Chiều: 1h-5h",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$cololFull: #00a651;
.backgroundNavigation-box {
  padding-top: 208px;
}
.schedule-table {
  margin: 20px auto;
  width: 1200px;
  border-collapse: collapse;
  max-width: 100%;
}

.schedule-table table {
  width: 100%;
  border: 1px solid #ccc;
  border-collapse: collapse;
}

.schedule-table th,
.schedule-table td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}

.schedule-table th {
  background-color: $cololFull;
  color: #333;
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
  .schedule-table[data-v-0cfc5d9f] {
    padding: 0 10px;
  }
}
@media (max-width: 576px) {
  .schedule-table[data-v-0cfc5d9f] {
    padding: 0 10px;
  }
}
@media (min-width: 577px) and (max-width: 768px) {
  .schedule-table[data-v-0cfc5d9f] {
    padding: 0 10px;
  }
}
@media (min-width: 769px) and (max-width: 992px) {
  .schedule-table[data-v-0cfc5d9f] {
    padding: 0 10px;
  }
}
@media (min-width: 993px) and (max-width: 1200px) {
  .schedule-table[data-v-0cfc5d9f] {
    padding: 0 10px;
  }
}
@media (min-width: 1201px) and (max-width: 1540px) {
}
@media (min-width: 1528px) {
}
</style>
