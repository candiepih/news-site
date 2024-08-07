export const formatTitle = (title: string) => {
    // remove underscores and replace with space
    const t = title.replace(/_/g, " ");
    // capitalize first letter of each word
    return t.replace(/\b\w/g, (l) => l.toUpperCase());
}
