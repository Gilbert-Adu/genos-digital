const express = require('express');
const path = require("path");
const ejs = require("ejs");
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

const projects = require("./data/projects");
app.get("/", (req, res)=>{
    //res.sendFile(path.join(__dirname, 'index.html'))

    res.render('index', {projects: projects});
});

//another commit 
app.get("/projects/:id", (req, res) => {
    const theProject = projects.find(project => project.id == req.params.id);
    res.render('project', {project: theProject})
});
app.listen(5000, () => {
    console.log("up on 5000")
    console.log("I see these new changes.")
    
});
