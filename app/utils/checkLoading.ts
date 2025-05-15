const checkLoading = () => {
    if (!document.body.classList.contains("--loading")) {
      tl.play();
    } else {
      gsap.delayedCall(0, checkLoading);
    }
  };
  checkLoading();