let highestZ = 1;

class Paper{
    holdPaper = false;

    prevMouseX=0;
    prevMouseY=0;

    mouseX =0;
    mouseY =0;

    velocityX =0;
    velocityY =0;

    curPaperX=0;
    curPaperY=0;


    init(paper){

        paper.addEventListener('mousedown', (e) => {
            
            this.holdPaper = true;
            
            paper.style.zIndex = highestZ;
            highestZ+= 1;

            if(e.button === 0){
                this.prevMouseX = this.mouseX;
                this.prevMouseY = this.mouseY;

                console.log(this.prevMouseX);
                console.log(this.prevMouseY);
            }
        })
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;

            this.velocityX = this.mouseX - this.prevMouseX;
            this.velocityY = this.mouseY - this.prevMouseY;

            if(this.holdPaper){

                this.curPaperX += this.velocityX;
                this.curPaperY += this.velocityY;

                this.prevMouseX = this.mouseX;
                this.prevMouseY = this.mouseY;

                paper.style.transform = `translateX(${this.curPaperX}px) translateY(${this.curPaperY}px)`;
                console.log('mouse moving');
            }
        })
        window.addEventListener('mouseup', (e) => {
            console.log('mouse button released')
            this.holdPaper = false;
        })
    }
}

const papers = Array.from(document.querySelectorAll('.Paper'))

papers.forEach( paper => {
    const p = new Paper();
    p.init(paper);
})
