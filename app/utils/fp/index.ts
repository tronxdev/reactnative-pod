import { get, defaultTo } from 'lodash/fp'

/**
 *
 * Improved getOr from lodash/fp
 *
 * const person = { name: null }
 *
 * const name1 = getOr('Dmytro', 'name', person)
 * const name2 = safeGetOr('Dmytro', 'name', person)
 *
 * console.log(name1)
 * // null
 * console.log(name2)
 * // 'Dmytro'
 *
 * @param defaultValue {*}
 * @param path {String | String[]}
 * @return {function(*=): *}
 */
export const safeGetOr = <TObject, TResult>(defaultValue: TResult, path) => {
  /**
   * @param object {*}
   *
   * @return {defaultValue | *}
   */
  return (object): TResult => {
    const value = get<TObject>(path, object)

    return defaultTo<any, TResult>(defaultValue, value)
  }
}
