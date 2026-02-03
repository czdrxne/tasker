<script lang="ts">
    
    import { analytics } from "@utilities/analytics.ts";

    $: stats = [
        {
            label: 'Completion Rate (%)',
            value: `${$analytics.completionRate}%`,
            percent: $analytics.completionRate,
        },
        {
            label: 'Total Task / 50',
            value: $analytics.total,
            percent: $analytics.total * 5,
        },
        {
            label: 'Pending',
            value: $analytics.pending,
            percent: $analytics.total ? Math.round(($analytics.pending / $analytics.total) * 100) : 0,
        },
        {
            label: 'Completed',
            value: $analytics.completed,
            percent: $analytics.total ? Math.round(($analytics.completed / $analytics.total) * 100) : 0,
        },
    ];
    
</script>

<div class="flex flex-col gap-4">

    {#each stats as stat (stat.label)}
        <div class="flex flex-col gap-3">
    
            <div class="py-4 px-5 dark:bg-d-fg bg-l-fg rounded-lg flex flex-col gap-1">
                
                <p class="sm:text-sm text-[14px] text-neutral-500 font-medium">
                    {stat.label}
                </p>

                <h1 class="font-bold sm:text-4xl text-3xl">
                    {stat.value}
                </h1>

                <div class="mt-2 dark:bg-d-bg bg-l-bg rounded-3xl w-full">
                    <div
                        class="duration-300 ease-out py-[3px] bg-acc rounded-3xl"
                        style="width: {stat.percent}%">
                    </div>
                </div>

            </div>

        </div>
    {/each}

</div>