import React, { useEffect } from 'react';

export function useViewport() {
  const [width, setWidth] = React.useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  // Return the width so we can use it in our components
  return { width };
}
