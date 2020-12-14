<template>
    <div :class="['choose-wrap', disabled? 'disabled':'']">
        <div class="choose">
            <span>{{value}}</span>
            <i class="el-icon-caret-bottom"></i>
            <div :class="{'mt-content':true,'active':showWrapperActive}">
                <h2>{{title}}</h2>
                <div :class="['wrapper',className]">
                    <div class="col">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: [
    'title',
    'value',
    'showWrapperActive'
  ]
}
</script>

<style lang="scss">
    @import "@/assets/css/changecity/select.scss";
</style>
