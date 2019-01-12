import { useState, useCallback, useEffect } from 'react'

/**
 * custom hooks
 * @url https://reactjs.org/docs/hooks-custom.html
 */
export const useTitle = (title = 'Valley') => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export const useToggle = (initial = false) => {
  const [toggle, setValue] = useState(initial)
  const setToggle = useCallback(() => setValue(v => !v), [])
  return {toggle, setToggle}
}

export const useHover = (initial = false) => {
  const [hover, setHover] = useState(initial)
  const onMouseEnter = useCallback(() => setHover(true), [])
  const onMouseLeave = useCallback(() => setHover(false), [])
  return [hover, {onMouseEnter, onMouseLeave}]
}

export const useIndex = (initial = null) => {
  const [index, setIndex] = useState(initial)
  const onMouseEnter = useCallback((data, index) => setIndex(index), [])
  const onMouseLeave = useCallback(() => setIndex(null), [])
  return [index, {onMouseEnter, onMouseLeave}]
}

export const useInput = (initial = '') => {
  const [value, setValue] = useState(initial)
  const onChange = useCallback(e => setValue(e.target.value), [])
  return [value, onChange]
}

export const useTarget = (initial = null) => {
  const [value, setValue] = useState(initial)
  const setTarget = useCallback(e => setValue(e.currentTarget), [])
  const freeTarget = useCallback(() => setValue(null), [])
  return [value, {setTarget, freeTarget}]
}

/**
 * helper functions
 * @url https://github.com/30-seconds/30-seconds-of-code
 */
export const countBy = (arr, fn) =>
  (fn ? arr.map(typeof fn === 'function' ? fn : val => val[fn]) : arr).reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1
    return acc
  }, {})

export const sortBy = (arr, compare) =>
  arr.map((item, index) => ({item, index}))
    .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
    .map(({item}) => item)

export const renameKeys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{[keysMap[key] || key]: obj[key]}
    }),
    {}
  )
