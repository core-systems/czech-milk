import objectFitImages from 'object-fit-images'

//exports.registerServiceWorker = () => true

exports.onInitialClientRender = () => {
  objectFitImages()
}

exports.onRouteUpdate = (args) => {
  //console.log('new pathname', location.pathname)
}

exports.shouldUpdateScroll = args => {
  return true
}
