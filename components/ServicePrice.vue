<template>
    <div><h3 class="text-5xl text-center text-gray-900 mb-8">Стоимость услуг</h3> 
  <!-- <div class="flex justify-around items-center"> -->
    
<div >
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-blue-400 dark:bg-blue-700 dark:text-gray-400">
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
            <tr class="bg-blue-100 border-b dark:bg-gray-800 dark:border-gray-700" v-for="(elem, id) in priceList" :key="id">
               <template v-if="elem.service">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-normal dark:text-white">
                   {{ elem.service }}
                </th>
                <td class="px-6 py-4">
                    {{ elem.prise }}
                </td>
            </template>
                <template v-else>
                    <th scope="row" class="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white">
                   {{ elem.serviceGroup }}
                </th><th></th>
                </template>
            </tr>
        </tbody>
    </table>
</div>

<!-- </div> -->
  <!-- </div> -->
  </div>
</template>

<script>
export default {
name : 'ServicePrice',
data (){
    return {
        priceList : [
            {
                'service' : 'Нулевые отчеты',
                'prise' : '500 руб.'
            },
            {
                'service' : 'Составление заявление на Патент',
                'prise' : '500 руб.'
            },
            {
                'serviceGroup' : 'Ведение бухгалтерского учета на Упрощенной системе налогообложения (УСН) ДОХОДЫ',
            },
            {
                'service' : 'Без работников',
                'prise' : 'от 1000 руб. в месяц'
            },
            {
                'service' : 'С работниками (за каждого нового сотрудника – 500 руб.)',
                'prise' : 'от 2 500 руб. в месяц'
            },
            {
                'serviceGroup' : 'Ведение бухучета на Упрощенной системе налогообложения (УСН) ДОХОДЫ - РАСХОДЫ',
            },
            {
                'service' : 'Без работников',
                'prise' : 'от 1000 руб.'
            },
            {
                'service' : 'С работниками (за каждого нового сотрудника - 500 руб.)',
                'prise' : 'от 2000 руб.'
            },
            {
                'serviceGroup' : 'Ведение бухгалтерского учета на Общей системе налогообложения',
            },
            {
                'service' : 'Без работников',
                'prise' : 'от 1000 руб.'
            },
            {
                'service' : 'С работниками (за каждого нового сотрудника - 500 руб.)',
                'prise' : 'от 2000 руб.'
            },
            {
                'service' : 'Заполнений деклараций 3-НДФЛ',
                'prise' : '500 руб.'
            },
            {
                'service' : 'Внесение изменений в учредительные документы \
                (смена адреса, наименования, директора, видов деятельности, паспортных данных)',
                'prise' : '3000 руб.'
            },
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