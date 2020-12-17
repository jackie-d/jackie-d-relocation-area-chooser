<template>
    <mdb-footer color="blue" class="font-small pt-4" style="margin-top: 0 !important;">
        <mdb-container class="text-left">
            <mdb-row>
            <mdb-col sm="6">
                <h5 class="title">{{ $t('footer.title') }}</h5>
                <p>{{ $t('footer.description') }}</p>
            </mdb-col>
            </mdb-row>
        </mdb-container>
        <div class="footer-copyright text-center py-3">
            <mdb-container fluid>
            &copy; 2020 Copyright <a href="https://www.jackiedeglinnocenti.com"> Jackie D. </a>
            </mdb-container>
        </div>
    </mdb-footer>
</template>

<script lang="ts">

    import Vue from 'vue';

    import {mdbFooter, mdbContainer, mdbRow, mdbCol} from 'mdbvue';

    export default Vue.extend({
        components: {
            mdbFooter, 
            mdbContainer, 
            mdbRow, 
            mdbCol
        }
    });

</script>