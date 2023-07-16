<template>
    <header :class="{'scrolled-nav': scrollNav}" class="bg-myGreen z-50  w-full fixed transition duration-[0.5s] ease-all text-white font-sans">
        <nav class="flex py-5 px-0.5 transition duration-[0.5s] ease-all w-full">
            <div class="flex items-center ml-4">
                <img src="../assets/logo1.webp" alt="Logo Ça potage"
                    class="w-14 rounded-xl transition duration-[0.5s] ease-all cursor-pointer" />
            </div>
            <ul class="flex items-center flex-1 justify-end" v-show="!mobile" id="navigation">
                <li class="p-4"><router-link id="link" :to="{ name: '' }"><i
                            class="fa-solid fa-message text-2xl transition duration-[0.5s] ease-all pb-1"></i></router-link>
                </li>
                <li class="p-4"><router-link id="link" :to="{ name: '' }"><i
                            class="fa-solid fa-user text-2xl transition duration-[0.5s] ease-all pb-1"></i></router-link>
                </li>
            </ul>
            <div class="flex items-center absolute top-0 right-6 h-full">
                <i @click="toggleMobileNav" v-show="mobile" class="fa-solid fa-bars cursor-pointer transition-transform rotate-180" :class="{ 'icon-active': mobileNav }"></i>
            </div>
            <transition name="mobile-nav">
                <ul class="flex flex-col fixed w-full h-full bg-white top-0 left-0 text-myGreen" v-show="mobileNav" id="dropdown-nav">
                <li class="p-4"><router-link id="link" :to="{ name: '' }"><i
                            class="fa-solid fa-message text-2xl transition duration-[0.5s] ease-all pb-1"></i></router-link>
                </li>
                <li class="p-4"><router-link id="link" :to="{ name: '' }"><i
                            class="fa-solid fa-user text-2xl transition duration-[0.5s] ease-all pb-1"></i></router-link>
                </li>
            </ul>
            </transition>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar',
  data() {
    return {
      scrollNav: null as null | number,
      mobile: true,
      mobileNav: null as null | boolean,
      windowWidth: null as null | number,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNav(): void {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen(): void {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth && this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
});

</script>