<template>
    <ul class="nav nav-tabs">
        <li v-for="(tab, index) in nav.tabs" :key="tab" role="tab" :class="{ 'active': (nav.activeTab == index) }">
            <a @click="updateTab(index)">
                {{tab}}
            </a>
        </li>
    </ul>
</template>

<script>
import { defineComponent, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
    setup()
    {
        let nav = reactive({
            'tabs' :  [ 'Menus', 'Venue', 'Terms & Conditions' ],
            'activeTab' : 0,
        });
        
        function updateTab(tabNumber) {
            nav.activeTab = tabNumber
            this.$emit('tabs', tabNumber)
        }

        return {
            nav,
            updateTab
        };
    }
})
</script>

<style scoped>
    [role=tab]{
        cursor:pointer
    }
</style>>

