export const strict = false

export const state = () => ({
    items: []
  })
  
export const mutations = {
    addItem(state,item) {
        state.items.push(item)
    },
    deleteItem(state) {
        state.items.splice(-1,1)
    }
}