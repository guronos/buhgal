<template>
  <div class="flex flex-row justify-around">
    <div class="wrap-img mr-4 shadow-xl"><img src="@/assets/buhgalter-preimucshestva.jpg" alt="Изображение демонстрирующее сотрудничество" class="rounded"></div>
  <div><span class="text-6xl text-gray-900">Список наших преимуществ:</span> 
  <ul class="my-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
    <li class="flex flex-col items-center space-x-3 text-3xl text-gray-900" v-for="(item, indx) in advantages" :key="indx">
      <span class="flex items-center font-semibold"><svg class="flex-shrink-0 w-8 h-8 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>{{item.title}}</span>
    <span class="font-light text-base text-gray-700">{{ item.body }}</span>
    </li>
  </ul></div>
</div>
</template>

<script>
export default {
name : 'AdvantagesList',
data () {
    return {
    advantages : [
        {
        title : 'Бухгалтер 24/7',
        body : 'Бухгалтер всегда на связи в режиме реального времени'
        },
        {
        title : 'Оптимизация налогов',
        body : 'Уменьшим Ваши налоги'
        },
        {
        title : 'Конфиденциальность',
        body : 'Надежно храним все секреты и данные клиентов'
        },
    ]
    }
}
}
</script>

<style>

</style>