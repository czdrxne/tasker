<script lang="ts">

    let inputRef                            :  null = null;
    export let modal                        : boolean = false;
    export let initialName, taskName        : string = "";
    export let mode                         : "create" | "edit" = "create";
    export let initialPriority, priority    : "Normal" | "Important" | "Urgent" | "Critical" = "Normal";

    export let onSubmit                     : (name: string, priority: typeof initialPriority) => void;
    export let onClose                      : () => void;
    
    $: if (modal) {
        taskName = initialName;
        priority = initialPriority;
    }

    $: if (modal && inputRef) inputRef.focus();

    $: title        = mode === "create" ? "Create New Task" : "Edit Task";
    $: submitText   = mode === "create" ? "Add Task" : "Save Changes";

    function handleSubmit() {
        if (!taskName.trim()) return;
        onSubmit(taskName, priority);
        onClose();
    }

    const inputClasses = "w-full px-3 py-2 rounded-lg outline-1 outline-neutral-400 dark:bg-d-fg";

</script>

{#if modal}
<div class="fixed inset-0 w-full h-full flex items-center justify-center z-20">
    <div class="absolute z-20 dark:bg-d-fg bg-l-fg sm:w-[30vw] w-[85%] p-6 rounded-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5">

        <h1 class="font-bold text-center sm:text-[1.5rem] text-[1.3rem] mb-2">{title}</h1>

        <div>
            <h4 class="font-semibold mb-2 text-sm">Task Name</h4>
            <input
                bind:this={inputRef}
                bind:value={taskName}
                type="text"
                placeholder="Enter your new task..."
                class={inputClasses}
            />
        </div>

        <div>

            <h4 class="font-semibold mb-2 text-sm">Priority</h4>

            <select
                bind:value={priority}
                class={inputClasses +  " cursor-pointer"}
            >
                <option value="Normal">Normal</option>
                <option value="Important">Important</option>
                <option value="Urgent">Urgent</option>
                <option value="Critical">Critical</option>
            </select>

        </div>

        <div class="flex justify-end gap-4 mt-5">
            
            <button
                on:click={onClose}
                aria-label="cancel edit"
                class="px-4 py-2 text-sm border-1 border-neutral-400 rounded-lg cursor-pointer"
            >
                Cancel
            </button>

            <button
                on:click={handleSubmit}
                aria-label="add / update"
                class="px-4 py-2 text-sm bg-acc text-l-fg rounded-lg cursor-pointer"
            >
                {submitText}
            </button>

        </div>
    </div>

    <button
        on:click={onClose}
        aria-label="backdrop overlay"
        class="absolute inset-0 bg-[rgba(0,0,0,0.4)] cursor-default"
    ></button>
</div>
{/if}
