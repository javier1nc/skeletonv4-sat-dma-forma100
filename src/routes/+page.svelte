<script lang="ts">
	import { PUBLIC_BASE_PATH } from '$env/static/public';
	let { children } = $props();
</script>

<main
	class="mobile-spacing scroll-y-hidden min-h-0 overflow-y-hidden bg-transparent py-2 text-black sm:py-4 lg:py-6"
>
	<div class="w-full space-y-4">
		<h2 class="text-xl font-bold">Aviso de destino de los ingresos retornados al país</h2>
		<hr class="hr border-t-2" />
		<div class="flex items-center gap-4">
			<!-- A standard button -->

			<div class="w-full space-y-4">
				<div class="flex items-center justify-between gap-4">
					<!-- A standard button -->
					<a type="button" class="btn border-2 preset-filled" href="{PUBLIC_BASE_PATH}/instructions"
						>Instrucciones</a
					>
					<a
						type="button"
						class="btn border-2 border-[#9b2247] preset-filled text-[#9b2247] hover:bg-[#9b2247] hover:text-white"
						href="{PUBLIC_BASE_PATH}/">Enviar declaración</a
					>
				</div>
			</div>
		</div>
	</div>
</main>
