/*
 * import to your layout/index.js
 */

import { PureComponent } from 'react'
import { performScroll, scrollToHref } from '../utils/helpers/scroll'

const handleHashChange = () => {
  console.log('handleHashChange')
  if (window.location.hash) {
    scrollToHref(window.location.hash)
  } else {
    /* hash doesn’t exist, meaning it just got removed. scroll to the very top */
    performScroll(0)
  }
}

export default class HashChangeHandler extends PureComponent {
  componentDidMount = () => {
    console.log('HashChangeHandler componentDidMount')
    window.addEventListener("hashchange", handleHashChange, false)
  }

  render() {
    console.log('HashChangeHandler Render')
    return null
  }
}
