class Product {
    constructor(Name, Type, Color, Price) {
        this.Name = Name;
        this.Type = Type;
        this.Color = Color;
        this.Price = Price;
    }

    getName() {
        return this.Name;
    }

    setName(name) {
        this.Name = name;
    }

    getType() {
        return this.Type;
    }

    setType(type) {
        this.Type = type;
    }

    getColor() {
        return this.Color;
    }

    setColor(color) {
        this.Color = color;
    }

    getPrice() {
        return this.Price;
    }

    setPrice(price) {
        this.Price = price;
    }
}

let product = new Product("VJ113", "Airbus", "Red", 100000);
let product2 = new Product("VJ123", "Airbus", "Red", 100000);
let product3 = new Product("VJ133", "Airbus", "White", 100000);
let product4 = new Product("VN113", "Boeing747", "Blue", 500000);

let arr = [product, product2, product3, product4];

display = () => {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += "<tr>";
        str += "<td>" + (i + 1) + "</td>"
        str += "<td>" + arr[i].Name + "</td>"
        str += "<td>" + arr[i].Type + "</td>"
        str += "<td>" + arr[i].Color + "</td>"
        str += "<td>" + arr[i].Price + "$" + "</td>"
        str += "<td><button onclick='updateProduct(" + i + ")' style='background: rgba(255, 255, 255, 0.82); border: 1px solid black'>Update</button></td>"
        str += "<td><button onclick='deleteProduct(" + i + ")' style='background: rgba(255, 255, 255, 0.82); border: 1px solid black'>Delete</button></td>"
        str += "</tr>";
    }
    document.getElementById('display').innerHTML = str;
}
display();

addNewProduct = () => {
    let name = prompt("Enter product's name");
    let type = prompt("Enter product's type");
    let color = prompt("Enter product's color");
    let price = prompt("Enter product's price");
    let newProduct = new Product(name, type, color, price);
    arr.push(newProduct);
    display();
}

updateProduct = (index) => {
    let name = prompt("Update product's name", arr[index].getName());
    let type = prompt("Update product's type", arr[index].getType());
    let color = prompt("Update product's color", arr[index].getColor());
    let price = prompt("Update product's price", arr[index].getPrice());
    arr[index].setName(name);
    arr[index].setType(type);
    arr[index].setColor(color);
    arr[index].setPrice(price);
    display();
}

deleteProduct = (index) => {
    let check = confirm("Are you sure?");
    if (check) {
        arr.splice(index, 1);
        display();
    } else {
        alert("Fuck you!");
    }
}