import React from 'react'

const isNil = x => x == null

export const useValue = (props) => {
  const {
    defaultValue,
    value: parentValue,
    onChange = () => { },
  } = props
  const [value, set] = React.useState(!isNil(parentValue) ? parentValue : defaultValue)
  if (!isNil(parentValue) && (parentValue !== value)) {
    set(() => parentValue)
  }
  return {
    value,
    onChange: (updater, ...rest) => {
      set((prev) => {
        const newValue = typeof updater === 'function' ? updater(prev) : updater
        onChange(newValue, ...rest)
        return newValue
      })
    },
  }
}

export const Value = (props) => {
  const returned = useValue(props)
  return props.children(returned)
}

export const withValue = (BaseComponent) => {
  const WithValue = (props) => {
    const {
      defaultValue, value, onChange, ...rest
    } = props
    const returned = useValue(props)
    return <BaseComponent {...rest} {...returned} />
  }
  WithValue.displayName = `withValue(${BaseComponent.displayName})`
  return WithValue
}
