<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import season_info from '../assets/shadowkeep.png';
</script>

<Hero
	video_link="https://res.cloudinary.com/dhjoyvcn1/video/upload/c_crop,h_545/v1659752955/destiny-2-trailter_nyunfa.mp4"
/>

<section
	class="flex flex-col lg:flex-row-reverse w-full space-y-16 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32 bg-light-200"
>
	<div class="lg:w-1/2 lg:flex lg:items-center">
		<div>
			<h2 class="text-3xl md:text-4xl font-extrabold leading-none sm:text-4xl mb-4 text-main-200">
				Play and Earn
				<!--<svg
					class="text-center"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					width="125px"
					height="4px"
					viewBox="0 0 124.985 3.411"
					enable-background="new 0 0 124.985 3.411"
					xml:space="preserve"
				>
					<polygon
						fill="#ff8503"
						points="0,0 124.985,0 124.985,1.121 96.484,1.121 86.944,3.411 38.67,3.411 29.162,1.121 0,1.121 "
					/>
				</svg>-->
			</h2>
			<h3 class="text-md md:text-md md:leading-relaxed font-medium text-main-200 uppercase">
				BOUNCE AROUND IN REALITY FALLS, RIDE ATOP CREATURES, BRAVE THE SCREWBALLER COASTER, AND REVEL WITH A FRESH ARSENAL. SPRINT, CLIMB, AND SMASH YOUR WAY TO A VICTORY ROYALE WHETHER YOU CHOOSE TO BUILD UP IN FORTNITE BATTLE ROYALE OR GO NO-BUILDS IN FORTNITE ZERO BUILD.
			</h3>
			<div class="py-8">
				<LinkButton name="Join Now" link="/" />
			</div>
		</div>
	</div>
	<div class="lg:w-1/2 lg:mr-16 lg:flex lg:justify-center lg:items-center">
		<div class="lg:w-[27rem] relative">
			<img src="https://res.cloudinary.com/dhjoyvcn1/image/upload/v1660661778/2022_Season_17_Duality_Dungeon_Gear_COMPRESSED_1x1_001_mbyfdl.jpg" alt="Hero" class="relative rounded-lg mx-auto shadow-lg" />
		</div>
	</div>
</section>


<section
	class="bg-cover bg-center w-full h-screen"
	style="background-image: url('https://res.cloudinary.com/dhjoyvcn1/image/upload/v1660661779/2022_Season_of_the_Haunted_Characters_Caiatl_COMPRESSED_001_f3a0p3.jpg');"
>
	<div class="bg-main-200/40 h-screen backdrop-blur-[1px]">
		<div class="space-y-16 container h-screen xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
			<div class="text-center py-24">
				<div class="text-lg uppercase font-bold tracking-widest mb-1 text-prime-400">Season 2</div>
				<div class="text-3xl md:text-4xl mb-4 py-2">
					<img src={season_info} alt="Season" class="relative mx-auto" />
				</div>
				<h3
					class="text-md md:text-md md:leading-relaxed font-medium text-white lg:w-2/3 mx-auto uppercase"
				>IN SEASON 3: Shadowkeep’, BOUNCE AROUND IN REALITY FALLS, RIDE ATOP CREATURES, BRAVE THE SCREWBALLER COASTER, AND REVEL WITH A FRESH ARSENAL. SPRINT, CLIMB, AND SMASH YOUR WAY TO A VICTORY ROYALE WHETHER YOU CHOOSE TO BUILD UP IN FORTNITE BATTLE ROYALE OR GO NO-BUILDS IN FORTNITE ZERO BUILD.
				</h3>
				<div class="py-8">
					<LinkButton name="Learn More" link="/" />
				</div>
			</div>
		</div>
	</div>
</section>


<section class="bg-white w-full">
	<div class="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
	  
	  <div class="text-center">
		<div class="flex flex-row flex-auto align-middle items-center justify-center">
			
			<h2 class="text-3xl md:text-4xl font-extrabold align-middle pr-4 text-prime-400">
				Release on <span class="font-medium text-main-200" style="text-shadow:2px 2px 4px #A9A9A9;">Sep 18th, 2022</span>
			</h2>
			<i class="fa-regular fa-rocket-launch fa-swap-opacity mb-5 inline-block fa-3x align-middle" style="--fa-primary-color: #2a2a2a; --fa-secondary-color: #ff8503; --fa-secondary-opacity: 0.80; text-shadow:-2px 2px 4px #A9A9A9;"></i>
		</div>
		<h3 class="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
		  A passionate team who are here to help you code and build your business using powerful tools.
		</h3>
	  </div>
	  
	</div>
</section>


<section class="flex flex-col lg:flex-row-reverse space-y-12 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 pt-4 pb-16 lg:px-8 lg:py-32 bg-light-200 w-full">
	<div class="lg:w-1/2 lg:mr-16 lg:flex lg:text-center lg:justify-center lg:items-center">
		<div class="lg:w-[29rem] relative">
			<img src="https://res.cloudinary.com/dhjoyvcn1/image/upload/v1660661776/2022_Season_of_the_Haunted_Characters_Caiatl_LARGE_002_duu7dh.jpg" alt="Hero" class="relative rounded-lg mx-auto shadow-lg" />
		</div>
	</div>
	<div class="lg:w-1/2 lg:flex lg:items-center">
		<div class="py-24 px-4">
			<div class="text-xl uppercase font-extrabold tracking-widest mb-1 text-prime-400">Phase 2:</div>
			<div class="text-3xl md:text-4xl mb-4 py-2">
				<h2 class="text-3xl md:text-4xl font-extrabold align-middle pr-4 text-main-200 uppercase">
					Seasons Pass Edition
				</h2>
			</div>
			<h3
				class="text-md md:text-md md:leading-relaxed font-medium text-main-200 uppercase"
			>BOUNCE AROUND IN REALITY FALLS, RIDE ATOP CREATURES, BRAVE THE SCREWBALLER COASTER, AND REVEL.
			</h3>
			<div class="py-8">
				<LinkButton name="View phases list" link="/roadmap" />
			</div>
		</div>


	 
	</div>
	
</section>