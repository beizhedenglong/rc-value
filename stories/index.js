/* eslint-disable no-console */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withStorySource } from '@storybook/addon-storysource'
import { useValue, Value, withValue } from '../src/index'


const valueCode = `
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
`
const useValueCode = `
import { useValue } from 'rc-value'

const Switch = (props) => {
  const { value, onChange } = useValue(props)
  return <button onClick={() => onChange(prev => !prev)}>{String(value)}</button>
}
`
const withValueCode = `
import { withValue } from 'rc-value'

const Switch = withValue(
  ({ value, onChange }) => (
    <button onClick={() => onChange(prev => !prev)}>{String(value)}</button>
  ),
)
`
const switchCode = `
<Switch defaultValue={false} onChange={console.log} /> // This becomes an Uncontrolled Switch
<Switch value={false} onChange={console.log}/> // This becomes a Controlled Switch
`
storiesOf('rc-value', module)
  .addDecorator(withStorySource(valueCode + switchCode))
  .add('Value', () => {
    const Switch = props => (
      <Value {...props}>
        {({ value, onChange }) => (
          <button
            onClick={() => { onChange(prev => !prev) }}
          >
            {`${value}`}
          </button>
        )}
      </Value>
    )
    return (
      <React.Fragment>
        <div>
          {'Uncontrolled Switch: '}
          <Switch defaultValue={false} onChange={console.log} />
        </div>
        <div style={{ marginTop: 10 }}>
          {'Controlled Switch: '}
          <Switch value={false} onChange={console.log} />
        </div>
      </React.Fragment>
    )
  })

storiesOf('rc-value', module)
  .addDecorator(withStorySource(useValueCode + switchCode))
  .add('useValue', () => {
    const Switch = withValue(
      ({ value, onChange }) => (
        <button onClick={() => onChange(prev => !prev)}>{String(value)}</button>
      ),
    )
    return (
      <React.Fragment>
        <div>
          {'Uncontrolled Switch: '}
          <Switch defaultValue={false} onChange={console.log} />
        </div>
        <div style={{ marginTop: 10 }}>
          {'Controlled Switch: '}
          <Switch value={false} onChange={console.log} />
        </div>
      </React.Fragment>
    )
  })

storiesOf('rc-value', module)
  .addDecorator(withStorySource(withValueCode + switchCode))
  .add('withValue', () => {
    const Switch = (props) => {
      const { value, onChange } = useValue(props)
      return <button onClick={() => onChange(prev => !prev)}>{String(value)}</button>
    }
    return (
      <React.Fragment>
        <div>
          {'Uncontrolled Switch: '}
          <Switch defaultValue={false} onChange={console.log} />
        </div>
        <div style={{ marginTop: 10 }}>
          {'Controlled Switch: '}
          <Switch value={false} onChange={console.log} />
        </div>
      </React.Fragment>
    )
  })
