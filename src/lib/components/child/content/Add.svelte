<script lang="ts">

    import { analytics }    from "@utilities/analytics.ts";
    import { Create }       from "@utilities/data.ts"; 
    import Modal            from "@components/child/content/Modal.svelte";

    const openModal     : boolean        = () => showCreate = true;
    const closeModal    : boolean        = () => showCreate = false;
    const handleSubmit                   = (name: string, priority: number) => { Create(name, priority); closeModal() };
    let showCreate      : boolean        = false;

    $: taskLabel = $analytics.pending > 1 ? 'tasks' : 'task';

</script>

<div class="flex lg:items-center gap-4 relative lg:flex-row flex-col items-start">

    <h1 class="dark:text-l-fg xl:text-5xl lg:text-[2.7rem] sm:text-[2.5rem] text-[7vw] font-black">
        <span>You&#8217;ve got</span>
        <span class="text-acc">{$analytics.pending}</span>
        <span>{taskLabel} today!</span>
    </h1>

    <button
        on:click={openModal}
        type="button"
        aria-label="add new"
        class="px-5 sm:py-2 py-1.5 bg-acc text-l-fg dark:text-d-fg rounded-4xl cursor-pointer font-semibold sm:text-baseline text-sm duration-150 active:scale-[0.94] transition-transform ease"
    >
        Add New
    </button>

    <Modal
        mode="create"
        modal={showCreate}
        onClose={closeModal}
        onSubmit={handleSubmit}
    />

</div>