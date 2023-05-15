<template>
  <div><h3 class="text-3xl md:text-5xl md:mb-8 mb-2 text-gray-900 font-semibold mx-auto text-center">Список наших преимуществ:</h3> 
  <div class="flex md:flex-row flex-col justify-around">
 <figure class="advantages-list__card md:max-w-[30%] max-w-[95%] shadow-xl" v-for="item in advantages" :key="item.id">
  <div class="advantages-list__image-wrapper bg-center" :style="`background-image: url(${getImage(item.img)});`"></div>
  <figcaption>
    <h3>{{ item.title }}</h3>
    <p>{{ item.body }}</p>
  </figcaption>
</figure>
</div></div>
</template>

<script>
import ApprovedIcon from '~icons/flat-color-icons/ok';

export default {
name : 'AdvantagesList',
components : { ApprovedIcon },
data () {
    return {
    advantages : [
        {
          id : 1,
        img : 'buhgalter-preimucshestva.webp',
        title : 'Бухгалтер 24/7',
        body : 'Бухгалтер всегда на связи в режиме реального времени'
        },
        {
          id : 2,
          img : 'optimizaciya-nalogov.webp',
        title : 'Оптимизация налогов',
        body : 'Уменьшим Ваши налоги'
        },
        {
          id : 3,
          img : 'buhgalter-konfidencialno.webp',
        title : 'Конфиденциальность',
        body : 'Надежно храним все секреты и данные клиентов'
        },
    ]
    }
}, methods : {
  getImage(imgage) {
    return require(`@/assets/${imgage}`);
  }
}
}
</script>

<style>


.advantages-list__image-wrapper {
width: 100%;
height: 400px;
background-size: cover;


}
.advantages-list__card {
  background-color: rgba(235, 245, 255, 1);
  display: inline-block;
  font-size: 16px;
  margin: 10px 5px;
  /* max-width: 30%; */
  min-width: 10%;
  max-height: 40vh;
  overflow: hidden;
  position: relative;
  text-align: right;
  width: 100%;
}

.advantages-list__card *,
.advantages-list__card *:before,
.advantages-list__card *:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.45s ease;
  transition: all 0.45s ease;
}

.advantages-list__card:before,
.advantages-list__card:after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  content: '';
  background-color: #5f91db;
  opacity: 0.5;
  -webkit-transition: all 0.45s ease;
  transition: all 0.45s ease;
}

.advantages-list__card:before {
  -webkit-transform: skew(30deg) translateX(80%);
  transform: skew(30deg) translateX(80%);
}

.advantages-list__card:after {
  -webkit-transform: skew(-30deg) translateX(70%);
  transform: skew(-30deg) translateX(70%);
}

.advantages-list__card figcaption {
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0;
  z-index: 1;
  bottom: 0;
  padding: 20px 20px 20px 40%;
}

.advantages-list__card figcaption:before,
.advantages-list__card figcaption:after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #3e73c4;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  content: '';
  opacity: 0.5;
  z-index: -1;
}

.advantages-list__card figcaption:before {
  -webkit-transform: skew(30deg) translateX(100%);
  transform: skew(30deg) translateX(100%);
}

.advantages-list__card figcaption:after {
  -webkit-transform: skew(-30deg) translateX(90%);
  transform: skew(-30deg) translateX(90%);
}

.advantages-list__card h3,
.advantages-list__card p {
  opacity: 0;
  letter-spacing: 1px;
}

.advantages-list__card h3 {
  font-size: 24px;
  font-weight: 700;
  line-height: 1em;
  opacity: 0.8;
  color: #252323;
  margin: 3rem auto;
  text-transform: uppercase;
}

.advantages-list__card p {
  font-size: 0.9em;
}

.advantages-list__card:hover h3,
.advantages-list__card.hover h3,
.advantages-list__card:hover p,
.advantages-list__card.hover p {
  -webkit-transform: translateY(0);
  transform: translateY(10%);
  opacity: 0.9;
  color: #ffffff;
}

.advantages-list__card:hover:before,
.advantages-list__card.hover:before {
  -webkit-transform: skew(30deg) translateX(30%);
  transform: skew(30deg) translateX(30%);
  -webkit-transition-delay: 0.05s;
  transition-delay: 0.05s;
}

.advantages-list__card:hover:after,
.advantages-list__card.hover:after {
  -webkit-transform: skew(-30deg) translateX(20%);
  transform: skew(-30deg) translateX(20%);
}

.advantages-list__card:hover figcaption:before,
.advantages-list__card.hover figcaption:before {
  -webkit-transform: skew(30deg) translateX(50%);
  transform: skew(30deg) translateX(50%);
  -webkit-transition-delay: 0.15s;
  transition-delay: 0.15s;
}

.advantages-list__card:hover figcaption:after,
.advantages-list__card.hover figcaption:after {
  -webkit-transform: skew(-30deg) translateX(40%);
  transform: skew(-30deg) translateX(40%);
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}

</style>