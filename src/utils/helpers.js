//Проверяет, является ли аргумент числом
export const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n);