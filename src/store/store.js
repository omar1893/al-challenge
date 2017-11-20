import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

// axios.defaults.baseURL = 'https://aerolab-challenge.now.sh';
// axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBjZDA5ZWU0OTYwMDAwNjBkMDBhYjciLCJpYXQiOjE1MTA3ODkyNzh9.iTYKfMszchkc0-Uw1jbJNgEXrG9l7GX_2dc6ZAEOutE';

export const store = new Vuex.Store({
    state:{},
    getters:{},
    actions:{
        getItems: () => {
            return new Promise((resolve, reject) =>{
                console.log(this)
                this.$http.get("https://aerolab-challenge.now.sh/products", {params:{}, headers:{"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBjZDA5ZWU0OTYwMDAwNjBkMDBhYjciLCJpYXQiOjE1MTA3ODkyNzh9.iTYKfMszchkc0-Uw1jbJNgEXrG9l7GX_2dc6ZAEOutE"}})
                .then(response => {
                    console.log(response)
                    resolve()
                })
                .catch(error => {
                    console.log("Error: ", error)
                    reject()
                })
            })
        }
    },
    mutations:{}
})