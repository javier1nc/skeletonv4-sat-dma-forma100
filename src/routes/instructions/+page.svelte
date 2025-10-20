<script lang="ts">
	import { PUBLIC_BASE_PATH } from '$env/static/public';
	
	function goBack() {
		window.history.back();
	}
</script>

<main class="mobile-spacing min-h-0 bg-transparent py-2 text-black sm:py-4 lg:py-6">
	<div class="w-full space-y-4">
		<h2 class="text-xl font-bold">Instrucciones</h2>
		<hr class="hr border-t-2" />
		<!-- A standard button -->

		<div class="w-full space-y-4">
			<div class="flex items-center justify-between gap-4">
				<!-- A standard button -->

				<div class="end-0 flex flex-col gap-4">
					<button
						type="button"
						class="btn border-2 border-black preset-filled text-black hover:bg-[#9b2247] hover:text-white"
						onclick={goBack}>Regresar</button
					>
					<p>1. Instrucciones</p>
					<p>2. Instrucciones</p>
					<p>3. Instrucciones</p>
				</div>
			</div>
		</div>
	</div>
</main>
