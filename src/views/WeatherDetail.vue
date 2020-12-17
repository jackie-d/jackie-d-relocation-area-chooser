<template>
  <div>
    <navbar v-bind:showMenu="false" />
    <mdb-container fluid style="height: 100%">
      <div>

      </div>
    </mdb-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { mdbContainer } from 'mdbvue';
import navbar from '@/components/navbar.vue';

export default Vue.extend({
  name: 'Cities',
  components: {
    mdbContainer,
    navbar
  },
});
</script>