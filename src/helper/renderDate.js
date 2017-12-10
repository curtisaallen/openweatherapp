export const renderDate = (value) => {
    const date = (new Date(value)).toString().substring(4,15);
    return date;
}