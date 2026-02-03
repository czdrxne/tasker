<script lang="ts">

    import Add from "@components/child/content/Add.svelte";
    import Ongoing from "@components/child/content/Ongoing.svelte";
    import Completed from "@components/child/content/Completed.svelte";
    
</script>

<div class="flex flex-col gap-10 dark:text-l-fg text-d-fg">

    <div>
        <p class="text-neutral-400 sm:text-lg text-sm sm:mb-1 ">Hello there, what's up?</p>
        <Add />
    </div>
    
    <div>
        <h2 class="text-lg sm:text-2xl font-semibold mb-4">Ongoing</h2>
        <Ongoing />
    </div>

    <div>
        <h2 class="text-lg sm:text-2xl font-semibold mb-4">Completed</h2>
        <Completed />
    </div>

</div>