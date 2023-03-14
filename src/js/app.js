const player = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40
};

function orderByProps(obj, args) {
    const arrSortByArgs = [];
    const arrSortByAlphabet = [];

    for (let prop in player) {
        if (args.includes(prop)) {
            arrSortByArgs.push({ key: prop, value: player[prop] });
        } else {
            arrSortByAlphabet.push({ key: prop, value: player[prop] });
        }

    };

    arrSortByAlphabet.sort((a, b) => a.key > b.key ? 1 : -1);

    return [...arrSortByArgs, ...arrSortByAlphabet]
}




