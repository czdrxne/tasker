<script lang="ts">

    import { theme }                    from "@utilities/theme.ts";
    import { completedTasks, query }    from "@utilities/search.ts";
    import { Delete, Incomplete }       from "@utilities/data.ts";
    import { priorityStyles }           from "@utilities/mapper.ts";

    import trashLight                   from "@assets/trash-light.svg";
    import trashDark                    from "@assets/trash-dark.svg";
    import iconLight                    from "@assets/icon-light.svg";
    import iconDark                     from "@assets/icon-dark.svg";

</script>

<div class="flex flex-col gap-3 max-h-[300px] overflow-y-auto sm:p-3 p-[2px]">

    {#if $completedTasks.length === 0}

        <p class="text-neutral-400 italic sm:text-lg text-md">
            {$query ? "Completed task not found." : "No tasks completed yet."}
        </p>
    
    {:else}
    
        {#each $completedTasks as task (task.id)}
            <div class="flex sm:flex-row flex-col gap-5 items-center bg-l-fg dark:bg-d-bg sm:px-7 px-4 py-4 rounded-xl shadow-[0_2px_5px_rgba(0,0,0,0.2)] hover:scale-[1.01] transition-transform duration-150">
    
                    <div class="flex items-center gap-3 justify-start w-full">

                        <button
                            on:click={() => Incomplete(task.id)}
                            aria-label="incomplete task"
                            type="button"
                            class="rounded-full cursor-pointer"
                        >
                            <img
                                src={$theme === "dark" ? iconLight : iconDark}
                                alt="icon"
                                class="sm:max-w-[20px] sm:min-w-[20px] max-w-[20px]"
                            />
                        </button>


                        <p class="break-all line-through text-neutral-400 sm:text-[1.1rem] text-[1.04rem]">{task.name}</p>

                    </div>

                    <div class="sm:ml-auto flex items-center sm:w-fit sm:gap-3 w-full gap-3 justify-end">
                        
                        <p class="bg-green-200 px-4 py-1 rounded-4xl text-green-500 font-semibold sm:text-sm text-xs" >
                            {task.completed ? "Completed" : "Pending"}
                        </p>
                        
                        <p class={`px-4 py-1 rounded-4xl font-semibold sm:text-sm text-xs ${priorityStyles[task.priority].bg} ${priorityStyles[task.priority].text}`}>
                            {task.priority}
                        </p>
                        
                        <button
                            on:click={() => Delete(task.id)}
                            type="button"
                            aria-label="delete task"
                            class="sm:p-2 p-[6px] dark:bg-d-fg bg-l-bg rounded-full cursor-pointer"
                        >
                            <img
                                src={$theme === "dark" ? trashDark : trashLight}
                                alt="trash"
                                class="sm:min-w-[17px] w-[15px]"
                            />  
                        </button>

                    </div>

                </div>
        {/each}
        
    {/if}

</div>