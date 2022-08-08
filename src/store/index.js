import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
    cart: [],
    sidebarOpen: false,
    currentLang: "rus",
    languages: ['rus', 'ukr'],
    translations: null,
    productsLoaded: false,
    translationsLoaded: false,
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    setTranslations(state, translations) {
      state.translations = translations
    },
    setProductsLoaded(state, value) {
      state.productsLoaded = value
    },
    setTranslationsLoaded(state, value) {
      state.translationsLoaded = value
    },
    setSidebarOpen(state, value) {
      state.sidebarOpen = value
    },
    setCart(state, value) {
      state.cart = value
    },
    setCurrentLang(state, lang) {
      state.currentLang = lang
    }
  },
  actions: {
    fetchProducts({ commit }) {
      fetch("products.json")
        .then(res => res.json())
        .then(data => commit('setProducts', data))
        .then(() => {
          commit('setProductsLoaded', true)
        })
    },
    fetchTranslations({ commit }) {
      fetch('translations.json')
        .then(res => res.json())
        .then(translations => commit('setTranslations', translations))
        .then(() => {
          commit('setTranslationsLoaded', true)
        })
    },
    addToCart(context, product) {
      const itemInCart = context.state.cart.find(prod => prod.id === product.id)
      if (!itemInCart) {
        const cart = [...context.state.cart]
        cart.push(product)
        context.commit('setCart', cart)
      }
    },
    removeFromCart(context, id) {
      const filteredCart = context.state.cart.filter(item => item.id !== id)
      context.commit('setCart', filteredCart)
    },
    toggleSidebarOpen({ commit, state }) {
      commit('setSidebarOpen', !state.sidebarOpen)
    }
  },
  getters: {
    cartTotal(state) {
      return state.cart.reduce((acc, product) => {
        return acc += product.price
      }, 0)
    }
  },
});
