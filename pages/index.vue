<template>
<div class="container mx-auto bg-gray-50 px-4">
  <header class="">
  <nav class="bg-gray-50 sticky w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Бухгалтерские услуги</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-50 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-50 md:dark:bg-gray-50 dark:border-gray-500">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Услуги</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Прайс</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">О нас</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Контакты</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">+79383116192</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="wrap-promo">
<div class="flex flex-row justify-center mt-5 img-background rounded">

</div>
  
<div class="header-promo-block">
  <div class="flex flex-row justify-center items-center promo-title">
  <h1 class="text-6xl antialiased font-bold tracking-wide">Бухгалтерские услуги</h1>
  <!-- <div class="wrap-img"></div> -->
</div>
</div></div>
</header>
<main class="my-10">
<AdvantagesList />
<ServiceList />
<ServicePrice />
<AboutUs /> 
<ShowLocation />
</main>
<footer class="bg-gray-300">
  <ContactList />
</footer>
</div>
</template>

<script>
import AdvantagesList from '@/components/AdvantagesList';
import ServiceList from '@/components/ServiceList';
import ServicePrice from '@/components/ServicePrice';
import AboutUs from '@/components/AboutUs';
import ShowLocation from '@/components/ShowLocation';
import ContactList from '@/components/ContactList'
export default {
  name: 'IndexPage',
  components : { AdvantagesList, ServiceList, ServicePrice, AboutUs, ShowLocation, ContactList },
}
</script>
<style>
.img-background {
  background-image: url('../assets/buhgalter-header.jpg');
  height:60vh;
  background-repeat: no-repeat;
  background-size: 100rem;
  background-position: bottom;
  opacity: 0.5;
}
.header-promo-block {
  position: absolute;
  top: 0;
  width: 100%; 
  height: 100%;
}
.wrap-promo {
  position: relative;
}
.promo-title {
  height: 100%
}
.wrap-img {
  max-width: 35%;
}
footer {
margin: 0 -16px;
}
</style>