<template>
    <button @click="alertMan('OH MAAAAAAA!', $event)" >
        Press Me Man
    </button>
</template>

<script>
export default {
    methods:{
        alertMan: arg => {
            // console.log(event)
            alert(arg)
        }
    }
}
</script>
