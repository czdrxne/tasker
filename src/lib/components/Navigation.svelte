<script lang="ts">
    import star from "@assets/star.svg";
    import question from "@assets/question.svg";

    import Theme from "@components/Theme.svelte";
    const actions = [
        {
            title: "rate my work!",
            src: star,
            href: "",
            cursor: "cursor-pointer"
        },
        {
            title: "Project Description",
            src: question,
            href: "",
            cursor: "cursor-help"
        },
    ];
</script>
<nav class="flex justify-between sm:flex-row flex-col-reverse gap-5">
    <input
        type="text"
        placeholder="Search task..."
        class="focus:outline-[2px] px-5 py-2 rounded-xl sm:w-[45%] focus:outline-acc bg-l-bg dark:bg-d-bg dark:text-white"
    />
    <div class="flex items-center sm:gap-5 gap-1">
        <Theme />
        {#each actions as action}
            <a
                href={action.href}
                title={action.title}
                class="bg-l-bg dark:bg-d-bg p-3 rounded-full {action.cursor}"
            >
                <img
                    src={action.src}
                    class="w-[17px]"
                    alt={action.alt}
                />
            </a>
        {/each}
        
    </div>
</nav>