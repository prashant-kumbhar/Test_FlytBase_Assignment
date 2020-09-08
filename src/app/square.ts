export class Square {
    private color = 'red';
    private x = 0;
    private y = 0;
    private z = 25;
  
    constructor(private ctx: CanvasRenderingContext2D) {}
  
    moveRight() {
     this.x++;
     this.z++;
     this.y++;
      this.draw();
    }
  
    private draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.z * this.x, this.z * this.y, this.z, this.z);

    }
}