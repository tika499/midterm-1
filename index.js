/*
შექმენით მარტივი ფორმების სისტემა კლასების ან კონსტრუქტორი ფუნქციების გამოყენებით:

1. შექმენით კლასი ან კონსტრუქტორი ფუნქცია სახელად 'Shape' შემდეგი თვისებებით:
   - name (string)
   - color (string)
   - getInfo() მეთოდი, რომელიც აბრუნებს სტრიქონს: "This is a {name} and its color is {color}"

2. შექმენით კლასი ან კონსტრუქტორი ფუნქცია 'Circle', რომელიც მემკვიდრეობით იღებს 'Shape'-დან და დაამატებს:
   - radius (number)
   - getArea() მეთოდი, რომელიც გამოითვლის წრის ფართობს (π * radius^2)
   - getInfo() მეთოდი, რომელიც ჩაანაცვლებს მშობლის მეთოდს და დაამატებს რადიუსის ინფორმაციას:
     "This is a {name} and its color is {color}. It has a radius of {radius}"

3. შექმენით კლასი ან კონსტრუქტორი ფუნქცია 'Rectangle', რომელიც მემკვიდრეობით იღებს 'Shape'-დან და დაამატებს:
   - width (number)
   - height (number)
   - getArea() მეთოდი, რომელიც გამოითვლის მართკუთხედის ფართობს (width * height)
   - getInfo() მეთოდი, რომელიც ჩაანაცვლებს მშობლის მეთოდს და დაამატებს ზომების ინფორმაციას:
     "This is a {name} and its color is {color}. It has width {width} and height {height}"

მოთხოვნები:
- უნდა გამოიყენოთ კლასები (class) ან კონსტრუქტორი ფუნქციები პროტოტიპებით
- მემკვიდრეობითობა უნდა იყოს სწორად რეალიზებული

π (პი) მნიშვნელობისთვის შეგიძლიათ გამოიყენოთ Math.PI
*/

// თქვენი კოდი აქ
function Shape(name,color){
   this.name=name;
   this.color=color;
}

Shape.prototype.getInfo=function(){
   return  `This is a ${name} and its color is ${color}`;
}

function Circle(name,color,radius){
   Shape.call(this,name,color);
   this.radius=radius;
}

Circle.prototype=Object.create(Shape.prototype);
Circle.prototype.getArea=function(){
   return Math.PI* radius^2;
}
Circle.prototype.getInfo=function(){
   return  `This is a ${name} and its color is ${color}. It has a radius of ${radius}`
}


function Rectangle(width,height,name,color){
   Shape.call(this,name,color);
   this.height=height;
   this.width=width;
}

Rectangle.prototype=Object.create(Shape.prototype);

Rectangle.prototype.getArea=function(){
   return width * height;
}

Rectangle.prototype.getInfo=function(){
   return `This is a ${name} and its color is ${color}. It has width ${width} and height ${height}`
}


// ტესტის შემთხვევები
const circle = new Circle("circle", "red", 5);
const rectangle = new Rectangle("rectangle", "blue", 4, 6);

console.log(circle.getInfo());
// უნდა დაბეჭდოს: "This is a circle and its color is red. It has a radius of 5"

console.log(rectangle.getInfo());
// უნდა დაბეჭდოს: "This is a rectangle and its color is blue. It has width 4 and height 6"

console.log(circle.getArea());
// უნდა დაბეჭდოს: 78.53981633974483 (π * 5^2)

console.log(rectangle.getArea());
// უნდა დაბეჭდოს: 24 (4 * 6)
