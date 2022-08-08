<script lang="ts">
	// @ts-ignore
	import unreal_logo from '../../assets/unreal-logo.png';

	import MenuItem from '$lib/components/MenuItem.svelte';
</script>

<footer class="relative z-10 bg-main-200 w-full">
	<div
		class="text-center text-sm lg:text-base container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-16"
	>
		<div class="space-y-4">
			<nav class="space-x-4 items-center">
				<div class="flex mx-4 mt-[2px] items-center justify-center">
					<a href="/" class="p-3 text-white hover:opacity-70">
						<i class="fa-brands fa-facebook-f fa-lg" />
					</a>
					<a href="/" class="p-3 text-white hover:opacity-70">
						<i class="fa-brands fa-twitch fa-lg" />
					</a>
					<a href="/" class="p-3 text-white hover:opacity-70">
						<i class="fa-brands fa-instagram fa-lg" />
					</a>
				</div>
			</nav>

			<nav class="space-x-2 sm:space-x-4 flex lg:flex items-center justify-center">
				<MenuItem name="About" link="/" />
				<MenuItem name="Terms of Service" link="/" />
				<MenuItem name="Privacy Policy" link="/" />
			</nav>

			<div class="flex items-center justify-center">
				<img src={unreal_logo} alt="logo" class="w-[42px]" />
				<span class="font-semibold text-lg text-white pl-3">Powered by Unreal Engine</span>
			</div>
		</div>
	</div>
</footer>
