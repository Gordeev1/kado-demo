import { device, expect } from 'detox';
import { swapUi } from './ui';

describe('swap/form', () => {
	beforeEach(async () => {
		await device.launchApp({
			delete: false,
			newInstance: true,
		});
	});

	it('Validate amount input', async () => {
		await swapUi.form.amountInput.typeText('0.0000001');
		await expect(swapUi.form.amountError).toBeVisible();
	});

	it('Display API transaction error if amount is smaller than fees', async () => {
		await swapUi.form.amountInput.typeText('1');
		await expect(swapUi.form.txError).toBeVisible();
	});
});
