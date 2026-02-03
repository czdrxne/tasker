<script lang="ts">
    import { query } from "@utilities/search.ts";  
</script>

<input
    bind:value={$query}
    type="text"
    placeholder="Search task..."
    class="text-sm sm:text-lg focus:outline-[2px] px-5 py-2 rounded-xl md:w-[45%] sm:w-[55%] focus:outline-acc bg-l-bg dark:bg-d-bg dark:text-white"
/>