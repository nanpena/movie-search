// [***] when clicked on thumbs up/down button...
//      - I want to go to database name 'Movies' to check it 
//      - this movie title already exists, if yes ----> go to that table and +1 or -1 on the vote 
//                                         if No, create new table and add the vote. 


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
  
  
    sequelize.sync({force : false}).then(()=> {
      console.log(`database & tables created`)
    })
  


    //--------------------------------------------------//

    app.get('/api/movies', (req,res) => {
        let movies = ['movie1','movie2','movie3']
        res.json(movies)
      })
    
      app.get('/api/allmovies',  async (req,res) => {
        // const movies =  Movie.findAll()
        console.log('###### requestion API #######',"movies")
        
        try {
            const movies = await Movie.findAll().then((result) => res.json(result))
            console.log('###### requestion API #######',"movies", movies)
            // res.json(movies) 
              
           } catch (err) {
             console.error(err)
           }
      })
    
    
    
    
    app.post("/api/movies", async (req, res) => {
    console.log('#### POSTING NEW MOVIE ###',req.body)

    const findMovie = await Movie.findAll({
        where : {
            title : req.body.title
        }
    })

    if (req.body.thumbsUp === true) {

        if(findMovie.length !== 0){
            console.log('++ UPP ++ movie already exits')            
                await Movie.findOne({ where: 
                    {title: req.body.title} }).then(function (movie) {
               movie.update({
                   thumbsUp : movie.thumbsUp + 1
               }).then((movie) => {
                   res.json(movie)
               })
            })
    
        } else {
            console.log('++ UPPP ++ new movie need to be added ')
            Movie.create({
                title: req.body.title,
                thumbsUp: 1,
                thumbsDown : 0
              })
              .then( (result) => res.json(result) )
        }   

    } else {

        console.log('Voting Thumbs Down')
        if(findMovie.length !== 0){
            console.log('%%% DOWN %% movie already exits')            
                await Movie.findOne({ where: 
                    {title: req.body.title} }).then(function (movie) {
               movie.update({
                   thumbsDown : movie.thumbsDown + 1
               }).then((movie) => {
                   res.json(movie)
               })
            })
    
        } else {
            console.log('%% DOWN %% new movie need to be added ')
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