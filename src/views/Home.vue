<template>
  <section>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <form class="relative">
                    <input @input="onSearchChange" type="text" name="search" id="search" placeholder="Search by name...">
                    <button class="btn btn-primary" id="searchButton">Search <font-awesome-icon icon="search" aria-hidden="true" /></i></button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12" id="cards" >
                <!-- <div  > -->
                  <CardContainer v-for="card in reavildCardList" :key="card.id" :card="card" />
                <!-- </div> -->
            </div>
        </div>
    </div>
</section>
</template>

<script>
import CardContainer from '@/components/CardContainer'

// cardName: "Atinlay Igpay",
// imgSrc: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=73937&amp;type=card",
// cardLink: "card-specific.html?id=c353618d9f76c03a0c7d549f2d877f9533112d0c"
        

export default {
  name: 'home',
  data(){
    return {
      loadedCards: [],
      reavildCardList: [],
      searchTerm: ""
    }
  },
  components: {
    CardContainer
  },
  methods: {
    onSearchChange({target}) {

      // this.reavildCardList = this.loadedCards

      this.searchTerm == target.value

      this.reavildCardList = this.reavildCardList.filter( card => {
        return card.name.indexOf(this.searchTerm) !== -1
      })
      


      // let characters = characterObj.filter((character) => {
      //       return character.name.indexOf(searchTerm) !== -1;
      //   });

      // if(target.value == ""){
      //   this.reavildCardList = this.loadedCards
      // }
    },
  },
  created(){
    this.loadedCards = this.$parent.cards
    this.reavildCardList = this.$parent.cards
  }
}
</script>
