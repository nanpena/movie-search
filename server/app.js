const express = require ('express')
const app = express()
const port = 5000;

const Sequelize = require('sequelize')
const sequelize = new Sequelize(`postgres://localhost:5432/movie-search`)

const bodyParser = require('body-parser')
app.use(bodyParser.json());


  app.listen(port, ()=> console.log(`currently using port ${port}`))


  const Movie = sequelize.define('movies', {
    title : Sequelize.STRING,
    thumbsUp : Sequelize.INTEGER,
    thumbsDown : Sequelize.INTEGER,
  })
  
  
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the datanobase:', err);
    });
  
  
    sequelize.sync({force : true}).then(()=> {
      console.log(`database & tables created`)
    })
  


    //--------------------------------------------------//

   

    app.post("/api/movies", async (req, res) => {
   

    const findMovie = await Movie.findAll({
        where : {
            title : req.body.title
        }
    })

    if (req.body.thumbsUp) {

        if(findMovie.length !== 0){         
               await Movie.findOne({ where: 
                    {title: req.body.title} })
                .then(function (movie) {
                   movie.update({thumbsUp : movie.thumbsUp + 1})
                   .then((movie) => {
                   res.json(movie)
                })
        })
    
        } else {

            Movie.create({
                title: req.body.title,
                thumbsUp: 1,
                thumbsDown : 0
              })
              .then( (result) => res.json(result) )
        }   

    } else {


        if(findMovie.length !== 0){        
               await Movie.findOne({ where: 
                    {title: req.body.title} })
               .then(function (movie) {
                    movie.update({thumbsDown : movie.thumbsDown + 1})
                    .then((movie) => {
                   res.json(movie)
               })
        })
    
        } else {
            Movie.create({
                title: req.body.title,
                thumbsUp: 0,
                thumbsDown : 1
              })
              .then( (result) => res.json(result) )
        }   
    }
})



module.exports =  {sequelize, Movie} 