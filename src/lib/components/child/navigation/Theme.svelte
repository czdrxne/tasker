<script lang="ts">

    import toggleLight from "@assets/toggle-light.svg";
    import toggleDark from "@assets/toggle-dark.svg";

    import { theme } from "@utilities/theme.ts";

</script>

<button
    on:click={() => theme.update(t => t === "dark" ? "light" : "dark")}
    type="button"
    aria-label="dark/light mode switch"
    class="bg-l-bg dark:bg-d-bg sm:p-3 p-[10px] rounded-full cursor-pointer"
>
    <img
        src={$theme === "dark" ? toggleDark : toggleLight}
        alt="toggle"
        class="sm:w-[17px] w-[20px]"
    />
</button>