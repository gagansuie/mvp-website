<script lang="ts">
	import '../assets/app.css';
	import '../assets/animate.css';
	import '../assets/styles/tailwind-output.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// @ts-ignore
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';

	// NProgress Loading bar
	import 'nprogress/nprogress.css';

	NProgress.configure({
		minimum: 0.75,
		showSpinner: false,
		speed: 5,
		trickleSpeed: 200
	});

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}

	/*const goToTop = async () => {


	}*/

	
</script>

<svelte:head>
	<title>MVP</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css?family=Oxanium:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css?family=RocknRoll+One:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap"
		rel="stylesheet"
	/>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/gh/codack04/github-cdn-service/font-awesome/6.1.0/css/all.min.css"
	/>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/gh/codack04/github-cdn-service/font-awesome/6.1.0/css/brands.min.css"
	/>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/gh/codack04/github-cdn-service/font-awesome/6.1.0/css/duotone.min.css"
	/>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/gh/codack04/github-cdn-service/font-awesome/6.1.0/css/fontawesome.min.css"
	/>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/gh/codack04/github-cdn-service/font-awesome/6.1.0/css/light.min.css"
	/>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/gh/codack04/github-cdn-service/font-awesome/6.1.0/css/regular.min.css"
	/>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/gh/codack04/github-cdn-service/font-awesome/6.1.0/css/solid.min.css"
	/>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/gh/codack04/github-cdn-service/font-awesome/6.1.0/css/thin.min.css"
	/>
</svelte:head>

<main class="w-full min-h-screen font-oxanium items-center bg-light-200 mx-auto sm:overflow-x-hidden">
	<Header />
	<slot />
	<Footer />

</main>
