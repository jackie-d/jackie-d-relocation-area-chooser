<template>
    <mdb-navbar color="indigo" dark>
        <mdb-navbar-brand>
            Relocation Area Chooser
        </mdb-navbar-brand>
        <mdb-navbar-toggler>
            <mdb-navbar-nav>
                    <mdb-nav-item :to="{'path': '/'}" active>
                        <mdb-icon icon="home" />
                        Home
                    </mdb-nav-item>
                    
                    <mdb-nav-item :to="{'path': '/name'}" active>
                        <mdb-icon icon="archway" />
                        Find your area
                    </mdb-nav-item>

                    <mdb-nav-item :to="{'path': '/history'}" active>
                        <mdb-icon icon="history" />
                        Your searches
                    </mdb-nav-item>

                <mdb-dropdown tag="li" class="nav-item" slot="">
                    <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle" waves-fixed>
                        <mdb-icon icon="cog" />
                        Settings
                    </mdb-dropdown-toggle>
                    <mdb-dropdown-menu>
                        <mdb-dropdown-item>Language</mdb-dropdown-item>
                        <mdb-dropdown-item>Sounds</mdb-dropdown-item>
                    </mdb-dropdown-menu>
                </mdb-dropdown>
            </mdb-navbar-nav>
            <span class="navbar-text" v-if="name !== undefined">
                {{ $t('common.hello_name', {name: name}) }}
            </span>
        </mdb-navbar-toggler>
    </mdb-navbar>
</template>

<script lang="ts">

import Vue from 'vue';
import store from '../store';

import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbIcon } from 'mdbvue';

export default Vue.extend({
    props: ['showMenu'],
    data: function () {
        return {
            isMenuShown: this.showMenu ? this.showMenu: true,
            name: store.state.name
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
        mdbIcon
    },
});
</script>