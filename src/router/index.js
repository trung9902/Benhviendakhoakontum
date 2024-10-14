import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import actionBv from "@/views/actionBv.vue";
import NewsDetail from "../views/actionDetail.vue";
import appointmentSchedule from "@/views/appointment-schedule.vue";
import listDoctor from "@/views/listDoctor.vue";
// import test from "@/views/testWeb.vue";
import doctorDetail from "@/views/doctorDetail.vue";
import question from "@/views/questionBv.vue";
import questionDetail from "@/views/questionDetail.vue";
import contactBv from "@/views/contactBv.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/action",
    name: "actionBv",
    component: actionBv,
  },
  {
    path: "/action/detail",
    name: "detail",
    component: NewsDetail,
    props: {
      title: "Hoạt động",
      title1: "Chỉ đạo tuyến",
    },
  },
  {
    path: "/appointment",
    name: "appointment",
    component: appointmentSchedule,
  },
  {
    path: "/listDoctor",
    name: "listDoctor",
    component: listDoctor,
  },
  {
    path: "/listDoctor/listDoctorDetail",
    name: "listDoctorDetail",
    component: doctorDetail,
  },
  {
    path: "/question",
    name: "questionBv",
    component: question,
  },
  {
    path: "/DetailQuestion",
    name: "DetailQuestion",
    component: questionDetail,
  },
  {
    path: "/contactBv",
    name: "contactBv",
    component: contactBv,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
