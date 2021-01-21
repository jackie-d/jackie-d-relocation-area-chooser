<template>
  <div>
    <navbar v-bind:showMenu="false" />
    <mdb-container style="height: 100%">
      
      <section class="text-center">
          <h2 class="h1 pt-4">{{ $t('name.title') }}</h2>

          <p class="text-primary font-weight-bold mb-5 mt-5 px-3">{{ $t('name.desc') }}</p>
          <mdb-row class="justify-content-sm-center">

            <mdb-col sm="6">
              <mdb-card testimonial>
                <mdb-card-up gradient="rainy-ashville"></mdb-card-up>
                <mdb-card-avatar color="white" class="mx-auto mt-4"><img :src="require('@/assets/avatar.jpg')" class="rounded-circle"></mdb-card-avatar>
                <mdb-card-body>
                  <mdb-card-title>{{ $t('name.your_name') }}</mdb-card-title>
                  <mdb-input 
                    v-model="name" 
                    ref="name"
                  />
                  <hr/>
                  <mdb-btn color="primary" v-on:click="goToCities" :disabled="name == undefined || name == ''">
                    <mdb-icon icon="play" />
                    {{ $t('name.next') }}
                  </mdb-btn>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>

          </mdb-row>
        </section>
    
        <mdb-modal :show="modal" @close="modal = false">
          <mdb-modal-header>
            <mdb-modal-title>{{ $t('name.invalid_name_title') }}</mdb-modal-title>
          </mdb-modal-header>
          <mdb-modal-body>{{ $t('name.invalid_name_desc') }}</mdb-modal-body>
          <mdb-modal-footer>
            <mdb-btn color="secondary" @click.native="modal = false">{{ $t('common.close') }}</mdb-btn>
          </mdb-modal-footer>
        </mdb-modal>


    </mdb-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbContainer, mdbCard, mdbBtn, mdbRow, mdbCol, mdbCardUp, mdbCardAvatar, mdbCardBody, mdbCardTitle, mdbIcon, mdbInput } from 'mdbvue';
import navbar from '@/components/navbar.vue';
import mainFooter from '@/components/main-footer.vue';
import router from '../router'
import store from '../store';

export default Vue.extend({
  name: 'Home',
  data: function() {
    return {
      name: '',
      modal: false
    }
  },
  mounted() {
    this.$refs.name.$el.focus();
  },
  methods: {
    goToCities: function() {
        if ( this.name && this.name != '' ) {
          store.commit('SET_NAME', this.name);
          router.push('/cities');
        } else {
          this.modal = true;
        }
    }
  },
  components: {
    mdbContainer,
    mdbCard, 
    mdbBtn,
    navbar,
    mainFooter,
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
    mdbModalFooter
  },
});
</script>