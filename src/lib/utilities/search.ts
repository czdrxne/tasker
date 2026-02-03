import { writable, derived }    from "svelte/store";
import type { Task }            from "@utilities/data.ts";

const stored  = localStorage.getItem("tasks");
export const tasks = writable<Task[]>(
    stored
        ? JSON.parse(stored).map((t) => ({
            ...t,
            priority:
                t.priority === "normal" ? "Normal" : t.priority
        }))
        : []
);

tasks.subscribe(value => localStorage.setItem("tasks", JSON.stringify(value)));

export const query = writable("");

export const filteredTasks: string[] = derived(
  [tasks, query],
  ([$tasks, $query]) => {
    if (!$query) return $tasks;
    const q = $query.toLowerCase();
    return $tasks.filter(t => t.name.toLowerCase().includes(q));
  }
);

export const ongoingTasks: string[] = derived(filteredTasks, $tasks =>
  $tasks.filter(task => !task.completed)
);

export const completedTasks: string[] = derived(filteredTasks, $tasks =>
  $tasks.filter(task => task.completed)
);