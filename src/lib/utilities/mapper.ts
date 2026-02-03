export const priorityStyles: Record<Task["priority"], { bg: string; text: string }> = {
    Normal        : { bg: "bg-green-200", text: "text-green-500" },
    Important     : { bg: "bg-yellow-200", text: "text-yellow-500" },
    Urgent        : { bg: "bg-orange-200", text: "text-orange-500" },
    Critical      : { bg: "bg-red-200", text: "text-red-500" },
};