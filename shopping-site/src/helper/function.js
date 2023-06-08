const shorten = (item) => {
    const splitedTitle = item.split(" ");
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
    return newTitle;
};

export { shorten };
