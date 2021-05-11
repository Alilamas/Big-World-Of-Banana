<template>
  <div class="home" id="home">
    <div class="glass_bg1"></div>
    <div class="glass_bg2"></div>
    <div class="home_glass">
      <nav>
        <div class="logo">
          <div class="logo-img">
            <p>这里应该有一张logo的，但是没找到</p>
          </div>
          <p id="BananaWrold" title="asd">Banana wrold</p>
        </div>
        <div class="menu">
          <ul>
            <li v-for="(item, index) in routerList" :key="index">
              <router-link :to="{ name: item.router }">{{
                item.name
              }}</router-link>
            </li>
          </ul>
          <div class="contact">
            <svg
              t="1609734527866"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1132"
              width="26"
              height="26"
            >
              <path
                d="M831 229H193c-50.729 0-92 41.271-92 92v444c0 50.729 41.271 92 92 92h638c50.729 0 92-41.271 92-92V321c0-50.729-41.271-92-92-92z m-638 56h638c13.537 0 25.348 7.514 31.495 18.587L531.456 634.625c-14.037 14.035-36.875 14.035-50.912 0L158.097 312.178C162.042 296.579 176.193 285 193 285z m638 516H193c-19.851 0-36-16.149-36-36V390.276l283.946 283.947c17.936 17.936 41.495 26.903 65.054 26.903 23.56 0 47.118-8.968 65.054-26.903L867 378.276V765c0 19.851-16.149 36-36 36z"
                p-id="1133"
                fill="#ffffff"
              ></path>
            </svg>
            <div class="wLine"></div>
            <p>Contact</p>
          </div>
        </div>
      </nav>

      <div class="main">
        <div class="m_welcome">😝 <span>We are all bananas</span></div>
        <h1 class="m_title">
          It's not just a website, This is Csser's <br />big party
        </h1>
        <p class="m_additional"></p>
        <div class="welcome_message"></div>
        <div class="m_jion">
          <div class="jion1">
            <p class="nohover">How to contact me?</p>
            <p class="hover">怎么联系上我？</p>
          </div>
          <div class="jion2">双手举过头顶 🤗</div>
          <div class="jion3">然后心里默念"Banana 🍌!"</div>
          <div class="jion4">我也不会告诉你 😎</div>
        </div>
        <MyLink class="m_link"></MyLink>
        <H2021 class="hello2021" />
      </div>
    </div>
  </div>
</template>
<script>
import H2021 from "./h2021";
import MyLink from "./myLink";
export default {
  components: {
    H2021,
    MyLink,
  },
  data() {
    return {
      routerList: [
        {
          name: "bASIC",
          router: "basic",
        },
        {
          name: "dESIGN",
          router: "design",
        },
        {
          name: "pOSTER",
          router: "poster",
        },
        {
          name: "fUN",
          router: "fun",
        },
        {
          name: "uSED",
          router: "usedHome",
        },
        {
          name: "dAILY",
          router: "daily",
        }
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.home {
  background: linear-gradient(to bottom right, #19193b, #171726);
  height: 100vh;
  overflow: hidden;
  position: relative;
  .glass_bg1 {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 35vw;
    height: 18vw;
    border-radius: 10px;
    background: linear-gradient(to right, #fc47de, #00d9ff);
    box-shadow: 15px -15px 20vw 0px #00d9ff, 0px 0px 6vw 0px #fc47de;
  }
  .glass_bg2 {
    position: fixed;
    bottom: -16vw;
    right: -8vw;
    width: 30vw;
    height: 28vw;
    border-radius: 50%;
    background: -webkit-radial-gradient(#cc58b977, #00d9ff55);
    box-shadow: 0 0 40vw 3vw #00d9ff66;
  }
}
.home_glass {
  width: 100%;
  height: 100%;
  backdrop-filter: blur(40px);
  background: -webkit-linear-gradient(
    left top,
    rgba(45, 45, 61, 0.4),
    rgba(45, 45, 61, 0.1)
  );
}
nav {
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  padding: 0 5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    height: 100%;
    display: flex;
    align-items: center;
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='32' height='38' viewport='0 0 100 100' style='fill:black;font-size:19px;'><text y='50%'>🍌</text></svg>")
        16 0,
      auto; /*!emojicursor.app*/
  }
  .logo {
    transform: translateX(-72px);
    transition: ease-in-out all 0.25s;
    &:hover {
      transform: translateX(0px);
      transition: ease-in-out all 0.5s;
      .logo-img {
        opacity: 1;
        margin-right: 20px;
        transition: ease-in-out all 0.5s;
      }
    }
  }
  .logo-img {
    display: flex;
    min-width: 50px;
    max-width: 50px;
    max-height: 50px;
    align-items: center;
    overflow: hidden;
    border-radius: 50%;
    background: #fff;
    margin-right: 0px;
    opacity: 0;
    transition: ease-in-out all 0.25s;
    p {
      font-size: 12px;
      transform: scale(0.65);
      text-align: center;
      color: #ffffff;
    }
  }
  #BananaWrold {
    font-size: 30px;
    color: #ffffffee;
    font-family: "Pacifico";
  }
}
.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  color: #ffffffdd;
  ul {
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 30vw;
    li {
      margin-right: 80px;
      a {
        color: #ffffffdd;
        transition: all 0.15s;
      }
      &:hover {
        a {
          color: #fff;
          transition: all 0.3s;
        }
      }
    }
  }
}
.contact {
  display: flex;
  align-items: center;
  background: #3d3d585e;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  padding: 6px 23px;
  backdrop-filter: blur(6px);
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  transition: all 0.15s;
  .wLine {
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0)
    );
    // background: rgba(255, 255, 255, 0.4);
    width: 1px;
    height: 25px;
    margin: 0 15px;
  }
  &:hover {
    transition: all 0.3s;
    background: #3d3d58;
  }
}

.main {
  width: 100vw;
  padding: 8vw;
  position: relative;
  color: #fff;
}
.m_welcome {
  font-size: 18px;
  margin-bottom: 20px;
  span {
    font-style: italic;
  }
}
.m_title {
  width: 750px;
  font-size: 60px;
  line-height: 120px;
  margin-bottom: 40px;
}
.m_jion {
  display:inline-block;
  color: #fff;
  height: 240px;
  position: relative;
  div {
    width: 200px;
    height: 65px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    transform: translate(0, 0);
    transition: all 0.5s;
  }
  .jion1 {
    background: rgb(0, 195, 255);
    cursor: pointer;
    z-index: 10;
    p {
      position: absolute;
      transition: all 0.5s;
    }
    .nohover {
      opacity: 1;
    }
    .hover {
      opacity: 0;
    }
  }
  .jion2 {
    background: transparent;
    z-index: 9;
  }
  .jion3 {
    background: transparent;
    z-index: 8;
  }
  .jion4 {
    background: transparent;
    z-index: 7;
  }
  &:hover {
    .jion1 {
      transform: translate(-35px, -25px);
      transition: all 0.5s;
      p {
        transition: all 0.5s;
      }
    }
    .nohover {
      opacity: 0;
    }
    .hover {
      opacity: 1;
    }
    .jion2 {
      transform: translate(35px, 25px);
      background: #34a853;
      transition: all 0.5s;
    }
    .jion3 {
      transform: translate(35px, 25px);
      animation: jion3 2s 1 forwards;
      transition: all 0.5s;
    }
    .jion4 {
      transform: translate(35px, 25px);
      animation: jion4 2s 1 forwards;
      transition: all 0.5s;
    }
    @keyframes jion3 {
      0% {
        transform: translate(0, 0);
      }
      25% {
        transform: translate(35px, 25px);
      }
      35% {
        transform: translate(35px, 25px);
      }
      50% {
        transform: translate(105px, 70px);
        background: #fbbc05;
      }
      100% {
        transform: translate(105px, 70px);
        background: #fbbc05;
      }
    }
    @keyframes jion4 {
      0% {
        transform: translate(0, 0);
      }
      25% {
        transform: translate(35px, 25px);
      }
      35% {
        transform: translate(35px, 25px);
      }
      50% {
        transform: translate(105px, 70px);
      }
      80% {
        transform: translate(105px, 70px);
      }
      95% {
        transform: translate(175px, 120px);
        background: #ea4335;
      }
      100% {
        transform: translate(175px, 120px);
        background: #ea4335;
      }
    }
  }
}

.m_link {
  position: fixed;
  left: 8vw;
  bottom: 8vh;
}

.hello2021 {
  position: fixed;
  right: 10px;
  bottom: 8vh;
}
</style>