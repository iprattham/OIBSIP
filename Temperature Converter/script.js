function convertTemperature() {
    const temperatureInput = document.getElementById("temperature").value;
    const fromUnitSelect = document.getElementById("fromUnit");
    const toUnitSelect = document.getElementById("toUnit");
    const fromUnit = fromUnitSelect.options[fromUnitSelect.selectedIndex].value;
    const toUnit = toUnitSelect.options[toUnitSelect.selectedIndex].value;

    let convertedTemperature;
    let convertedUnit;

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        convertedTemperature = (parseFloat(temperatureInput) * (9/5)) + 32;
        convertedUnit = "Fahrenheit";
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        convertedTemperature = parseFloat(temperatureInput) + 273.15;
        convertedUnit = "Kelvin";
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        convertedTemperature = (parseFloat(temperatureInput) - 32) * (5/9);
        convertedUnit = "Celsius";
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        convertedTemperature = ((parseFloat(temperatureInput) - 32) * (5/9)) + 273.15;
        convertedUnit = "Kelvin";
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        convertedTemperature = parseFloat(temperatureInput) - 273.15;
        convertedUnit = "Celsius";
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        convertedTemperature = ((parseFloat(temperatureInput) - 273.15) * (9/5)) + 32;
        convertedUnit = "Fahrenheit";
    } else {
        alert("Invalid unit selection");
        return;
    }

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
}
