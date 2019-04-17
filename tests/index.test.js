import { render, fireEvent, cleanup } from 'react-testing-library'
import React from 'react'
import { Value, withValue, useValue } from '../src/index'

afterEach(cleanup)
describe('Value', () => {
  const Switch = props => (
    <Value {...props}>
      {({ value, onChange }) => (
        <button
          onClick={(e) => { e.persist(); onChange(prev => !prev, e) }}
          data-testid="button"
        >
          {`${value}`}
        </button>
      )}
    </Value>
  )
  test('Uncontrolled Component', () => {
    const onChangeMock = jest.fn()
    const {
      container,
      getByTestId,
    } = render(<Switch defaultValue={false} onChange={onChangeMock} />)
    expect(container).toMatchSnapshot()
    expect(getByTestId('button').textContent).toMatch(/false/)
    fireEvent.click(getByTestId('button'))
    expect(onChangeMock.mock.calls[0][0]).toBe(true)
    expect(onChangeMock.mock.calls[0][1]).toBeInstanceOf(Object)
    expect(getByTestId('button').textContent).toMatch(/true/)
  })
  test('Controlled Component', () => {
    const onChangeMock = jest.fn()
    const {
      container,
      getByTestId,
    } = render(<Switch value={false} onChange={onChangeMock} />)
    expect(container).toMatchSnapshot()
    expect(getByTestId('button').textContent).toMatch(/false/)
    fireEvent.click(getByTestId('button'))
    expect(onChangeMock.mock.calls[0][0]).toBe(true)
    expect(onChangeMock.mock.calls[0][1]).toBeInstanceOf(Object)
    expect(getByTestId('button').textContent).toMatch(/false/)
  })
})

describe('withValue', () => {
  const Switch = withValue(({ value, onChange }) => (
    <button
      onClick={(e) => { e.persist(); onChange(prev => !prev, e) }}
      data-testid="button"
    >
      {`${value}`}
    </button>
  ))
  test('Uncontrolled Component', () => {
    const onChangeMock = jest.fn()
    const {
      container,
      getByTestId,
    } = render(<Switch defaultValue={false} onChange={onChangeMock} />)
    expect(container).toMatchSnapshot()
    expect(getByTestId('button').textContent).toMatch(/false/)
    fireEvent.click(getByTestId('button'))
    expect(onChangeMock.mock.calls[0][0]).toBe(true)
    expect(onChangeMock.mock.calls[0][1]).toBeInstanceOf(Object)
    expect(getByTestId('button').textContent).toMatch(/true/)
  })
  test('Controlled Component', () => {
    const onChangeMock = jest.fn()
    const {
      container,
      getByTestId,
    } = render(<Switch value={false} onChange={onChangeMock} />)
    expect(container).toMatchSnapshot()
    expect(getByTestId('button').textContent).toMatch(/false/)
    fireEvent.click(getByTestId('button'))
    expect(onChangeMock.mock.calls[0][0]).toBe(true)
    expect(onChangeMock.mock.calls[0][1]).toBeInstanceOf(Object)
    expect(getByTestId('button').textContent).toMatch(/false/)
  })
})

describe('useValue', () => {
  const Switch = (props) => {
    const { value, onChange } = useValue(props)
    return (
      <button
        onClick={(e) => { e.persist(); onChange(prev => !prev, e) }}
        data-testid="button"
      >
        {`${value}`}
      </button>
    )
  }
  test('Uncontrolled Component', () => {
    const onChangeMock = jest.fn()
    const {
      container,
      getByTestId,
    } = render(<Switch defaultValue={false} onChange={onChangeMock} />)
    expect(container).toMatchSnapshot()
    expect(getByTestId('button').textContent).toMatch(/false/)
    fireEvent.click(getByTestId('button'))
    expect(onChangeMock.mock.calls[0][0]).toBe(true)
    expect(onChangeMock.mock.calls[0][1]).toBeInstanceOf(Object)
    expect(getByTestId('button').textContent).toMatch(/true/)
  })
  test('Controlled Component', () => {
    const onChangeMock = jest.fn()
    const {
      container,
      getByTestId,
    } = render(<Switch value={false} onChange={onChangeMock} />)
    expect(container).toMatchSnapshot()
    expect(getByTestId('button').textContent).toMatch(/false/)
    fireEvent.click(getByTestId('button'))
    expect(onChangeMock.mock.calls[0][0]).toBe(true)
    expect(onChangeMock.mock.calls[0][1]).toBeInstanceOf(Object)
    expect(getByTestId('button').textContent).toMatch(/false/)
  })
})
