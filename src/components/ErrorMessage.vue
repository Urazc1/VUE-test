<script setup lang="ts">
defineProps<{
	msg: string
}>()
</script>

<template>
	<Transition name="window">
		<div id="window">
			<p>{{ msg }}</p>
		</div>
	</Transition>
</template>

<style scoped>
#window{
	position: absolute;
	bottom: 50px;
	right: 60px;
	margin: auto;
	background: #ff676765;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 1px 1px 5px black;
	border-radius: 10px;
}
/** PC */
@media (min-width: 768px) {
	#window {
		width: 300px;
		height: 80px;
	}
}

/** Mobile */
@media (max-width: 767px) {
	#window {
		width: 100%;
		height: 80px;
	}
}

.window-enter-active,
.window-leave-active {
	transition: 0.3s ease-in-out;
}

.window-enter-from,
.window-leave-to {
	transform: scale(1.05);
	filter: blur(5px);
	opacity: 0;
}

.window-enter-to,
.window-leave-from {
	transform: scale(1);
	filter: blur(0px);
	opacity: 1;
}
</style>