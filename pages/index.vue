<template>
  <div class="bg-blue-50">
<div class="app">
  <NavigationBar ref="navBar" />
  <header>
<div class="wrap-promo mx-auto">
<div class="flex flex-row justify-center img-background mx-auto">

</div>
  
<div class="header-promo-block">
  <div class="flex flex-col justify-center items-center promo-title mx-auto service-list">
    <a href="#service-list" @click="setScroll()" class="service-list__link">
     <h1 class="text-2xl sm:text-4xl md:text-6xl antialiased font-bold tracking-wide text-center">Бухгалтерские услуги <br /> в Ставрополе</h1>
     <p class="text-lg sm:text-lg md:text-2xl text-blue-800 mt-0 md:mt-12 text-center">Поможем сохранить Ваши деньги</p>
  </a>
</div>
</div></div>
</header>
<main class="container mx-auto bg-blue-50 pb-10">
<AboutUs id="about-us" class="mt-4 md:mt-20" /> 
<ServiceList id="service-list" class="mt-4 md:mt-20" />
<AdvantagesList id="advantages-list" class="mt-4 md:mt-20" />
<ServicePrice id="service-price" class="mt-4 md:mt-20" />
</main>

<footer class="bg-gray-500"> 
  <ContactList id="contact-list" />
  <ShowLocation id="show-location" />
  <div><a href="https://ru.freepik.com/free-photo/hand-holding-cloud-system-with-data-protection_17121563.htm#query=%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%8C&position=0&from_view=search&track=sph">Изображения от rawpixel.com</a> на Freepik</div>
</footer>
</div></div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods:{
    setScroll(){
    setTimeout(()=>window.scrollBy(0, -this.$refs.navBar.$el.clientHeight), 10)
  }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
h1, h2, h3, h4 {
  font-family: 'Playfair Display', serif;
}
.app {
  max-width: 1900px;
  margin: auto auto;
}
.img-background {
  background-image: url('@/assets/buhgalter-header.webp');
  height:70vh;
  max-height: 650px;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0 0;
  opacity: 0.5;
  max-width: 1920px;
  border-radius: 6px;
}
.header-promo-block {
  position: absolute;
  top: 0%;
  right: 0%;
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
h1 {
  font-family: 'PT Serif Caption', serif;
  color: #1e3a8a;
}
@media (max-width: 1200px) {
.service-list__link {
  position: absolute;
    top: 4%;
    text-align: center;
}
}
@media (max-width: 980px) {
  .img-background {
    height: 40vh;
  }
}
@media (max-width: 980px) {
  .img-background {
    height: 30vh;
  }
}
@media (max-width: 560px) {
  .img-background {
    height: 20vh;
  }
}
</style>