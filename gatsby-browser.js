import objectFitImages from 'object-fit-images'

exports.registerServiceWorker = () => true

exports.onInitialClientRender = () => {
  //console.log("ReactDOM.render has executed")
}

exports.onClientEntry = () => {
  //console.log("We've started!")
}

exports.onInitialClientRender = () => {
  objectFitImages()
}

exports.onRouteUpdate = args => {
  //console.log('onRouteUpdate', args)
  if (typeof window !== 'undefined' && args.action == "PUSH") {
    //console.log('scroll TOP...')
  }
}

exports.shouldUpdateScroll = args => {
  // Force updae scroll
  return true
  //  scroll on < back, forward >, refresh, but not link clicks
  const shouldUpdateScroll = (
    args.prevRouterProps == null ||
    (args.prevRouterProps && args.prevRouterProps.history.action == "POP")
  ) ? true : false
  console.log('shouldUpdateScroll', shouldUpdateScroll, args)
  return shouldUpdateScroll
}
