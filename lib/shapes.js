class Shape {
    constructor(color, characters) {
      this.color = color;
      this.characters = characters;
    }
}

class Triangle extends Shape {
    constructor(color, characters) {
        super(color, characters);
    }
    render() {
        return `<polygon points="200,10 250,190 160,210" fill="${this.color}" />`
    }
}

class Circle extends Shape {
    constructor(color, characters) {
        super(color, characters);
    }
    render() {
        return `<circle cx="50" cy="50" r="40" fill="${this.color}" />`
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

