const {Triangle, Circle, Square} = require('./shapes');

// A test is created to check that Triangle returns Triangle.
describe('Triangle', () => {
    it('if Triangle is selected, it should return the triangle polygon', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<polygon points="150,0 300,200 10,200" fill="blue" />`);
    });
});

describe('Circle', () => {
    it('if Circle is selected, it should return the circle polygon', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<circle cx="200" cy="200" r="200" fill="blue" />`);
    });
});

describe('Square', () => {
    it('if Square is selected, it should return the square polygon', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<rect width="300" height="300" fill="blue" />`);
    });
});