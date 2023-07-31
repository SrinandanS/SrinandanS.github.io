async function Main() {
  let file = await fetch('Frames.json')
  let JSON = await file.json()
  for(let x = 0; x < JSON.length; x++){
    document.getElementById('text').innerHTML = JSON[x]
    await new Promise(resolve => setTimeout(resolve, 30))
    
  }
  
}

//let Char = `<span style="color: ${color};">@ </span>`;
