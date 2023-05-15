<template>
    <div class="flex flex-col items-center">
      <h3 class="text-3xl md:mb-8 mb-2 text-gray-900 font-semibold text-white">Наше местоположение</h3>
        <client-only>
 <yandex-map 
    :coords="coords"
    :zoom="16" 
    class="map"
  >
    <ymap-marker 
      :coords="coords" 
      marker-id="Geolocation" 
      hint-content="some hint" 
    />
  </yandex-map></client-only>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
export default {
name: 'ShowLocation',
components : { yandexMap, ymapMarker },
data: () => ({
    coords: [
        45.032165,
        41.984604,
    ],
  }),
}
</script>

<style>
.map {
    height: 400px;
    max-height: 40vh;
    width: 100%;
}
</style>