from time import process_time_ns


print("¡Hola Mundo")
print("Hola Mundo 2")

variable = 10
print(variable)
print(type(variable))

variableflotante = 10.5
print(variableflotante)
print(type(variableflotante))


cadena_texto="Prueba"
print(cadena_texto)
print(type(cadena_texto))

print("\n\n 1.5 Conversión entre variables")
numero=10
print("Valor variable numero: ", numero , "Tipo de la variable: ", type(numero))

print("\n\n *** Int a Str ***")
numero=str(numero)
print(numero)
print(type(numero))

print("\n\n *** Str a Int ***")
numerotexto="5"
print(numerotexto, type(numerotexto))
numerotexto=int(numerotexto)
print(numerotexto, type(numerotexto))

print("\n\n *** Float a Str ***")
numeroflotante = 10.9
print("Antes del cambio ", numeroflotante, type(numeroflotante))
numeroflotante = str(numeroflotante)
print("Despues del cambio ", numeroflotante, type(numeroflotante))

print("\n\n *** Float a Int ***")
numeroflotante = 7.8
print("Antes del cambio ", numeroflotante, type(numeroflotante))
numeroflotante = int(numeroflotante)
print("Despues del cambio ", numeroflotante, type(numeroflotante))


print("\n\n Suma 5+5: ", 5+5)

x1 = 100
x2 = 2.5
print("\n\n Suma ", x1, " + ", x2, " = ",  x1+x2)
print("Tipo ", type(x1+x2))

v1 = "Hola"
v2 = " Mundo"
print("\n\n Suma ", v1, " + ", v2, " = ",  v1+v2)
print("Tipo ", type(v1+v2))

#print(5/0)

redondeo= 2.9854
print("\n\n Redondear numero  ", redondeo, "= %.2f"%redondeo)

dato1=1
dato2="test"
dato3=2.34
print("\n\n Mostrar datos '%d - %s - %f'" %(dato1, dato2, dato3,))


print("Ingrese un número entero:")
numero1 = int(input("\nIngrese un número entero: "))
print(numero1)

print("\n\n Entrada input() ")
dato_ingresado = input()
print(type(dato_ingresado))
print(dato_ingresado)


print("\n\n ***Ejercicio Final")
print("Pedir 2 enteros, cacular la suma y mostrar el 30%")

numero1 = int(input("Ingrese el 1er numero: "))
numero2 = int(input("Ingrese el 2do numero: "))

suma = numero1 + numero2
print("\n La suma de los numeros es: ", suma)

porciento = suma * (30/100)
print("\n El 30 porciento de ", suma ," es: ", porciento)


print("Division con 1 / da resultado con decimales")
division1 = 10/3
print(division1)

print("Division con 2 // da resultado sin decimales")
division2 = 10//3
print(division2)


print("Nuevo")