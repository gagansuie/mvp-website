<script lang="ts">
    export let name: any, link: any, addClass: any, clickon: any;
</script>

<li class="group relative list-none">
    <a
        href={link}
        class="mx-8 flex py-2 lg:mr-0 lg:inline-flex lg:py-4 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 pt-[2px] tracking-wide {addClass}" on:click={clickon}
    >
        {name}
    </a>
</li>