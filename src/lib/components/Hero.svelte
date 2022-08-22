<script lang="ts">
	import scroll_icon from '../../assets/anchor.png';

	export let video_link: any;
</script>

<section
	class="top-0 h-screen w-full flex flex-col flex-auto items-center justify-center text-center text-white py-0 px-3 opacity-90"
>
	<div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden bg-main-200">
		<video
			class="min-w-full min-h-full absolute object-cover"
			src={video_link}
			type="video/mp4"
			autoplay
			muted
			loop
		/>
	</div>
	<div class="video-content space-y-4 sm:w-[80%] pt-28">
		<h2 class="lg:text-xl md:text-xl sm:text-md font-semibold text-white font-rocknroll uppercase tracking-widest" style="text-shadow:2px 2px 6px #2a2a2ae6;">Season 2: Phase 2</h2>
		<h1 class="font-extrabold text-white lg:text-6xl md:text-5xl sm:text-5xl uppercase font-rocknroll tracking-widest" style="text-shadow:2px 2px 6px #2a2a2ae6;">Shadowkeep</h1>
		<h3 class="lg:text-4xl md:text-4xl sm:text-3xl font-semibold text-prime-400" style="text-shadow:2px 2px 6px #2a2a2ae6;">Seasons Pass Edition</h3>
	</div>
	<div class="text-center space-y-0 video-content pt-72 sm:pt-64">
		<div class="space-x-5 text-white animate-bounce">
			<i class="fa-light fa-2x fa-chevrons-down" style="text-shadow:2px 2px 6px #2a2a2ae6;"></i>
			<!--<img src={scroll_icon} alt="scroll" class="space-x-3 text-white w-[25px] animate-bounce" />-->
		</div>
	</div>
</section>

<style>
	.video-docker video {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.video-docker::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: rgb(42, 42, 42, 0.6);
		z-index: 1;
	}

	.video-content {
		z-index: 2;
	}
</style>
