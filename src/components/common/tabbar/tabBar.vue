<template>
<div class="tabbar">
<slot></slot>
</div>
</template>

<script>
export default {
name:"tabBar"
}
</script>

<style>
.tabbar {
    display: flex;
    background-color: #ebe8e8;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    box-shadow: 0px -3px 1px rgba(235, 232, 232, 0.637);
    left: 0;
    right: 0;
    bottom: 0;
}

</style>