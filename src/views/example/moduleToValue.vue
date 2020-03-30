<template>
    <div>
        父组件
        <popup v-model="parentsObj" class="popup"/>
    </div>
</template>

<script>
import popup from "@/components/popupView"
export default {
    name:'tablePage',
    data(){
        return{
            parentsObj:{
                name:'test',
                age:18
            }
        }
    },
    components:{
        popup
    }
}
</script>

<style scoped>
.popup{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border: 1px solid #333;
    box-shadow: #333 3px 3px 3px;
}
</style>