const { themeStyledUtils } = require('./utils');

const { PixelRatio } = require('react-native');

const mockGetPixelRatio = jest.fn().mockReturnValue(3);

PixelRatio.get = mockGetPixelRatio;
PixelRatio.roundToNearestPixel = jest.fn((layoutSize) => {
	const ratio = PixelRatio.get();
	return Math.round(layoutSize * ratio) / ratio;
});

const designWindowSize = { width: 375, height: 812 };

describe('scale/width', () => {
	it('works properly passing window size directly', () => {
		const result = themeStyledUtils.scale(50)(designWindowSize);
		expect(result).toBe(50);
	});

	it('works properly passing window size as part of theme', () => {
		const result = themeStyledUtils.scale(50)({ theme: { windowSize: designWindowSize } });
		expect(result).toBe(50);
	});

	it('works properly with negative values', () => {
		const result = themeStyledUtils.scale(-100)(designWindowSize);
		expect(result).toBe(-100);
	});

	it('return same value if screen width is same as in design', () => {
		const result = themeStyledUtils.scale(100)(designWindowSize);
		expect(result).toBe(100);
	});

	it('assume height as width with horizontal orientation on mobile', () => {
		const windowSize = { width: 812, height: 375 };
		const result = themeStyledUtils.scale(100)(windowSize);
		expect(result).toBe(100);
	});

	it('scale up if screen width is larger', () => {
		const windowSize = { width: 412, height: 892 };
		const result = themeStyledUtils.scale(100)(windowSize);
		expect(result).toBe(110);
	});

	it('scale down if screen width is smaller', () => {
		const windowSize = { width: 360, height: 760 };
		const result = themeStyledUtils.scale(100)(windowSize);
		expect(result).toBe(96);
	});
});

describe('scale/height', () => {
	it('works properly passing window size directly', () => {
		const result = themeStyledUtils.scaleVertical(50)(designWindowSize);
		expect(result).toBe(50);
	});

	it('works properly passing window size as part of theme', () => {
		const result = themeStyledUtils.scaleVertical(50)({
			theme: { windowSize: designWindowSize },
		});
		expect(result).toBe(50);
	});

	it('works properly with negative values', () => {
		const result = themeStyledUtils.scaleVertical(-100)(designWindowSize);
		expect(result).toBe(-100);
	});

	it('return same value if screen height is same as in design', () => {
		const result = themeStyledUtils.scaleVertical(100)(designWindowSize);
		expect(result).toBe(100);
	});

	it('assume width as height with horizontal orientation on mobile', () => {
		const windowSize = { width: 812, height: 375 };
		const result = themeStyledUtils.scaleVertical(100)(windowSize);
		expect(result).toBe(100);
	});

	it('scale up if screen height is larger', () => {
		const windowSize = { width: 412, height: 892 };
		const result = themeStyledUtils.scaleVertical(100)(windowSize);
		expect(result).toBe(110);
	});

	it('scale down if screen height is smaller (with pixel ratio 3)', () => {
		const windowSize = { width: 360, height: 760 };
		mockGetPixelRatio.mockReturnValue(3);
		const result = themeStyledUtils.scaleVertical(100)(windowSize);
		expect(result).toBe(93.66666666666667);
	});

	it('scale down if screen height is smaller (with pixel ratio 2)', () => {
		const windowSize = { width: 360, height: 760 };
		mockGetPixelRatio.mockReturnValue(2);
		const result = themeStyledUtils.scaleVertical(100)(windowSize);
		expect(result).toBe(93.5);
	});
});

export {};
