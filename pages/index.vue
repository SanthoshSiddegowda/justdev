<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <CafeBanner />
        <div class="col-sm-7 right-wrapper">
          <div class="event-ticket-wrapper">
            <div class="event-tab">
              <CafeNav
                @tabs = "toggleTabs"
              />     
                <!-- Tab panes -->
                <div class="tab-content">
                  <CafeLists 
                    v-if="activeTab == 0"
                  />
                  <CafeVenue
                    v-if="activeTab === 1"
                  />
                  <CafeTerms
                    v-if="activeTab === 2"
                  />
                </div>
              <CafeProceed />
            </div>
          </div>
        </div>
        <CafeCheckout />
      </div>
    </div>
  </div>
  
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({

  setup() {
    let activeTab = ref(0);

    const toggleTabs = function(tabNumber) {
      activeTab.value = tabNumber;
    }
    
    return {
      activeTab,
      toggleTabs
    };

  } 
})
</script>

<style>

</style>