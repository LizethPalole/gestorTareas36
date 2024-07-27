const path = require('path') ;

module.exports = {
    entry: './src/index.js', //punto de entrada de la applicación
    output: {
        filename: 'bundel.js', //Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), // carpeta de salida
    },
   module: {
    rules: [
        {
            test:/\.css$/, //Regex para identificar archivos CSS
            use: ['style-loader', 'css-louder'], // Loaders para prosesar archivos CSS
        },
        {
            test: /\.js$/, //regex para identificar archivos JS
            exclude: /node_modules/, //Excluir la carpeta node_modules
            use: {
                loader: 'babel-loader', //Loder para llevar JS moderno a JS antiguo
                options: {
                    presents: ['@babel/present-env'],
                },
            },
        },
    ],
   },
   devtool: 'source_map', //Generar source maps para facilitar la depuracion.
   devServer: {
    contentBase: path.resolve(__dirname, 'dist'), //Carpeta desde la cual el servidor agregara los archivos
    compress: true, //Habilitar comprencion grip
    port: 9000, //puerto del servidor de desarrollo
   },
};