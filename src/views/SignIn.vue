<template >
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
            <span>Déjà un compte ?</span>
          </p>
          <p class="mt-6 text-sm text-center text-gray-300">
            Lisez nos <a href="#" class="underline">conditions générales</a>
          </p>
        </div>
        <div class="p-5 bg-white md:flex-1">
          <h3 class="my-4 text-2xl font-semibold text-gray-700">Inscrivez-vous</h3>
          <form action="#" class="flex flex-col space-y-5">
            <div class="flex flex-col space-y-1">
              <label for="email" class="text-sm font-semibold text-gray-500">Adresse Email</label>
              <input
                type="email"
                id="email"
                autofocus
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div class="flex flex-col space-y-1">
              <div class="flex items-center justify-between">
                <label for="password" class="text-sm font-semibold text-gray-500">Mot de passe</label>
                <a href="#" class="text-sm text-blue-600 hover:underline focus:text-blue-800">Mot de passe oublié ?</a>
              </div>
              <input
                type="password"
                id="password"
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
                class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-myGreen rounded-md shadow hover:bg-white focus:outline-none focus:ring-blue-200 focus:ring-4 hover:text-myGreen"
              >
                S'inscrire
              </button>
            </div>
            <div class="flex flex-col space-y-5">
              <span class="flex items-center justify-center space-x-2">
                <span class="h-px bg-gray-400 w-14"></span>
                <span class="font-normal text-gray-500">s'inscrire avec</span>
                <span class="h-px bg-gray-400 w-14"></span>
              </span>
              <div class="flex flex-col space-y-4">
                <a
                  href="#"
                  class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                >
                  <span class="flex">
                    <span class="text-sm text-gray-500 pr-1">Inscription avec </span>
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
    
<script lang="ts">
export default {

}
</script>