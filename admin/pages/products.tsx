import * as React from 'react'
import {
	Component,
	CreatePage,
	DataGridPage,
	DateTimeField,
	EditPage,
	GenericCell,
	HasOneSelectCell,
	LinkButton, NumberField, SelectField, SlugField,
	TextCell,
	TextField,
	Repeater
} from '@contember/admin'
import { Seo } from '../components/Seo'
import { ImageField } from '../components/ImageField'

export const list = () => (
	<DataGridPage entities={'Product'} rendererProps={{
		title: 'Products',
		actions: <>
			<LinkButton to={'products/create'}>New product</LinkButton>
		</>
	}}>
		<TextCell field={'name'} header={'Name'} />
		<TextCell field={'title'} header={'Title'} />
		<GenericCell>
			<LinkButton to={'products/edit(id: $entity.id)'}>Edit</LinkButton>
		</GenericCell>
	</DataGridPage>
)

const ProductForm = Component(() => (
	<>
		<TextField field={'name'} label={'Name'} />
		<SlugField field={'slug'} label={'Slug'} derivedFrom={'name'} />
		<TextField field={'title'} label={'Title'} />
		<NumberField field={'price'} label={'Price'} />
		<Repeater field={'gallery.items'} label={'Gallery'} sortableBy={'position'}>
			<ImageField field={'image'}/>
		</Repeater>
		<Seo titleDerivedFrom="name" />
	</>
))

export const edit = () => (
	<EditPage entity={'Product(id=$id)'}>
		<ProductForm />
	</EditPage>
)

export const create = () => (
	<CreatePage entity={'Product'}>
		<ProductForm />
	</CreatePage>
)
