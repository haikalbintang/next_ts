// export const initializeFlashlightEffect = () => {
//   const grayscaleImages =
//     document.querySelectorAll<HTMLImageElement>(".grayscale-image");
//   const colorImages =
//     document.querySelectorAll<HTMLImageElement>(".color-image");

//   if (grayscaleImages.length !== colorImages.length) {
//     console.error("Mismatch between grayscale and color images.");
//     return;
//   }

//   const handleMouseMove = (e: MouseEvent) => {
//     const colorImage = e.target as HTMLElement;
//     const rect = colorImage.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     colorImage.style.clipPath = `circle(100px at ${x}px ${y}px)`;
//   };

//   const handleMouseLeave = (e: MouseEvent) => {
//     const colorImage = e.target as HTMLElement;
//     colorImage.style.clipPath = "circle(0% at 50% 50%)";
//   };

//   colorImages.forEach((colorImage, index) => {
//     const grayscaleImage = grayscaleImages[index];
//     grayscaleImage.addEventListener("mousemove", handleMouseMove);
//     grayscaleImage.addEventListener("mouseleave", handleMouseLeave);
//   });

//   return () => {
//     colorImages.forEach((colorImage, index) => {
//       const grayscaleImage = grayscaleImages[index];
//       grayscaleImage.removeEventListener("mousemove", handleMouseMove);
//       grayscaleImage.removeEventListener("mouseleave", handleMouseLeave);
//     });
//   };
// };

// export const initializeFlashlightEffect = () => {
//   const grayscaleImages =
//     document.querySelectorAll<HTMLImageElement>(".grayscale-image");

//   const handleMouseMove = (e: MouseEvent) => {
//     const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const colorImage = (e.currentTarget as HTMLElement)
//       .nextElementSibling as HTMLElement;
//     colorImage.style.clipPath = `circle(100px at ${x}px ${y}px)`;
//   };

//   const handleMouseLeave = (e: MouseEvent) => {
//     const colorImage = (e.currentTarget as HTMLElement)
//       .nextElementSibling as HTMLElement;
//     colorImage.style.clipPath = "circle(0px at 50% 50%)";
//   };

//   grayscaleImages.forEach((grayscaleImage) => {
//     grayscaleImage.addEventListener("mousemove", handleMouseMove);
//     grayscaleImage.addEventListener("mouseleave", handleMouseLeave);
//   });

//   return () => {
//     grayscaleImages.forEach((grayscaleImage) => {
//       grayscaleImage.removeEventListener("mousemove", handleMouseMove);
//       grayscaleImage.removeEventListener("mouseleave", handleMouseLeave);
//     });
//   };
// };

let timer: number | undefined;

export const initializeFlashlightEffect = () => {
  const grayscaleImages =
    document.querySelectorAll<HTMLImageElement>(".grayscale-image");

  const handleMouseMove = (e: MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const colorImage = (e.currentTarget as HTMLElement)
      .nextElementSibling as HTMLElement;
    colorImage.style.clipPath = `circle(100px at ${x}px ${y}px)`;

    // Clear previous timer
    if (timer) {
      clearTimeout(timer);
    }
  };

  const handleMouseLeave = (e: MouseEvent) => {
    const colorImage = (e.currentTarget as HTMLElement)
      .nextElementSibling as HTMLElement;

    // Set a timer to delay the disappearance
    timer = window.setTimeout(() => {
      colorImage.style.clipPath = "circle(0px at 50% 50%)";
    }, 1000); // Adjust delay as needed
  };

  grayscaleImages.forEach((grayscaleImage) => {
    grayscaleImage.addEventListener("mousemove", handleMouseMove);
    grayscaleImage.addEventListener("mouseleave", handleMouseLeave);
  });

  return () => {
    grayscaleImages.forEach((grayscaleImage) => {
      grayscaleImage.removeEventListener("mousemove", handleMouseMove);
      grayscaleImage.removeEventListener("mouseleave", handleMouseLeave);
    });
  };
};
