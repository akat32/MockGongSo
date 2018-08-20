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
  .get('/mandals',(req,res)=>{
    res.render('Square_mandal.html')
  })
  .get('/make1', (req,res)=>{
    res.render('make1.html');
  })
}
