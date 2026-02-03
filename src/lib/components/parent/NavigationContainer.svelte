<script lang="ts">

    import Input    from "@components/child/navigation/Input.svelte";    
    import Theme    from "@components/child/navigation/Theme.svelte";
    import Trash    from "@components/child/navigation/Trash.svelte";
    import Rate     from "@components/child/navigation/Rate.svelte";

</script>

<nav class="flex justify-between sm:flex-row flex-col-reverse gap-5">

    <Input />

    <div class="flex items-center sm:gap-5 gap-3">
        
        <Theme />
        <Trash />
        <Rate />
    </div>
    
</nav>