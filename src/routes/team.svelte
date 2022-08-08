<script lang="ts">
	import TeamMember from '$lib/components/TeamMember.svelte';
</script>

<section class="py-6 bg-light-200 text-main-200">
	<div class="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
		<h1 class="text-4xl font-extrabold leading-none text-center sm:text-4xl">
			Active Team Members
		</h1>
		<svg
			style="margin-top: 12px;"
			class="text-center"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			width="125px"
			height="5px"
			viewBox="0 0 124.985 3.411"
			enable-background="new 0 0 124.985 3.411"
			xml:space="preserve"
		>
			<polygon
				fill="#ff8503"
				points="0,0 124.985,0 124.985,1.121 96.484,1.121 86.944,3.411 38.67,3.411 29.162,1.121 0,1.121"
			/>
		</svg>
		<p class="max-w-2xl text-center dark:dark:text-gray-400">
			At a assumenda quas cum earum ut commodi saepe rem aspernatur quam natus quis nihil
			quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!
		</p>
		<div class="flex flex-row flex-wrap-reverse justify-center">
			<TeamMember
				name="Leroy Jenkins"
				avatarLink="https://source.unsplash.com/100x100/?portrait?0"
				description="Nam commodo turpis id."
				jobTitle="Visual Designer"
				currentGame="Overwatch"
			/>
			<TeamMember
				name="Leroy Jenkins"
				avatarLink="https://source.unsplash.com/100x100/?portrait?0"
				description="Nam commodo turpis id."
				jobTitle="Visual Designer"
				currentGame="Overwatch"
			/>
			<TeamMember
				name="Leroy Jenkins"
				avatarLink="https://source.unsplash.com/100x100/?portrait?0"
				description="Nam commodo turpis id."
				jobTitle="Visual Designer"
				currentGame="Overwatch"
			/>
			<TeamMember
				name="Leroy Jenkins"
				avatarLink="https://source.unsplash.com/100x100/?portrait?0"
				description="Nam commodo turpis id."
				jobTitle="Visual Designer"
				currentGame="Overwatch"
			/>
		</div>
	</div> 
</section>
