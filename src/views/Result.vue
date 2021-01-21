<template>
  <div>
  <navbar v-bind:showMenu="false" />
  <mdb-container style="height: 100%">

    <section class="text-center">
      <h2 class="h1 pt-4">{{ $t('result.title') }}</h2>
    </section>

    <mdb-row>

      <mdb-col xs="12" sm="12" class="mt-2">

          <img :src="require('@/assets/' + cities[finalChosenCity()].name.toLowerCase() + '.jpg')" class="img-fluid rounded-circle hoverable" >
          
          <h1 class="mt-2">{{ cities[finalChosenCity()].name }}</h1>
          <h5>{{ $t('result.congrats_name', {name: name}) }}</h5>

          <mdb-card class="mt-4">
            <mdb-card-body>
              <p class="font-weight-bold">{{ $t('result.weather') }}</p>
              <p class="text-primary font-weight-bold">{{ $t('result.current_weather') }}</p>
              <div v-if="cities[finalChosenCity()].forecast">
                <img v-if="cities[finalChosenCity()].forecast" :src="cities[finalChosenCity()].forecast.iconUrl" />
                <h5 class="mt-2">{{ (cities[finalChosenCity()].forecast || {}).text || '...' }}, <span class="font-weight-bold">{{ (cities[finalChosenCity()].forecast || {}).temperature || '... °C' }}</span></h5>
              </div>
              <div v-if="cities[finalChosenCity()].forecast == undefined">
                <div v-if="!accuweatherError" class="spinner-border text-light mt-4" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
                <p v-if="!accuweatherError" class="text-small text-grey font-italic">{{ $t('common.loading') }}</p>
                <p v-if="accuweatherError" class="text-small text-grey font-italic">{{ $t('common.error_aw') }}</p>
              </div>
            </mdb-card-body>
          </mdb-card>

          <mdb-card class="mt-4">
            <mdb-card-body>
              <p class="font-weight-bold">{{ $t('result.flights') }}</p>
              <p class="text-primary font-weight-bold">{{ $t('result.flights_cost') }}</p>
              <mdb-row class="mt-4">
                <mdb-col class="scrollbar scrollbar-primary">
                    <mdb-tbl sm>
                      <mdb-tbl-head>
                        <tr>
                          <th>{{ $t('flights.destination') }}</th>
                          <th>{{ $t('flights.price') }}</th>
                          <th>{{ $t('flights.time') }}</th>
                          <th>{{ $t('flights.duration') }}</th>
                        </tr>
                      </mdb-tbl-head>
                      <mdb-tbl-body v-for="flight in cities[finalChosenCity()].flights" :key="flight.to">
                        <tr>
                          <th class="font-weight-bold">{{ flight.to }}</th>
                          <td>{{ flight.price }} €</td>
                          <td>{{ flight.time }}</td>
                          <td>{{ flight.duration }}</td>
                        </tr>
                      </mdb-tbl-body>
                    </mdb-tbl>
                    <div class="spinner-border text-light mt-4" role="status" v-if="!(cities[finalChosenCity()].flights && cities[finalChosenCity()].flights.length > 0)">
                      <span class="sr-only">Loading...</span>
                    </div>
                </mdb-col>
              </mdb-row>
            </mdb-card-body>
          </mdb-card>
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

  import navbar from '@/components/navbar.vue';
  import { mdbCardImage, mdbCardText, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbContainer, mdbCard, mdbBtn, mdbRow, mdbCol, mdbCardUp, mdbCardAvatar, mdbCardBody, mdbCardTitle, mdbIcon, mdbInput, mdbTbl, mdbTblBody, mdbTblHead } from 'mdbvue';
  import router from '../router';

  import store from '../store';

  export default Vue.extend({
    name: 'Result',
    data: function() {
      return {
        cities: store.state.cities, 
        name: store.state.name,
        isFromHistory: this.$route.query.historyChosenCity ? true : false,
        accuweatherError: false
      }
    },
    methods: {
      finalChosenCity: function() {
        if ( this.$route.query.historyChosenCity && typeof this.$route.query.historyChosenCity == 'string' ) {
          return parseInt(this.$route.query.historyChosenCity);
        }
        return store.state.finalChosenCity;
      },
      goToHome: function() {
        if ( this.isFromHistory ) {
          router.push('/history');
          return;
        }
        store.commit('STORE_RESULT', {
            chosenCity: this.finalChosenCity(),
            time: new Date(),
            name: this.name
          });
          router.push('/');
      }
    },
    mounted: function() {
        Promise.all([
          this.$store.dispatch('initFlights'),
          this.$store.dispatch('initWeather')
        ]).then(() => {
          // console.log('Flights init');
        })
        .catch(err => {
          this.accuweatherError = true;
          console.log('ERROR', err);
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