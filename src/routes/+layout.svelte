<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

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
