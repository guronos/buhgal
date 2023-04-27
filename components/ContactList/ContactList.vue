<template>
  <div class="flex flex-col">
    <div>
<h3 class="text-3xl text-gray-900 mb-3 text-center">Контакты</h3> </div>
<div class="flex justify-center space-x-36">
  <TelegramIcon style="font-size: 2em" />
  <WhatsappIcon style="font-size: 2em" />
  <PhoneIcon style="font-size: 2em; color : ForestGreen" />
</div>
<div class="flex flex-col items-start self-center my-4 contact-info">
<div class="flex items-center space-x-8 mb-4">
  <GeoIcon style="font-size: 1.5em; color:red" />
<div>г.Ставрополь</div> 
</div>
<div class="flex items-center space-x-8 mb-4">
  <ClockIcon style="font-size: 1.5em" />
<div>Ежедневно: 09:00-18:00 <br />
Суббота, Воскресение - выходные</div> </div> 
<div class="flex items-center space-x-8 mb-4">
  <MailIcon style="font-size: 1.5em; color:red" />
<div>E-mail: buhgalter@mail.ru</div> </div> 
<div class="flex items-center space-x-8 mb-4">
  <PhoneIcon style="font-size: 1.5em; color:red" />
<div>Телефон: +7-999-999-99-99</div> </div> 
</div></div>
</template>

<script>
import TelegramIcon from '~icons/logos/telegram';
import WhatsappIcon from '~icons/logos/whatsapp-icon';
import PhoneIcon from '~icons/material-symbols/phone-forwarded-sharp';
import GeoIcon from '~icons/healthicons/geo-location';
import ClockIcon from '~icons/fxemoji/clock4oclock';
import MailIcon from '~icons/material-symbols/mark-email-read-outline';
export default {
name: 'ContactList',
components : { TelegramIcon, WhatsappIcon, PhoneIcon, GeoIcon, ClockIcon, MailIcon },
mounted(){
  if (process.client) {
console.log('hello')
  }
}
}
</script>

<style>
.contact-info {
  margin-left: -2rem;
  font-size: 1.2rem;
}
</style>