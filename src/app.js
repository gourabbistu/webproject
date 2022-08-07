const exprees=require('express')
const path=require('path')
const hbs=require('hbs')
const app = exprees()
const port = process.env.PORT || 3000
const stat_path=path.join(__dirname,'../public');
const templatesPath=path.join(__dirname,'../templates/views');
const partialsPath=path.join(__dirname,'../templates/partials');

app.set('view engine','hbs')
app.set('views',templatesPath)
hbs.registerPartials(partialsPath)
app.use(exprees.static(stat_path))
app.get('/',(req,res)=>{
    res.render("index.hbs")
})
app.get('/about',(req,res)=>{
    res.render("about.hbs")
})
app.get('/weather',(req,res)=>{
    res.render("weather.hbs")
})
app.get('*',(req,res)=>{
    res.render("404.hbs",{
        errMsz:'Oops something went wrong, this page could not find'
    })
})


app.listen(port,()=>{
    console.log(`The server is listen on port ${port}`);
})