<script lang="ts">
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
</script>

<main class="mobile-spacing min-h-0 bg-transparent py-2 text-black sm:py-4 lg:py-6">
	<div class="w-full space-y-4">
		<h2 class="text-xl font-bold">Avisos de destino de los ingresos retornados al país</h2>
		<hr class="hr border-t-2" />
		<!-- A standard button -->
		 <div class="w-full space-y-4 ">
			<div class="flex justify-between items-center gap-4">
				<!-- A standard button -->
				<a type="button" class="btn preset-filled border-2" href="/instructions">Instrucciones</a>
				<div class="flex items-center gap-4">
					<a type="button" class="btn preset-filled border-2 border-[#9b2247] text-[#9b2247] hover:bg-[#9b2247] hover:text-white" href="/">Enviar declaración</a>
				</div>
			</div>
		</div>
	</div>


	<Tabs defaultValue="tab-1" class="mt-8">
	<Tabs.List>
		<Tabs.Trigger value="tab-1" class="font-bold hover:bg-red-100 hover:text-red-600">Información de la declaración por la que se está presentando el aviso</Tabs.Trigger>
		<Tabs.Indicator class="bg-[#9b2247] h-1"/>
	</Tabs.List>


	<Tabs.Content value="tab-1">
		<div class="w-full space-y-4">
			<span class="text-sm">Los campos marcados con asterisco (*) son obligatorios</span>

			<div class="w-full space-y-4 ">
				<div class="flex justify-between items-center gap-4">
					<!-- A standard button -->
					<div class="mt-8 w-full flex flex-row gap-8">


						<div class="w-1/2">
							<label class="label flex justify-between items-center gap-4">
								<span class="w-6/12">A cargo</span>
								<input class="input w-6/12 bg-gray-200" type="text" placeholder="" readonly/>
							</label>

							<label class="label flex justify-between items-center gap-4">
								<span class="w-6/12">Total contribuciones</span>
								<input class="input w-6/12 bg-gray-200" type="text" placeholder="" readonly/>
							</label>
						</div>

						<div class="w-1/2">
							<label class="label flex justify-between items-center gap-4">
									<span class="w-6/12">Total contribuciones</span>
								<input class="input w-6/12 bg-gray-200" type="text" placeholder="" readonly/>
							</label>

							<label class="label flex justify-between items-center gap-4">
								<span class="w-6/12">Cantidad a cargo</span>
								<input class="input w-6/12 bg-gray-200 text-end" type="text" placeholder="" readonly/>
							</label>

							<label class="label flex justify-between items-center gap-4">
								<span class="w-6/12">Cantidad a pagar</span>
								<input class="input w-6/12 bg-gray-200 text-end" type="text" placeholder="" readonly/>
							</label>
						</div>	

					</div>
				</div>
			</div>

			
		</div>
	</Tabs.Content>
	</Tabs>

</main>

<style>

</style>

