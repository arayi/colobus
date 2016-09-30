# toPairs

## Function Description

```javascript
_c.toPairs()
```

Creates an array of own enumerable string keyed-value pairs for object which can be consumed by fromPairs. If object is a map or set, its entries are returned.

## Function Technical Explanation

Aliases: entries

Arguments

object (Object): The object to query.
Returns

(Array): Returns the key-value pairs.

## Example

```javascript
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_c.toPairs(new Foo);
// => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
```
