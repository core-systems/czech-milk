import objectFitImages from 'object-fit-images'

exports.onInitialClientRender = () => {
  objectFitImages()
}

exports.shouldUpdateScroll = args => {
  return true
}
