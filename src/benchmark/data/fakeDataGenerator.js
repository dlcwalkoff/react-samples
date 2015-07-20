/**
 * Нужен chance.js
 */

function generateRowObject(numberRow) {
    var generatedObject = {},
        i = 0;

    for(i; i < numberRow; i++) {
        var key = chance.string(),
            value = chance.integer();

        generatedObject[key] = value;
    }

    return generatedObject;
}

function generateArrayColumns(numberColumn, numberRow) {
    var i = 0,
        generatedArray = [];

    for(i; i < numberColumn; i++) {
        var row = generateRowObject(numberRow);

        generatedArray.push(row);
    }

    return generatedArray;
}