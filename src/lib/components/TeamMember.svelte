<script lang="ts">
    export let name: any, avatarLink: any, description: any, jobTitle: any, currentGame: any;
</script>

<div class="flex flex-col justify-center m-8 text-center">
    <img
        alt="avatar-{name}"
        class="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:dark:bg-gray-500 shadow-lg hover:ring hover:ring-[#ff8503] transition-colors"
        src={avatarLink}
    />
    <p class="text-xl font-semibold leading-tight">{name}</p>
    <p class="dark:text-gray-400">{jobTitle}</p>

    <p class="flex-row pt-4 font-oxanium">
        {description}
    </p>
    <p class="pt-4 font-oxanium">{currentGame}</p>
</div>