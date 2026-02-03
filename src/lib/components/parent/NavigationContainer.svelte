<script lang="ts">

    import Input    from "@components/child/navigation/Input.svelte";    
    import Theme    from "@components/child/navigation/Theme.svelte";
    import Trash    from "@components/child/navigation/Trash.svelte";

    import star     from "@assets/star.svg";

</script>

<nav class="flex justify-between sm:flex-row flex-col-reverse gap-5">

    <Input />

    <div class="flex items-center sm:gap-5 gap-3">
        
        <Theme />
        <Trash />
        <a
            href="https://github.com/czdrxne/tasker/"
            title="Rate my work!"
            target="_blank"
            rel="noreferrer noopener"
            class="bg-l-bg dark:bg-d-bg p-3 rounded-full cursor-pointer"
        >
            <img
                src={star}
                alt="star"
                class="sm:w-[17px] w-[14px]"
            />
        </a>
    </div>
    
</nav>