const path = require('path') ;

module.exports = {
    mode: 'development',
    entry: './src/index.js', //punto de entrada de la applicación
    output: {
        filename: 'bundel.js', //Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), // carpeta de salida
    },
   module: {
    rules: [
        {
            test:/\.css$/, //Regex para identificar archivos CSS
            use: ['style-loader', 'css-loader'], // Loaders para prosesar archivos CSS
        },
        {
            test: /\.js$/, //regex para identificar archivos JS
            exclude: /node_modules/, //Excluir la carpeta node_modules
            use: {
                loader: 'babel-loader', //Loder para llevar JS moderno a JS antiguo
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        },
    ],
   },
   devtool: 'source-map', //Generar source maps para facilitar la depuracion.
   devServer: {
   static: {
       directory: path.resolve(__dirname, 'dist'),
   },
    compress: true, //Habilitar comprencion grip
    port: 9000, //puerto del servidor de desarrollo
   },
};