//https://www.npmjs.com/package/tslint-immutable
module.exports = {
     // Recommended built-in rules
     "no-var-keyword": true,
     "no-parameter-reassignment": true,
     "typedef": [true, "call-signature"],
  
     // Immutability rules
     "readonly-keyword": true,
     "readonly-array": true,
     "no-let": true,
     "no-object-mutation": true,
     "no-delete": true,
     "no-method-signature": true,
  
     // Functional style rules
     "no-this": false,
     "no-class": false,
     "no-mixed-interface": true,
     "no-expression-statement": false,
     "no-if-statement": false
}