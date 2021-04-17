import NextLink from 'next/link'
export function Link(props) {
	const { href, children, className } = props;
	return (
		<NextLink href={href}>
			<a className={className}>{children}</a>
		</NextLink>
	)
}