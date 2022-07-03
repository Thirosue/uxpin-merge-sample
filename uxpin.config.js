module.exports = {
    components: {
        categories: [
            {
                name: 'General',
                include: [
                    'components/atoms/Typography/Typography.tsx',
                ],
            },
            {
                name: 'Form',
                include: [
                    'components/atoms/form/FormLabel/FormLabel.tsx',
                    'components/atoms/form/FormErrorMessage/FormErrorMessage.tsx',
                    'components/atoms/form/FormInput/FormInput.tsx',
                ],
            },
        ],
        wrapper: 'src/wrapper/UXPinWrapper.js',
        webpackConfig: 'uxpin.webpack.config.js',
    },
    name: 'Example Design System'
};
