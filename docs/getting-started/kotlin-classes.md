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

    fun add(y: Int) {
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

    fun add(y: Int) {
        return x + y
    }
}
```