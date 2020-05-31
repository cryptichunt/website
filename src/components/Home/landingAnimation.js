import React, { useEffect, createRef } from 'react'
import lottie from 'lottie-web'

import animation from '../../animations/laptop.json'

function LandingAnimation() {
  const animationContainer = createRef()

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animation,
    })
    return () => anim.destroy()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div ref={animationContainer} />
}

export default LandingAnimation
