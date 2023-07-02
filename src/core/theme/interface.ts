export interface CoreThemeInterface {
	colors: Record<
		| 'main'
		| 'primary'
		| 'secondary'
		| 'thirdly'
		| 'white'
		| 'positive'
		| 'highlight'
		| 'negative'
		| 'background'
		| 'shadow'
		| 'border'
		| 'button-primary-background'
		| 'button-primary-background-inactive'
		| 'button-primary-label'
		| 'button-primary-label-inactive'
		| 'button-secondary-background'
		| 'button-secondary-label'
		| 'button-thirdly-background'
		| 'button-thirdly-label',
		string
	>;
	fontSize: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl', [number, number]>;
	fonts: Record<'bold' | 'medium' | 'regular', string>;
	radius: Record<'r1' | 'r2' | 'r3' | 'r4' | 'r5', number>;
	spacing: Record<
		's1' | 's2' | 's3' | 's4' | 's5' | 's6' | 's7' | 's7.5' | 's8' | 's9' | 's10' | 's11',
		number
	>;
}
