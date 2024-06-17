***Link de youtube***
https://youtu.be/8CkiCJ_DCbw

***Lead***
Este ejercicios nos ayudara a determinar si un año dado es bisiesto o no.
Tenemos export function isleap…. esta linea define una función llamada isleap que toma un parámetro Year de tipo numero y nos devuelve un valor booleano que es verdadero o falsoL
la palabra exporta, que es la palabra clave nos indicara que esta función puede ser utilizada fuera de este archivo si es importado por otro proyecto.
Para la lógica principal de la función.
% -que es un operador en este caso division.
year % == 0 -esta nos ayuda a verificar si el año es divisible para 4 si cumple con la funcion es verdadero osea si seria un año bisiesto.
year % 100 !=0 -esta nos ayuda a verificar si el año es o no divisible por 100 si dado el caso no lo es , seri que no es bisiesto
year % 400 ==0: esta nos ayuda a verificar  si el año es divisible para 400, si es el caso es un año bisiesto.



***RNA Transcription***

Convierte las cadenas de ADN (ácido desoxirribonucleico) en hebras de ARN (ácido ribonucleico). La función 'toRna' toma una cadena que representa una secuencia de nucleótidos de ADN y devuelve una cadena con la secuencia de nucleótidos de ARN correspondiente.
Este objeto (dnaToRnaMap) define la correspondencia entre los nucleótidos del ADN y sus homólogos de ARN:
G (Guanina) pasa a C (Citosina).
C (Citosina) pasa a G (Guanina).
T (Timina) pasa a A (Adenina).
A (Adenina) pasa a U (Uracilo).
En la función de Validación (isValidDna), comprueba si el nucleótido de ADN dado es válido, es decir si es ' dnaToRnaMap'.

