import { getOr, parseInt, pipe, defaultTo } from 'lodash/fp'

// WARNING: these reg exp are extremely dangerous stuff, we have to avoid using that.
// Update: We will remove it once Tuukka or Dmytro figure out how to force Amplify to work search with strings (now it is not possible according to AWS implementation)
// https://github.com/aws-amplify/amplify-js/issues/2147
const TOTAL_REGEXP = /total=(\d+),/
const ITEMS_REGEXP = /{items=(.+), total/

interface IParsedResponse<TItem> {
  total?: number
  items: TItem[]
}

type MatchResult = RegExpMatchArray | null

export const parseRowResponse = <TItem = any>(response: string): IParsedResponse<TItem> => {
  const matchedTotal: MatchResult = response.match(TOTAL_REGEXP)
  const total: number = pipe<MatchResult, string, number>(getOr('0', '[1]'), parseInt(10))(matchedTotal)

  const matchedItems: MatchResult = response.match(ITEMS_REGEXP)
  const items: TItem[] = pipe<MatchResult, string, TItem[], TItem[]>(getOr('[]', '[1]'), JSON.parse, defaultTo([]))(
    matchedItems
  )

  return {
    total,
    items
  }
}
