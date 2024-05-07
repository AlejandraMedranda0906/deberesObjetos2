# Link de youtube
***Resistor color trio***
Colors: Este enumera los colores típicamente usados en los códigos de resistencias. 
Color: Este tipo representa los posibles valores de claves de la enumeración Colors, es decir, los nombres de los colores.
Units: Un arreglo que contiene las unidades de medida para resistencias, donde el índice representa una escala de magnitud.
Unit: Este tipo extrae cualquier valor del arreglo Units, lo que significa que puede ser 'ohms', 'kiloohms', 'megaohms', o 'gigaohms'.
Resistance: Una interfaz que define la estructura de un objeto para representar una resistencia, con un value numérico y una unit de medida.
export function decodedResistorValue-Calcula el valor 'bruto' (raw) de la resistencia. Colors[x1] * 10 + Colors[x2] determina los dos primeros dígitos del valor de la resistencia, y 10 ** Colors[x3] calcula el factor multiplicador basado en el tercer color Se obtiene value y unit mediante la función toResistance y devuelve una cadena.



