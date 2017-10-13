class Person {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    toString() {
        return `Nome: ${ this.name }
        Email: ${ this.email }
        Telefone: ${ this.phone }`;
    }
}

class Client extends Person {
    constructor(id, name, email, phone) {
        super(name, email, phone);
        this.id = id;
    }

    toString() {
        return `
        id: ${ this.id }
        ${ super.toString() }
        `;
    }
}

var charlinho = new Client(42, 'Charlinho', 'charlinho@school.com', 4815162342);
console.log(charlinho.toString());