<template>
  <div class="flex flex-col">
    <div>
<h3 class="text-3xl text-white mb-3 text-center">Контакты</h3> </div>
<div class="flex justify-center space-x-36">
  <TelegramIcon style="font-size: 2em" />
  <WhatsappIcon style="font-size: 2em" />
  <div class="wrap-icon-call flex items-center justify-center">
    <PhoneIcon style="font-size: 1.5em; color : LimeGreen" />
  </div>
  
</div>
<div class="flex flex-col items-start self-center my-4 contact-info text-white">
<div class="flex items-center space-x-8 mb-4">
  <div class="wrap-icon flex items-center justify-center">
    <GeoIcon class="icon" />
  </div>
<div>г.Ставрополь</div> 
</div>
<div class="flex items-center space-x-8 mb-4">
  <div class="wrap-icon flex items-center justify-center">
    <ClockIcon class="icon" />
  </div>
<div>Ежедневно: 09:00-18:00 <br />
Суббота, Воскресение - выходные</div> </div> 
<div class="flex items-center space-x-8 mb-4">
  <div class="wrap-icon flex items-center justify-center">
    <MailIcon class="icon" />
  </div>
<div>E-mail: buhgalter@mail.ru</div> </div> 
<div class="flex items-center space-x-8 mb-4">
  <div class="wrap-icon flex items-center justify-center">
    <PhoneIcon class="icon" />
  </div>
<div>Телефон: +7-999-999-99-99</div> </div> 
</div></div>
</template>

<script>
import TelegramIcon from '~icons/logos/telegram';
import WhatsappIcon from '~icons/logos/whatsapp-icon';
import PhoneIcon from '~icons/material-symbols/phone-forwarded-sharp';
import GeoIcon from '~icons/healthicons/geo-location';
import ClockIcon from '~icons/mdi/clock-outline';
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
.wrap-icon {
  height: 2.4rem;
  width: 2.4rem;
  border: 2px solid rgb(170, 160, 160);
  border-radius: 10rem;
}
.wrap-icon:hover {
  border: 2px solid rgb(255, 254, 254);
}
.icon {
  font-size: 1.1em; 
  color:Crimson
}
.wrap-icon:hover .icon {
  color: #fff;
}
.wrap-icon-call {
  height: 2.6rem;
  width: 2.6rem;
  border: 2px solid LimeGreen;
  border-radius: 10rem;
}
</style>