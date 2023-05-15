<template>
  <div class="flex flex-col">
    <div>
<h3 class="text-3xl text-white mb-3 text-center">Контакты</h3> </div>
<div class="flex justify-center">
  <a href="https://t.me/veselovskayaolga" class="mr-24 md:mr-36"><TelegramIcon style="font-size: 2em" /></a>
  <a href="https://wa.me/79383116192" class="mr-24 md:mr-36"><WhatsappIcon style="font-size: 2em" /></a>
  <a href="tel:+79383116192" class="contents"><img src="@/assets/svg/PhoneIcon.svg" class="w-[40px]" alt="Иконка телефонного звонка"></a>
  
</div>
<div class="flex flex-col items-start self-center my-4 md:contact-info text-white">
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
  border: 2px solid rgb(255, 255, 255);
  border-radius: 10rem;
  background: linear-gradient(#635f5f, rgba(107, 114, 128, 1));
}
.wrap-icon-call:hover {
  border: 2px solid LimeGreen;
}
</style>
