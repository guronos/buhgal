<template>
    <div class="bg-blue-50">
        <div class="text-3xl font-bold pt-12 text-center">Page not found - 404 ERROR</div>
      <div class="flex justify-center items-center h-[100vh] mt-[-4rem]">
        <img src="@/assets/404-error.webp" class="error__image" width="400" height="400" alt="Изображение ошибки">
        <div class="flex flex-col error__text ml-4">
            <span class="text-3xl font-bold mb-12">Запрашиваемая Вами страница не найдена</span>
        <div class="text-end">
        <a href="/">
          <button type="button" class="text-2xl font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2">Вернуться на главную</button></a>
        </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>  
  
  export default {
    props: ['error'],
  }
  </script>
  <style>
.error__text {
    font-family: 'PT Serif Caption', serif;
}
</style>