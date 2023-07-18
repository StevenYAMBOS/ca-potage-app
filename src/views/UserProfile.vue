<template>  
    <header :class="{'scrolled-nav': scrollNav}" class="bg-myDarkGrey z-50  w-full fixed transition duration-[0.5s] ease-all text-white font-sans">
        <nav class="flex py-5 px-0.5 transition duration-[0.5s] ease-all w-full">
            <div class="flex items-center ml-4">
                <img src="../assets/logo1.webp" alt="Logo Ça potage"
                    class="w-14 rounded-xl transition duration-[0.5s] ease-all cursor-pointer" />
            </div>
            <ul class="flex items-center flex-1 justify-end" v-show="!mobile" id="navigation">
                <li class="p-4"><router-link id="link" :to="{ name: '' }"><i
                            class="flex text-center flex-col fa-solid fa-message text-2xl transition duration-[0.5s] ease-all pb-1 text-myGreen"></i>Message</router-link>
                </li>
                <li class="p-4"><router-link id="link" :to="{ name: '' }"><i
                            class="flex text-center flex-col fa-solid fa-user text-2xl transition duration-[0.5s] ease-all pb-1 text-myGreen"></i>Se déconnecter</router-link>
                </li>
            </ul>
            <div class="flex items-center absolute top-0 right-6 h-full">
                <i @click="toggleMobileNav" v-show="mobile" class="fa-solid fa-bars cursor-pointer transition-transform rotate-180" :class="{ 'icon-active': mobileNav }"></i>
            </div>
            <transition name="mobile-nav">
                <ul class="flex flex-col fixed w-full h-full bg-myLightGrey top-0 left-0 text-white" v-show="mobileNav" id="dropdown-nav">
                <li class="px-8 py-8 flex"><router-link id="link" :to="{ name: '' }"><i
                            class="fa-solid fa-message text-2xl text-myGreen transition duration-[0.5s] ease-all pb-1 pr-2"></i>Message</router-link>
                </li>
                <li class="px-8 py-8 flex">
                  <router-link id="link" :to="{ name: '' }">
                    <i
                    @click="handleSignOut"
                    v-if="isLoggedIn"
                    class="fa-solid fa-user text-2xl text-myGreen transition duration-[0.5s] ease-all pb-1 pr-2"></i>Se déconnecter</router-link>
                </li>
            </ul>
            </transition>
        </nav>
    </header>

    <div class="flex items-center justify-center h-screen">
      <div class="w-1/2 h-1/2 flex flex-col items-center gap-y-10">
        <img class="w-52 h-52 rounded-full" src="../assets/farm.jpg" alt="Image utilisateur">
        <p class="mt-4 text-xl font-bold">Nom d'utilisateur</p>
        <button
                type="submit"
                class="w-50 px-4 py-2 text-lg text-black transition-colors duration-300 bg-white rounded-md shadow focus:outline-none focus:ring-blue-200 focus:ring-4 hover:text-myGreen"
              >
                Modifier le profile
              </button>
      </div>
    </div>


  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { getAuth, onAuthStateChanged, signOut, type Auth } from 'firebase/auth';
  import router from '@/router';
  
  const isLoggedIn = ref(false);
  let auth: Auth;
  
  onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      isLoggedIn.value = !!user;
    });
  });
  
  const handleSignOut = () => {
    signOut(auth).then(() => {
      router.push('/login');
    });
  };
  </script>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'UserProfile',
    data() {
      return {
        scrollNav: null as null | number,
        mobile: true,
        mobileNav: null as null | boolean,
        windowWidth: null as null | number,
      };
    },
    created() {
      window.addEventListener('resize', this.checkScreen);
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
  