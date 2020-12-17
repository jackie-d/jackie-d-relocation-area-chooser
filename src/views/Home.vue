<template>
  <div>
    <navbar />
    <mdb-container fluid style="height: 100%">
      <div class="home" style="margin: 0 -15px;">
          <mdb-card class="card-image" :style="{ backgroundImage: 'url(' + require('@/assets/gradient1.jpg') + ')' }">
            <div class="text-white text-center py-5 px-4 my-5">
              <div>
                <h2 class="card-title h1-responsive pt-3 mb-5 font-bold"><strong>{{ $t('dashboard.welcome') }}</strong></h2>
                <p class="mx-5 mb-5">
                  {{ $t('dashboard.description') }}
                </p>
                <mdb-btn v-on:click="start" outline="white" size="lg" icon="globe">{{ $t('dashboard.start') }}</mdb-btn>
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
