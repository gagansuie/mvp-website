<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import play_earn_img from '../assets/images/2022_Season_of_the_Haunted_Gear_COMPRESSED_9x16_001.jpg';
</script>

<Hero video_link="https://res.cloudinary.com/dhjoyvcn1/video/upload/c_crop,h_545/v1659752955/destiny-2-trailter_nyunfa.mp4" />

<section
	class="flex flex-col lg:flex-row-reverse space-y-16 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32 bg-[#dddddd]"
>
	<div class="lg:w-1/2 lg:flex lg:items-center">
		<div>
			<h2 class=" md:text-4xl text-4xl font-extrabold leading-none sm:text-4xl mb-4 text-main-200">
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
			<h3 class="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600">
				Focus on building your amazing service and we will do the rest. We grew more than 10,000
				online businesses.
			</h3>
		</div>
	</div>
	<div class="lg:w-1/2 lg:mr-16 lg:flex lg:justify-center lg:items-center">
		<div class="lg:w-96 relative">
			<img
				src={play_earn_img}
				alt="Hero"
				class="relative rounded-lg mx-auto shadow-lg"
			/>
		</div>
	</div>
</section>

