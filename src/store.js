import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import { public_key } from './marvel'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [],
    character: [],
    url: ''
  },
  mutations: {
    getCharacters(state){

      state.characters = []

      axios.get(`http://gateway.marvel.com/v1/public/characters?limit=100&apikey=${public_key}`)
        .then((result) => {


          result.data.data.results.forEach((item) => {


            state.characters.push(item)
          })
        })
        .catch((error) => {

          console.log(error)
        })

    },

    getCharacter(state, id){


      state.character = []

      axios.get(`http://gateway.marvel.com/v1/public/characters/${id}?apikey=${public_key}`)
        .then((result) => {

          console.log(result)

          result.data.data.results.forEach((item) => {

            state.character.push(item)


            state.url = `${item.thumbnail.path}/`

          })
        })
        .catch((error) => {


          console.log(errror)
        })

      }


  },
  actions: {
    getCharacters: context => {

      context.commit('getCharacters')
    },

    getCharacter(context, id) {

      context.commit('getCharacter', id)
    }
  }
})
