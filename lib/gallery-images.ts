const MAX = 57;

const images = Array.from({ length: MAX }, (_, i) => {
  const num = String(i + 1).padStart(2, "0"); // 01, 02, ... 57
  const isLandscape =
    num === "04" ||
    num === "07" ||
    num === "12" ||
    num === "15" ||
    num === "18" ||
    num === "21" ||
    num === "23" ||
    num === "25"; // 가로형

  return {
    alt: `image${num}`,
    src: `/assets/images/gallery/${num}.JPG`,
    width: isLandscape ? 1920 : 1280,
    height: isLandscape ? 1280 : 1920,
  };
});

export default images;
