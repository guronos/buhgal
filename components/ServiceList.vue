<template>
  <div>
    <ul class="list-none">
        <h2 class="text-6xl mb-4 text-gray-900 text-center">Бухгалтерские услуги</h2> 
    <transition name="service-animation" v-for="item in accountingServices" :key="item.number">
    <li class="bg-blue-200 mb-4 mx-auto" v-if="item.show">
      <h4 class="text-2xl text-center">{{ item.title }}</h4>
      <hr class="h-px w-[40%] mx-auto my-1 bg-gray-200 border-0 dark:bg-gray-700">
      <p class="text-justify px-8">{{ item.body }}</p>
    </li></transition>
    <!-- <transition name="service-animation"><li class="bg-red-100" v-if="showItems">Услуга 2</li></transition>
    <transition name="service-animation"><li class="bg-red-100" v-if="showItems">Услуга 3</li></transition> -->
</ul>
  </div>
</template>

<script>
export default {
name: 'ServiceList',
data (){
    return {
        showItems : false,
        accountingServices : [
        {
            'number' : 1,
            'title' : 'Услуга 1',
            'body' : 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник',
            'show' : false
        },
        {
            'number' : 2,
            'title' : 'Услуга 2',
            'body' : 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.',
            'show' : false
        },
        {
            'number' : 3,
            'title' : 'Услуга 3',
            'body' : 'Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты). ',
            'show' : false
        }
    ]
    }
},
computed : {
    createObserver() {
        const options = {
          root: null,
          threshold: 1
        };
        const observer = new IntersectionObserver(this.handleIntersect, options);
        console.log('its job', this.$el)
        observer.observe(this.$el);
      },getItem(){
        if (this.showItems) {
            if (this.timeOut < 5000) {
            this.timeOut += 500 }
        return setTimeout(()=>true, this.timeOut)
        }
    },
}, methods:{
    
    showServiceItem() {
        this.accountingServices.forEach(i=>setTimeout(()=>i.show=true, i.number * 500))
      },
    handleIntersect(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.showServiceItem();
            console.log(this.$el.getElementsByTagName('li'))
              observer.unobserve(this.$el);
          }
        });
      }
}, mounted(){
    if (process.client) {
    if (window["IntersectionObserver"]) {
        console.log('lazy if', this.$el)
        this.createObserver;
        
      } else {
        this.showServiceItem();
        console.log('lazy else')
      }
  }}
}
</script>

<style scoped>
/* .service-animation {
    animation: myAnim 2s cubic-bezier(0.36, 0, 0.66, -0.56) 0s 1 normal forwards;
}
@keyframes myAnim {
	0% {
		opacity: 0;
		transform: translateX(-250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
} */
.service-animation-enter-active {
  transition: all 1.5s ease;
  /* transition-delay: 1s; */
}

/* .service-animation-enter-active:first-of-type + .service-animation-enter-active {
transform: translateX(-100%);
  opacity: 0;
  color: red;
} */
.service-animation-enter
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(100%);
  /* transition-delay: 1s; */
  opacity: 0;
}

ul {
    min-height: 50vh;
}
li {
  max-width: 95%;
  border-radius: 2rem;
}
</style>