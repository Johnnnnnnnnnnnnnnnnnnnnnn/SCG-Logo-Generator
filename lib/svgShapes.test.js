// svgGenerator.test.js
const { createSvg } = require('./svgShapes');

describe('createSvg function', () => {
  test('Generate an SVG with circle shape', () => {
    const data = {
      text: 'Test',
      textColor: 'white',
      shape: 'circle',
      shapeColor: 'black',
    };

    const result = createSvg(data);

    expect(result).toContain('<circle cx="50%" cy="50%" r="40%" fill="black" />');
    expect(result).toContain('<text style="font-size: 150px" x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="white">Test</text>');
  });

  test('Generate an SVG with triangle shape', () => {
    const data = {
      text: 'Test',
      textColor: 'white',
      shape: 'triangle',
      shapeColor: 'black',
    };

    const result = createSvg(data);

    expect(result).toContain('<path d="M150 0 L200 100 100 100 150 0" stroke="black" stroke-width="5" fill="black" />');
    expect(result).toContain('<text style="font-size: 150px" x="25%" y="15%" text-anchor="middle" dominant-baseline="middle" fill="white">Test</text>');
  });

  test('Generate an SVG with square shape', () => {
    const data = {
      text: 'Test',
      textColor: 'white',
      shape: 'square',
      shapeColor: 'black',
    };

    const result = createSvg(data);

    expect(result).toContain('<rect width="100%" height="100%" fill="black" />');
    expect(result).toContain('<text style="font-size: 150px" x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="white">Test</text>');
  });

  test('Throw an error for an invalid shape', () => {
    const data = {
      text: 'Test',
      textColor: 'white',
      shape: 'invalidShape',
      shapeColor: 'black',
    };

    expect(() => createSvg(data)).toThrowError('Invalid shape selected');
  });
});
