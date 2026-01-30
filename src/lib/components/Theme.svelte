<script lang="ts">
    import toggleLight from "@assets/toggle-light.svg";
    import toggleDark from "@assets/toggle-dark.svg";

    import { theme } from "@utilities/theme.ts";
</script>
<button
    type="button"
    aria-label="dark/light mode switch"
    class="bg-l-bg dark:bg-d-bg p-3 rounded-full cursor-pointer"
    on:click={() => theme.update(t => t === "dark" ? "light" : "dark")}
>
    {#if $theme === "dark"}
        <img src={toggleDark} alt="toggle theme" class="w-[17px]" />
    {:else}
        <img src={toggleLight} alt="toggle theme" class="w-[17px]" />
    {/if}
</button>