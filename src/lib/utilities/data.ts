import { tasks } from "@utilities/search.ts";

export interface Task {
    id          : string;
    name        : string;
    priority    : "Normal" | "Important" | "Urgent" | "Critical";
    createdAt   : number;
    completed?  : boolean;
}

export function Create(name: string, priority: Task["priority"] = "Normal") {
    tasks.update(current => [
        ...current,
        { id: crypto.randomUUID(), name, priority, createdAt: Date.now(), completed: false }
    ]);
}

export function Read(): Task[] {
    let value: Task[];
    tasks.subscribe(v => (value = v))();
    return value || [];
}

export function Update(id: string, updates: Partial<Pick<Task, "name" | "priority">>) {
    tasks.update(current =>
        current.map(task => task.id === id ? { ...task, ...updates } : task)
    );
}

export function Delete(id: string) {
    tasks.update(current => current.filter(task => task.id !== id));
}

export function DeleteAll() {
    tasks.set([]);
}

export function DeleteAllCompleted() {
    tasks.update(current => current.filter(task => !task.completed));
}

export function DeleteAllOngoing() {
    tasks.update(current => current.filter(task => task.completed));
}

export function Complete(id: string) {
    tasks.update(current =>
        current.map(task =>
            task.id === id ? { ...task, completed: true } : task
        )
    );
}

export function Incomplete(id: string) {
    tasks.update(current =>
        current.map(task =>
            task.id === id ? { ...task, completed: false } : task
        )
    );
}