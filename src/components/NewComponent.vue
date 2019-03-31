<template>
    <div>
        <HelloWorld :msg="enState"/>>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    data() {
        return {
            enState: "I see you"
        }
    },
    components: {
        HelloWorld
    }
}
</script>

<style lang="stylus" scoped>

</style>
