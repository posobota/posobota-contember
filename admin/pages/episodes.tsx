import * as React from 'react'
import {
	Component,
	CreatePage,
	DataGridPage,
	DateTimeField,
	EditPage,
	GenericCell,
	HasOneSelectCell,
	LinkButton, SelectField, SlugField,
	TextCell,
	TextField
} from '@contember/admin'
import { Seo } from '../components/Seo'

export const list = () => (
	<DataGridPage entities={'Episode'} rendererProps={{
		title: 'Episodes',
		actions: <>
			<LinkButton to={'episodes/create'}>New episode</LinkButton>
		</>
	}}>
		<HasOneSelectCell options={'Season.name'} field={'season'} />
		<TextCell field={'name'} header={'Name'} />
		<TextCell field={'title'} header={'Title'} />
		<GenericCell>
			<LinkButton to={'episodes/edit(id: $entity.id)'}>Edit</LinkButton>
		</GenericCell>
	</DataGridPage>
)

const EpisodeForm = Component(() => (
	<>
		<SelectField field={'season'} options={'Season.name'} label={'Season'} />
		<TextField field={'name'} label={'Name'} />
		<SlugField field={'slug'} label={'Slug'} derivedFrom={'name'} />
		<TextField field={'title'} label={'Title'} />
		<DateTimeField field={'startsAt'} label={'Starts at'} />
		<DateTimeField field={'endsAt'} label={'Ends at'} />
		<Seo titleDerivedFrom="name" />
	</>
))

export const edit = () => (
	<EditPage entity={'Episode(id=$id)'}>
		<EpisodeForm />
	</EditPage>
)

export const create = () => (
	<CreatePage entity={'Episode'}>
		<EpisodeForm />
	</CreatePage>
)
