<template>
  <div>
    <div class="modal right fade" id="ticket-details" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header mt-5">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        	<img src="icons/cancel.png">
        </button>
        <h4 class="modal-title">Your Orders</h4>
      </div>
      <div class="modal-body">
        
        <div class="cart-information">
            	<div class="ticket-type"></div>
            </div>
            
            <div class="contactForm">	
                <h3>Share your contact Details</h3>
                <form>
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Enter your name">
                  </div>
                  
                  <div class="form-group">
                     <input type="text" class="form-control" placeholder="Enter your Mobile No.">
                  </div>
                    
                <a type="submit" href="#" class="btn botao-wpp">
                <i class="fa fa-whatsapp"></i>
                whatsapp
                </a>
                </form>
            </div>
        
        
        
      </div>
    </div>
  </div>
</div>
     
    </div>
</template>

<script>
import { defineComponent, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
    
    setup() {
        
    }
    
})
</script>

<style scoped>
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