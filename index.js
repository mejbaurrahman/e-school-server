const express = require('express')
const app = express();
const cors = require('cors');
const port = 5000

app.use(cors());

const categories = require('./data/categoriesData.json');
const courses = require('./data/coursesData.json');

app.get('/courses/:id', (req, res)=>{
    const categoryId = req.params;
  if(parseInt(categoryId.id)==6){
    res.send(courses);
  }else{
    const courseByCategory = courses.filter(n=>n.category == parseInt(categoryId.id));
    // console.log(categoryNews);
    res.send(courseByCategory);
  }
  
})

app.get('/course/:id', (req, res)=>{
  const courseId = req.params;
  const course = courses.find(c=> c._id === parseInt(courseId.id))
  console.log(course);
  res.send(course);
})
app.get('/categories', (req, res)=>{
    res.json(categories);
})
app.get('/courses', (req, res)=>{
    res.json(courses);
})

app.get('')
app.get('/', (req, res) => {
    res.send('Welcome to E -school');
  })
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})