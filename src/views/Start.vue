<template>


    <div class="[ welcome-card ]">
        <form action="" class="[ container ]" @submit="checkLoggInn">
            <h3 class="[ welcome-card__head-text ]">
                Welcome
            </h3>
            <input class="[ welcome-card__input ] [ form-control ]" type="text" name="" id="username" required>
            <input class="[ welcome-card__input ] [ form-control ]" type="password" name="" id="password" required>
            <button class="[ welcome-card__button ] [ btn btn-secondary ]">Login</button>
        </form>
    </div>

</template>

<script>
import router from '../router' 

export default {
    name:'start',
    created: () => {
        localStorage.setItem('User', 'bob')
        localStorage.setItem('Password', '123')
    },
    methods: {
        checkLoggInn: function(e) {
            if(e.target.username.value == localStorage.getItem('User') && e.target.password.value == localStorage.getItem('Password')){
                this.$parent.isLoggedInn = true
                console.log("You are Loggedin: ", this.$parent.isLoggedInn)
                router.push({ name: 'home'})
            }
        }
    }
}
</script>

<style lang="stylus">
    
</style>
