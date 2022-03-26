import { SchemaDefinition as def } from '@contember/schema-definition'
import { Content } from './Content'
import { Image, Gallery } from './Image'
import { Seo } from './Seo'

export class Product {
	name = def.stringColumn().notNull()
	slug = def.stringColumn().notNull().unique()
    coverPhoto = def.manyHasOne(Image).setNullOnDelete()
    title = def.stringColumn()
	content = def.oneHasOne(Content).removeOrphan().setNullOnDelete()
	seo = def.oneHasOne(Seo).notNull().removeOrphan()
    price = def.intColumn().notNull()
    gallery = def.oneHasOne(Gallery)
}
