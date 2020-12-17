<template>
  <div>
  <navbar v-bind:showMenu="false" />
  <mdb-container fluid style="height: 100%">

    <section class="text-center">
      <h2 class="h1 pt-4">{{ $t('result.title') }} {{historyChosenCity}}</h2>
    </section>

    <mdb-row>

      <mdb-col xs="12" sm="12" class="mt-2">

          <img :src="require('@/assets/' + cities[finalChosenCity].name.toLowerCase() + '.jpg')" class="img-fluid rounded-circle hoverable" >
          
          <h1 class="mt-2">{{ cities[finalChosenCity].name }}</h1>
          <h5>{{ $t('result.congrats_name', {name: name}) }}</h5>

          <mdb-card class="mt-4">
            <mdb-card-body>
              <p class="font-weight-bold">{{ $t('result.weather') }}</p>
              <p style="font-size: smaller;" class="grey-text">{{ $t('result.current_weather') }}</p>
              <img v-if="cities[finalChosenCity].forecast" :src="cities[finalChosenCity].iconUrl" />
              <p class="mt-2 font-italic">{{ (cities[finalChosenCity].forecast || {}).text || '...' }}, <span class="font-weight-bold">{{ (cities[finalChosenCity].forecast || {}).temperature || '... °C' }}</span></p>
            </mdb-card-body>
          </mdb-card>

          <mdb-card class="mt-4">
            <mdb-card-body>
              <p class="font-weight-bold">{{ $t('result.flights') }}</p>
              <mdb-row class="mt-4">
                <mdb-col class="scrollbar scrollbar-primary">
                    <p style="font-size: smaller;" class="grey-text">{{ $t('result.flights_cost') }}</p>
                    <mdb-tbl sm>
                      <mdb-tbl-head>
                        <tr>
                          <th>{{ $t('flights.destination') }}</th>
                          <th>{{ $t('flights.price') }}</th>
                          <th>{{ $t('flights.time') }}</th>
                          <th>{{ $t('flights.duration') }}</th>
                        </tr>
                      </mdb-tbl-head>
                      <mdb-tbl-body v-for="flight in cities[finalChosenCity].flights" :key="flight.to">
                        <tr>
                          <th class="font-weight-bold">{{ flight.to }}</th>
                          <td>{{ flight.price }} €</td>
                          <td>{{ flight.time }}</td>
                          <td>{{ flight.duration }}</td>
                        </tr>
                      </mdb-tbl-body>
                    </mdb-tbl>
                    <div class="spinner-border text-light mt-4" role="status" v-if="!(cities[finalChosenCity].flights && cities[finalChosenCity].flights.length > 0)">
                      <span class="sr-only">Loading...</span>
                    </div>
                </mdb-col>
              </mdb-row>
            </mdb-card-body>
          </mdb-card>
          <div class="mt-4">
            <mdb-btn color="info" :disabled="true">
              <mdb-icon fas icon="question" />
              {{ $t('common.weather_details') }}
            </mdb-btn>
            <mdb-btn color="info" :disabled="true">
              <mdb-icon fas icon="question" />
              {{ $t('common.forecast_details') }}
            </mdb-btn>
          </div>

      </mdb-col>

    </mdb-row>
    <div class="mt-4 pb-4">
      <mdb-btn color="primary" v-on:click="goToHome">
        <mdb-icon icon="cloud-upload-alt" class="mr-1"/> 
        <span v-if="!isFromHistory" class="ml-2">{{ $t('result.next_step') }}</span>
        <span v-if="isFromHistory" class="ml-2">{{ $t('result.back_to_history') }}</span>
      </mdb-btn>
    </div>
  </mdb-container>
  </div>
</template>

<script lang="ts">

  import Vue from 'vue';
  import VueAxios from 'vue-axios';

  import navbar from '@/components/navbar.vue';
  import { mdbCardImage, mdbCardText, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbContainer, mdbCard, mdbBtn, mdbRow, mdbCol, mdbCardUp, mdbCardAvatar, mdbCardBody, mdbCardTitle, mdbIcon, mdbInput, mdbTbl, mdbTblBody, mdbTblHead } from 'mdbvue';
  import router from '../router';

  import store from '../store';
  import axios from 'axios';

  Vue.use(VueAxios, axios)

  export default Vue.extend({
    name: 'Result',
    data: function() {
      return {
        cities: store.state.cities, 
        finalChosenCity: store.state.finalChosenCity,
        name: store.state.name,
        isFromHistory: false
      }
    },
    methods: {
      goToHome: function() {
        if ( !this.isFromHistory ) {
          store.commit('STORE_RESULT', {
            chosenCity: this.finalChosenCity,
            time: new Date(),
            name: this.name
          });
        }
        router.push('/');
      }
    },
    mounted: function() {
        Promise.all([
          this.$store.dispatch('initFlights'),
          this.$store.dispatch('initWeather')
        ]).then(() => {
          console.log('Flights init');
        });
        //
        if ( this.$route.query.historyChosenCity ) {
          this.finalChosenCity = this.$route.query.historyChosenCity;
          this.isFromHistory = true;
        }
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
      mdbCardText,
      mdbTbl,
      mdbTblBody,
      mdbTblHead
    },
  });

</script>

<style scoped>

  .scrollbar {
    float: left;
    height: 300px;
    width: 150px;
    background: #fff;
    overflow-y: scroll;
    margin-bottom: 25px;
  }

  .scrollbar-primary::-webkit-scrollbar {
    width: 12px;
    background-color: #F5F5F5;
  }

  .scrollbar-primary::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #4285F4;
  }

</style>