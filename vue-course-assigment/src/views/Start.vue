<template>


    <div class="[ welcome-card ]">
        <form action="" class="[ container ]">
            <h3 class="[ welcome-card__head-text ]">
                Welcome
            </h3>
            <input class="[ welcome-card__input ]" type="email" name="" id="">
            <input class="[ welcome-card__input ]" type="password" name="" id="">
            <button class="[ welcome-card__button ] [ btn btn-secondary ]">Login</button>
        </form>
    </div>

</template>

<script>
export default {
    name:'start',
    created: () => {
        localStorage.setItem('User', 'Bob')
        localStorage.setItem('Password', 'bob123')
    }
}
</script>

<style lang="stylus">
    
</style>
