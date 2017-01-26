const ImagesClient = require('google-images');
const routes = require('express').Router();
const client = new ImagesClient('011441807177514207921:sc6m99rzlkw', 'AIzaSyD0COUmE4dGXpNEyI42Sq7MF9k8tS8VQQo');

routes.get('/:searchKey', (req, res) => {
  client.search(req.params.searchKey).then((images) => {
    res.status(200).json(images[0]);
  });
});

module.exports = routes;
