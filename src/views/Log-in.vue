<template>
    <div class="flex items-center min-h-screen p-4 bg-[url('../assets/farm.webp')] bg-cover bg-center bg-no-repeat lg:justify-center">
      <div
        class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
      >
        <div
          class="p-4 py-6 text-white bg-myGreen md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
        >
          <div class="my-3 text-4xl font-bold tracking-wider text-center">
            <a href="#">ÇA POTAGE</a>
          </div>
          <p class="mt-6 font-normal text-center text-gray-300 md:mt-0">
            Votre marché à portée de main !
            Avec ÇA POTAGE, achetez et vendez tous les produits dont votre potager a besoin !
          </p>
          <p class="flex flex-col items-center justify-center mt-10 text-center">
            <span><router-link to="/signin">Pas de compte ?</router-link></span>
          </p>
          <p class="mt-6 text-sm text-center text-gray-300">
            Lisez nos <a href="#" class="underline">conditions générales</a>
          </p>
        </div>
        <div class="p-5 bg-white md:flex-1">
          <h3 class="my-4 text-2xl font-semibold text-gray-700">Connectez-vous</h3>
          <form action="#" class="flex flex-col space-y-5">
            <div class="flex flex-col space-y-1">
              <label for="email" class="text-sm font-semibold text-gray-500">Adresse Email</label>
              <input
                type="email"
                id="email"
                autofocus
                placeholder="Exemple : monadressemail@gmail.com"
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div class="flex flex-col space-y-1">
              <div class="flex items-center justify-between">
                <label for="password" class="text-sm font-semibold text-gray-500">Mot de passe</label>
                <p v-if="errorMessage">{{ errorMessage }}</p>
              </div>
              <input
                type="password"
                id="password"
                placeholder="**********"
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div class="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
              />
              <label for="remember" class="text-sm font-semibold text-gray-500">Remember me</label>
            </div>
            <div>
              <button
                type="submit"
                @click="login"
                class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-myGreen rounded-md shadow hover:bg-white focus:outline-none focus:ring-blue-200 focus:ring-4 hover:text-myGreen"
              >
                Se connecter
              </button>
            </div>
            <div class="flex flex-col space-y-5">
              <span class="flex items-center justify-center space-x-2">
                <span class="h-px bg-gray-400 w-14"></span>
                <span class="font-normal text-gray-500">se connecter avec</span>
                <span class="h-px bg-gray-400 w-14"></span>
              </span>
              <div class="flex flex-col space-y-4">
                <a
                  href="#"
                  class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                >
                  <span class="flex">
                    <span class="text-sm text-gray-500 pr-1">Connexion avec </span>
                    <img src="../assets/google_logo.webp" class="h-6"/>
                  </span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>
    
<script setup lang="ts">
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

const email = ref("");
const password = ref("");
const errorMessage = ref()
const router = useRouter()

const login = () => {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
  .then(() => {
    console.log("Connexion réussie !");
    console.log(auth.currentUser);
    router.push({ name: 'log-in' });
  })
  .catch((error) => {
    console.log(error.code);
    switch (error.code) {
      case "auth/invalid-email":
      errorMessage.value = "Email invalide";
      break;
      case "auth/user-not-found":
      errorMessage.value = "Aucun compte trouvé avec l'Email associé";
      break;
      case "auth/wrong-password":
      errorMessage.value = "Mot de passe incorrect";
      break;
      default:
      case "Email ou mot de passe incorrect":
      break;
    }
    alert(error.message)
  })
}
</script>

<script lang="ts">
export default {
  name: "Log-in",
}
</script>