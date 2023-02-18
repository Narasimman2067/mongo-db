// how to create a database connection
// use the comment
// "use imdb" -"to create a database"
// "show dbs" -"it shows the database "
// "show collections"-"it shows the collections"
db.createCollection("movies")
// const data([{


// }])
db.movies.insert(
    [{


"id": "100",
"mentor": "RRR",
"poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
"rating": 8.8,
"summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
"trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"

},
]
)
db.movies.insertMany( [
  {
    "id": "100",
    "mentor": "RRR",
    "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    "rating": 8.8,
    "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {
    "id": "101",
    "mentor": "Iron man 2 ",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    "rating": 7,
    "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
    "id": "102",
    "mentor": "No Country for Old Men ***",
    "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    "rating": 8.1,
    "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {
      "id": "100",
      "mentor": "RRR",
      "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      "rating": 8.8,
      "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
      },
      {
      "id": "101",
      "mentor": "Iron man 2 ",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      "rating": 7,
      "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
      },
      {
      "id": "102",
      "mentor": "No Country for Old Men ***",
      "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      "rating": 8.1,
      "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
      },
    {
    "id": "100",
    "mentor": "RRR",
    "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    "rating": 8.8,
    "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {
    "id": "101",
    "mentor": "Iron man 2 ",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    "rating": 7,
    "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
    "id": "102",
    "mentor": "No Country for Old Men ***",
    "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    "rating": 8.1,
    "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {
    "id": "103",
    "mentor": "Jai Bhim",
    "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    "rating": 8.8,
    "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
    "id": "104",
    "mentor": "The Avengers",
    "rating": 8,
    "summary": "Marvel's The Avengers (classified under the mentor Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same mentor.",
    "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
    "id": "105",
    "mentor": "Interstellar",
    "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    "rating": 8.6,
    "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is mentored to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
    "id": "107",
    "mentor": "Ratatouille",
    "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    "rating": 8,
    "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
    },
    {
     "id": "108",
    "mentor": "Thor: Ragnarok",
    "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
    "rating": 7.9,
    "summary": "Deprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.",
    "trailer": "https://www.youtube.com/embed/ue80QwXMRHg"
    }
    ]
    
)

db.movies.find({}).pretty({})

db.movies.find({mentor:"RRR"})
db.movies.find ({rating:8.8})
db.movies.findOne({rating:8.8})
db.movies.find({ _id: ObjectId("63edae34631402ce18784239"),})
db.movies.deleteOne({rating:8.8})
db.movies.deleteMany({rating:8.8})
db.movies.deleteMany({})
db.dropDatabase()



// second time task
db.createCollection("movies")
db.movies.insert([{
    
        "Batch": "B42Wd",
        "Gender": "Male",
        "Name": "Raja",
        "id": "2",
        "yearsOfExperience": "3"
}])

db.movies.insertMany([
    {
      "id": "1",
      "Name": "Narasimman",
      "Batch": "B42Wd",
      "Gender": "Male",
      "yearsOfExperience": "2"
    },
    {
      "id": "2",
      "Name": "Raja",
      "Batch": "B42Wd",
      "Gender": "Male",
      "yearsOfExperience": "3"
    },
    {
      "id": "3",
      "Name": "sanjay",
      "Batch": "B42Wd",
      "Gender": "Male",
      "yearsOfExperience": "1"
    },
    {
      "id": "4",
      "Name": "sandya",
      "Batch": "B42Wd",
      "Gender": "Female",
      "yearsOfExperience": "2"
    },
    {
      "id": "5",
      "Name": "saravanan",
      "Batch": "B42Wd",
      "Gender": "Male",
      "yearsOfExperience": "4"
    }
  ])

// edit

db.students.updateOne(
  {
    _id
  },
  {
    "$set":{
      "age":25
    }
  }
)

db.movies.updateOne(
  {
    _id: ObjectId("63eef5794bf726d0da18922c")
  },
  {
    "$set":{
      "mentor":"rajamouli"
    }
  }
)
db.movies.updateMany(
  {
    "mentor":"RRR"
  },
  {
    "$set":{
      "job":"full stack developer"
    }
  },
  {
    upsert:true
  }
)
db.students.updateMany(
  {
    "name":"raja"
  },
  {
    "$set":{
      "job":"full stack developer"
    }
  },
  {
    upsert:true
  }
)

// to get all the data like find but it is used for more items
db.movies.find().toArray()
// this is used to get the paaarticular data
db.movies.find().forEach(function(movie){print(movie.mentor)})


// aggregate

db.movies.aggregate([

  {

    $lookup:{
      from:"movies",
      localField:"rating",
      foreignField:"rating",
      as:"student_type"
    }
  }
])



db.students.find({age:{$gt:20}})
db.students.find({age:{$lt:23}})

// for ascending order
db.students.find({age:{$not:{$gt:20,$lt:23}}}).sort({age:1})

// for descending order
db.students.find({age:{$not:{$gt:20,$lt:23}}}).sort({age:-1})

db.students.find({age:{$not:{$gt:20,$lt:23}}})

db.students.find({},{name:1,batch:1})
db.students.find({$or:[{Name:narasimman,mentor:RRR}]},)

db.students.aggregate([

{
  $match:{batch :"B42WD"}
},
{
  $group:{
    _id:"$name",
  }
}

])




















