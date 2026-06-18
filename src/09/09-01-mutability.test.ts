function icreaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
    address?: { title: string }
}

test('reference type test', () => {

    const user: UserType = {
        name: 'Vasyl',
        age: 32
    }


    icreaseAge(user)

    expect(user.age).toBe(33)

    const superman = user;

    superman.age = 1000;

    expect(user.age).toBe(1000);
})

test('array reference test', () => {

    const users: UserType = [
        {
            name: 'Vasyl',
            age: 32,
        },
        {
            name: 'Katia',
            age: 23
        }
    ]

    const admins = users;

    admins.push({name: 'Misha', age: 44});

    expect(users[2]).toEqual({name: 'Misha', age: 44});
})

test('value reference test', () => {

    let usersCount = 100;

    let adminsCount = usersCount;

    adminsCount = adminsCount + 1;

    // expect(users[2]).toEqual({name: 'Misha', age: 44});
})

test('reference type array test', () => {

    const address = {
        title: 'Kharkiv'
    }

    const user: UserType = {
        name: 'Vasyl',
        age: 32,
        address: address
    }

    // let addr = users.address;

    const user2: UserType = {
        name: 'Nastia',
        age: 28,
        address: user.address
    }

    const users = [user, user2, {name: 'Inna', age: 18, address: address}];

    const admins = [user, user2];
    admins[0].name = 'Vasiliy';

    user2.address.title = 'Kanary';

    expect(user.address).toBe(user2.address);
    expect(user.address.title).toBe('Kanary');


    expect(users[0].name).toBe('Vasiliy');
    expect(user.name).toBe('Vasiliy');
})

test('sort array test', () => {

    const letters = ['c', 'd', 'a', 'z', 'e'];

    passportist(letters);

    expect(letters).toEqual(['c', 'd', 'a', 'z', 'e'])
});

function  passportist(letters: any) {
    const newletters = [...letters].sort();
}