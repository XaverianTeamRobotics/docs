---
title: Kotlin - Operators
sidebar_position: 4
---

# Operators in Kotlin

## Math Operators

Kotlin provides a set of math operators that you can use to perform basic arithmetic operations. Here are some of the commonly used math operators in Kotlin:

- Addition: The `+` operator is used to add two numbers together. For example, `val sum = 5 + 3` will assign the value `8` to the variable `sum`.

- Subtraction: The `-` operator is used to subtract one number from another. For example, `val difference = 10 - 5` will assign the value `5` to the variable `difference`.

- Multiplication: The `*` operator is used to multiply two numbers. For example, `val product = 2 * 4` will assign the value `8` to the variable `product`.

- Division: The `/` operator is used to divide one number by another. For example, `val quotient = 10 / 2` will assign the value `5` to the variable `quotient`.

- Modulus: The `%` operator is used to find the remainder of a division operation. For example, `val remainder = 10 % 3` will assign the value `1` to the variable `remainder`.

- Increment and Decrement: The `++` and `--` operators are used to increment and decrement a number by `1` respectively. For example, `var count = 0; count++` will increment the value of `count` by `1`.

These are just a few examples of the math operators available in Kotlin. You can use them to perform various calculations and manipulate numeric values in your code.

## Boolean Operators

Boolean operators in Kotlin are used to perform logical operations on boolean values. These operators allow you to combine or manipulate boolean expressions to make decisions or control the flow of your program. There are three main boolean operators in Kotlin:

 - Logical AND (`&&`): The logical AND operator returns `true` if both operands are `true`, and `false` otherwise. 
 For example, `val result = (x > 5) && (y < 10)` will assign `true` to result if both conditions `(x > 5)` and `(y < 10)` are `true`.

 - Logical OR (`||`): The logical OR operator returns `true` if at least one of the operands is `true`, and `false` otherwise. 
 For example, `val result = (x > 5) || (y < 10)` will assign `true` to result if either condition `(x > 5)` or `(y < 10)` is `true`.

 - Logical NOT (`!`): The logical NOT operator negates the boolean value of its operand. It returns `true` if the operand is `false`, and `false` if the operand is `true`. For example, `val result = !(x > 5)` will assign `true` to result if `(x > 5)` is `false`.

These boolean operators are essential for making decisions and controlling the flow of your program based on certain conditions. They allow you to create complex boolean expressions by combining multiple conditions together.
