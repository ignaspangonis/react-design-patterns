# React design patterns

This repository contains an app with implementations of the following design patterns:

## Builder

Read about the pattern [here](https://refactoring.guru/design-patterns/builder).
Implemented with `FormBuilder` class. It allows to dynamically create a list of form input elements.

```ts
const formInputs = inputs
  .reduce(
    (formBuilder, input) =>
      formBuilder[input.type](input.props),
    new FormBuilder(),
  )
  .build()
```

## Bridge

Read about the pattern [here](https://refactoring.guru/design-patterns/bridge).
In the app, it is implemented with `MuiButton`, `RoundButton` (implementation), `OpenInNewTab` and `Alert` (abstraction) components.

```tsx
<OpenInNewTab component={MuiButton} url="https://refactoring.guru/design-patterns">
  Learn design patterns
</OpenInNewTab>
```
