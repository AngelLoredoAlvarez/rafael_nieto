# @app/graphql

This folder contains the auto-generated types and graphql function produced by
[`graphql-code-generator`](https://github.com/dotansimha/graphql-code-generator),
from the GraphQL tags found inside all the components in the `@app/components`
package. You can import them like:

```js
/*
 * e.g. if you have `mutation DoTheThing { ... }`, then you can import
 * the auto-generated graphql function to create the operation in the component
 * just like Relay Modern does it. This function returns all the types of the operation.
 */
import { graphql } from "@app/graphql";
```
