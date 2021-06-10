<template>
    <div>
        <div class="cart">
                <div class="row">
                    <div class="col-xs-6">
                        <p class="total-amount"> 
                            Total: <span class="total-amount">300</span> &#8377;
                        </p>
                    </div>
                    <div class="col-xs-6">
                    	<div class="text-right">
                        	<a class="btn" data-toggle="modal" data-target="#ticket-details">PROCEED</a>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.total-amount{
    margin-top: 10px;
}
</style>