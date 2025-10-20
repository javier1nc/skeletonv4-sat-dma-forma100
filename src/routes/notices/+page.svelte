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
					<a type="button" class="btn preset-filled border-2 border-[#9b2247] text-[#9b2247] hover:bg-[#9b2247] hover:text-white" href="/about">Administración de la declaración</a>
					<a type="button" class="btn preset-filled border-2 border-[#9b2247] text-[#9b2247] hover:bg-[#9b2247] hover:text-white" href="/about">Guardar</a>
				</div>
			</div>
		</div>

		
	</div>


	<Tabs defaultValue="tab-1" class="mt-8">
	<Tabs.List>
		<Tabs.Trigger value="tab-1" class="font-bold hover:bg-[#9b2247]">Determinación</Tabs.Trigger>
		<Tabs.Trigger value="tab-2" class="font-bold hover:bg-[#9b2247]">Pago</Tabs.Trigger>
		<Tabs.Indicator class="bg-[#9b2247] h-1"/>
	</Tabs.List>
	<Tabs.Content value="tab-1">
		<div class="w-full space-y-4">
			<span class="text-sm">Los campos marcados con asterisco (*) son obligatorios</span>

			<div class="w-full space-y-4 ">
				<div class="flex justify-between items-center gap-4">
					<!-- A standard button -->
					<div class="mt-8 w-full flex flex-col gap-1">
						<label class="label flex justify-between items-center gap-4">
							<span class="w-6/12">* Institución de crédito o casa de bolsa en la que se retorna la inversión</span>
							<span class="w-1/12 flex items-center justify-center"></span>
							<select class="select w-5/12">
								<option value="1">Institución 1</option>
								<option value="2">Institución 2</option>
								<option value="3">Institución 3</option>
								<option value="4">Institución 4</option>
								<option value="5">Institución 5</option>
							</select>
						</label>

						<label class="label flex justify-between items-center gap-4">
							<span class="w-6/12">* No. de cuenta de inversión o contrato</span>
							<span class="w-1/12 flex items-center justify-center"></span>
							<input class="input w-5/12" type="text" placeholder="" />
						</label>

						<label class="label flex justify-between items-center gap-4">
							<span class="w-6/12">* Monto total de la inversión que retorna</span>
							<span class="w-1/12 flex items-center justify-center">(-)</span>
							<input class="input w-5/12" type="text" placeholder="" />
						</label>

						<label class="label flex justify-between items-center gap-4">
							<span class="w-6/12">* Monto de la inversión que retorna, exento del pago de Impuesto Sobre la Renta</span>
							<span class="w-1/12 flex items-center justify-center">(-)</span>
							<input class="input w-5/12" type="text" placeholder="" />
						</label>

						<label class="label flex justify-between items-center gap-4">
							<span class="w-6/12">* Monto de la inversión que retorna, por el cual no se ha pagado el Impuesto Sobre la Renta</span>
							<span class="w-1/12 flex items-center justify-center">(=)</span>
							<input class="input w-5/12 bg-gray-200" type="text" placeholder="" readonly/>
						</label>

						<label class="label flex justify-between items-center gap-4">
							<span class="w-6/12">Base gravable</span>
							<span class="w-1/12 flex items-center justify-center"></span>
							<input class="input w-5/12 bg-gray-200 text-end" type="text" placeholder="" readonly/>
						</label>

						<label class="label flex justify-between items-center gap-4">
							<span class="w-6/12">Tasa %</span>
							<span class="w-1/12 flex items-center justify-center"></span>
							<input class="input w-5/12 bg-gray-200 text-end" type="text" placeholder="15" readonly/>
						</label>

						<label class="label flex justify-between items-center gap-4">
							<span class="w-6/12">Impuesto determinado</span>
							<span class="w-1/12 flex items-center justify-center">(=)</span>
							<input class="input w-5/12 bg-gray-200" type="text" placeholder="" readonly/>
						</label>

						<label class="label flex justify-between items-center gap-4">
							<span class="w-6/12">Impuesto acreditable pagado en el extranjero</span>
							<span class="w-1/12 flex items-center justify-center">(=)</span>
							<input class="input w-5/12 bg-red-100 text-black" type="text" placeholder="Capturar" readonly/>
						</label>

						<label class="label flex justify-between items-center gap-4">
							<span class="w-6/12">Fecha de pago</span>
							<span class="w-1/12 flex items-center justify-center"></span>
							<input class="input w-5/12 bg-gray-200" type="text" placeholder="" readonly/>
						</label>

						<label class="label flex justify-between items-center gap-4">
							<span class="w-6/12">A cargo</span>
							<span class="w-1/12 flex items-center justify-center"></span>
							<input class="input w-5/12 bg-gray-200" type="text" placeholder="" readonly/>
						</label>
					</div>
				</div>
			</div>

			
		</div>
	</Tabs.Content>


	<Tabs.Content value="tab-2">
		<div class="w-full space-y-4">
			<span class="text-sm">Los campos marcados con asterisco (*) son obligatorios</span>

			<div class="w-full space-y-4 ">
				<div class="flex justify-between items-center gap-4">
					<!-- A standard button -->
					<div class="mt-8 w-full flex flex-col gap-2">


						<label class="label flex justify-between items-center gap-4">
							<span class="w-6/12 font-bold">A cargo</span>
							<span class="w-1/12 flex items-center justify-center"></span>
							<input class="input w-5/12 bg-gray-200" type="text" placeholder="" readonly/>
						</label>

						<label class="label flex justify-between items-center gap-4">
							<span class="w-6/12 font-bold">Total contribuciones</span>
							<span class="w-1/12 flex items-center justify-center"></span>
							<input class="input w-5/12 bg-gray-200" type="text" placeholder="" readonly/>
						</label>

						<hr class="hr my-8 border-gray-400" />

						<label class="label flex justify-between items-center gap-4">
							<span class="w-6/12">Total contribuciones</span>
							<span class="w-1/12 flex items-center justify-center"></span>
							<input class="input w-5/12 bg-gray-200" type="text" placeholder="" readonly/>
						</label>

						<label class="label flex justify-between items-center gap-4">
							<span class="w-6/12">Cantidad a cargo</span>
							<span class="w-1/12 flex items-center justify-center"></span>
							<input class="input w-5/12 bg-gray-200 text-end" type="text" placeholder="" readonly/>
						</label>

						<label class="label flex justify-between items-center gap-4">
							<span class="w-6/12 font-bold">Cantidad a pagar</span>
							<span class="w-1/12 flex items-center justify-center"></span>
							<input class="input w-5/12 bg-gray-200 text-end" type="text" placeholder="" readonly/>
						</label>

					</div>
				</div>
			</div>

			
		</div>
	</Tabs.Content>
	</Tabs>

</main>

<style>

</style>

