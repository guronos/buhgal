<template>
    <div><h3 class="text-5xl text-center text-gray-900 mb-8">Стоимость услуг</h3> 
  <!-- <div class="flex justify-around items-center"> -->
    
<div >
    <table class="w-[70%] text-sm text-left text-gray-500 dark:text-gray-400 mx-auto">
        <thead class="text-xs text-gray-700 uppercase bg-blue-400 dark:bg-blue-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                   Услуга
                </th>
                <th scope="col" class="w-[22%] px-6 py-3">
                    Цена
                </th>
            </tr>
        </thead>
        <tbody>
            <template v-for="elem in priceList">
           
               <template v-if="elem.serviceGroup">
                <tr :key="elem.id" class="bg-blue-100 border-b dark:bg-gray-800 dark:border-gray-700" >
                <th scope="row" class="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white">
                   {{  elem.serviceGroup }}
                </th><th></th>
            </tr>
            <tr class="bg-blue-100 border-b dark:bg-gray-800 dark:border-gray-700" v-for="elemInServiceList in elem.serviceList" :key="elemInServiceList.serviceId">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-normal dark:text-white">
                 {{ elemInServiceList.service }}
                </th>
                <td class="px-6 py-4">
                    {{ elemInServiceList.prise }}
                </td>
            </tr>
            </template>
                <template v-else> 
                    <tr :key="elem.id" class="bg-blue-100 border-b dark:bg-gray-800 dark:border-gray-700" >
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-normal dark:text-white">
                   {{ elem.service }}
                </th>
                <td class="px-6 py-4">
                    {{ elem.prise }}
                </td>
                    </tr>
                </template>
           
        </template>
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
                'id': 0,
                'service' : 'Нулевые отчеты',
                'prise' : '500 руб.'
            },
            {
                'id': 1,
                'service' : 'Составление заявление на Патент',
                'prise' : '500 руб.'
            },
            {
                'id': 2,
                'serviceGroup' : 'Ведение бухгалтерского учета на Упрощенной системе налогообложения (УСН) ДОХОДЫ',
                'serviceList': [
            {
                'serviceId': 1,
                'service' : 'Без работников',
                'prise' : 'от 1000 руб. в месяц'
            },
            {
                'serviceId': 2,
                'service' : 'С работниками (за каждого нового сотрудника – 500 руб.)',
                'prise' : 'от 2 500 руб. в месяц'
            },
                ]
            },
          
            {
                'id': 3,
                'serviceGroup' : 'Ведение бухучета на Упрощенной системе налогообложения (УСН) ДОХОДЫ - РАСХОДЫ',
                'serviceList': [
                     {
                        'serviceId': 1,
                'service' : 'Без работников',
                'prise' : 'от 1000 руб.'
            },
            {
                'serviceId': 2,
                'service' : 'С работниками (за каждого нового сотрудника - 500 руб.)',
                'prise' : 'от 2000 руб.'
            },
                ]
            },
           
            {
                'id': 4,
                'serviceGroup' : 'Ведение бухгалтерского учета на Общей системе налогообложения',
                'serviceList': [
                     {
                        'serviceId': 1,
                'service' : 'Без работников',
                'prise' : 'от 1000 руб.'
            },
            {
                'serviceId': 2,
                'service' : 'С работниками (за каждого нового сотрудника - 500 руб.)',
                'prise' : 'от 2000 руб.'
            },
                ]
            },
            {
                'id': 5,
                'service' : 'Заполнений деклараций 3-НДФЛ',
                'prise' : '500 руб.'
            },
            {
                'id': 6,
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