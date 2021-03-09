export default {
  reposistory: 'https://github.com/jacobhq/policies',
  titleSuffix: ' – Desica Policies',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Policies</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Desica
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Nextra: the next site builder" />
      <meta name="og:description" content="Nextra: the next site builder" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://policies.desica.uk/og.png" />
      <meta name="twitter:site:domain" content="policies.desica.uk" />
      <meta name="twitter:url" content="https://policies.desica.uk" />
      <meta name="og:title" content="Nextra: Next.js static site generator" />
      <meta name="og:image" content="https://policies.desica.uk/og.png" />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" href="https://static.desica.uk/hotlink-ok/favicon.ico"/>
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerText: <>© {new Date().getFullYear()} Desica.</>
}
