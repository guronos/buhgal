<template>
  <div><h3 class="text-5xl mb-8 text-gray-900 text-center">Список наших преимуществ:</h3> 
  <div class="flex flex-row justify-around">
    <div class="wrap-img mr-4 shadow-xl"><img src="@/assets/buhgalter-preimucshestva.jpg" alt="Изображение демонстрирующее сотрудничество" class="rounded"></div>

  <ul class="my-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
    <li class="flex flex-col items-center space-x-3 text-2xl text-gray-900" v-for="(item, indx) in advantages" :key="indx">
      <div class="text-left w-[100%]"><h4 class="flex items-center font-semibold"><ApprovedIcon />{{item.title}}</h4>
    <span class="font-light text-base text-gray-700">{{ item.body }}</span></div>
    </li>
  </ul>
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