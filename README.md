## Less Bootstrap Middleware -- Less BS
[Express](https://github.com/visionmedia/express) / [Connect](https://github.com/senchalabs/connect) middleware for [bootstrap](https://twitter.github.com/bootstrap) using [less](http://lesscss.org/).  Adds dependency which uses the bootstrap version which matches the version of this module.

## Installation
    npm install less-bs-middleware

## Usage
Exact same usage as [less-middleware](https://github.com/emberfeather/less.js-middleware).

## Example
Just add a stylesheet tag that follows the same pattern as your other stylesheets.

If your stylesheet is:

```jade
link(rel='stylesheet', href='/stylesheets/style.css')
```

Your bootstrap stylesheet tag should be:
    
```jade
link(rel='stylesheet', href='/stylesheets/bootstrap.css')
```

### Express Example:

```javascript
app.use(require('less-bs-middleware')({ 
    src: __dirname + '/public/less',
    dest: __dirname + '/public/stylesheets',
    prefix: '/stylesheets'
}));
```