const longWords = (arr) => arr.every((val) => val.length > 5);

const oneLongWord = (arr) => arr.some((val) => val.length > 10);

const noLongWords = (arr) => arr.every((val) => val.length < 7);
