<script>
	import LinkButton from '$lib/components/LinkButton.svelte';
  import PageCover from '$lib/components/PageCover.svelte';
</script>

<PageCover
	imageLink="https://res.cloudinary.com/dhjoyvcn1/image/upload/v1660661776/2022_Season_17_Duality_Dungeon_Compressed_001_r2zrbz.jpg"
	name="Roadmap"
	shortDec="BOUNCE AROUND IN REALITY FALLS, RIDE ATOP CREATURES, BRAVE THE SCREWBALLER COASTER."
/>

<section class="bg-[#dddddd] w-full">
	<div class="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
		<div class="items-center justify-center text-center">
			<i
				class="fa-duotone fa-gamepad-modern fa-swap-opacity -mb-5 fa-4x align-middle"
				style="--fa-primary-color: #2a2a2a; --fa-secondary-color: #ff8503; --fa-secondary-opacity: 0.95; text-shadow:-2px 2px 4px #A9A9A9;"
			/>
		</div>

        <div class="container mx-auto w-full">
            <div class="relative wrap p-10">
              <div class="border-4 absolute border-main-200 bg-main-200 h-full shadow-xl opacity-80" style="left: 49.7%"></div>
              <!-- right timeline -->
              <div class="mb-8 flex justify-between items-center w-full right-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex items-center order-1 bg-prime-400 shadow-xl w-8 h-8 rounded-full">
                  <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
                </div>
                <div class="order-1 bg-main-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h3 class="mb-3 font-bold text-white text-xl">Phase 1</h3>
                  <p class="text-sm leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
          
              <!-- left timeline -->
              <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex items-center order-1 bg-prime-400 shadow-xl w-8 h-8 rounded-full">
                  <h1 class="mx-auto text-white font-semibold text-lg">2</h1>
                </div>
                <div class="order-1 bg-prime-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h3 class="mb-3 font-bold text-white text-xl">Phase 2: Seasons Pass Edition</h3>
                  <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              
              <!-- right timeline -->
              <div class="mb-8 flex justify-between items-center w-full right-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
                </div>
                <div class="order-1 bg-main-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h3 class="mb-3 font-bold text-white text-xl">Phase 3</h3>
                  <p class="text-sm leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
          
              <!-- left timeline -->
              <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 class="mx-auto text-white font-semibold text-lg">4</h1>
                </div>
                <div class="order-1 bg-main-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h3 class="mb-3 font-bold text-white text-xl">Phase 4</h3>
                  <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
            <div class="text-center items-center justify-center pb-8 pt-32">
				<LinkButton name="Join Now" link="/" />
			</div>
    </div>
	</div>
</section>
