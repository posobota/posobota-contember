import { SchemaDefinition as def } from '@contember/schema-definition'

export class Tag {
	slug = def.stringColumn().notNull().unique()
	name = def.stringColumn()
	title = def.stringColumn()
}


export class City {
	slug = def.stringColumn().notNull().unique()
	name = def.stringColumn()
	title = def.stringColumn()
}
