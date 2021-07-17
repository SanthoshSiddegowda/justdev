<template>
  <div>
    <div class="modal right fade" id="ticket-details" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header mt-5">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        	<img src="icons/cancel.png">
        </button>
        <h4 class="modal-title">Contact Details</h4>
      </div>
      <div class="modal-body">
        
        <div class="cart-information">
            	<div class="ticket-type"></div>
            </div>
            
            <div class="contactForm">	
                <form>
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Enter your name">
                  </div>
                  
                  <div class="form-group">
                     <input type="number" class="form-control" placeholder="Enter your Mobile No.">
                  </div>
                    
                <a type="submit" href="https://api.whatsapp.com/send?text=%2B---------------------------------------%2B%0D%0A%7C++++++++++++++++Results++++++++++++++++%7C%0D%0A%2B-------------%2B-------------------------%2B%0D%0A%7C+++++++++++++%7C++++++++Contestant+++++++%7C%0D%0A%7C+Competition+%2B-------%2B--------%2B--------%2B%0D%0A%7C+++++++++++++%7C++John+%7C+Andrea+%7C+Robert+%7C%0D%0A%2B-------------%2B-------%2B--------%2B--------%2B%0D%0A%7C+Swimming++++%7C++1%3A30+%7C+++2%3A05+%7C+++1%3A15+%7C%0D%0A%2B-------------%2B-------%2B--------%2B--------%2B%0D%0A%7C+Running+++++%7C+15%3A30+%7C++14%3A10+%7C++15%3A45+%7C%0D%0A%2B-------------%2B-------%2B--------%2B--------%2B" class="btn botao-wpp">
                <i class="fa fa-whatsapp"></i>
                send whatsapp order
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
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
    
    setup() {
        
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