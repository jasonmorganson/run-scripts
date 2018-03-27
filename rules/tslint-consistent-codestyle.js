/**
 * tslint-consistent-codestyle
 * https://github.com/ajafff/tslint-consistent-codestyle
 */
module.exports = {
    "const-parameters": true, // Declare parameters as const with JsDoc /** @const */
    "no-unused": true, // Find dead code and unused declarations.
    "early-exit": true, // Recommends to use an early exit instead of a long if block.
    "no-accessor-recursion": true, // Don't use get foo() { return this.foo; }. This is most likely a typo.
    "no-return-undefined": true, // Just return; instead of return undefined;.
    "no-static-this": true, // Ban the use of this in static methods.
    "no-unnecessary-else": true, // Like no-else-after-return but better.
    "no-unnecessary-type-annotation": true, // Finds type annotations that can safely be removed.
    "no-var-before-return": true, // Checks if the returned variable is declared right before the return statement.
    "object-shorthand-properties-first": true, // Shorthand properties should precede regular properties.
    "prefer-const-enum": true // Prefer const enum where possible.
};
