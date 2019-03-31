<template>
    <div v-if="show" class="col-sm-4" style="margin:0;">
        <div class="card-container">
            <h4>{{card.name}}</h4>
            <img :src="card.imageUrl" width="100%">
            <a :href="card.id" class="btn btn-success">View More</a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            show: true
        }
    },

    props:{
        // cardName: "Atinlay Igpay",
        // imgSrc: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=73937&amp;type=card",
        // cardLink: "card-specific.html?id=c353618d9f76c03a0c7d549f2d877f9533112d0c"
        card: Object
    },
    mounted(){
    },
    // created(){
    //     console.log(this.$props.card.name)
    //     if
    // },
    methods:{
        
    }

    
}
</script>

