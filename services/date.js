export const uniqueDate = (task) => {
    const unique = []

    task.forEach(task => {
        if (!unique.includes(task.dateFormat)) {
            unique.push(task.dateFormat);
        }
    });
    return unique;
};