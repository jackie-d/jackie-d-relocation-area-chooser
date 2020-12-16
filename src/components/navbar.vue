<template>
    <mdb-navbar color="indigo" dark>
        <mdb-navbar-brand href="https://mdbootstrap.com/">
            Relocation Area Chooser
        </mdb-navbar-brand>
        <mdb-navbar-toggler>
            <mdb-navbar-nav>
                <router-link 
                    to="/"
                    v-slot="{ href, route, navigate, isActive }"
                >
                    <mdb-nav-item :href="href" :active="isActive">
                        <mdb-icon icon="home" />
                        Home
                    </mdb-nav-item>
                </router-link>
                <router-link 
                    to="/name"
                    v-slot="{ href, route, navigate, isActive }"
                     v-if="isMenuShown"
                >
                    <mdb-nav-item :href="href" :active="isActive">
                        <mdb-icon icon="archway" />
                        Find your area
                    </mdb-nav-item>
                </router-link>
                <router-link 
                    to="/history"
                    v-slot="{ href, route, navigate, isActive }"
                    v-if="isMenuShown"
                >
                    <mdb-nav-item :href="href" :active="isActive">
                        <mdb-icon icon="history" />
                        Your searches
                    </mdb-nav-item>
                </router-link>
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
        </mdb-navbar-toggler>
    </mdb-navbar>
</template>

<script lang="ts">

import Vue from 'vue';

import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbIcon } from 'mdbvue';

export default Vue.extend({
    props: ['showMenu'],
    data: function () {
        return {
            isMenuShown: this.showMenu ? this.showMenu: true
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