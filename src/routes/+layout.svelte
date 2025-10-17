<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon-sat.ico';

	import { CalendarIcon, CircleUserIcon, MenuIcon, SearchIcon } from '@lucide/svelte';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import { Popover, Portal } from '@skeletonlabs/skeleton-svelte';

	import Header from '../lib/components/Layout/Header.svelte';
	import Footer from '../lib/components/Layout/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- Mobile-first layout with proper viewport handling -->
<div class="grid min-h-dvh grid-rows-[auto_minmax(0,1fr)_auto] overflow-x-hidden">
	<!-- Header (responsive across all screen sizes) -->
	<Header />

	<AppBar class="-mt-[6rem] bg-[#611232] ">
		<AppBar.Toolbar class="grid-cols-[1fr_2fr_1fr] ">
			<div class="flex items-center">
				<AppBar.Lead>
					<Popover>
						<Popover.Trigger class="btn-filled btn font-bold hover:preset-tonal"
							>Presentar declaración</Popover.Trigger
						>
						<Portal>
							<Popover.Positioner>
								<Popover.Content
									class="flex max-w-md flex-col space-y-2 card bg-[#9b2247] p-4 shadow-xl"
								>
									<Popover.CloseTrigger class="btn preset-tonal font-bold"
										>Declaracion de pago</Popover.CloseTrigger
									>
									<Popover.CloseTrigger class="btn preset-tonal font-bold"
										>Aviso</Popover.CloseTrigger
									>
								</Popover.Content>
							</Popover.Positioner>
						</Portal>
					</Popover>
				</AppBar.Lead>

				<AppBar.Lead>
					<Popover>
						<Popover.Trigger class="btn-filled btn font-bold hover:preset-tonal"
							>Consultas</Popover.Trigger
						>
						<Portal>
							<Popover.Positioner>
								<Popover.Content
									class="flex max-w-md flex-col space-y-2 card bg-[#9b2247] p-4 shadow-xl"
								>
									<Popover.CloseTrigger class="btn preset-tonal"
										>De la declaración</Popover.CloseTrigger
									>
									<Popover.CloseTrigger class="btn preset-tonal"
										>Por obligacion</Popover.CloseTrigger
									>
									<Popover.CloseTrigger class="btn preset-tonal"
										>Declaraciones pagadas</Popover.CloseTrigger
									>
									<Popover.CloseTrigger class="btn preset-tonal"
										>Acuse de recibo de la declaración</Popover.CloseTrigger
									>
								</Popover.Content>
							</Popover.Positioner>
						</Portal>
					</Popover>
				</AppBar.Lead>
			</div>

			<AppBar.Headline class="flex justify-center">
				<p>Declaración del ISR por ingresos de invensciones en el extranjero retonadas al país</p>
			</AppBar.Headline>
			<AppBar.Trail class="justify-end">
				<button type="button" class="btn-icon hover:preset-tonal"
					><SearchIcon class="size-6" /></button
				>
				<button type="button" class="btn-icon hover:preset-tonal"
					><CalendarIcon class="size-6" /></button
				>
				<button type="button" class="btn-icon hover:preset-tonal"
					><CircleUserIcon class="size-6" /></button
				>
			</AppBar.Trail>
		</AppBar.Toolbar>
	</AppBar>

	<!-- Main content area with mobile-first responsive design -->
	<div class="w-full overflow-x-hidden">
		<!-- Mobile-first container with progressive enhancement -->
		<div class="mobile-container">
			<!-- Single column on mobile, progressive layout on larger screens -->
			<div
				class="grid grid-cols-1 gap-2 sm:gap-4 lg:gap-6 xl:grid-cols-[200px_minmax(0,1fr)_200px]"
			>
				<!-- Left sidebar - hidden on mobile, visible on xl+ -->
				<aside class="hidden xl:sticky xl:top-4 xl:block xl:self-start">
					<!-- Sidebar content can be added here -->
				</aside>

				<!-- Main content area with mobile-optimized spacing -->
				<main class="mobile-spacing min-h-0 bg-transparent py-2 sm:py-4 lg:py-6">
					{@render children?.()}
				</main>

				<!-- Right sidebar - hidden on mobile, visible on xl+ -->
				<aside class="hidden xl:sticky xl:top-4 xl:block xl:self-start">
					<!-- Sidebar content can be added here -->
				</aside>
			</div>
		</div>
	</div>

	<!-- Footer (responsive across all screen sizes) -->
	<Footer />
</div>
