<template>
  <section>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <form class="relative">
                    <input type="text" name="search" id="search" placeholder="Search by name...">
                    <button class="btn btn-primary" id="searchButton">Search <font-awesome-icon icon="search" aria-hidden="true" /></i></button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12" id="cards">
                <h5 v-if="loadedCards !== null">...Loading</h5>
                <CardContainer v-else v-for="cards in loadedCards" v-bind="1" />
            </div>
        </div>
    </div>
</section>
</template>

<script>
import CardContainer from '@/components/CardContainer'

export default {
  name: 'home',
  data(){
    return ({
      loadedCards: null
    })
  },
  components: {
    CardContainer
  },
  methods: {
    
  },
  created(){
    this.loadedCards = this.$parent.cards
  }
}
</script>
