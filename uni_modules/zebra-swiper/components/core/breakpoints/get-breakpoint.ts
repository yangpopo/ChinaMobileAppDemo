import type { GetBreakpoint } from '../../../types/components/core/breakpoints/get-breakpoint'

const getBreakpoint: GetBreakpoint = (
  breakpoints,
  base = 'window',
  containerEl
) => {
  if (!breakpoints || (base === 'container' && !containerEl)) return undefined

  let breakpoint: string | false = false
  const currentHeight =
    base === 'window' ? window.innerHeight : containerEl!.clientHeight

  const points = Object.keys(breakpoints).map((point) => {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      const minRatio = parseFloat(point.substr(1))
      const value = currentHeight * minRatio
      return {
        value,
        point
      }
    }
    return {
      value: point,
      point
    }
  })

  points.sort(
    (a, b) => parseInt(String(a.value), 10) - parseInt(String(b.value), 10)
  )

  for (let i = 0; i < points.length; i += 1) {
    const { point, value } = points[i]
    if (base === 'window') {
      if (window.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point
      }
    } else if (Number(value) <= containerEl!.clientWidth) {
      breakpoint = point
    }
  }

  return breakpoint || 'max'
}

export default getBreakpoint
