<template>
  <mdb-container fluid style="height: 100%">
    <navbar v-bind:showMenu="false" />
        <section class="text-center">
          <h2 class="h1 pt-4">{{ $t('weather.title') }}</h2>

          <p class="grey-text mb-5 mt-5 px-3">{{ $t('weather.desc') }}</p>
        </section>
    <mdb-row>
      <mdb-col md="4" class="mt-2" v-for="(city, cityIndex) in cities" :key="city.name">
          <mdb-card :style="selectedCity == cityIndex ? 'box-shadow: 0 2px 5px 0 rgba(0,0,255,0.70), 0 2px 10px 0 rgba(0,0,255,0.70)' : ''">
            <mdb-card-image :src="require('@/assets/' + city.name.toLowerCase() + '.jpg')"></mdb-card-image>
            <mdb-card-body>
              <mdb-card-title>
                {{ city.name }}
              </mdb-card-title>
              <mdb-card-text>
                <p style="font-size: smaller;" class="grey-text">{{ $t('weather.current_weather') }}</p>
                <img v-if="city.forecast" :src="city.forecast.iconUrl" />
                <p class="mt-2 font-italic">{{ (city.forecast || {}).text || '...' }}, <span class="font-weight-bold">{{ (city.forecast || {}).temperature || '... °C' }}</span></p>
                <p v-html="$t('weather.city_1_desc')"></p>
              </mdb-card-text>
              <mdb-btn color="info">
                <mdb-icon fas icon="question" />
                {{ $t('common.details') }}
              </mdb-btn>
              <mdb-btn color="primary" v-on:click="select(cityIndex)">
                <mdb-icon fas icon="check-square" />
                {{ $t('common.select') }}
              </mdb-btn>
              <div class="custom-control custom-checkbox custom-control-inline" style="position: absolute; bottom: 8px; right: -12px; z-index: 999;">
                <input type="checkbox" class="custom-control-input" id="defaultInline1" :checked="selectedCity == cityIndex">
                <label class="custom-control-label" for="defaultInline1"></label>
              </div>
              <div style="position: absolute; bottom: 0px; right: 0px; z-index: 1500; width: 40px; height: 40px;"></div>
            </mdb-card-body>
          </mdb-card>
      </mdb-col>
    </mdb-row>
    <div class="mt-4 pb-4">
      <mdb-btn color="primary" v-on:click="goToNext" :disabled="selectedCity === undefined"><mdb-icon icon="arrow-right" class="mr-1"/> {{ $t('weather.next_step') }}</mdb-btn>
    </div>
  </mdb-container>
</template>

<script lang="ts">

  import Vue from 'vue';
  import VueAxios from 'vue-axios';

  import navbar from '@/components/navbar.vue';
  import { mdbCardImage, mdbCardText, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbContainer, mdbCard, mdbBtn, mdbRow, mdbCol, mdbCardUp, mdbCardAvatar, mdbCardBody, mdbCardTitle, mdbIcon, mdbInput } from 'mdbvue';
  import router from '../router';

  import store from '../store';
  import axios from 'axios';

  Vue.use(VueAxios, axios)

  export default Vue.extend({
    name: 'Weather',
    data: function() {
      return {
        cities: store.state.cities, 
        selectedCity: undefined
      }
    },
    methods: {
      goToNext: function() {
        router.push('wheater');
      },
      select: function(cityIndex) {
        this.selectedCity = cityIndex;
      }
    },
    mounted: function() {
      this.$store.dispatch('initWeather')
        .then(() => {
          console.log('weather init');
        });
    },
    components: {
      mdbContainer,
      navbar,
      mdbCard, 
      mdbBtn,
      mdbRow,
      mdbCol,
      mdbCardUp, 
      mdbCardAvatar, 
      mdbCardBody, 
      mdbCardTitle, 
      mdbIcon,
      mdbInput,
      mdbModal, 
      mdbModalHeader, 
      mdbModalTitle,
      mdbModalBody, 
      mdbModalFooter,
      mdbCardImage,
      mdbCardText
    },
  });

</script>