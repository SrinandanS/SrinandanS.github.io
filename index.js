async function Main() {
  await GetRes()
  let file = await fetch('Frames.json')
  let JSON = await file.json()
  for(let x = 0; x < JSON.length; x++){
    document.getElementById('text').innerHTML = JSON[x]
    await new Promise(resolve => setTimeout(resolve, 30))
    
  }
  
}
async function GetRes(){
  let width = window.screen.width;
  let text = document.getElementById('text')
  console.log(width+'x'+window.screen.height)
  if(width < 1000){
    text.style.fontSize = '2px'
  }
}
Main()

//let Char = `<span style="color: ${color};">@ </span>`;
