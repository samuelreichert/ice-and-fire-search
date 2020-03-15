export const formatSeachParams = (params) => {
  let searchParams = {}

  if (params.name) searchParams.name = params.name
  if (params.culture) searchParams.culture = params.culture
  if (params.gender) searchParams.gender = params.gender
  if (params.isAlive || params.isDead) {
    if (params.isAlive) searchParams.isAlive = true
    if (params.isDead) searchParams.isAlive = false
  }

  return searchParams
}
