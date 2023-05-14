<template>
  <nav class="bg-white sticky w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 navigation-bar">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" class="flex items-center">
        <img src="@/assets/svg/buhgalter-stavropol-logo.svg" width="50px" class="h-10 mr-3" alt="Логотип" />
        <span class="self-center text-3xl font-extrabold whitespace-nowrap dark:text-white">Бухгалтерские услуги</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto serif" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-50 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white md:dark:bg-white dark:border-gray-500">
        <li>
          <a href="#about-us" class="block tracking-wide py-2 pl-3 pr-4 text-gray-900 rounded md:bg-transparent md:hover:text-blue-700 md:p-0" @click="setScroll">О нас</a>
        </li>
        <li>
          <a href="#service-list" class="block tracking-wide py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" @click="setScroll">Услуги</a>
        </li>
        <li>
          <a href="#advantages-list" class="block tracking-wide py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" @click="setScroll">Преимущества</a>
        </li>
        <li>
          <a href="#service-price" class="block tracking-wide py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" @click="setScroll">Стоимость услуг</a>
        </li>
        <li>
          <a href="#contact-list" class="block tracking-wide py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" @click="setScroll">Контакты</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default{
name:'NavigationBar',
methods:{
  setScroll(){
    setTimeout(()=>window.scrollBy(0, -this.$el.clientHeight), 10)
  }
}
}
</script>

<style>
li a {
	position: relative;
	cursor: pointer;
	line-height: 1.5;


}
li a:after {
	display: block;
	position: absolute;
	left: 0; 
	width: 0;
	height: 2px; 
	background-color: #2a80c7; 
	content: "";
	transition: width 0.1s ease-out; 
}

li a:hover:after,
li a:focus:after {
	width: 100%; 
}
</style>