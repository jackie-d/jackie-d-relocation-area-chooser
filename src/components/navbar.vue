<template>
    <mdb-navbar color="indigo" dark>
        <mdb-navbar-brand href="https://mdbootstrap.com/">
            Relocation Area Chooser
        </mdb-navbar-brand>
        <mdb-navbar-toggler>
            <mdb-navbar-nav>
                <mdb-nav-item href="#" active>
                    <mdb-icon icon="home" />
                    Home
                </mdb-nav-item>
                <mdb-nav-item href="#">
                    <mdb-icon icon="archway" />
                    Find your area
                </mdb-nav-item>
                <mdb-nav-item href="#">
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
        </mdb-navbar-toggler>
    </mdb-navbar>
</template>

<script lang="ts">
import Vue from 'vue';

import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbIcon } from 'mdbvue';

export default Vue.extend({
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