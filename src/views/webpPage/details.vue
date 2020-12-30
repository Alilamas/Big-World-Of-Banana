<template>
  <div id="webpPageDetails">
    <div v-if="id == 1" id="workCard">
      <div class="card">
        <div class="hole"></div>
        <div class="top">
          <h5>kylin</h5>
          <p>1st Cross-Border</p>
          <p>E-Commerce Summit 2020</p>
          <p>26.- 27. December</p>
        </div>
        <div class="bottom">
          <p></p>
          Engineer
          <p>Front End</p>
          <div>
            <p>kylin</p>
            <img src="/static/webpPage/2.png" />
          </div>
        </div>
      </div>
      <div class="card"></div>
      <div class="card"></div>
    </div>
    <div v-if="id == 2" id="kylinCard">
      <h1>KylinPlan ID Card</h1>
      <div class="card">
        <div class="top">
          <p>ID card</p>
          <img src="/static/webpPage/2.png" />
        </div>
        <div class="info">
          <h5>{{ info.name }}</h5>
          <p class="id_num">
            <span v-for="(item, index) in info.idList" :key="index">{{
              item
            }}</span>
          </p>
          <p class="id_department">{{ info.department }}</p>
          <p class="id_day">
            <span>{{ info.day[0] > 10 ? info.day[0] : "0" + info.day[0] }}</span
            ><span>/</span
            ><span>{{
              info.day[1] > 10 ? info.day[1] : "0" + info.day[1]
            }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      info: {
        name: "Banana",
        id: "1227061200000054",
        department: "R&D Department 003",
        day: [4, 1],
        idList: [],
      },
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.slice(this.info.id, 4);
  },
  methods: {
    toRouter(name, id) {
      id
        ? this.$router.push({ name, params: { id } })
        : this.$router.push({ name });
    },
    slice(object, num) {
      let length = object.length;
      console.log(length);
      console.log(num);
      for (let i = 0; i < length / num; i++) {
        this.info.idList[i] = object.slice(i * num, (i + 1) * num);
      }
      console.log(this.info.idList);
    },
  },
};
</script>
<style lang="scss" scoped>
@font-face {
  font-family: "Vidaloka";
  src: url("/tff/Vidaloka-Regular.ttf");
}
@font-face {
  font-family: "KaushanScript";
  src: url("/tff/KaushanScript-Regular.ttf");
}
// #webpPageDetails {
// }

@import "./css/1.scss"; //  工牌 workCard
@import "./css/2.scss"; //  麒麟ID卡 kylinCard
</style>