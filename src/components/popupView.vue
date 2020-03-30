<template>
    <div>
       子组件通过  value  接收时候，父组件直接 v-module 传值，不需要定义 value
        <p>{{listData.name}}</p>
        <p>{{listData.age}}</p>
    </div>
</template>

<script>
export default {
    name:'pop-up',
    props:{
       value: {
            type: Object,
            default: () => ({})
        },
    },
    data(){
        return{
            listData:this.value
        }
    }
}
</script>