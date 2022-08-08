export default {
    methods: {
        shorterProductName(prodName) {
            let arr = prodName.split(" ")
            if (arr.length < 3) return prodName
            let newArr = arr.filter((item) => {
                return item.length != 0;
            });
            return newArr.slice(0, 3).join(" ") + "...";
        },
        objectNotEmpty(someObject) {
            if (someObject) {
                return Object.keys(someObject).length
            } else {
                return false
            }
        }
    },
    computed: {
        currentLang() {
            return this.$store.state.currentLang
        },
        localize() {
            return this.$store.state.translations[this.currentLang]
        },
        cart() {
            return this.$store.state.cart
        },
        cartTotal() {
            return this.$store.getters.cartTotal;
        },
    }
}