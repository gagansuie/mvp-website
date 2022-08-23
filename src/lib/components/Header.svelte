<script lang="ts">
	// @ts-ignore
	import company_logo from '../../assets/company_logo.png';
	import game_logo from '../../assets/shadowkeep_logo.png';

	import MenuItem from '$lib/components/MenuItem.svelte';
	import LinkButton from './LinkButton.svelte';

	// mobile nav
	let menuOpen = false;

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	const menus = [
		{ name: 'Forums', link: '/' },
		{ name: 'Skins', link: '/' },
		{ name: 'Roadmaps', link: '/roadmap' },
		{ name: 'Whitepaper', link: '/' },
		{ name: 'Rarity', link: '/rarity' },
		{ name: 'Team', link: '/team' }
	];
</script>

<header
	class="top-0 left-0 z-40 w-full h-[52px] items-center bg-main-200/90 backdrop-blur-sm shadow-sm sticky fixed"
>
	<div class="flex items-center justify-around h-[52px] w-full bg-transparent">
		<div class="flex w-full items-start justify-start px-4 h-[52px]">
			<div class="w-[52px] p-[11px] bg-prime-400 h-[52px] opacity-100">
				<a href="/" class="navbar-logo block w-[30px]">
					<img src={company_logo} alt="logo" class="" />
				</a>
			</div>
			<div class="px-4 py-2 md:py-2 sm:pt-3 sm:pb-1 lg:w-56 md:w-52 w-28 h-[52px]">
				<a href="/" class="navbar-logo block lg:w-56 md:w-52 w-40">
					<img src={game_logo} alt="game-logo" class="lg:w-56 md:w-52 w-28 ml-[-10px]" />
				</a>
			</div>
		</div>

		<div class="flex w-full px-4 h-[52px]">
			<nav
				class="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6 h-[52px]"
			>
				<ul class="block lg:flex font-medium text-sm h-[52px] pt-[2px] uppercase">
					{#each menus as menu}
						<MenuItem name={menu.name} link={menu.link} addClass="" clickon="" />
					{/each}
				</ul>
			</nav>
		</div>

		<div class="flex w-full items-end justify-end px-4 py-2 h-[52px]">
			<div class="h-[36px] hidden sm:flex">
				<div class="mx-4 mt-[2px] flex items-center">
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

				<LinkButton name="Download" link="/" />
			</div>
			<button on:click={toggleMenu} class="px-4 py-3 h-[52px] focus:ring-0 sm:flex lg:hidden">
				<i
					class="fa-light {menuOpen
						? 'fa-xmark'
						: 'fa-bars-sort'} fa-2x text-white rotate-180 mt-[5px]"
				/>
			</button>
			{#if menuOpen}
				<div
					class="absolute right-0 origin-top-right mt-2 w-full h-screen shadow-xl rounded-none z-1 top-[44px]"
				>
					<div class="bg-main-200/90 backdrop-blur-sm  h-screen rounded-none divide-y text-light-200">
						<div class="p-4 space-y-6 text-center  h-screen">
							{#each menus as menu}
								<MenuItem
									name={menu.name}
									link={menu.link}
									addClass="hover:text-prime-400 text-center justify-center"
									clickon={toggleMenu}
								/>
							{/each}
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</header>
