<template>
  <div id="webpPageDetails">
    <!-- haveFUN麒麟计划-ID卡-->
    <div v-if="id == 'haveFUN'" id="haveFUN">
      <h1>GO, BANANA AND HAVE FUN!</h1>
      <div class="mask mask1"></div>
      <div class="mask mask2"></div>
      <div class="mask mask3"></div>
    </div>
    <!-- hello！2021-->
    <div v-if="id == 2021" id="hello2021">
      <h1>Hello,<span>2021 & kylin</span></h1>
      <div>
        <p>1</p>
        <h5>Banana</h5>
        <img src="/static/webpPage/kylin-w.png" />
      </div>
    </div>
    <!-- bszh-->
    <div v-if="id == 'bszh'" id="bszh">
      <div class="card">
        <div class="main">
          <h1>傻<span>+</span></h1>
          <div class="line1"></div>
          <div class="line2"></div>
          <img src="/static/webpPage/bszh.png" />
        </div>
        <h5>不说簪花</h5>
          <p id="BananaWrold" title="asd">Banana wrold</p>
      </div>
    </div>
    <!-- 麒麟-参会证 -->
    <div v-if="id == 1" id="workCard">
      <div class="card">
        <div class="shadow"></div>
        <div class="hole"></div>
        <div class="top">
          <h5>kylin</h5>
          <p>1st Cross-Border</p>
          <p>E-Commerce Summit 2020</p>
          <p>26. - 27. December</p>
        </div>
        <div class="bottom">
          <p class="position">Lecturer</p>
          <p class="remarks">Hongyu Education</p>
          <div class="logo">
            <p>hy.gm</p>
            <img src="/static/webpPage/kylin-b.png" />
          </div>
        </div>
      </div>
      <div class="card">
        <div class="shadow"></div>
        <div class="hole"></div>
        <div class="top">
          <h5>kylin</h5>
          <p>1st Cross-Border</p>
          <p>E-Commerce Summit 2020</p>
          <p>26. - 27. December</p>
        </div>
        <div class="bottom">
          <p class="position">Speaker</p>
          <p class="remarks">GMDIGITAL</p>
          <div class="logo">
            <p>VIP</p>
            <img src="/static/webpPage/kylin-w.png" />
          </div>
        </div>
      </div>
      <div class="card">
        <div class="shadow"></div>
        <div class="hole"></div>
        <div class="top">
          <h5>kylin</h5>
          <p>1st Cross-Border</p>
          <p>E-Commerce Summit 2020</p>
          <p>26. - 27. December</p>
        </div>
        <div class="bottom">
          <p class="position">Engineer</p>
          <p class="remarks">R&D Department</p>
          <div class="logo">
            <p>ky.gm</p>
            <img src="/static/webpPage/kylin-b.png" />
          </div>
        </div>
      </div>
    </div>

    <!-- 麒麟计划-ID卡-->
    <div v-if="id == 2" id="kylinCard">
      <h1>KylinPlan ID Card</h1>
      <div class="card">
        <div class="top">
          <p>ID card</p>
          <img src="/static/webpPage/kylin-w.png" />
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

    <!-- 名片 -->
    <div v-if="id == 'bc1'" id="bc1">
      <div class="card">
        <div></div>
        <div></div>
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
// #webpPageDetails {
// }

@import "./css/haveFUN.scss"; //  haveFUN
@import "./css/hello2021.scss"; //  hello2021
@import "./css/bszh.scss"; //  不说簪花
@import "./css/1.scss"; //  麒麟-参会证 workCard
@import "./css/2.scss"; //  麒麟计划-ID卡 kylinCard
@import "./css/business-card.scss"; //  麒麟计划-ID卡 kylinCard
</style>