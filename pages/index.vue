<template>
<div>
  <NavigationBar />
  <header>
<div class="wrap-promo container mx-auto">
<div class="flex flex-row justify-center img-background">

</div>
  
<div class="header-promo-block">
  <div class="flex flex-row justify-center items-center promo-title">
  <h1 class="text-6xl antialiased font-bold tracking-wide">Бухгалтерские услуги в Ставрополе</h1>
  <!-- <div class="wrap-img"></div> -->
</div>
</div></div>
</header>
<main class="container mx-auto bg-gray-50 py-10">
<AboutUs /> 
<ServiceList />
<AdvantagesList />
<ServicePrice />
<ShowLocation />
</main>
<footer class="bg-gray-300">
  <ContactList />
</footer>
</div>
</template>

<script>
// import NavigationBar from '@/components/NavigationBar/';
// import AdvantagesList from '@/components/AdvantagesList';
// import ServiceList from '@/components/ServiceList';
// import ServicePrice from '@/components/ServicePrice';
// import AboutUs from '@/components/AboutUs';
// import ShowLocation from '@/components/ShowLocation';
// import ContactList from '@/components/ContactList'
export default {
  name: 'IndexPage',
  // components : { AdvantagesList, ServiceList, ServicePrice, AboutUs, ShowLocation, ContactList, NavigationBar },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Red+Hat+Display:wght@300;400;500;600;700;800;900&family=Rubik:wght@300;400;500;600;700;800;900&display=swap');
.img-background {
  background-image: url('../assets/buhgalter-header.jpg');
  height:60vh;
  background-repeat: no-repeat;
  background-size: 100%;
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
</style>