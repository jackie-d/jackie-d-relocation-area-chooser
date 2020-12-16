<template>
  <mdb-container fluid style="height: 100%">
    <navbar v-bind:showMenu="false" />
    <div>

    </div>
  </mdb-container>
</template>

<script lang="ts">
import Vue from 'vue';

import { mdbContainer } from 'mdbvue';
import navbar from '@/components/navbar.vue';

export default Vue.extend({
  name: 'Weather',
  components: {
    mdbContainer,
    navbar
  },
});
</script>