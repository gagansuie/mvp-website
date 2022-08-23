<script lang="ts">
	export let rarity_image: any, name: any, rarity_link: any;
</script>

<div>
	<div class="group relative overflow-hidden mb-2">
		<img src={rarity_image} alt={name} />
		<div
			class="p-4 flex items-center justify-center absolute inset-0 bg-prime-400 bg-opacity-80 transform transition ease-out opacity-0 scale-150 group-hover:opacity-100 group-hover:scale-100"
		/>
	</div>
	<a href={rarity_link} class="block font-semibold text-main-200 hover:text-gray-500">
		{name}
	</a>
</div>
