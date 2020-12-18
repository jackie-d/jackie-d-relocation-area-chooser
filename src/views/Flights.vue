<template>
  <div>
    <navbar v-bind:showMenu="false" />
    <mdb-container style="height: 100%">
          <section class="text-center">
            <h2 class="h1 pt-4">
              <mdb-icon fas icon="plane-arrival" />
              {{ $t('flights.title') }}
            </h2>

            <p class="grey-text mb-5 mt-5 px-3">{{ $t('flights.desc') }}</p>
          </section>
      <mdb-row>
        <mdb-col md="4" class="mt-2" v-for="(city, cityIndex) in cities" :key="city.name">
            <mdb-card :style="chosenCity == cityIndex ? 'box-shadow: 0 2px 5px 0 rgba(0,0,255,0.70), 0 2px 10px 0 rgba(0,0,255,0.70)' : ''">
              <mdb-card-image :src="require('@/assets/' + city.name.toLowerCase() + '.jpg')"></mdb-card-image>
              <mdb-card-body>
                <mdb-card-title>
                  {{ city.name }}
                </mdb-card-title>  
                <mdb-card-text>
                  <p style="font-size: smaller;" class="grey-text">{{ $t('flights.flights_cost') }}</p>
                  <mdb-row>
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
                          <mdb-tbl-body v-for="flight in city.flights" :key="flight.to">
                            <tr>
                              <th class="font-weight-bold">{{ flight.to }}</th>
                              <td>{{ flight.price }} €</td>
                              <td>{{ flight.time }}</td>
                              <td>{{ flight.duration }}</td>
                            </tr>
                          </mdb-tbl-body>
                        </mdb-tbl>
                        <div class="spinner-border text-light mt-4" role="status" v-if="!(city.flights && city.flights.length > 0)">
                          <span class="sr-only">Loading...</span>
                        </div>
                    </mdb-col>
                  </mdb-row>
                </mdb-card-text>
                <mdb-btn color="info" :disabled="true">
                  <mdb-icon fas icon="question" @click="openDetails"/>
                  {{ $t('common.details') }}
                </mdb-btn>
                <mdb-btn color="primary" v-on:click="select(cityIndex)">
                  <mdb-icon fas icon="check-square" />
                  {{ $t('common.select') }}
                </mdb-btn>
                <div class="custom-control custom-checkbox custom-control-inline" style="position: absolute; bottom: 8px; right: -12px; z-index: 999;">
                  <input type="checkbox" class="custom-control-input" id="defaultInline1" :checked="chosenCity == cityIndex">
                  <label class="custom-control-label" for="defaultInline1"></label>
                </div>
                <div style="position: absolute; bottom: 0px; right: 0px; z-index: 1500; width: 40px; height: 40px;"></div>
              </mdb-card-body>
            </mdb-card>
        </mdb-col>
      </mdb-row>
      <div class="mt-4 pb-4">
        <mdb-btn color="primary" v-on:click="goToNext" :disabled="chosenCity === undefined"><mdb-icon icon="arrow-right" class="mr-1"/> {{ $t('flights.next_step') }}</mdb-btn>
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
    name: 'Flights',
    data: function() {
      return {
        cities: store.state.cities, 
        chosenCity: undefined
      }
    },
    methods: {
      goToNext: function() {
        store.commit('CHOOSE_FLIGHTS', this.chosenCity);
        router.push('resume');
      },
      select: function(cityIndex) {
        this.chosenCity = cityIndex;
      },
      openDetails: function() {
          // not implemented
      }
    },
    mounted: function() {
      this.$store.dispatch('initFlights')
        .then(() => {
          // console.log('flights init');
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