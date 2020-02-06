const mix = require("laravel-mix");

mix.ts("resources/js/main.ts", "public/js").sass(
    "resources/sass/app.scss",
    "public/css"
);
