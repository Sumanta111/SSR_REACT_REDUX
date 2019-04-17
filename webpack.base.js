module.exports = {
    module: {
        rules: [
            {
                //apply all on the js code
                test: /\.js?$/,
                //use babel-loader
                loader: 'babel-loader',
                //exclude node modules
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] } }]
                    ]
                }
            }
        ]
    }
}