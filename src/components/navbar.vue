<template>
    <div>
        <mdb-navbar color="indigo" dark>
            <mdb-navbar-brand>
                Relocation Area Chooser
            </mdb-navbar-brand>
            <mdb-navbar-toggler>
                <mdb-navbar-nav>

                    <mdb-nav-item :to="{'path': '/'}" active>
                        <mdb-icon icon="home" />
                        {{ $t('nav.home') }}
                    </mdb-nav-item>
                    
                    <mdb-nav-item :to="{'path': '/name'}" active v-if="isMenuShown">
                        <mdb-icon icon="archway" />
                        {{ $t('nav.find_your_area') }}
                    </mdb-nav-item>

                    <mdb-nav-item :to="{'path': '/history'}" active v-if="isMenuShown">
                        <mdb-icon icon="history" />
                        {{ $t('nav.your_searches') }}
                    </mdb-nav-item>

                    <mdb-dropdown tag="li" class="nav-item" slot="">
                        <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle" waves-fixed>
                            <mdb-icon icon="cog" />
                            {{ $t('nav.settings') }}
                        </mdb-dropdown-toggle>
                        <mdb-dropdown-menu>
                            <mdb-dropdown-item @click="isLanguageModalOpen = true">{{ $t('nav.language') }}</mdb-dropdown-item>
                            <mdb-dropdown-item>{{ $t('nav.sounds') }}</mdb-dropdown-item>
                        </mdb-dropdown-menu>
                    </mdb-dropdown>
                </mdb-navbar-nav>
                <span class="navbar-text" v-if="name !== undefined">
                    {{ $t('common.hello_name', {name: name}) }}
                </span>
            </mdb-navbar-toggler>
        </mdb-navbar>
        <mdb-modal :show="isLanguageModalOpen" @close="isLanguageModalOpen = false">
        <mdb-modal-header>
            <mdb-modal-title>{{ $t('nav.language') }}</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>
              <select class="browser-default custom-select"  @change="handleLanguageSelect">
                <option :selected="'en' == currentLanguage" value="en">English</option>
                <option :selected="'de' == currentLanguage" value="de">Deutsch</option>
                <option value="fr" :disabled="true">Francois</option>
            </select>
        </mdb-modal-body>
        <mdb-modal-footer>
            <mdb-btn color="primary" @click="changeLanguage">{{ $t('nav.change_language') }}</mdb-btn>
        </mdb-modal-footer>
        </mdb-modal>
    </div>
</template>

<script lang="ts">

import Vue from 'vue';
import store from '../store';

import i18n from '../i18n';

import { mdbSelect, mdbBtn, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbIcon } from 'mdbvue';

export default Vue.extend({
    props: ['showMenu'],
    data: function () {
        return {
            isMenuShown: this.showMenu !== undefined ? this.showMenu : true,
            name: store.state.name,
            isLanguageModalOpen: false,
            currentLanguage: i18n.locale,
            currentLanguageOption: 'en'
        }
    },
    methods: {
        changeLanguage() {
            i18n.locale = this.currentLanguageOption;
            this.currentLanguage = this.currentLanguageOption;
            this.isLanguageModalOpen = false;
        },
        handleLanguageSelect(e) {
            if(e.target.options.selectedIndex > -1) {
                this.currentLanguageOption = e.target.options[e.target.options.selectedIndex].value;
            }
        }
    },
    components: {
        mdbNavbar, 
        mdbNavbarBrand,
        mdbNavbarToggler,
        mdbNavbarNav,
        mdbNavItem,
        mdbDropdown,
        mdbDropdownMenu,
        mdbDropdownToggle,
        mdbDropdownItem,
        mdbIcon,
        mdbModal, 
        mdbModalHeader, 
        mdbModalTitle, 
        mdbModalBody, 
        mdbModalFooter,
        mdbBtn,
        mdbSelect
    },
});
</script>