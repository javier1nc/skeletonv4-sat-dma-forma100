<script lang="ts">
	import { PUBLIC_BASE_PATH } from '$env/static/public';
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
</script>

<main class="mobile-spacing min-h-0 bg-transparent py-2 text-black sm:py-4 lg:py-6">
	<div class="w-full space-y-4">
		<h2 class="text-xl font-bold">Avisos de destino de los ingresos retornados al país</h2>
		<hr class="hr border-t-2" />
		<!-- A standard button -->
		<div class="w-full space-y-4">
			<div class="flex items-center justify-between gap-4">
				<!-- A standard button -->
				<a type="button" class="btn border-2 preset-filled" href="{PUBLIC_BASE_PATH}/instructions"
					>Instrucciones</a
				>
				<div class="flex items-center gap-4">
					<a
						type="button"
						class="btn border-2 border-[#9b2247] preset-filled text-[#9b2247] hover:bg-[#9b2247] hover:text-white"
						href="/">Enviar declaración</a
					>
				</div>
			</div>
		</div>
	</div>

	<Tabs defaultValue="tab-1" class="mt-8">
		<Tabs.List>
			<Tabs.Trigger value="tab-1" class="font-bold hover:bg-red-100 hover:text-red-600"
				>Información de la declaración por la que se está presentando el aviso</Tabs.Trigger
			>
			<Tabs.Indicator class="h-1 bg-[#9b2247]" />
		</Tabs.List>

		<Tabs.Content value="tab-1">
			<div class="w-full space-y-4">
				<div class="w-full space-y-4">
					<div class="flex items-center justify-between gap-4">
						<!-- A standard button -->
						<div class="mt-4 flex w-full flex-col gap-4">
							<div class="flex flex-row gap-4">
								<label class="label flex w-1/2 items-center justify-between gap-4">
									<span class="w-6/12">No. de operación de la declaración del ISR pagado</span>
									<input class="input w-6/12" type="text" placeholder="" />
								</label>

								<label class="label flex w-1/2 items-center justify-between gap-4">
									<span class="w-6/12">Fecha del retorno</span>
									<input class="input w-6/12" type="text" placeholder="" />
								</label>
							</div>

							<div class="flex flex-row gap-4">
								<label class="label flex w-1/2 items-center justify-between gap-4">
									<span class="w-6/12">País de origen de los recursos repatriados</span>
									<select class="select w-6/12">
										<option value="1">País 1</option>
										<option value="2">País 2</option>
										<option value="3">País 3</option>
										<option value="4">País 4</option>
										<option value="5">País 5</option>
									</select>
								</label>

								<label class="label flex w-1/2 items-center justify-between gap-4">
									<span class="w-6/12">Entidad</span>
									<input class="input w-6/12" type="text" placeholder="" />
								</label>
							</div>

							<div class="flex flex-row gap-4">
								<label class="label flex w-1/2 items-center justify-between gap-4">
									<span class="w-6/12">¿Cuentas con tratado para intercambio?</span>
									<select class="select w-6/12">
										<option value="1">Sí</option>
										<option value="2">No</option>
									</select>
								</label>

								<label class="label flex w-1/2 items-center justify-between gap-4">
									<span class="w-6/12">Origen del recurso</span>
									<select class="select w-6/12">
										<option value="1">Origen 1</option>
										<option value="2">Origen 2</option>
										<option value="3">Origen 3</option>
										<option value="4">Origen 4</option>
										<option value="5">Origen 5</option>
									</select>
								</label>
							</div>

							<div class="flex flex-row gap-4">
								<label class="label flex w-1/2 items-center justify-between gap-4">
									<span class="w-6/12">Monto total de la inversión que</span>
									<input class="input w-6/12" type="text" placeholder="" />
								</label>

								<label class="label flex w-1/2 items-center justify-between gap-4">
									<span class="w-6/12"
										>No. de cuenta, contrato o fideicomiso de donde provienen los recursos</span
									>
									<input class="input w-6/12" type="text" placeholder="" />
								</label>
							</div>

							<div class="flex flex-row gap-4">
								<label class="label flex w-1/2 items-center justify-between gap-4">
									<span class="w-6/12"
										>Institución de Crédito o Casa del Bolsa en la que se retornó la inversión</span
									>
									<select class="select w-6/12">
										<option value="1">Institución 1</option>
										<option value="2">Institución 2</option>
										<option value="3">Institución 3</option>
										<option value="4">Institución 4</option>
										<option value="5">Institución 5</option>
									</select>
								</label>

								<label class="label flex w-1/2 items-center justify-between gap-4">
									<span class="w-6/12">No. cuenta o inversión en la que se retornó</span>
									<input class="input w-6/12" type="text" placeholder="" />
								</label>
							</div>

							<div class="flex flex-row gap-4">
								<label class="label flex w-1/2 items-center justify-between gap-4">
									<span class="w-6/12">Monto en moneda extranjera</span>
									<input class="input w-6/12" type="text" placeholder="" />
								</label>

								<label class="label flex w-1/2 items-center justify-between gap-4">
									<span class="w-6/12">Tipo de moneda que se retorna</span>
									<select class="select w-6/12">
										<option value="1">Moneda 1</option>
										<option value="2">Moneda 2</option>
										<option value="3">Moneda 3</option>
										<option value="4">Moneda 4</option>
										<option value="5">Moneda 5</option>
									</select>
								</label>
							</div>

							<div class="flex flex-row gap-4">
								<label class="label flex w-1/2 items-center justify-between gap-4">
									<span class="w-6/12">Tipo de moneda recibida</span>
									<select class="select w-6/12">
										<option value="1">Moneda 1</option>
										<option value="2">Moneda 2</option>
										<option value="3">Moneda 3</option>
										<option value="4">Moneda 4</option>
										<option value="5">Moneda 5</option>
									</select>
								</label>

								<label class="label flex w-1/2 items-center justify-between gap-4">
									<span class="w-6/12">Tipo de cambio aplicado</span>
									<input class="input w-6/12" type="text" placeholder="" />
								</label>
							</div>

							<div class="flex flex-row gap-4">
								<label class="label flex w-1/2 items-center justify-between gap-4">
									<span class="w-6/12">Monto de las comisiones cobradas</span>
									<input class="input w-6/12" type="text" placeholder="" />
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
