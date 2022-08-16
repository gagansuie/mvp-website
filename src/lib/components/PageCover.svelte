<script lang="ts">
    export let imageLink: string, name: string, shortDec: string; 
</script>

<section
	class="top-0 bg-cover bg-center w-full h-[500px] py-0 flex flex-col flex-auto items-center justify-center text-center"
	style="background-image: url({imageLink});"
>
	<div class="bg-main-200/40 w-full h-[500px] backdrop-blur-[1px]">
		<div class="space-y-16 container h-[500px] xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
			<div class="text-center py-24">
				<div class="text-3xl md:text-4xl mb-4 py-2">
					<h1 class="text-4xl md:text-4xl font-extrabold align-middle pr-4 text-white">
                        {name}
                    </h1>
				</div>
				<h3
					class="text-md md:text-md md:leading-relaxed font-medium text-white lg:w-2/3 mx-auto"
				>{shortDec}
				</h3>
			</div>
		</div>
	</div>
</section>