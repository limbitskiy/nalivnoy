<script>
export default {
  name: "TheSettings",
  data() {
    return {
      showGeneralSettings: false,
      submenuOpen: false,
      showNavOptions: false,
      showHeroOptions: false,
      showFooterOptions: false,
      font: this.$store.state.config.font,
      colors: this.$store.state.config.colors,
      navAlign: this.$store.state.config.navAlign,
      navGap: this.$store.state.config.navGap,
      heroImage: this.$store.state.config.heroImage,
      heroText: this.$store.state.config.heroText,
      heroTextColor: this.$store.state.config.heroTextColor,
      footerImage: this.$store.state.config.footerImage,
    };
  },
  methods: {
    openSubMenu(menu) {
      this.showGeneralSettings = false;
      this.submenuOpen = true;
      this[menu] = true;
    },
    multiFunctionBtn() {
      if (!this.showGeneralSettings && !this.submenuOpen) {
        this.showGeneralSettings = true;
        return;
      }
      if (this.showGeneralSettings && !this.submenuOpen) {
        this.showGeneralSettings = false;
        return;
      }
      if (!this.showGeneralSettings && this.submenuOpen) {
        this.closeSubmenus();
        this.showGeneralSettings = true;
        return;
      }
    },
    closeSubmenus() {
      this.showNavOptions = false;
      this.showHeroOptions = false;
      this.submenuOpen = false;
      this.showFooterOptions = false;
    },
    saveCurrentOption(prop) {
      const value = this[prop];
      this.$store.commit("updateConfig", { prop, value });
    },
    exportOptions() {
      console.log("exporting");
      fetch("saveOptions.php", {
        method: "post",
        body: JSON.stringify(this.$store.state.config),
      });
    },
  },
  emits: ["toggleShowSettings"],
};
</script>

<template>
  <div class="overlay">
    <div
      class="settings-btn"
      @click="multiFunctionBtn()"
      :class="{ pressed: this.showGeneralSettings || this.submenuOpen }"
    >
      <i class="fas fa-cogs"></i>
    </div>

    <transition name="pop-in" mode="out-in">
      <FloatingMenu v-if="showGeneralSettings">
        <div class="general-settings">
          <div class="nav" @click="openSubMenu('showNavOptions')">
            Навигация
          </div>
          <div class="hero" @click="openSubMenu('showHeroOptions')">Баннер</div>
          <!-- <div class="cat">Каталог</div>
      <div class="abt">О нас</div>
      <div class="whyus">Преимущества</div> -->
          <div class="foot" @click="openSubMenu('showFooterOptions')">
            Подвал
          </div>
        </div>
      </FloatingMenu>
    </transition>

    <transition name="pop-in" mode="out-in">
      <FloatingMenu v-if="showNavOptions">
        <div class="options nav-options">
          <p class="option-group-title">Опции навигации:</p>
          <ul class="option-group">
            <li class="option">
              <input
                type="radio"
                id="left"
                value="flex-left"
                v-model="navAlign"
                @change="saveCurrentOption('navAlign')"
              />
              <label for="left">Слева</label>
            </li>
            <li class="option">
              <input
                type="radio"
                id="right"
                value="flex-end"
                v-model="navAlign"
                @change="saveCurrentOption('navAlign')"
              />
              <label for="right">Справа</label>
            </li>
            <li class="option">
              <input
                type="radio"
                id="justify"
                value="space-between"
                v-model="navAlign"
                @change="saveCurrentOption('navAlign')"
              />
              <label for="justify">Равномерно</label>
            </li>
            <li class="option">
              <input
                type="radio"
                id="center"
                value="center"
                v-model="navAlign"
                @change="saveCurrentOption('navAlign')"
              />
              <label for="center">По центру</label>
            </li>
          </ul>
          <p class="option-group-title">Промежуток между пунктами меню(rem):</p>
          <div class="option">
            <input
              type="range"
              id="navGap"
              max="30"
              v-model="navGap"
              @input="saveCurrentOption('navGap')"
            />
          </div>
        </div>
      </FloatingMenu>
    </transition>

    <transition name="pop-in" mode="out-in">
      <FloatingMenu v-if="showHeroOptions">
        <div class="options hero-options">
          <p class="option-group-title">Баннер:</p>
          <ul class="option-group">
            <li class="option vertical">
              <label>Изображение баннера:</label>
              <input
                id="heroImage"
                v-model="heroImage"
                @change="saveCurrentOption('heroImage')"
              />
            </li>
            <li class="option vertical">
              <label>Текст баннера:</label>
              <textarea
                id="heroText"
                v-model="heroText"
                @change="saveCurrentOption('heroText')"
                rows="4"
              />
            </li>
            <li class="option vertical">
              <label>Цвет текста баннера:</label>
              <input
                id="heroTextColor"
                v-model="heroTextColor"
                @change="saveCurrentOption('heroTextColor')"
              />
            </li>
          </ul>
        </div>
      </FloatingMenu>
    </transition>

    <transition name="pop-in" mode="out-in">
      <FloatingMenu v-if="showFooterOptions">
        <div class="options footer-options">
          <p class="option-group-title">Подвал:</p>
          <ul class="option-group">
            <li class="option vertical">
              <label>Изображение подвала:</label>
              <input
                id="footerImage"
                v-model="footerImage"
                @change="saveCurrentOption('footerImage')"
              />
            </li>
          </ul>
        </div>
      </FloatingMenu>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.settings-btn {
  position: fixed;
  right: 0.5rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  background-color: #4d4d4d;
  color: #fff;
  width: 3rem;
  height: 3rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  font-size: var(--font-size-15);
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &.pressed {
    background-color: white;
    color: #222;
  }
}

.general-settings {
  display: grid;
  grid-template-rows: repeat(3, 50px);
  gap: 0.5rem;
  width: 12rem;

  * {
    border-radius: 5px;
    display: grid;
    place-items: center;
    cursor: pointer;

    &:hover {
      color: white;
      background-color: var(--accent-color1);
    }

    &:active,
    &:focus {
      background-color: white;
    }
  }
}

.options {
  width: 15rem;

  .option-group-title {
    margin-block: 1rem;
  }

  .option-group {
    padding: 5px;
  }

  .option {
    display: flex;
    gap: 0.3rem;

    &.vertical {
      flex-direction: column;
    }
  }
}

.pop-in-enter-active {
  animation: pop-in 0.2s;
}

.pop-in-leave-active {
  animation: pop-in 0.2s reverse;
}

@keyframes pop-in {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}
</style>