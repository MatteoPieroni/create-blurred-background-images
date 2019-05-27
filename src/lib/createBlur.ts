import { Dimensions } from "./Resizer";

function getTemplate(
  encodedImage: string,
  { width, height }: Dimensions
): string {
  const encodedUrl = `data:image/svg+xml;charset=utf-8,<svg%20xmlns%3D"http%3A//www.w3.org/2000/svg"%20xmlns%3Axlink%3D"http%3A//www.w3.org/1999/xlink"%20width%3D"${width}"%20height%3D"${height}"%20viewBox%3D"0%200%20${width}%20${height}">%0A%20%20<filter%20id%3D"blur"%20color-interpolation-filters%3D"sRGB">%0A%20%20%20%20<feGaussianBlur%20stdDeviation%3D"20"%20edgeMode%3D"duplicate"%20/>%0A%20%20%20%20<feComponentTransfer>%0A%20%20%20%20%20%20<feFuncA%20type%3D"discrete"%20tableValues%3D"1%201"%20/>%0A%20%20%20%20</feComponentTransfer>%0A%20%20</filter>%0A%20%20<image%20filter%3D"url%28%23blur%29"%20xlink%3Ahref%3D"data%3Aimage/jpeg%3Bbase64%2C${encodeURIComponent(
    encodedImage
  )}"%20x%3D"0"%20y%3D"0"%20height%3D"100%25"%20width%3D"100%25"/>%0A</svg>`;
  return encodedUrl;
}

module.exports = getTemplate;
export {};
