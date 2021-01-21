<template>
  <div>
    <navbar />
    <mdb-container fluid style="height: 100%">
      <div class="home" style="margin: 0 -15px;">
          <mdb-card class="card-image" :style="{ backgroundImage: 'url(' + require('@/assets/bg.jpg') + ')', backgroundSize: 'cover', backgroundPosition: 'right bottom', minHeight: '90vh' }">
            <div class="text-white text-center py-5 px-4 my-5">
              <div>
                <h2 class="card-title h1-responsive pt-5 mb-5 font-weight-bold"><strong>{{ $t('dashboard.welcome') }}</strong></h2>
                <p class="mx-5 mb-5 font-weight-bold">
                  {{ $t('dashboard.description') }}
                </p>
                <div>
                  <mdb-btn v-on:click="start" color="primary" size="lg" icon="play">{{ $t('dashboard.start') }}</mdb-btn>
                </div>
                <div class="mt-5 mb-5">
                  <mdb-btn v-on:click="goToHistory" color="primary" size="md" icon="caret-square-left">{{ $t('dashboard.history') }}</mdb-btn>
                </div>
              </div>
            </div>
          </mdb-card>
      </div>
    </mdb-container>
    <mainFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { mdbContainer, mdbCard, mdbBtn } from 'mdbvue';
import navbar from '@/components/navbar.vue';
import mainFooter from '@/components/main-footer.vue';

import router from '../router/index';

import store from '../store';

export default Vue.extend({
  name: 'Home',
  components: {
    mdbContainer,
    mdbCard, 
    mdbBtn,
    navbar,
    mainFooter
  },
  methods: {
    start: function() {
      router.push('name');
    },
    goToHistory() {
      router.push('history')
    }
  },
  mounted: function() {
    store.commit('INIT_PROCEDURE');
  }
});
</script>
