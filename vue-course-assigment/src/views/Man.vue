<template>
    <div>
        <h2>Say halo man... {{say}}</h2>
        <Alert />
    </div>
</template>

<script>
import Alert from '@/components/Alert'

export default {
    data(){
        return {
            say: "YHAMAN"
        }
    },
    components: {
        Alert
    }
}
</script>
