<nav class="mb-8">
	<div class="flex items-center gap-1.5 text-sm font-mono">
		<a href="/" class="accent hover:underline font-bold">~</a>
		<span class="text-ctp-subtext0 font-bold">/</span>
		<span class="cursor"></span>
	</div>
</nav>

<style>
	.cursor {
		display: inline-block;
		width: 0.6em;
		height: 1em;
		background-color: currentColor;
		animation: blink 1.2s ease-in-out infinite;
	}

	@keyframes blink {
		0%, 100% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}
</style>
