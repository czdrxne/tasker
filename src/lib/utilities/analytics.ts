import { derived }  from "svelte/store";
import { tasks }    from "@utilities/search.ts";

export const analytics = derived(tasks, $tasks => {

    const total             : number = $tasks.length;
    const completed         : number = $tasks.filter(t => t.completed).length;
    const pending           : number = total - completed;
    const completionRate    : number = total === 0 ? 0 : Math.round((completed / total) * 100);

    return { total, completed, pending, completionRate };

});