# round

## Function Description

```javascript
_c.round(number)
```

Computes number rounded to precision.

## Function Technical Explanation

Arguments

number (number): The number to round.
[precision=0] (number): The precision to round to.
Returns

(number): Returns the rounded number.

## Example

```javascript
_c.round(4.006);
// => 4

_c.round(4.006, 2);
// => 4.01

_c.round(4060, -2);
// => 4100
```
