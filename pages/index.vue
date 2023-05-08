<template>
<div class="bg-blue-50">
  <NavigationBar />
  <header>
<div class="wrap-promo mx-auto">
<div class="flex flex-row justify-center img-background">

</div>
  
<div class="header-promo-block">
  <div class="flex flex-col justify-center items-center promo-title">
    <a href="#service-list">
     <h1 class="text-6xl antialiased font-bold tracking-wide text-center">Бухгалтерские услуги <br /> в Ставрополе</h1>
     <p class="text-2xl text-gray-600 mt-12 text-center">Поможем сохранить Ваши деньги</p>
  </a>
</div>
</div></div>
</header>
<main class="container mx-auto bg-blue-50 pb-10">
<AboutUs id="about-us" class="mt-12" /> 
<ServiceList id="service-list" class="mt-12" />
<AdvantagesList id="advantages-list" class="mt-12" />
<ServicePrice id="service-price" class="mt-12" />
</main>
<ShowLocation id="show-location" />
<footer class="bg-gray-500"> 
  <ContactList id="contact-list" />
</footer>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=PT+Serif+Caption&family=Red+Hat+Display:wght@300;400;500;600;700;800;900&family=Rubik:wght@300;400;500;600;700;800;900&display=swap');
h1, h2, h3 {
  font-family: 'Playfair Display', serif;
}
.img-background {
  background-image: url('@/assets/buhgalter-header.jpg');
  height:90vh;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top;
  opacity: 0.2;
  border-radius: 6px;
}
.header-promo-block {
  position: absolute;
  top: 0%;
  right: 20%;
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
</style>