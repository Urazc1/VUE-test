<script setup lang="ts">
defineProps<{
    width:string,
    height:string,
	msg: string
}>()
</script>

<template>
    <div class="sim-window">
        <div>
            <p>{{msg}}</p>
        </div>

    </div>

</template>

<style scoped>
.sim-window{
    width: 300px;
    height: 300px;
    border: 1px solid black;
    backdrop-filter: blur(5px);
}
</style>