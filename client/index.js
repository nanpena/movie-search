// [] when clicked on thumbs up/down button...
//      - I want to go to database name 'Movies' to check it 
//      - this movie title already exists, if yes ----> go to that table and +1 or -1 on the vote 
//                                         if No, create new table and add the vote. 





// const express = require ('express')
// const app = express()
// const port = 5000;
// const Sequelize = require('sequelize')
// const sequelize = new Sequelize(`postgres://localhost:5432/movie-search`)

// app.get('/api/movies', (req,res) => {
//   let movies = ['movie1','movie2','movie3']
//   res.json(movies)
// })


// // app.get('/', (req,res) => res.send('Movies'))




// app.listen(port, ()=> console.log(`currently using port ${port}`))


// const Movie = sequelize.define('movies', {
//   title : Sequelize.TEXT,
//   thumbsUp : Sequelize.INTEGER,
//   thumbsDown : Sequelize.INTEGER
// })


// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the datanobase:', err);
//   });


//   sequelize.sync({force : true}).then(()=> {
//     console.log(`database & tables created`)
//   })


