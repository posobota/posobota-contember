import { SchemaDefinition as def } from '@contember/schema-definition'

export class Image {
	url = def.stringColumn().notNull()
	width = def.intColumn()
	height = def.intColumn()
	size = def.intColumn()
	type = def.stringColumn()
	alt = def.stringColumn()
}

export class Gallery {
	slug = def.stringColumn().unique()
	items = def.oneHasMany(GalleryItem, 'gallery').orderBy('position')
}

export class GalleryItem {
	image = def.manyHasOne(Image).setNullOnDelete()
	gallery = def.manyHasOne(Gallery, 'items').setNullOnDelete()
	position = def.intColumn()
}
