<template lang="html">
  <div>

    <div class="card-container">

      <div class="card" v-for="character in characters" >
        <h3>{{character.name}}</h3>
        <img :src="url" alt="">
        <router-link :to="{ name: 'character', params: { id: character.id} }">

          <button type="button" name="button" class="btn-view">View</button>
        </router-link>

      </div>

      </div>
  </div>
</template>

<script>
import { public_key, secret_key } from '../marvel';
import { mapState } from 'vuex'
import axios from 'axios'
export default {
  name: 'Characters',

  data(){

    return{

      imageSize: 'standard_large.jpg',
      url: ''

    }

  },

  mounted(){

    this.$store.dispatch('getCharacters')

    this.getImage()




  },
  computed: {

    ...mapState({
      characters: state => state.characters,
      imageURL: state => state.url
    })

  },

  methods:{



  }
}
</script>

<style lang="css">

  .card-container{
    margin-left: 310px;
    display: grid;
    grid-template-columns: 200px 200px 200px;

    grid-gap: 10px;
  }

  .card {

    text-align: center;
    background-color: #333;
    min-height: 200px;
  }

  .card h3{

    color: white;
  }

  .btn-view{

    padding: 10px;
    margin-top: 50px;
    border-radius: 15px;
    width: 120px;
    background-color: transparent;
    color: white;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
  }
</style>
