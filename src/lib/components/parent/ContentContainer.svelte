<script lang="ts">

    import Add                      from "@components/child/content/Add.svelte";
    import Ongoing                  from "@components/child/content/Ongoing.svelte";
    import Completed                from "@components/child/content/Completed.svelte";
    import DeleteAllButton          from "@components/child/content/DeleteAllButton.svelte";

    import { DeleteAllOngoing, DeleteAllCompleted }     from "@utilities/data.ts";
    import { ongoingTasks, completedTasks }               from "@utilities/search.ts";

</script>

<div class="flex flex-col gap-10 dark:text-l-fg text-d-fg">

    <div>
        <p class="text-neutral-400 sm:text-lg text-sm sm:mb-1 ">Hello there, what's up?</p>
        <Add />
    </div>
    
    <div>
        <div class="flex items-center gap-4 mb-4">

            <h2 class="text-[1.25rem] sm:text-2xl font-bold">Ongoing</h2>

            <DeleteAllButton
                store={ongoingTasks}
                deleteFn={DeleteAllOngoing}
                confirmMessage="Delete all ongoing tasks?"
                emptyMessage="No ongoing tasks left."
            />

        </div>

        <Ongoing />

    </div>

    <div>
        <div class="flex items-center gap-4 mb-4">

            <h2 class="text-[1.25rem] sm:text-2xl font-bold">Completed</h2>

            <DeleteAllButton
                store={completedTasks}
                deleteFn={DeleteAllCompleted}
                confirmMessage="Delete all completed tasks?"
                emptyMessage="No completed tasks left."
            />

        </div>
        
        <Completed />
    </div>

</div>