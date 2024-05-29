---
title: Kotlin - Classes
sidebar_position: 5
---

# Classes in Kotlin
Kotlin is referred to as an *object-oriented* prgramming language. This means that Kotlin revolves around *classes*. In Kotlin, 
*classes* serve as the blueprint for creating *objects*. They encapsulate data and functions that operate on that data. The data, 
represented as properties, defines the state of an object, while the functions, known as methods, define the behavior of the object. 
Classes in Kotlin can also inherit properties and methods from other classes, allowing for code reuse and a hierarchical structure. 
This encapsulation of related properties and methods into a single unit makes it easier to manage and organize code, 
and is a fundamental aspect of object-oriented programming.

## Creating a class
Let's make a class which can do some simple math operations:

To create a class in Kotlin, you can simply use the `class` keyword followed by the class name. Inside the class, 
you can define properties and methods that define the state and behavior of the objects created from the class.

```kotlin
class Math {

}
```

Let's suppose we want to add a variable called x, which has a value of 5. We just put the variable inside the
class.

```kotlin
class Math {
    val x = 5
}
```

Now let's add a function which takes in a parameter, called y, and returns `x + y`.

```kotlin
class Math {
    val x = 5

    fun add(y: Int): Int {
        return x + y
    }
}
```

To go further, let's make x a `var` instead of a `val` and create a funcition which increases x by 1.

```kotlin
class Math {
    var x = 5

    fun increment() {
        x++
    }

    fun add(y: Int): Int {
        return x + y
    }
}
```

## Access Modifiers

An access modifier is a keyword or a combination of keywords in programming languages that determines the visibility and accessibility of classes, methods, variables, or other members within a program. It specifies the level of access that other parts of the program have to a particular member.

Access modifiers control the scope and visibility of members, ensuring that they are used and accessed appropriately. They help enforce encapsulation and protect sensitive data from being accessed or modified by unauthorized parts of the program.

Different programming languages have different access modifiers, but some common ones include:

 - `public`: The member is accessible from anywhere in the program. (this is the default in Kotlin)
 - `private`: The member is only accessible within the same class or file.
 - `protected`: The member is accessible within the same class or the derrived classes.
 - `internal`: The member is accessible within the same class, derrived classes, or the package.

By using access modifiers effectively, you can control the visibility and accessibility of your code, making it easier to maintain, understand, and collaborate on.

In our example above, suppose we don't want people to be able to directly change `x`, but people can only increment it by one.
To accomplish this, we would simply add the access modifier before `var` or `val` if it's a variable, before `class`
if it's a class, or before `fun` if it's a function.

```kotlin
class Math {
    private var x = 5

    fun increment() {
        x++
    }

    fun add(y: Int): Int {
        return x + y
    }
}
```

## Constructors

In Kotlin, a constructor is a special member function that is invoked when an object of the class is created. It initializes 
the class when the object is created. The primary constructor is part of the class header and is declared after the class name with
a set of parenthesis (`()`). It is not required to have one.

In our example `Math` class, suppose that we want to make `x` a constructor parameter, so someone can input their own value
for `x`.

```kotlin
class Math(private var x: Int) {
    fun increment() {
        x++
    }

    fun add(y: Int): Int {
        return x + y
    }
}
```

Sometimes we want to provide a default value for `x`. To do this, we just add a `=` and the value after the parameter.

```kotlin
class Math(private var x: Int = 5) {
    fun increment() {
        x++
    }

    fun add(y: Int): Int {
        return x + y
    }
}
```

Say we want to add 2 to `x` when we create the class. To do this, we can make use of Kotlin's `init` block. The `init` block
runs code after the class is created.

```kotlin
class Math(private var x: Int = 5) {
    init {
        x += 2
    }

    fun increment() {
        x++
    }

    fun add(y: Int): Int {
        return x + y
    }
}
```