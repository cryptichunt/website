import React, { useEffect, createRef } from 'react'
import lottie from 'lottie-web'

import animation from '../../animations/test.json'

function LandingAnimation() {
  let animationContainer = createRef()

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animation,
    })
    return () => anim.destroy()
  }, [])

  return <div ref={animationContainer} />
}

export default LandingAnimation
