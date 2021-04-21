module.exports = {
    target: 'serverless',
    async redirects() {
        return [
            {
                source: '/about',
                destination: '/',
                permanent: false,
            },
            {
                source: '/install',
                destination: '/',
                permanent: false,
            },
            {
                source: '/refund',
                destination: '/',
                permanent: false,
            },
        ]
    },
}
