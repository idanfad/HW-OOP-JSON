
//////////////////////////////////////HomeWork M1 STARTPOINT///////////////////////////////////////////////

let a = {
    "objects": [{
            "userName": "lior",
            "backgroundColor":"Blue"
        },
        {
            "userName": "oded",
            "backgroundColor":"Red"
        },
        {
            "userName": "idan",
            "backgroundColor":"Yellow"
        }
    ]
}

localStorage.setItem("ArrayBox", JSON.stringify(a));

class Render {
    arrayHolder;
        constructor(){
            let c = localStorage.getItem("ArrayBox");
            let f = JSON.parse(c);
            this.arrayHolder = f.objects;
        }

    print(){
        this.arrayHolder.forEach((element)=>{
            console.log(element);
            let newBlock = document.createElement('div');
            let newText = document.createTextNode(element.userName);
            newBlock.style.backgroundColor = element.backgroundColor;
            newBlock.style.textAlign = "center";

            newBlock.appendChild(newText);
            document.body.append(newBlock);
        });
    }
}

let f = new Render;
f.print();

//////////////////////////////////////HomeWork M1 ENDPOINT///////////////////////////////////////////////


//////////////////////////////////////HomeWork M2 STARTPOINT/////////////////////////////////////////////

// class Product {
//     productPrice;
//     productName;
//     productExpireDate;
//     constructor(productPriceInput, productNameInput, productExpireDateInput) {
//         this.productPrice = productPriceInput;
//         this.productName = productNameInput;
//         this.productExpireDate = productExpireDateInput;
//     }
// };

// class Store {
//     products;
//     constructor() {
//         this.products = [];
//         this.readStoredData();
//     }

//     addProductObject(product) {
//         this.products.push(product);
//         this.createUpdateData();
//     }

//     createUpdateData() {
//         localStorage.setItem("productsList", JSON.stringify(this.products));
//         console.log(this.products);
//     }

//     readStoredData() {
//         if (!localStorage.getItem("productsList")) {
//             this.createUpdateData();
//             alert('not include');
//         }
//     }
// };

// let product = new Product(250,"Iphone",Date("10-02-22"));
// let newStore = new Store();
// newStore.addProductObject(product);
// let product2 = new Product(550,"PC",Date("01-02-23"));

// newStore.addProductObject(product2);


////////////////////////////////////HomeWork M2 ENDPOINT/////////////////////////////////////////////
