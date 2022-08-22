<script>
	  import PageCover from '$lib/components/PageCover.svelte';
    import SingleRarity from '$lib/components/SingleRarity.svelte';

    const rarity_list = [
        { id: 1, rarityImage: "https://res.cloudinary.com/dhjoyvcn1/image/upload/v1660661780/2022_Season_17_Duality_Dungeon_Gear_LARGE_004_ggsnpo.jpg", name: "Rarity 1", rarityLink: "/" },
        { id: 1, rarityImage: "https://res.cloudinary.com/dhjoyvcn1/image/upload/v1660661780/2022_Season_17_Duality_Dungeon_Gear_LARGE_004_ggsnpo.jpg", name: "Rarity 2", rarityLink: "/" },
        { id: 1, rarityImage: "https://res.cloudinary.com/dhjoyvcn1/image/upload/v1660661780/2022_Season_17_Duality_Dungeon_Gear_LARGE_004_ggsnpo.jpg", name: "Rarity 3", rarityLink: "/" },
        { id: 1, rarityImage: "https://res.cloudinary.com/dhjoyvcn1/image/upload/v1660661780/2022_Season_17_Duality_Dungeon_Gear_LARGE_004_ggsnpo.jpg", name: "Rarity 4", rarityLink: "/" },
        { id: 1, rarityImage: "https://res.cloudinary.com/dhjoyvcn1/image/upload/v1660661780/2022_Season_17_Duality_Dungeon_Gear_LARGE_004_ggsnpo.jpg", name: "Rarity 5", rarityLink: "/" },
        { id: 1, rarityImage: "https://res.cloudinary.com/dhjoyvcn1/image/upload/v1660661780/2022_Season_17_Duality_Dungeon_Gear_LARGE_004_ggsnpo.jpg", name: "Rarity 6", rarityLink: "/" },
    ]
</script>

<PageCover
	imageLink="https://res.cloudinary.com/dhjoyvcn1/image/upload/v1660661786/2022_Season_of_the_Haunted_Throneworld_PvP_LARGE_011_pjz0c4.jpg"
	name="Search Rarities"
	shortDec="BOUNCE AROUND IN REALITY FALLS, RIDE ATOP CREATURES, BRAVE THE SCREWBALLER COASTER."
/>

<section class="bg-light-200 w-full">
	<div class="space-y-16 flex flex-auto xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32 justify-center items-center">
        <div class="text-center">
			<form class="flex flex-row flex-auto items-center justify-center">
				<select
					class="inline-flex justify-center border-r-1 border-main-200 items-center space-x-2 border-0 font-semibold flex-none px-3 py-2 leading-6 rounded-none active:z-1 focus:z-1 -mr-px border-none bg-white text-main-200 focus:ring-0 w-32"
				>
					<option>Rarity</option>
					<option>Ranker</option>
				</select>
				<input
					class="block border-0 px-3 py-2 leading-6 w-full focus:ring-0 active:z-1 focus:z-1 -mr-px focus:ring-0"
					type="text"
					placeholder="Search"
				/>
				<button
					type="submit"
					class="inline-flex justify-center items-center space-x-2 border-0 py-2 px-6 font-semibold flex-none px-3 py-2 leading-6 rounded-none active:z-1 focus:z-1 bg-prime-400 text-main-200 focus:ring-0"
				>
					Search
				</button>
			</form>
			<h3
				class="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto py-8"
			>
				A passionate team who are here to help you code and build your business using powerful
				tools.
			</h3>
        </div>
	</div>
</section>


<section class="bg-light-200 w-full">
    <div class="container xl:max-w-7xl mx-auto px-4 pb-16">
     

      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0 sm:space-x-2 mb-5">
        <div>
          <span class="inline-block font-semibold text-main-200 px-2 py-1 rounded">0</span> products
        </div>
      </div>
      

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">

        {#each rarity_list as rarity}
            <SingleRarity rarity_image={rarity.rarityImage} name={rarity.name} rarity_link={rarity.rarityLink} />
        {/each}
        
      </div>


  
      <hr class="my-10" />
  
    

      <div>
        <nav class="flex sm:hidden">
          <a href="javascript:void(0)" class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600">
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="hi-solid hi-chevron-left inline-block w-5 h-5"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          </a>
          <div class="flex items-center grow justify-center px-2 sm:px-4">
            <span>Page <span class="font-semibold">1</span> of <span class="font-semibold">20</span></span>
          </div>
          <a href="javascript:void(0)" class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600">
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="hi-solid hi-chevron-right inline-block w-5 h-5"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          </a>
        </nav>
        <nav class="hidden sm:flex sm:justify-between">
          <a href="javascript:void(0)" class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600">
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="hi-solid hi-chevron-left inline-block w-5 h-5"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          </a>
          <div class="inline-flex">
            <a href="javascript:void(0)" class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600">
              <span class="px-0 sm:px-1">1</span>
            </a>
            <a href="javascript:void(0)" class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600">
              <span class="px-0 sm:px-1">2</span>
            </a>
            <a href="javascript:void(0)" class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600">
              <span class="px-0 sm:px-1">3</span>
            </a>
            <div class="flex items-center justify-center px-2 sm:px-4">
              ...
            </div>
            <a href="javascript:void(0)" class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600">
              <span class="px-0 sm:px-1">19</span>
            </a>
            <a href="javascript:void(0)" class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600">
              <span class="px-0 sm:px-1">20</span>
            </a>
          </div>
          <a href="javascript:void(0)" class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600">
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="hi-solid hi-chevron-right inline-block w-5 h-5"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          </a>
        </nav>
      </div>
     

    </div>
</section>
