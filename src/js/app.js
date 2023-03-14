export default function orderByProps(obj, args) {
    const arrSortByArgs = [];
    const arrSortByAlphabet = [];

    for (let prop in obj) {
        if (args.includes(prop)) {
            arrSortByArgs.push({ key: prop, value: obj[prop] });
        } else {
            arrSortByAlphabet.push({ key: prop, value: obj[prop] });
        }

    };

    arrSortByAlphabet.sort((a, b) => a.key > b.key ? 1 : -1);

    return [...arrSortByArgs, ...arrSortByAlphabet];
};
