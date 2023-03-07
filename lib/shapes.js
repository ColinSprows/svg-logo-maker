class Shape {
    constructor(color, characters) {
      this.color = color;
      this.characters = characters;
    }
    createLogo() {
        return `
        <svg version="1.1" width="500" height="500"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="white" />
        ${this.render()}
        <text x="145" y="100" font-size="100" text-anchor="middle" dominant-baseline="central" fill="white">${this.characters}</text>
        </svg>
        `
    }
    setColor(input) {
        return this.color = input;
    }
}

class Triangle extends Shape {
    constructor(color, characters) {
        super(color, characters);
    }
    render() {
        return `<polygon points="150,0 300,200 10,200" fill="${this.color}" />`
    }
}

class Circle extends Shape {
    constructor(color, characters) {
        super(color, characters);
    }
    render() {
        return `<circle cx="200" cy="200" r="200" fill="${this.color}" />`
    }
}

class Square extends Shape {
    constructor(color, characters) {
        super(color, characters);
    }
    render() {
        return `<rect width="300" height="300" fill="${this.color}" />`
    }
}

module.exports = {Triangle, Circle, Square};