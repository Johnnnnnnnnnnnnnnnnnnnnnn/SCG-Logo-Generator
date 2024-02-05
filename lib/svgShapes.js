function createSvg(data) {
    const { text, textColor, shape, shapeColor } = data;
  
    const svgWidth = 600;
    const svgHeight = 400;
  
    let svgContent = '';
    switch (shape) {
      case 'circle':
        svgContent = createCircle(text, textColor, shapeColor);
        break;
      case 'triangle':
        svgContent = createTriangle(text, textColor, shapeColor);
        break;
      case 'square':
        svgContent = createSquare(text, textColor, shapeColor);
        break;
      default:
        throw new Error('Invalid shape selected');
    }
  
    return `<svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">${svgContent}</svg>`;
  }
  
  function createCircle(text, textColor, shapeColor) {
    return `<circle cx="50%" cy="50%" r="40%" fill="${shapeColor}" />
      <text style="font-size: 150px" x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${text}</text>`;
  }
  
  function createTriangle(text, textColor, shapeColor) {
    return `<path d="M150 0 L200 100 100 100 150 0" stroke="${shapeColor}" stroke-width="5" fill="${shapeColor}" />
      <text style="font-size: 150px" x="25%" y="15%" text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${text}</text>`;
  }
  
  function createSquare(text, textColor, shapeColor) {
    return `<rect width="100%" height="100%" fill="${shapeColor}" />
      <text style="font-size: 150px" x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${text}</text>`;
  }
  
  module.exports = { createSvg };