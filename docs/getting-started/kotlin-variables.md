---
title: Kotlin - Variables and Methods
sidebar_position: 3
---

# Creating Variables and Methods in Kotlin

## Variables

All programming languages involve *variables*. Think of a variable like a parking space. A car can enter the parking space, 
while it's there you can interact with the car, and the car can leave and be replaced by a new one. Variables are parking spaces
for data. They offer us the ability to store and manipulate data.

In Kotlin, a variable is declared using a name and some value. 

The structure is as follows:

`var` + *(the name of the variable)* + `=` + *(the value)*

```kotlin
var myVariable = 10
```

In Kotlin, the `var` keyword allows the variable to be changed. But if we don't want the variable to be changed after we created it,
we can replace it with the `val` keyword, which makes the variable read-only.

:::tip
Kotlin is a statically-typed language. This means that when you declare a variable, you have to tell Kotlin 
what kind of data you want to store in the variable. This is called a *data type*. 
:::

## Data Types

Kotlin needs to know what kind of data we want to put in our variables. A data type basically provides Kotlin with information
so it knows what the variable actually means. There are 4 main built-in data types in Kotlin: `String`, `Int`, `Double`, `Boolean`.

`String` is for words and letters. They are created by surrounding the content in double-quotes (`"`)
```kotlin
var myString = "Hello, World!"
```

`Int` is for integer numbers (numbers without a decimal point). 
```kotlin
var myInteger = 36
```

`Double` is for real numbers (numbers with a decimal point).
```kotlin
var myDouble = 12.5
```

`Boolean` is for true or false values.
```kotlin
var myBoolean = true
```

:::tip
Kotlin has a unique feature where it can automatically determine the data type of a variable. However, understanding data types
is still important because once we set the data type of a variable, it cannot be changed.
:::

## Functions
Functions are ways to have pieces of code that can be reused in other places. In math, we write functions like this:
```
f(x) = 2x + 5
```
In Kotlin, functions exist similarly. They have a name, can take in inputs, and can return some value. To write a function,
we write the special `fun` keyword, then the name of the function, its inputs, and the function body. 

The inputs to the function are called *parameters*. In Kotlin, we write the parameters by writing the name of the parameter,
a colon (`:`), and the data type of the parameter. At the end of the paramaters, we also need to add a colon(`:`) and our
return type, or nothing if we don't want to return anything.

To return some value from the function, we simply write `return` and then the value that we want to return. At the end of 
the paramaters, we also need to add a colon(`:`) and our return type, or nothing if we don't want to return anything.

Here is a sample function in Kotlin.

```kotlin
fun add(a: Int, b: Int): Int {
    return a + b
}
```

## Naming Rules
When using functions or variables in Kotlin, there are some restrictions for how we name things.
 - No spaces
 - Cannot start with a number
 - Cannot contain a special character
 - The first letter should always be lowercase

Say we wanted to name or variable `number of times`. Our name is multiple words, but we can't use spaces,
so how are we supposed to name it? Kotlin uses `camel casing` which is a way of naming multi-word names.
The first word begins with a lowercase letter, and every subsequent word begins with an uppercase letter.
For example, `number of times` would be `numberOfTimes`.