# RC Value
Make React component switch between [`Controlled Component`](https://reactjs.org/docs/forms.html#controlled-components) and [`Uncontrolled Component`](https://reactjs.org/docs/uncontrolled-components.html) easily.

## Installation
`yarn add rc-value` or `npm install rc-value --save`

## Live Demos
You can find some demos at [`storybook`](https://beizhedenglong.github.io/rc-value/).

## Usage

### `Value`
```jsx
import { Value } from 'rc-value'

const Switch = props => (
  <Value {...props}>
    {({ value, onChange }) => (
      <button
        onClick={() => { onChange(prev => !prev) }}
      >
        {String(value)}
      </button>
    )}
  </Value>
)

<Switch defaultValue={false} onChange={console.log} /> // This becomes an Uncontrolled Switch
<Switch value={false} onChange={console.log}/> // This becomes a Controlled Switch
```

### `useValue`
```jsx
import { useValue } from 'rc-value'

const Switch = (props) => {
  const { value, onChange } = useValue(props)
  return <button onClick={() => onChange(prev => !prev)}>{String(value)}</button>
}

<Switch defaultValue={false} onChange={console.log} /> // This becomes an Uncontrolled Switch
<Switch value={false} onChange={console.log}/> // This becomes a Controlled Switch
```

### `withValue`

```jsx
import { withValue } from 'rc-value'

const Switch = withValue(
  ({ value, onChange }) => (
    <button onClick={() => onChange(prev => !prev)}>{String(value)}</button>
  ),
)

<Switch defaultValue={false} onChange={console.log} /> // This becomes an Uncontrolled Switch
<Switch value={false} onChange={console.log}/> // This becomes a Controlled Switch
```