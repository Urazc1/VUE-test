<template>
	<Transition name = "window">
		<div id="window">
			<p style="color: white;">Loading...</p>
		</div>
	</Transition>
</template>

<style scoped>
#window {
	position: fixed;
	top: 0;
	bottom: 0px;
	left: 0;
	right: 0;
	margin: auto;
	width: 120px;
	height: 120px;
	background: #3a3a3ad0;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	border: 1px solid violet;
	
	z-index: 5;
}
.window-enter-active,
.window-leave-active {
	transition: 0.5s ease-in-out;
}
.window-enter-from, 
.window-leave-to {
	transform: scale(1.1);
	opacity: 0;
}
.window-enter-to, 
.window-leave-from {
	transform: scale(1);
	opacity: 1;
}
</style>