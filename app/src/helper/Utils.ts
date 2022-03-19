import { StaticData } from '../constant'

type List = {
  path: string
  resolution: number
}

type Item = {
  list: Array<List>
}

export const getHighResolutionImage = (images: Item) => {
  return (
    StaticData.HTTPS +
    images?.list?.reduce((acc, val) => {
      return acc.resolution > val.resolution ? acc : val
    })?.path
  )
}
