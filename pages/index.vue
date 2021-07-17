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
                  <CafeReservation
                    v-if="activeTab === 1"
                  />
                  <CafeTerms
                    v-if="activeTab === 2"
                  />
                </div>
              <CafeProceed
                v-if="activeTab === 0"
              />
            </div>
          </div>
        </div>
        <CafeCheckout/>
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
.botao-wpp {
  text-decoration: none;
  color: #eee;
  display: inline-block;
  background-color: #25d366;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 3px;
}

.botao-wpp:hover {
  background-color: darken(#25d366, 5%);
}

.botao-wpp:focus {
  background-color: darken(#25d366, 15%);
}   

.takeaway {
    font-size: 16px;
}
</style>
