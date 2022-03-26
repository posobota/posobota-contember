import Link from "next/link"

type CustomLinkProps = {
	label: string
	url?: any
	role?: 'button' | 'link'
	type?: 'primrary' | 'secondary'
}

export default function CustomLink(props: CustomLinkProps) {
	const { label, url } = props
	const articlePrefix = '/blog'

	const pageUrlRole: any = {
		homePage: `/`,
		blogPage: articlePrefix,
		error404Page: "/404"
	}

	const urlTypes: any = {
		url: url?.url,
		page: url?.page?.role ? pageUrlRole[url?.page.role] : `/${url?.page?.slug}`,
		article: `${articlePrefix}/${url?.article?.slug}`
	}
	const href = url ? url.type && urlTypes[url.type] : null

	if (href) {
		if (url.type === 'url') {
			return (<a href={href} target="_blank" role={props.role} className={props.type}>{label}</a>)
		}
		return (
			<Link href={href}><a role={props.role} className={props.type}>{label}</a></Link>
		)
	} else {
		return <span>{label}</span>
	}

}
