
import {
    addNewBooksToUser, exchangeBookForUser,
    hairdresser,
    moveUser,
    moveUserToOtherHouse, removeBook, exchangeCompanyTitle,
    upgradeUserLaptop,
    UserType,
    WithBooksType, WithCompaniesType,
    WithLaptopType, updateCompanyTitle
} from "./10-01";
import exp from "constants";


test('reference type test', () => {

    const user: UserType = {
        name: 'Vasyl',
        hair: 32,
        address: {
            city: 'Kharkiv'
        }
    }

    const awesomeUser = hairdresser(user, 2)

    expect(awesomeUser.hair).toBe(16);
    expect(user.hair).toBe(32);
})


test('change address', () => {

    let user: WithLaptopType = {
        name: 'Vasyl',
        hair: 32,
        address: {
            city: 'Kharkiv',
            house: 10
        },
        laptop: {
            title: 'Zenbook'
        }
    }

    const movedUser = moveUser(user, 'Kyiv');

    expect(user).not.toBe(movedUser);
    expect(user.address).not.toBe(movedUser.address);
    expect(user.laptop).toBe(movedUser.laptop);
    expect(movedUser.address.city).toBe('Kyiv');
})

test('upgrade laptop to macbook', () => {

    let user: WithLaptopType & WithBooksType = {
        name: 'Vasyl',
        hair: 32,
        address: {
            city: 'Kharkiv',
            house: 10
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const upgradedUserLaptop = upgradeUserLaptop(user, 'Macbook');

    expect(user).not.toBe(upgradedUserLaptop);
    expect(user.laptop).not.toBe(upgradedUserLaptop.laptop);
    expect(user.address).toBe(upgradedUserLaptop.address);
    expect(upgradedUserLaptop.laptop.title).toBe('Macbook');
})

test('change house', () => {

    let user: WithLaptopType & WithBooksType = {
        name: 'Vasyl',
        hair: 32,
        address: {
            city: 'Kharkiv',
            house: 10
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const movedUserToOtherHouse = moveUserToOtherHouse(user, 55);

    expect(user).not.toBe(movedUserToOtherHouse);
    expect(user.books).toBe(movedUserToOtherHouse.books);
    expect(user.laptop).toBe(movedUserToOtherHouse.laptop);
    expect(user.address).not.toBe(movedUserToOtherHouse.address);
    expect(movedUserToOtherHouse.address.house).toBe(55);
})

test('add new books to user', () => {

    let user: WithLaptopType & WithBooksType = {
        name: 'Vasyl',
        hair: 32,
        address: {
            city: 'Kharkiv',
            house: 10
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const addedNewBooksToUser = addNewBooksToUser(user, ['ts', 'rest api']);

    expect(user).not.toBe(addedNewBooksToUser);
    expect(user.laptop).toBe(addedNewBooksToUser.laptop);
    expect(user.address).toBe(addedNewBooksToUser.address);
    expect(user.books).not.toBe(addedNewBooksToUser.books);
    expect(addedNewBooksToUser.books[4]).toBe('ts');
    expect(addedNewBooksToUser.books[5]).toBe('rest api');
})

test('exchange book for user', () => {

    let user: WithLaptopType & WithBooksType = {
        name: 'Vasyl',
        hair: 32,
        address: {
            city: 'Kharkiv',
            house: 10
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const exchangedBookForUser = exchangeBookForUser(user, 'js', 'ts');

    expect(user).not.toBe(exchangedBookForUser);
    expect(user.books).not.toBe(exchangedBookForUser.books);
    expect(exchangedBookForUser.books[2]).toBe('ts');
})

test('remove js book', () => {

    let user: WithLaptopType & WithBooksType = {
        name: 'Vasyl',
        hair: 32,
        address: {
            city: 'Kharkiv',
            house: 10
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const removedBook = removeBook(user, 'js');

    expect(user).not.toBe(removedBook);
    expect(user.books).not.toBe(removedBook.books);
    expect(removedBook.books[2]).toBe('react');
})

test('change company\'s name', () => {

    let user: WithLaptopType & WithCompaniesType = {
        name: 'Vasyl',
        hair: 32,
        address: {
            city: 'Kharkiv',
            house: 10
        },
        laptop: {
            title: 'Zenbook'
        },
        companies: [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-Incubator'}]
    }

    const exchangedCompanyTitle = exchangeCompanyTitle(user, 1, 'EPAM') as WithLaptopType & WithCompaniesType;

    expect(user).not.toBe(exchangedCompanyTitle);
    expect(user.address).toBe(exchangedCompanyTitle.address);
    expect(user.companies).not.toBe(exchangedCompanyTitle.companies);
    expect(exchangedCompanyTitle.companies[0].title).toBe('EPAM');
})

test('update company', () => {

    let companies = {
        'Vasyl': [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-Incubator'}],
        'Petro': [{id: 2, title: 'IT-Incubator'}],
    }

const updatedCompanyTitle = updateCompanyTitle(companies, "Vasyl", 1, 'EPAM')

    expect(updatedCompanyTitle['Vasyl']).not.toBe(companies['Vasyl']);
    expect(updatedCompanyTitle['Petro']).toBe(companies['Petro']);
    expect(updatedCompanyTitle['Vasyl'][0].title).toBe('EPAM');
})