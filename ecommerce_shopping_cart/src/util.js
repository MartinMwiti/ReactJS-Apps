export default { 
    formatCurrency: (num)=>{

        const currencyValue = {
            style: "currency",
            currency: "USD"
        }
        return Number(num.toFixed(2)).toLocaleString("es-US", currencyValue);
    }
};

// toFixed()
    // The toFixed() method converts a number into a string, rounding to a specified number of decimals.
    // num.toFixed(2) - Convert a number into a string, rounding the number to keep only two decimals:

// Number toLocaleString() Method
    // The toLocaleString() method converts a number into a string, using a local language format.
    // The default language depends on the locale setup on your computer.
        // Format the number to a string, using the locale specific of FINLAND:
        // var num = new Number(1000000).toLocaleString("fi-FI");
            // en-US -> US English