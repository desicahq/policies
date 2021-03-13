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
      <script async src="https://analytics.desica.uk/tracker.js" data-ackee-server="https://analytics.desica.uk" data-ackee-domain-id="5b7ce318-b863-43fd-a89e-5c266026b782"></script>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="This is the Desica leagal hub, where you can find all of our leagal policies and infomation." />
      <meta name="og:description" content="This is the Desica leagal hub, where you can find all of our leagal policies and infomation." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://policies.desica.uk/og.png" />
      <meta name="twitter:site:domain" content="policies.desica.uk" />
      <meta name="twitter:url" content="https://policies.desica.uk" />
      <meta name="og:title" content="Policies | Desica" />
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
