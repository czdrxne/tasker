<script lang="ts">
    
    import type { Task }                    from "@utilities/data.ts";
    import { theme }                        from "@utilities/theme.ts";
    import { ongoingTasks, query }          from "@utilities/search.ts";
    import { Delete, Update, Complete }     from "@utilities/data.ts";
    import { priorityStyles }               from "@utilities/mapper.ts";

    import penLight                         from "@assets/pen-light.svg";
    import penDark                          from "@assets/pen-dark.svg";
    import trashLight                       from "@assets/trash-light.svg";
    import trashDark                        from "@assets/trash-dark.svg";

    import Modal                            from "@components/child/content/Modal.svelte";

    

    let showEdit            : boolean = false;
    let editId              : string | null = null;
    let editName            : string = "";
    let editPriority        : Task["priority"] = "Normal";

    function startEdit(task: Task) {
        editId = task.id;
        editName = task.name;
        editPriority = task.priority;
        showEdit = true;
    }

    function saveEdit(name: string, priority: Task["priority"]) {
        if (!editId) return;
        Update(editId, { name, priority});
        resetEditState();
    }

    function resetEditState() {
        editId = null;
        editName = "";
        editPriority = "Normal";
        showEdit = false;
    }

</script>

<div class="flex flex-col gap-3 max-h-[300px] overflow-y-auto sm:p-3 p-[2px]">

    {#if $ongoingTasks.length === 0}

        <p class="text-neutral-400 italic sm:text-lg text-md">
            {$query ? "Task not found." : "You currently have no task ongoing."}
        </p>

    {:else}

        {#each $ongoingTasks.slice().reverse() as task (task.id)}
            <div class="flex flex-col sm:gap-5 gap-3 sm:flex-row items-center bg-l-fg dark:bg-d-bg px-4 sm:px-7 py-4 rounded-xl shadow-[0_2px_5px_rgba(0,0,0,0.2)] hover:scale-[1.01] transition-transform duration-150">
    
                <div class="flex items-center gap-4 w-full">
                    <button
                        on:click={() => Complete(task.id)}
                        type="button"
                        aria-label="complete task"
                        class="sm:min-h-5 sm:min-w-5 min-w-[20px] min-h-[20px] rounded-full border-2 border-acc border-solid cursor-pointer"
                    ></button>

                    <p class="break-all sm:text-[1.1rem] text-[1.04rem]">{task.name}</p>
                </div>

                <div class="ml-auto flex md:gap-4 sm:w-fit w-full items-center gap-2 justify-end">
                    
                    <p class="bg-l-bg px-4 py-1 rounded-4xl text-neutral-500 font-semibold md:text-sm text-xs" >
                        {task.completed ? "Completed" : "Pending"}
                    </p>
                    
                    <p class={`px-4 py-1 rounded-4xl font-semibold md:text-sm text-xs ${priorityStyles[task.priority].bg} ${priorityStyles[task.priority].text}`}>
                        {task.priority}
                    </p>
                    
                    <button
                        on:click={() => startEdit(task)}
                        type="button"
                        aria-label="edit task"
                        class="sm:p-2 p-[6px] dark:bg-d-fg bg-l-bg rounded-full cursor-pointer"
                    >
                        <img
                            src={$theme === "dark" ? penDark : penLight}
                            alt="pen"
                            class="max-w-[15px] min-w-[15px] sm:max-w-[17px] sm:min-w-[17px]"
                        />
                        
                    </button>
                    <button
                        on:click={() => Delete(task.id)}
                        aria-label="delete task"
                        class="sm:p-2 p-[6px] dark:bg-d-fg bg-l-bg rounded-full cursor-pointer"
                    >
                        <img
                            src={$theme === "dark" ? trashDark : trashLight}
                            alt="trash"
                            class="max-w-[15px] min-w-[15px] sm:max-w-[17px] sm:min-w-[17px]"
                        />
                        
                    </button>

                </div>

            </div>
        {/each}

    {/if}

    {#if showEdit}
    
        <Modal
            mode="edit"
            modal={showEdit}
            initialName={editName}
            initialPriority={editPriority}
            onSubmit={(name, priority) => saveEdit(name, priority)}
            onClose={() => showEdit = false}
        />

    {/if}

</div>