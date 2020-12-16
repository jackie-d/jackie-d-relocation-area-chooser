<template>
  <mdb-container fluid style="height: 100%">
    <navbar />
    <div class="home">
        <mdb-card class="card-image" :style="{ backgroundImage: 'url(' + require('@/assets/gradient1.jpg') + ')' }">
          <div class="text-white text-center py-5 px-4 my-5">
            <div>
              <h2 class="card-title h1-responsive pt-3 mb-5 font-bold"><strong>{{ $t('dashboard.welcome') }}</strong></h2>
              <p class="mx-5 mb-5">
                {{ $t('dashboard.description') }}
              </p>
              <mdb-btn v-on:click="start" outline="white" size="md" icon="search-location">{{ $t('dashboard.start') }}</mdb-btn>
            </div>
          </div>
        </mdb-card>
    </div>
    <mainFooter />
  </mdb-container>
</template>

<script lang="ts">
import Vue from 'vue';

import { mdbContainer, mdbCard, mdbBtn } from 'mdbvue';
import navbar from '@/components/navbar.vue';
import mainFooter from '@/components/main-footer.vue';

import router from '../router/index';

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
    }
  }
});
</script>
