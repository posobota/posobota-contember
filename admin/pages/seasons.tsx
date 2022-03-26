import * as React from 'react'
import { MultiEditPage, SlugField, TextField } from '@contember/admin'
import { ImageField } from '../components/ImageField'

export default function () {
	return (
		<MultiEditPage entities={'Season'} rendererProps={{ title: 'Seasons' }}>
			<TextField field={'name'} label={'Name'} />
			<SlugField field={'slug'} label={'Slug'} derivedFrom={'name'} />
			<TextField field={'title'} label={'Title'} />
			<ImageField field={'coverPhoto'} label={'Cover photo'} />
		</MultiEditPage>
	)
}
