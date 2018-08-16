module.exports = test;


function test(app){
  app.get('/test', (req,res)=>{
    res.send('<h1>Test Page</h1>')
  })
  .get('/', (req, res)=>{
    res.render('main.html')
  })
  .get('/login', (req,res)=>{
    res.render('login.html')
  })
}
