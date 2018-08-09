module.exports = test;


function test(app){
  app.get('/test', (req,res)=>{
    res.send('<h1>Test Page</h1>')
  })
}