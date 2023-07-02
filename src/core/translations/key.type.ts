type GetPrefix<P extends string> = [P] extends [''] ? '' : `${P}.`;
type IsString<K> = K extends string ? K : never;

type GetKeys<Obj, Prefix extends string = ''> = {
	[K in keyof Obj]: Obj[K] extends object
		? GetKeys<Obj[K], `${GetPrefix<Prefix>}${IsString<K>}`>
		: `${GetPrefix<Prefix>}${IsString<K>}`;
}[keyof Obj];

export type TranslationsKeyType = GetKeys<typeof import('./en.json')>;
