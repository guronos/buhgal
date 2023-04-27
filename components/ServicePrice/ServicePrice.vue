<template>
  <div class="flex justify-around items-center">
<div class="wrap-price text-center text-3xl text-gray-900">Стоимость услуг
    <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                   Услуга
                </th>
                <th scope="col" class="px-6 py-3">
                    Цена
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="elem in priceList" :key="elem.number">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {{ elem.service }}
                </th>
                <td class="px-6 py-4">
                    {{ elem.prise }}
                </td>
            </tr>
        </tbody>
    </table>
</div>

</div>
<div class="wrap-img shadow-xl"><img src="../../assets/uslugi-buhgaltera.jpg" alt="Прайс на бухгалтерские услуги" class="rounded"></div>
  </div>
</template>

<script>
export default {
name : 'ServicePrice',
data (){
    return {
        priceList : [
            {
                'number' : '1',
                'service' : 'Подготовка декларации для ИП',
                'prise' : '999 руб.'
            },
            {
                'number' : '2',
                'service' : 'Подготовка декларации для ООО/АО',
                'prise' : '9999 руб.'
            },
            {
                'number' : '3',
                'service' : 'Подготовка декларации для имущественного вычета',
                'prise' : '599 руб.'
            }
        ]
    }
}
}
</script>

<style>
.wrap-price {
    width: 50%;
}
</style>