# Mile Two Website - http://miletwo.us

## Development
This site is built with Jekyll and Less. To get started, make sure you have
[Jekyll](https://jekyllrb.com/) and
[Node.js](https://nodejs.org/en/) installed on your system.

1. Open a terminal and navigated to the MileTwoWebsite directory.
2. run `npm install`
3. run `npm start`

This starts jekyll and the less compiler. You can now preview the site at [http://localhost:4000](http://localhost:4000).

The less compilation starts at less/styles and compiles it to css/styles.css along with a source map. It is then sent through postcss, which runs autoprefixer (adds vender prefixes) and cssnano (minifies). The result ends up in css/styles.min.css. The configuration for all of this is in postcss.config.js. Since the files in the css directory are generated, there is no need to check them in.

## Jekyll
First, install RVM so that you can switch between different Ruby versions. Follow
the instructions at https://stackoverflow.com/questions/38194032/how-to-update-ruby-version-2-0-0-to-the-latest-version-in-mac-osx-yosemite

Then run `gem install bundler jekyll`
