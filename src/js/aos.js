import AOS from 'aos';

// mobile detection
const isMobile = () => {
  return window.innerWidth <= 768 || 
         /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

AOS.init({
  disable: isMobile,
  // Additional options to ensure AOS is properly disabled on mobile
  once: true,
  duration: 600
});