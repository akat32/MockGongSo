module.exports = test;


function test(app){
  app.get('/test', (req,res)=>{
    res.send('<h1>Test Page</h1>')
  })
  .get('/login', (req,res)=>{
    res.render('login.html')
  })
  .get('/make1', (req,res)=>{
    res.render('make1.html');
  })
  .get('/make2', (req,res)=>{
    res.render('make2.html')
  })
  .get('/make3', (req,res)=>{
    res.render('make3.html')
  })
  .get('/make4', (req,res)=>{
    res.render('make4.html')
  })
  .get('/mandalt', (req,res)=>{
    res.render('Triangle_mandal.html');
  })
  .get('/register', (req,res)=>{
    res.render('reg.html')
  })
  .get('/shop',(req,res)=>{
    res.render('shop.html');
  })
  .get('/downMandal', (req,res)=>{
    res.render('downMandal.html')
  })
}
