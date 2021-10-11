import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import { useInView } from 'react-intersection-observer';
import { useViewport } from '../hooks/useViewport';

export default function AnimationWrapper({ children, variants, rootMargin }) {
  const animation = useAnimation();
  const { width } = useViewport();
  const [contentRef, inView] = useInView({
    rootMargin: width > 560 && rootMargin ? `${rootMargin}px` : '0px',
  });
  useEffect(() => {
    if (inView) {
      animation.start('animate');
    }
  }, [animation, inView]);
  return (
    <motion.div
      ref={contentRef}
      animate={animation}
      initial={'initial'}
      exit={'leave'}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
