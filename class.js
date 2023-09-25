class Country {
    constructor(name, population, capital) {
        this.name = name;
        this.population = population;
        this.capital = capital;
    }

    describe(){
        console.log(`Country: ${this.name}`);
        console.log(`Population: ${this.population}`)
        console.log(`Capital: ${this.capital}`)
    }
}

const usa = new Country("USA", 331000000, "Washington DC");

usa.continent = "North america"

console.log(usa)
usa.describe()

///////

class Customer{
    constructor(firstname, lastname, email){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.orders = {}
        this.moneyspent = 0;
        this.countedItems = new Set()
    }

    addOrder(order, cost){
        this.orders[order] = cost
    }

    spending(){

     for(const [order, cost] of Object.entries(this.orders)) {
        if (!this.countedItems.has(order)) {
            this.moneyspent += cost;
            this.countedItems.add(order);
        }
     }
        
    }
}

let Nick = new Customer("Nick", "leger", "nick@exmaple.com")

console.log(Nick)
Nick.addOrder("watch", 300)
Nick.addOrder("tv", 200)
console.log(Nick)

Nick.spending()
console.log(Nick.moneyspent)
Nick.spending()
console.log(Nick.moneyspent)
console.log(Nick.order)

console.log(Nick.countedItems)



