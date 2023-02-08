function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
    const img = document.querySelector("#profile img")


     if(html.classList.contains('light')){
      img.setAttribute('src' , './images/profile_light.jpeg')
    }else{
        img.setAttribute('src' , './images/profile.jpeg')
    }
    
    
    
}