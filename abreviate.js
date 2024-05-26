function abbrevName(name) {
    const nameArray = name.split(" ");
    const firstInitial = nameArray[0][0].toUpperCase();
    const secondInitial = nameArray[1][0].toUpperCase();
    return `${firstInitial}.${secondInitial}`;
}

// Example usage:
console.log(abbrevName("Sam Harris")); // Output: S.H
console.log(abbrevName("patrick feeney")); // Output: P.F

// tasked with abreviating the persons name so using the split method to split the strings and the creating variables to grab