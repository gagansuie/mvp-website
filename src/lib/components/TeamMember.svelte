<script lang="ts">
    export let name: any, avatarLink: any, description: any, currentGame: any;
</script>

<div class="mb-4">
    <span class="inline-block mb-4">
      <img src={avatarLink} alt="User Avatar" class="self-center flex-shrink-0 w-24 h-24 bg-center bg-cover rounded-full dark:dark:bg-gray-500 shadow-lg hover:ring hover:ring-[#ff8503] transition-colors" />
    </span>
    <p class="text-xl font-semibold leading-tight">{name}</p>
    <p class="pt-4">
        {description}
    </p>
    <p class="pt-4 font-medium text-prime-400">{currentGame}</p>
</div>