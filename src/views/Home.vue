<template>
  <div class="home">
    <h1>Relocation Area Chooser</h1>
    <p>Start View from Scratch</p>
      <mdb-card class="card-image" :style="{ backgroundImage: 'url(' + require('@/assets/gradient1.jpg') + ')' }">
        <div class="text-white text-center py-5 px-4 my-5">
          <div>
            <h2 class="card-title h1-responsive pt-3 mb-5 font-bold"><strong>Test Material Design Bootstrap</strong></h2>
            <p class="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
              optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
            </p>
            <mdb-btn outline="white" size="md" icon="clone">Yes</mdb-btn>
          </div>
        </div>
      </mdb-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { mdbCard, mdbBtn } from 'mdbvue';

export default Vue.extend({
  name: 'Home',
  components: {
    mdbCard, mdbBtn
  },
});
</script>
