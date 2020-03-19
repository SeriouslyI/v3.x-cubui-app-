<template>
    <div class="mine">
        <p>我的</p>
        <cube-button @click="logout">退出登录</cube-button>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        logout(){
            window.localStorage.removeItem('token')
            this.$store.commit('settoken','')
            window.location.reload()
        }
    },
}
</script>
<style lang="stylus">
.mine
    .cube-btn
        background red
</style>