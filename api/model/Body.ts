import { SchemaDefinition as def } from '@contember/schema-definition'
import { Gallery, Image } from './Image'
import { Seo } from './Seo'
import { Content } from './Content'

export class Partner {
	slug = def.stringColumn().notNull().unique()
	logo = def.manyHasOne(Image).setNullOnDelete()
	name = def.stringColumn()
	title = def.stringColumn()
    homepageUrl = def.stringColumn().unique()
	facebookUrl = def.stringColumn().unique()
    twitterUrl = def.stringColumn().unique()
    githubUrl = def.stringColumn().unique()
    linkedinUrl = def.stringColumn().unique()
	content = def.oneHasOne(Content).removeOrphan().setNullOnDelete()
	seo = def.oneHasOne(Seo).notNull().removeOrphan()
    gallery = def.oneHasOne(Gallery)
}


export class Speaker {
	slug = def.stringColumn().notNull().unique()
	logo = def.manyHasOne(Image).setNullOnDelete()
	name = def.stringColumn()
	title = def.stringColumn()
    description = def.stringColumn()
    homepageUrl = def.stringColumn().unique()
	facebookUrl = def.stringColumn().unique()
    twitterUrl = def.stringColumn().unique()
    githubUrl = def.stringColumn().unique()
    linkedinUrl = def.stringColumn().unique()
	content = def.oneHasOne(Content).removeOrphan().setNullOnDelete()
	seo = def.oneHasOne(Seo).notNull().removeOrphan()
}
