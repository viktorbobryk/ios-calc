export const toRound = (num: number): number => {
    return Math.round(num * 100) / 100;
};

export const toFloatNumber = (str: string): number => {
    return  parseFloat(str.replace(",", "."));
};

export const toCorrectString = (num: number): string => {
    return num.toString().replace(".", ",");
};