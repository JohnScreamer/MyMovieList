export const ParsTime = (str: string) => {
    const index = str.indexOf("T");
    return str.slice(0, index);
};
