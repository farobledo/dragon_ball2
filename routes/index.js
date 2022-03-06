var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: ' Bienvenidos a Dragon Ball Z ' });
});

router.get('/animes', function(req, res, next) {
  res.render('animes', { title: ' Bienvenidos a Animes' });
});

router.get('/personajes', function(req, res, next) {
  res.render('personajes', { title: ' Bienvenidos a tu personaje Favorito' });
});


router.get('/peliculas', function(req, res, next) {
  res.render('peliculas', { title: ' Dragon Ball Z' });
});

router.get('/dragonBall', function(req, res, next) {
  res.render('dragonBall', { title: 'Bienvenidos a Dragon Ball' });
});



module.exports = router;