        //Alert popup
        //alert('Alert script')

        //Alert popup, allow typing text or numbers
        //let value = prompt("Gime me a number: ");
        //alert("You typed " + value);

        // Diferents types of declare variables and best way its with let
        var a = "TestVarConsoleLog1";
        console.log('Value :>> ', a);
        let b = "TestVarConsoleLog2";
        console.log('Value :>> ', b);
        c = "TestVarConsoleLog3";
        console.log('Value :>> ', c);
        //Its uses when the values not change any more
        const d = "TestVarConsoleLog4";
        console.log('Value :>> ', d);

        // Alt + 96 = ``
        let e = `
        Texto con "espacios"
        y salto de lineas
        `;

        console.log('Value :>> ', e);
        console.log('Value length:>> ', e.length);
        console.log('Value MAYUS:>> ', e.toUpperCase());

        // Arrays
        arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
        console.log('Array :>> ', arr);

        // For to show all items from array
        arr.forEach(element => {
            console.log('Value :>> ', element);
        });

        // Diccionary of Phyton
        let arr2 = {
            santander: "Bucaramanga",
            Boyaca: "Tunja"
        };
        console.log('Value :>> ', arr2);

        // Functions
        // Las funciones se pueden guardar en una variable
        function myfunction(p1, p2) {
            return p1 * p2;
        }
        console.log(myfunction(3, 4));

        // Functions anonimus 
        // Es funcion anonima no por que no tenga nombre, si no por como se define
        // Se usan cuando la funcion se almacene en este momento y se pueda usar mas adelante
        let fun = function (p1, p2) {
            return p1 / p2;
        }
        console.log(fun(3, 2));

        // Aparece despues de 3s
        //setTimeout( function () {
        //    alert('Hello 3s Funcion Anomima');
        //}, 3000 );

        // arrow function/ Funcion flecha
        // Se usa para menos codigo
        let minus = (p1, p2) => {
            return p1 - p2;
        }
        console.log(minus(30, 12));

        // Aparece despues de 3s
        //setTimeout( () => {
        //    alert('Hello 3s Function arrow');
        //}, 3000 );

        let obj = {
            value: 2,
            status: true,
            title: "Value 3",
            temps: [3, 2, 4, 2],
            style: {
                kind: "button",
                active: true
            },
            persons: [{
                name: "Carlos",
                age: 39
            }, {
                name: "Diana",
                age: 38
            }]
        };


        //Status
        console.log(obj.status);
        //Diana y 38
        console.log(obj.persons[1]);
        // Edad 38
        console.log(obj.persons[1].age);

        // Convierte un objeto de Java Script a JSON
        let jsonValue = JSON.stringify(obj);
        console.log(jsonValue);


        let jsonString = `
        [
            {
                "superhero":"Batman", 
                "publisher":"DC Comics", 
                "alter_ego":"Bruce Wayne",
                "first_appearance":"Detective Comics #27",
                "characters":"Bruce Wayne"
            },
            {
                "superhero":"Superman", 
                "publisher":"DC Comics", 
                "alter_ego":"Kal-El",
                "first_appearance":"Action Comics #1",
                "characters":"Kal-El"
            },
            {
                "superhero":"Flash", 
                "publisher":"DC Comics", 
                "alter_ego":"Jay Garrick",
                "first_appearance":"Flash Comics #1",
                "characters":"Jay Garrick, Barry Allen, Wally West, Bart Allen"
            },
            {
                "superhero":"Spider Man", 
                "publisher":"Marvel Comics", 
                "alter_ego":"Peter Parker",
                "first_appearance":"Amazing Fantasy #15",
                "characters":"Peter Parker"
            },
            {
                "superhero":"Captain America", 
                "publisher":"Marvel Comics", 
                "alter_ego":"Steve Rogers",
                "first_appearance":"Captain America Comics #1",
                "characters":"Steve Rogers"
            },
            {
                "superhero":"Iron Man", 
                "publisher":"Marvel Comics", 
                "alter_ego":"Tony Stark",
                "first_appearance":"Tales of Suspense #39",
                "characters":"Tony Stark"
            },
            {
                "superhero":"Thor", 
                "publisher":"Marvel Comics", 
                "alter_ego":"Thor Odinson",
                "first_appearance":"Journey into Myster #83",
                "characters":"Thor Odinson"
            },
            {
                "superhero":"Hulk", 
                "publisher":"Marvel Comics", 
                "alter_ego":"Bruce Banner",
                "first_appearance":"The Incredible Hulk #1",
                "characters":"Bruce Banner"
            },
            {
                "superhero":"Wolverine", 
                "publisher":"Marvel Comics", 
                "alter_ego":"James Howlett",
                "first_appearance":"The Incredible Hulk #180",
                "characters":"James Howlett"
            }
        ]
`;

        let parsedValue = JSON.parse(jsonString);

        console.log ( parsedValue[3].superhero );

        // Deconstruccion de un objeto
        let { superhero, alter_ego, first_appearance } = parsedValue[7];
        console.log( superhero );


        // Objeto 2
        let jsonString2 = `
    {
        "squadName": "Super hero squad",
        "homeTown": "Metro City",
        "formed": 2016,
        "secretBase": "Super tower",
        "active": true,
        "members": [
            {
                "name": "Molecule Man",
                "age": 29,
                "secretIdentity": "Dan Jukes",
                "powers": [
                    "Radiation resistance", 
                    "Turning tiny", 
                    "Radiation blast"
                ]
            },
            {
                "name": "Madame Uppercut",
                "age": 39,
                "secretIdentity": "Jane Wilson",
                "powers": [
                    "Million tonne punch",
                    "Damage resistance",
                    "Superhuman reflexes"
                ]
            },
            {
                "name": "Eternal Flame",
                "age": 1000000,
                "secretIdentity": "Unknown",
                "powers": [
                    "Immortality",
                    "Heat Immunity",
                    "Inferno",
                    "Teleportation",
                    "Interdimensional travel"
                ]
            }
        ]
    }
`;

        let parsedValue2 = JSON.parse(jsonString2);
        let { homeTown, formed, active } = parsedValue2;
        console.log("homeTown: " + homeTown);

        
        let { powers } = parsedValue2.members[2];
        console.log( powers );


// Programacion sincrona
// Promise en JavaScript
// Cuando la data se demora en llegar y no se tiene una promesa se muestra "undefined" en la consola

const data = [
    {
        product : "strawberry",
        prize: 2000
    },
    {
        product : "potato",
        prize: 3000
    }
];

function getData(){
    return data;
}

function getDelayData(){
    setTimeout( () => {return data; }, 3000);
}

function getDelayDataWithPromise(){
    return new Promise( ( resolve ) => {
        setTimeout( () => { resolve(data) }, 3000);
    });
}

function getRandom() {
    return Math.random() * 10;
}

console.log( "Function getRandom: ", getRandom() );
console.log( "Function getData: ", getData() );
console.log( "Function getDelayData: ", getDelayData() );
console.log( "Function getDelayDataWithPromise: ", getDelayDataWithPromise() );
getDelayDataWithPromise().then( (response)=>{ console.log( "Function getDelayDataWithPromise sin imprimir palabra Promise: ", response) } );

// Java Script agrego algo para manejar los datos asincronos en funciones
// Una funcion asincrona es igual a una promesa
function getResult(){
    const result = getDelayDataWithPromise();
    console.log( "Function getResult: \n", result );
}
getResult();

async function getResultAsync(){
    const result = await getDelayDataWithPromise();
    console.log( "Function getResultAsync: ", result );
}
getResultAsync();
