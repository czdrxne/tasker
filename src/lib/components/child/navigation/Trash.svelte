<script lang="ts">

    import { theme }            from "@utilities/theme.ts";
    import { DeleteAll }        from "@utilities/data.ts";
    import { tasks }            from "@utilities/search.ts";
    import trashLight           from "@assets/trash-light.svg";
    import trashDark            from "@assets/trash-dark.svg";

    function onDelete() {
        if ($tasks.length === 0) {
            alert("You have no task left to delete.");
            return;
        }
        const confirmed = confirm("Delete all tasks?");
        if (confirmed) DeleteAll()
    }

</script>

<button
    on:click={onDelete}
    type="button"
    aria-label="delete all"
    class="bg-l-bg dark:bg-d-bg p-3 rounded-full cursor-pointer"
>
    <img
        src={$theme === "dark" ? trashDark : trashLight}
        alt="trash"
        class="sm:w-[17px] w-[14px]"
    />
</button>