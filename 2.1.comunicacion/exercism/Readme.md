***D&D ***

Representa personajes de un juego de rol como Dungeons and Dragons (DnD). Esta categoría incluye atributos comunes de los personajes de DnD, como puntos de vida y diversas habilidades.
Estos son rasgos de carácter que incluyen:
hitpoints, strength, dexterity, constitution, intelligence, wisdom,charisma.
El constructor se ejecuta cuando se crea una instancia de DnDCharacter asignando valores a cada atributo de habilidad (strength, dexterity, constitution, intelligence, wisdom, charisma) y usando el método generateAbilityScore.Se utilizo el método getModifierFor para calcular y asignar la salud de un personaje y un modificador de 10 según el personaje.
En 'getModifierFor'calcula el modificador para una puntuación de habilidad determinada. El valor de corrección se calcula utilizando la fórmula típica de DnD: (abilityValue - 10) / 2 y redondeado hacia abajo usando Math.floor.

***Space Age***

Calcula las edades de las personas en diferentes planetas del sistema solar basándose en la duración del año de cada planeta en comparación con la Tierra.
En la linea de Planets 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', restringe los valores que pueden ser usados como planetas a estos específicos. 
En factor asocia cada planeta con un número que representa la duración de su año en relación con el año terrestre.
En la linea 'export const age' define una función de edad que calcula la edad de una persona en un año planetario determinado utilizando dos parámetros que es Planeta que define el tipo de planeta y Segundos representando la edad de la persona.

