<script lang="ts">
	// @ts-ignore
	import company_logo from '../../assets/company_logo.png';
	import unreal_logo from '../../assets/unreal-logo.png';

	import MenuItem from '$lib/components/MenuItem.svelte';

	// 1. window.scrollTo()
	// btnToTop.addEventListener('click', () => {
	//   window.scrollTo(0, 0);
	// })

	// 2. window.scroll()
	// btnToTop.addEventListener('click', () => {
	//   window.scroll({
	//     top: 0,
	//     behavior: 'smooth'
	//   })
	// })

	// 3. document.documentElement.scrollTop()
	// btnToTop.addEventListener('click', () => {
	//   document.documentElement.scrollTop = 0;
	// })

	// 4. document.documentElement.scrollIntoView()
	const backToTop = async () => {
		document.documentElement.scrollIntoView({
			behavior: 'smooth'
		});
	};
</script>

<footer class="relative z-10 bg-main-200 w-full">
	<div class="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-10">
			<div class="space-y-6">
				<div
					class="flex flex-col md:justify-between space-y-6 md:space-y-0 text-center md:text-left text-sm"
				>
					<nav class="space-x-4 text-light-200 text-xl">
						<a href="javascript:void(0)" class="hover:text-prime-400">
							<i class="fa-brands fa-facebook-f" />
						</a>
						<a href="javascript:void(0)" class="hover:text-prime-400">
							<i class="fa-brands fa-twitter" />
						</a>
						<a href="javascript:void(0)" class="hover:text-prime-400">
							<i class="fa-brands fa-twitch" />
						</a>
						<a href="javascript:void(0)" class="hover:text-prime-400">
							<i class="fa-brands fa-youtube" />
						</a>
						<a href="javascript:void(0)" class="hover:text-prime-400">
							<i class="fa-brands fa-instagram" />
						</a>
						<a href="javascript:void(0)" class="hover:text-prime-400">
							<i class="fa-brands fa-snapchat" />
						</a>
						<a href="javascript:void(0)" class="hover:text-prime-400">
							<i class="fa-brands fa-vk" />
						</a>
					</nav>
				</div>
				<div class="flex flex-row flex-auto justify-between space-x-5">
					<nav class="flex flex-col space-y-3">
						<a href="javascript:void(0)" class="font-medium text-gray-300 hover:text-gray-400">
							Solutions
						</a>
						<a href="javascript:void(0)" class="font-medium text-gray-300 hover:text-gray-400">
							Features
						</a>
						<a href="javascript:void(0)" class="font-medium text-gray-300 hover:text-gray-400">
							Pricing Plans
						</a>
						<a href="javascript:void(0)" class="font-medium text-gray-300 hover:text-gray-400">
							Analytics
						</a>
						<a href="javascript:void(0)" class="font-medium text-gray-300 hover:text-gray-400">
							Support Center
						</a>
					</nav>
					<nav class="flex flex-col justify-end space-y-3">
						<a href="javascript:void(0)" class="font-medium text-gray-300 hover:text-gray-400">
							Team
						</a>
						<a href="javascript:void(0)" class="font-medium text-gray-300 hover:text-gray-400">
							Terms of Service
						</a>
						<a href="javascript:void(0)" class="font-medium text-gray-300 hover:text-gray-400">
							Privacy Policy
						</a>
						<a href="javascript:void(0)" class="font-medium text-gray-300 hover:text-gray-400">
							Cookies
						</a>
						<a href="javascript:void(0)" class="font-medium text-gray-300 hover:text-gray-400">
							Refunds
						</a>
					</nav>
				</div>
			</div>
			<div class="space-y-6" />
			<div class="space-y-6">
				<button
					on:click|preventDefault={backToTop}
					class="flex flex-row justify-end bg-main-200 border-0 text-prime-400 font-medium"
				>
					<i class="fa-regular fa-angle-up animate-bounce text-2xl pr-3" /><span class="w-[100%]"
						>Back to Top</span
					>
				</button>
				<h4 class="text-md uppercase font-semibold tracking-wider text-light-200">Company Inc</h4>
				<div class="text-md leading-relaxed text-light-200">
					1080 Sunshine Valley, Suite 2563<br />
					San Francisco, CA 85214<br />
					<abbr title="Phone">P:</abbr> (123) 456-7890
				</div>
			</div>
		</div>
		<hr class="my-10 opacity-10" />
		<div
			class="container xl:max-w-7xl mx-aut0 flex flex-col md:flex-row-reverse md:justify-between sm:justify-center space-y-6 md:space-y-0 text-center md:text-left text-sm lg:text-base"
		>
			<div class="flex flex-row justify-end sm:justify-center xs:justify-center sm:space-x-4 space-x-2">
				<img src="/src/assets/unreal-logo.png" alt="" class="w-10" />
				<span class="font-medium text-light-200 align-middle py-2"
					>Powered By Unreal Engine</span
				>
			</div>
			<span class="font-medium text-light-200 py-2 justify-start sm:justify-center"
				>© 2022, Company. All right reserved.</span
			>
		</div>
	</div>
</footer>