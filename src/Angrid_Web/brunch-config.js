module.exports = {
    files: {
        javascripts: {
            joinTo: {
                'vendor.js': /^(?!app)/,
                'app.js': /^app/
            }
        },
        stylesheets: {
            joinTo: {
                'vendor.css': /^(?!app)/,
                'app.css': /^app/
            }
        }
        ,
        templates: {
            joinTo: {
                'templates.js': /^app/
            }
        }
    },
    plugins: {
        babel: {
            "presets": ["es2015", "stage-1"],
            "plugins": [
                "transform-es2015-destructuring",
                "transform-object-rest-spread",
                "transform-decorators-legacy"
            ]
        }

    },

    npm: {
        styles: { bootstrap: ['dist/css/bootstrap.min.css'] },
        static: ['node_modules/bootstrap/dist/js/bootstrap.min.js'],
        globals: { bootstrap: 'bootstrap' }
    },
    paths: {
        public: "wwwroot"
    }
    //server: {
    //    //run:false,
    //    port: 6834
    //}
};
