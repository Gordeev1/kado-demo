import { by, element } from 'detox';

export const swapUi = {
	form: {
		amountInput: element(by.id('swap.form.amount-input')),
		amountError: element(by.id('swap.form.error.amount')),
		quoteAmount: element(by.id('swap.form.quote.amount')),
		txError: element(by.id('swap.form.tx-error')),
	},
};
