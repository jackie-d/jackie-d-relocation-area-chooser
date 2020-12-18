<template>
  <div>
    <navbar />
    <mdb-container style="height: 100%">
      <section class="text-center">
        <h4 class="pt-4">{{ $t('history.title') }}</h4>
      </section>
      <div>

      <div class="list-group mt-4" v-if="history.length">
        <a @click="goto(record.chosenCity)" v-for="(record, index) of history" :key="index" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
          <div>
            <div class="d-flex w-100 justify-content-between">
              <h5 class="h5 mb-3">{{ cities[record.chosenCity].name }}</h5>
            </div>
            <p class="mb-1">{{ formatDate(record.time) }} by {{ record.name }}</p>
          </div>
          <i class="fas fa-chevron-right" style="font-size: 1.3rem;"></i>
        </a>
      </div>

      <p class="text-center mt-4" v-if="history.length == 0">
        {{ $t('history.no_records') }}
      </p>

      </div>
    </mdb-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mdbListGroup, mdbListGroupItem, mdbCardImage, mdbCardText, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbContainer, mdbCard, mdbBtn, mdbRow, mdbCol, mdbCardUp, mdbCardAvatar, mdbCardBody, mdbCardTitle, mdbIcon, mdbInput, mdbTbl, mdbTblBody, mdbTblHead } from 'mdbvue';
import navbar from '@/components/navbar.vue';

import store from '../store';

import moment from 'moment';

export default Vue.extend({
  name: 'Cities',
  data: function() {
    return {
        history: store.state.history,
        cities: store.state.cities
    };
  },
  methods: {
    formatDate(date) {
      return moment(date).format('DD MMM YYYY HH:mm');
    },
    goto(chosenCity) {
      this.$router.push({ path: '/result', query: { historyChosenCity: chosenCity }});
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
      mdbTblHead,
      mdbListGroup, 
      mdbListGroupItem
    },
});
</script>