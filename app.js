next = document.getElementsByClassName("next")[0]
back = document.getElementsByClassName("back")[0]
plane = document.getElementsByClassName("airplane")[0]
lightning = document.getElementById('lightning')
line1 = document.getElementById("line1")
line2 = document.getElementById("line2")
line3 = document.getElementById("line3")
text = document.getElementsByClassName("plane-text")[0]

let counter = 0


const airplane = (count) => {
    console.log(count)

    if (count == 0) {
        text.style = "display:none"
        lightning.style = "display:none"
        plane.style = "display: inline-block; position:absolute; bottom: 1%; left: 4%"
        plane.getElementsByClassName("plane-text")[0].innerHTML = ""
        line1.innerHTML = '<line x1="0" y1="100%" x2="100%" y2="0" style="stroke: rgb(255,255, 0); stroke-width: 5" />'
        line1.style = "position: absolute; bottom: 2.8%; left: 4.5%;height:0; width:0"
        line2.innerHTML = '<line x1="0" y1="0" x2="100%" y2="100%" style="stroke: rgb(255,0, 0);stroke-width: 5" />'
        line2.style = "position: absolute; bottom: 81%; left: 61%; width: 0%; height: 0%;"

    }
    if (count == 1) {
        text.style = "display:block"
        lightning.style = "display:none"
        plane.style = "display: inline-block; position:absolute; bottom: 17%; left: 15%"
        plane.getElementsByClassName("plane-text")[0].innerHTML = "7hrs27min"
        line1.innerHTML = '<line x1="0" y1="100%" x2="100%" y2="0" style="stroke: rgb(255,255, 0); stroke-width: 5" />'
        line1.style = "position: absolute; bottom: 2.8%; left: 4.5%;height:17%; width:12%"
        line2.innerHTML = '<line x1="0" y1="0" x2="100%" y2="100%" style="stroke: rgb(255,0, 0); stroke-width: 5" />'
        line2.style = "position: absolute; bottom: 81%; left: 61%; width: 0%; height: 0%;"

    }
    if (count == 2) {
        lightning.style = "display:none"
        plane.style = "display: inline-block; position:absolute; bottom: 39%; left: 30%"
        plane.getElementsByClassName("plane-text")[0].innerHTML = "3hrs25min"
        line1.innerHTML = '<line x1="0" y1="100%" x2="100%" y2="0" style="stroke: rgb(255,255, 0);stroke-width: 5" />'
        line1.style = "position: absolute; bottom: 2.8%; left: 4.5%; width: 27%; height: 39%;"
        line2.innerHTML = '<line x1="0" y1="0" x2="100%" y2="100%" style="stroke: rgb(255,0, 0);stroke-width: 5" />'
        line2.style = "position: absolute; bottom: 81%; left: 61%; width: 0%; height: 0%;"
        text.style = "display:block"
    }
    if (count == 3) {
        lightning.style = "display:none"
        plane.style = "display: inline-block; position:absolute; bottom: 58.5%; left: 45%"
        plane.getElementsByClassName("plane-text")[0].innerHTML = "16hrs<br>Présentation Airways College à la reunion"
        line1.innerHTML = '<line x1="0" y1="100%" x2="100%" y2="0" style="stroke: rgb(255,255, 0); stroke-width: 5" />'
        line1.style = "position: absolute; bottom: 2.8%; left: 4.5%; width: 42%; height: 58.5%;"
        line2.innerHTML = '<line x1="0" y1="0" x2="100%" y2="100%" style="stroke: rgb(255,0, 0); stroke-width: 5" />'
        line2.style = "position: absolute; bottom: 81%; left: 61%; width: 0%; height: 0%;"
        text.style = "display:block"
    }
    if (count == 4) {
        lightning.style = "display:inline-block"
        plane.style = "display: inline-block; position:absolute; bottom: 78%; left: 60%"
        plane.getElementsByClassName("plane-text")[0].innerHTML = "6hrs<br>PPL Théorique"
        line1.innerHTML = '<line x1="0" y1="100%" x2="100%" y2="0" style="stroke: rgb(255,255, 0); stroke-width: 5" />'
        line1.style = "position: absolute; bottom: 2.8%; left: 4.5%; width: 56.5%; height: 78%;"
        line2.innerHTML = '<line x1="0" y1="0" x2="100%" y2="100%" style="stroke: rgb(255,0, 0);stroke-width: 5" />'
        line2.style = "position: absolute; bottom: 81%; left: 61%; width: 0%; height: 0%;"
        text.style = "display:block"
    }
    if (count == 5) {
        lightning.style = "display:none"
        plane.style = "display: inline-block; position:absolute; bottom: 5%; left: 75%"
        plane.getElementsByClassName("plane-text")[0].innerHTML = "39 Take offs 87 Landing(1 night)"
        line2.innerHTML = '<line x1="0" y1="0" x2="100%" y2="100%" style="stroke: rgb(255,0, 0); stroke-width: 5" />'
        line2.style = "position: absolute; bottom: 8%; left: 61%; width: 15%; height: 73%;"
        line3.innerHTML = '<line x1="0" y1="100%" x2="100%" y2="0" style="stroke: rgb(0,0,255); stroke-width: 5" />'
        line3.style = "position: absolute; bottom: 8%; left: 76%; width: 0%; height:0%;"
        text.style = "display:block;"
    }
    if (count == 6) {
        lightning.style = "display:none"
        plane.style = "display: inline-block; position:absolute; bottom: 85%; left: 92%"
        plane.getElementsByClassName("plane-text")[0].innerHTML = "ATPL+CPL+MEP+IR"
        line3.innerHTML = '<line x1="0" y1="100%" x2="100%" y2="0" style="stroke: rgb(0,0,255); stroke-width: 5" />'
        line3.style = "position: absolute; bottom: 8%; left: 76%; width: 17.5%; height: 79.5%;"
        text.style = "display:block"
    }

}

next.addEventListener("click", () => {
    if (counter < 6) {
        counter += 1
        airplane(counter)
    } else if (counter == 6) {
        counter = 0;
        location.href = './quote.html'
    }
})

back.addEventListener("click", () => {
    if (counter > 0) {
        counter -= 1
        airplane(counter)
    }

})

