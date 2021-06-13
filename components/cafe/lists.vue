<template>
  <div>
    <div class="row">
      <div
        v-for="(list, index) in lists.items"
        :key="list.item"
        class="col-md-6"
      >
        <div class="ticketBox">
          <div class="inactiveStatus"></div>
          <div class="row">
            <div class="col-xs-6">
              <div class="ticket-name">
                {{ list.name }}
                <span>{{ list.level }}</span>
              </div>
            </div>
            <div class="col-xs-6">
              <div class="ticket-price-count-box">
                <div class="ticket-control">
                  <div class="input-group">
                    <span class="input-group-btn">
                      <button
                        type="button"
                        class="btn btn-default btn-number"
                        @click="removeQuantity(index)"
                        :class="[list.quantity == 0 ? 'disabled' : '']"
                      >
                        <span class="glyphicon glyphicon-minus"></span>
                      </button>
                    </span>
                    <input
                      type="text"
                      class="form-control input-number"
                      v-model="list.quantity"
                    />
                    <span class="input-group-btn">
                      <button
                        type="button"
                        class="btn btn-default btn-number mt-1"
                        @click="addQuantity(index)"
                      >
                        <span class="glyphicon glyphicon-plus"></span>
                      </button>
                    </span>
                  </div>
                </div>
                <p class="price">Rs.{{ list.base_price }}</p>
              </div>
            </div>
          </div>
          <div class="ticket-description">
            <p><strong>Description:</strong> <br />{{ list.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, useStore } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const store = useStore();

    let lists = reactive({
      items: [
        {
          uuid: 1,
          name: "Margherita",
          level: "Standard",
          price: 250,
          base_price: 250,
          quantity: 0,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        },
        {
          uuid: 2,
          name: "Double Cheese Margherita",
          level: "Standard",
          price: 300,
          base_price: 300,
          quantity: 0,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        },
        {
          uuid: 3,
          name: "Farm House",
          level: "Standard",
          price: 200,
          base_price: 200,
          quantity: 0,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        },
        {
          uuid: 4,
          name: "Peppy Paneer",
          level: "Standard",
          price: 230,
          quantity: 0,
          base_price: 230,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        },
        {
          uuid: 5,
          name: "Mexican Green Wave",
          level: "Standard",
          price: 280,
          quantity: 0,
          base_price: 280,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        },
      ],
      cart: [],
    });

    function addQuantity(index) {
      lists.items[index].quantity += 1;
      if (lists.items[index].quantity != 1) {
        lists.items[index].price += lists.items[index].base_price;
      }
      store.commit("addToCart", lists.items[index]);
    }

    function removeQuantity(index) {
        lists.items[index].quantity -= 1;
        lists.items[index].price -= lists.items[index].base_price
        store.commit("reduceTotal", lists.items[index].base_price);
    }

    return {
      lists,
      addQuantity,
      removeQuantity,
    };
  },
});
</script>

<style></style>
