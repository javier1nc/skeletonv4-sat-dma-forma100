<script lang="ts">
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
	import { PUBLIC_BASE_PATH } from '$env/static/public';

	function goBack() {
		window.history.back();
	}
</script>

<main class="mobile-spacing min-h-0 bg-transparent py-2 text-black sm:py-4 lg:py-6">
	<div class="w-full space-y-4">
		<h2 class="text-xl font-bold">De la declración</h2>
		<hr class="hr border-t-2" />
		<!-- A standard button -->

		<div class="w-full space-y-4">
			<div class="flex items-center justify-between gap-4">
				<!-- A standard button -->
				<button
					type="button"
					class="btn border-2 border-black preset-filled text-black hover:bg-[#9b2247] hover:text-white"
					onclick={goBack}>Regresar</button
				>
			</div>
		</div>
	</div>
</main>

<style>
</style>
