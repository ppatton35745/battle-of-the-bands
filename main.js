let bandNumber = 1

const takeNumber = function (bandName) {
    let bandReturn = (`${bandNumber}. ${bandName}`);
    bandNumber++;
    return bandReturn;
    
}

const scum = takeNumber("Galactic Scum");
const under = takeNumber("Underdogs");
console.log(scum);
console.log(under);