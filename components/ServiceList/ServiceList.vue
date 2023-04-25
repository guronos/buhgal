<template>
  <div>
    <ul class="list-none">
        <h3 class="text-6xl text-gray-900 text-center">Бухгалтерские услуги</h3> 
    <transition name="service-animation" v-for="(item, idx) in accountingServices" :key="idx">
    <li class="bg-gray-100 mb-4" v-if="item.show"><div>{{ item.title }}</div><div>{{ item.body }}</div></li></transition>
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
            'body' : 'Наша услуга....',
            'show' : false
        },
        {
            'number' : 2,
            'title' : 'Услуга 2',
            'body' : 'Бухгалтерская услуга....',
            'show' : false
        },
        {
            'number' : 3,
            'title' : 'Услуга 3',
            'body' : 'Наша услуга....',
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
    min-height: 30vh;
}
</style>