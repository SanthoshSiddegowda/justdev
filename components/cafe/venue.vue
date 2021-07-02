<template>
    <div>
        <div class="contactForm">	
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Enter your name">
                    </div>
                  
                    <div class="form-group">
                         <input type="number" class="form-control" placeholder="Enter your Mobile No.">
                    </div>
                    
                    <div class="form-group">
                        <input type="number" class="form-control" placeholder="Date">
                    </div>

                    <div class="form-group">
                        <input type="number" class="form-control" placeholder="Time">
                    </div>

                    <div class="form-group">
                        <textarea type="number" class="form-control" placeholder="Anything if specific (Optional)"></textarea>
                    </div>
                
                <a type="submit" 
                class="btn botao-wpp"
                >
                <i class="fa fa-whatsapp"></i>
                send whatsapp Booking
                </a>
                </form>
            </div>
    </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
    
})
</script>

<style>

</style>