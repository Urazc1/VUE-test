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
#window {
	position: absolute;
	margin: auto;
	background: #ff676765;
	display: flex;
	justify-content: center;
	align-items: center;

}

/** PC */
@media (min-width: 768px) {
	#window {
		bottom: 50px;
		right: 60px;
		width: 300px;
		height: 80px;
		box-shadow: 1px 1px 5px black;
		border-radius: 10px;
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
}

/** Mobile */
@media (max-width: 767px) {
	#window {
		width: 100%;
		height: 80px;
		bottom: 0px;
		left: 0;
		right: 0;
		border-radius: 10px 10px 0 0;
		box-shadow: -2px -1px 5px rgb(158, 158, 158);
	}

	.window-enter-from,
	.window-leave-to {
		transform: translateY(80px);
		filter: blur(5px);
		opacity: 0;
	}

	.window-enter-to,
	.window-leave-from {
		transform: translateY(0px);
		filter: blur(0px);
		opacity: 1;
	}
}

.window-enter-active,
.window-leave-active {
	transition: 0.5s ease-in-out;
}
</style>