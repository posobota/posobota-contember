import * as React from 'react'
import { Menu } from '@contember/admin'
import locale from '../locales'

export const Navigation = () => (
	<Menu>
		<Menu.Item title={'Events'}>
			<Menu.Item title={'Seasons'} to="seasons" />
			<Menu.Item title={'Episodes'} to="episodes/list" />
		</Menu.Item>
		<Menu.Item title={'Merch'}>
			<Menu.Item title={'Products'} to="products/list" />
		</Menu.Item>
		<Menu.Item title={'CMS'}>
			<Menu.Item title={locale['Pages']} to="pageList" />
			<Menu.Item title={locale['Articles']} to="articleList" />
			<Menu.Item title={locale['Messages']} to="messageList" />
			<Menu.Item title={locale['Settings']} to="settings" />
			<Menu.Item title={locale['Navigation']} to="navigationList" />
			<Menu.Item title={locale['SEO']}>
				<Menu.Item title={locale['Articles']} to="seoArticles" />
				<Menu.Item title={locale['Pages']} to="seoPages" />
			</Menu.Item>
		</Menu.Item>
	</Menu>
)
