import { SchemaDefinition as def } from '@contember/schema-definition'
import { Image } from './Image'
import { Seo } from './Seo'
import { Content } from './Content'
import { City, Tag } from './Taxonomy'

export class Season {
	slug = def.stringColumn().notNull().unique()
	coverPhoto = def.manyHasOne(Image).setNullOnDelete()
	name = def.stringColumn()
	title = def.stringColumn()
}

export class Episode {
    season = def.manyHasOne(Season).notNull()
	slug = def.stringColumn().notNull().unique()
	coverPhoto = def.manyHasOne(Image).setNullOnDelete()
	name = def.stringColumn()
	title = def.stringColumn()
    content = def.oneHasOne(Content).removeOrphan().setNullOnDelete()
    startsAt = def.dateTimeColumn().notNull()
    endsAt = def.dateTimeColumn().notNull()
    city = def.manyHasOne(City)
    address = def.stringColumn()
    youtubeCode = def.stringColumn().unique()
	netteForumUrl = def.stringColumn().unique()
    facebookUrl = def.stringColumn().unique()
	seo = def.oneHasOne(Seo).notNull().removeOrphan()
}


export class Talk {
    episode = def.manyHasOne(Episode).notNull()
	slug = def.stringColumn().notNull().unique()
	coverPhoto = def.manyHasOne(Image).setNullOnDelete()
	name = def.stringColumn()
    content = def.oneHasOne(Content).removeOrphan().setNullOnDelete()
    startsAt = def.dateTimeColumn().notNull()
    durationMinutes = def.intColumn().notNull()
    presentationUrl = def.stringColumn()
    youtubeCode = def.stringColumn().unique()
	seo = def.oneHasOne(Seo).notNull().removeOrphan()
    tags = def.manyHasMany(Tag)
}


export class TalkProposal {
    speakerPhoto = def.manyHasOne(Image).setNullOnDelete()
	speakerName = def.stringColumn()
    speakerDescription = def.stringColumn()
    talkName = def.stringColumn()
    talkDescription = def.stringColumn()
    duration = def.intColumn().notNull()
    presentationUrl = def.stringColumn()
    homepageUrl = def.stringColumn()
    twitterUrl = def.stringColumn()
    githubUrl = def.stringColumn()
    linkedinUrl = def.stringColumn()
}
