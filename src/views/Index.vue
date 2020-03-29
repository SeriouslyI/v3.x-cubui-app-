<template>
    <div id="index">
        <cube-slide ref="slide" :data="items" @change="changePage">
            <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
                <a :href="item.url">
                    <img :src="item.image">
                </a>
            </cube-slide-item>
        </cube-slide>
        
        <cube-slide ref="slide" :data="lists" @change="changePage" :auto-play="false">
            <cube-slide-item v-for="(list, index) in lists" :key="index">
                <ul class="listul">
                    <li class="listli" v-for="(item,index1) in list" :key="index1">
                        <a :href="item.url">
                            <img :src="item.image" alt="">
                            <p>{{item.label}}</p>
                        </a>
                    </li>
                </ul>
            </cube-slide-item>
        </cube-slide>
    </div>
</template>
<script>
    export default {
        async created() {
            try{
                const lists = await this.axios.get('/api/rollinglist')
                this.lists = lists.data.data
                // console.log (lists)
            }catch(err){
                console.log(err)
            }
        },
        data() {
            return {
                items: [{
                        url: '#',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
                    },
                    {
                        url: '#',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
                    },
                    {
                        url: '#',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
                    }
                ],
                lists:[]
            }
        },
        methods: {
            changePage(current) {
                console.log('当前轮播图序号为:' + current)
            },
            clickHandler(item, index) {
                console.log(item, index)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .listul
        display flex
        flex-wrap wrap
        
    .listli
        width 20%
        justify-content center
        img
            width 35px
            height 35px
            border-radius 50%
            padding 5px 0
        p
            font-size 14px
            padding-bottom 10px
</style>