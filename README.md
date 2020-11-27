# calculadora
Artefacto encargado de realizar operaciones matemáticas a partir de una entrada especifica

## Como Usae:

#instalar dependencias
npm install

#correr api
node src/app.js

##Docker
docker-compse up -build

#apis de las que depende:
- https://github.com/quilarque1/api-suma
- https://github.com/quilarque1/api-resta
- https://github.com/quilarque1/api-division
- https://github.com/quilarque1/api-multiplicacion

#Url
<span>

*http://localhost:3000*

</span>

#Verificar si la api esta arriba

**GET:**
***``
{url}/health
``***
##

## Como usra


**POST:** 
***``{url}/calcular
``***

Recive un json con la siguiente estructura:

```json
{
    "calcular": "3x4+4-1 1+2+3+4 3/3+3-3"
}
```

**Where:**

| Parameter    |Descripction   |Example   |
| ------------| ------------ | ---------- |
|  calcular   |  contiene operaciones a calcular, se pueden modificar los valores de la entrada para ver resultados distintos  | **4x4+4-1 1+2+6+4 12/3+3-3** |

**Ejemplo respuesta:**

```json
{
    "output": [
        {
            "operacion": "3x4+4-1",
            "resultado": 15
        },
        {
            "operacion": "1+2+3+4",
            "resultado": 10
        },
        {
            "operacion": "3/3+3-3",
            "resultado": 1
        }
    ]
}
```

**Donde:**

| Parameter         |Descripction         |Example        |
| ------------      | ------------        | ------------  |
|  output            |  arreglo de operaciones  |  **operacion, resultado**  |
|  operacion        |  cadena de opraciones a realizar | **3x4+4-1**|
|  resultado        |  resultado de la operacion | **15**|

## Si necesitas otra informacion

Escribirme a:

**quilarque1@gmail.com**
