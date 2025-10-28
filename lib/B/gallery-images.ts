const MAX = 24;

const images = Array.from({ length: MAX }, (_, i) => {
  const num = String(i + 1).padStart(2, "0"); // 01, 02, ... 57
  const isLandscape = num === "01" || num === "05"; // 가로형

  return {
    alt: `image${num}`,
    src: `/assets/images/gallery/B/${num}.JPG`,
    width: isLandscape ? 1920 : 1280,
    height: isLandscape ? 1280 : 1920,
  };
});

export default images;
