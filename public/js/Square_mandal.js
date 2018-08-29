async function make(){
  var result = await axios.post('/makeBtn', {
    id : "akat32"
  })
  if(result.status == 200) location.replace('/make1');
  else location.replace('/login');
}
