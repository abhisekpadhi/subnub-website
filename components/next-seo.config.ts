export default {
    titleTemplate: '%s | SubNub',
    defaultTitle: 'SubNub: Drop-in audio chat social network',
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://subnub.com/',
        site_name: 'SubNub',
    },
    twitter: {
        handle: '@subnubapp',
        site: '@subnubapp',
        cardType: 'summary',
    },
    additionalMetaTags: [
        {
            charset: 'utf-8'
        },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
        },
        {
            name: 'theme-color',
            content: '#f1edcf',
        }
    ],
    additionalLinkTags: [
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
        },
        {
            rel: 'icon',
            href: '/favicon.ico',
        },
        {
            rel: 'apple-touch-icon',
            href: '/logo192.png',
        },
        {
            rel: 'manifest',
            href: '/manifest.json',
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Lexend+Deca&family=Nunito:wght@400;600&display=swap',
        },
        {
            rel: "microsoft-identity-association",
            href: "/.well-known/microsoft-identity-association.json"
        },
    ]
};
