module.exports = {
    components: {
        categories: [
            {
                name: 'General',
                include: [
                    'components/atoms/Typography/Typography.tsx',
                ],
            },
        ],
        wrapper: 'src/wrapper/UXPinWrapper.js',
        webpackConfig: 'uxpin.webpack.config.js',
    },
    name: 'Example Design System'
};
