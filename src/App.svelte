<script lang="ts">

    import Navigation       from "@components/parent/NavigationContainer.svelte";
    import Content          from "@components/parent/ContentContainer.svelte";
    import Analytics        from "@components/parent/AnalyticsContainer.svelte";

</script>

<div class="w-screen min-h-screen h-screen overflow-y-auto cursor-default bg-l-bg dark:bg-d-bg sm:p-10 p-3">
    <main class="w-full min-h-full bg-l-fg dark:bg-d-fg sm:rounded-4xl rounded-2xl shadow-xl sm:py-8 py-5 sm:px-10 px-4 flex flex-col gap-12">

        <Navigation />

        <div class="flex lg:flex-row flex-col gap-10">

            <div class="flex-3">
                <Content />
            </div>

            <div class="flex-1">
                <Analytics />
            </div>

        </div>

    </main>
</div>