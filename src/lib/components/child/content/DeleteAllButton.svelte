<script lang="ts">
    import { get } from "svelte/store";

    export let store;
    export let deleteFn         : () => void;

    export let emptyMessage     : string = "Nothing to delete.";
    export let confirmMessage   : string = "Delete all items?";
    export let label            : string = "Delete All";

    function onClick() {
        if (get(store).length === 0) {
            alert(emptyMessage);
            return;
        }
        if (confirm(confirmMessage)) deleteFn();
    }
</script>

<button
    on:click={onClick}
    type="button"
    aria-label={label}
    class="bg-acc dark:text-d-fg font-semibold text-l-fg px-3 py-[6px] rounded-2xl text-xs cursor-pointer duration-150 active:scale-[0.94] transition-transform ease"
>
    {label}
</button>
