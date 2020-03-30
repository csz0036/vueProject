<template>
    <div>
        表格
        <popup v-model="parentsObj"/>
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