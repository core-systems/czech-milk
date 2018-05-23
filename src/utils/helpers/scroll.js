//import scroll from 'smooth-scroll'

export const performScroll = (top) => {
  /* invoke scroll, with behavior smooth (not supported in Safari as of writing) */
  window.scrollTo({
    behavior: 'smooth',
    top,
  })
}

export const scrollToHref = (href) => {
  /* destination element to scroll to */
  const destinationElement = document.querySelector(href)
  performScroll(destinationElement.offsetTop)
}
