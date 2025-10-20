<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon-sat.ico';

	import { PUBLIC_BASE_PATH } from '$env/static/public';
	import { PUBLIC_APP_VERSION } from '$env/static/public';

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

	<AppBar class="-mt-[6rem] flex w-full bg-[#611232] ">
		<AppBar.Toolbar class="grid-cols-[2fr_3fr_1fr_1fr]">
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
									<a class="btn preset-tonal font-bold" href={PUBLIC_BASE_PATH}
										>Declaracion de pago</a
									>

									<a class="btn preset-tonal font-bold" href="{PUBLIC_BASE_PATH}/notices">Aviso</a>
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
									<a class="btn preset-tonal font-bold" href="{PUBLIC_BASE_PATH}/from-statement"
										>De la declaración</a
									>

									<a class="btn preset-tonal font-bold" href="{PUBLIC_BASE_PATH}/by-obligation"
										>Por obligacion</a
									>

									<a class="btn preset-tonal font-bold" href="{PUBLIC_BASE_PATH}/statement"
										>Declaraciones pagadas</a
									>

									<a
										class="btn preset-tonal font-bold"
										href="{PUBLIC_BASE_PATH}/receipt-declaration"
										>Acuse de recibo de la declaración</a
									>
								</Popover.Content>
							</Popover.Positioner>
						</Portal>
					</Popover>
				</AppBar.Lead>
			</div>

			<AppBar.Headline class="flex justify-center">
				<a href="/"
					><p>
						Declaración del ISR por ingresos de invensciones en el extranjero retonadas al país
					</p></a
				>
			</AppBar.Headline>

			<AppBar.Headline class="flex justify-center">
				<p>v{PUBLIC_APP_VERSION}</p>
			</AppBar.Headline>

			<AppBar.Trail class="justify-end">
				<!-- 
				<button type="button" class="btn-icon hover:preset-tonal"
					><SearchIcon class="size-6" /></button
				>
				<button type="button" class="btn-icon hover:preset-tonal"
					><CalendarIcon class="size-6" /></button
				>
				-->

				<Popover>
					<Popover.Trigger class="btn-filled btn-icon font-bold hover:preset-tonal"
						><CircleUserIcon class="size-6" /></Popover.Trigger
					>
					<Portal>
						<Popover.Positioner>
							<Popover.Content
								class="flex max-w-md flex-col space-y-2 card bg-[#9b2247] p-4 shadow-xl"
							>
								<Popover.CloseTrigger class="btn preset-tonal font-bold"
									>Perfil</Popover.CloseTrigger
								>
								<Popover.CloseTrigger class="btn preset-tonal font-bold"
									>Cerrar sesión</Popover.CloseTrigger
								>
							</Popover.Content>
						</Popover.Positioner>
					</Portal>
				</Popover>
			</AppBar.Trail>
		</AppBar.Toolbar>
	</AppBar>

	<!-- Main content area with mobile-first responsive design -->
	<div class="w-full overflow-x-hidden">
		<!-- Mobile-first container with progressive enhancement -->
		<div class="mobile-container">
			<!-- Single column on mobile, progressive layout on larger screens -->
			<div
				class="grid grid-cols-1 gap-2 sm:gap-4 lg:gap-6 xl:grid-cols-[100px_minmax(0,1fr)_100px]"
			>
				<!-- Left sidebar - hidden on mobile, visible on xl+ -->
				<aside class="hidden xl:sticky xl:top-4 xl:block xl:self-start">
					<!-- Sidebar content can be added here -->
				</aside>

				<!-- Main content area with mobile-optimized spacing -->
				<main
					class="mobile-spacing h-[calc(100vh-6rem)] min-h-0 bg-transparent py-2 sm:py-4 lg:py-6"
				>
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
