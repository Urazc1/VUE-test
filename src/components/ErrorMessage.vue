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
div {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	margin: auto;
	background: #ff6767;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 1px 1px 5px black;
}

/** PC */
@media (min-width: 768px) {
	div {
		width: 300px;
		height: 80px;
	}
}

/** Mobile */
@media (max-width: 767px) {
	div {
		width: 100%;
		height: 80px;
	}
}

.window-enter-active,
.window-leave-active {
	transition: 0.5s ease-in-out;
}
.window-enter-from, 
.window-leave-to {
	transform: translateY(-100px);
	opacity: 0;
}
.window-enter-to, 
.window-leave-from {
	opacity: 1;
}
</style>