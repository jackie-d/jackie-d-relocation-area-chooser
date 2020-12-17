<template>
  <mdb-container fluid style="height: 100%">
    <navbar v-bind:showMenu="false" />
        <section class="text-center">
          <h2 class="h1 pt-4">{{ $t('cities.title') }}</h2>

          <p class="grey-text mb-5 mt-5 px-3">{{ $t('cities.desc') }}</p>
        </section>
    <mdb-row>
      <mdb-col md="4" class="mt-2">
          <mdb-card>
            <mdb-card-image :src="require('@/assets/amsterdam.jpg')"></mdb-card-image>
            <mdb-card-body>
              <mdb-card-title>
                {{ $t('common.city_1_title') }}
              </mdb-card-title>
              <mdb-card-text>
                <p v-html="$t('common.city_1_desc')"></p>
              </mdb-card-text>
            </mdb-card-body>
          </mdb-card>
      </mdb-col>
      <mdb-col md="4" class="mt-2">
          <mdb-card>
            <mdb-card-image :src="require('@/assets/madrid.jpg')"></mdb-card-image>
            <mdb-card-body>
              <mdb-card-title>
                {{ $t('common.city_2_title') }}
              </mdb-card-title>
              <mdb-card-text>
                <p v-html="$t('common.city_2_desc')"></p>
              </mdb-card-text>
            </mdb-card-body>
          </mdb-card>
      </mdb-col>
      <mdb-col md="4" class="mt-2">
          <mdb-card>
            <mdb-card-image :src="require('@/assets/budapest.jpg')"></mdb-card-image>
            <mdb-card-body>
              <mdb-card-title>
                {{ $t('common.city_3_title') }}
              </mdb-card-title>
              <mdb-card-text>
                <p v-html="$t('common.city_3_desc')"></p>
              </mdb-card-text>
            </mdb-card-body>
          </mdb-card>
      </mdb-col>
    </mdb-row>
    <div class="mt-4 pb-4">
      <mdb-btn color="primary" v-on:click="goToNext"><mdb-icon icon="arrow-right" class="mr-1"/> {{ $t('cities.start_selection') }}</mdb-btn>
    </div>
  </mdb-container>
</template>

<script lang="ts">

  import Vue from 'vue';
  import navbar from '@/components/navbar.vue';
  import { mdbCardImage, mdbCardText, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbContainer, mdbCard, mdbBtn, mdbRow, mdbCol, mdbCardUp, mdbCardAvatar, mdbCardBody, mdbCardTitle, mdbIcon, mdbInput } from 'mdbvue';
  import router from '../router';

  export default Vue.extend({
    name: 'Cities',
    methods: {
      goToNext: function() {
        router.push('weather');
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
      mdbCardText
    },
  });

</script>