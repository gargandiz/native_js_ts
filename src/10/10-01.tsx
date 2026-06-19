export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LaptopType = {
    title: string
}
export type WithLaptopType = UserType & {
    laptop: LaptopType
}

export type WithBooksType = UserType & {
    books: Array<string>
}

type CompanyType = {
    id: number
    title: string
}

export type WithCompaniesType = UserType & {
    companies: Array<CompanyType>
}

export function hairdresser(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    // copy.hair = u.hair / power;
    return copy;
}

export function moveUser(u: WithLaptopType, adr: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: adr
        }
    }


    // const copy = {
    //     ...u
    // }
    // copy.address = {
    //     ...copy.address,
    //     city: adr
    // }
    // return copy;
}

export function moveUserToOtherHouse(u: WithLaptopType & WithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }

    // const copy = {
    //     ...u
    // }
    // copy.address = {
    //     ...copy.address,
    //     city: adr
    // }
    // return copy;
}

export function upgradeUserLaptop(u: WithLaptopType, device: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: device
        }
    }
}

export function addNewBooksToUser(u: WithLaptopType & WithBooksType, books: Array<string>) {
    return {
        ...u,
        books: [...u.books, ...books]
    }
}

export function exchangeBookForUser(u: WithLaptopType & WithBooksType, oldBook: string, newBook: string) {
    return {
        ...u,
        books: u.books.map((b) => b === oldBook ? newBook : b)
    }
}

export function removeBook(u: WithLaptopType & WithBooksType, bookForDelete: string) {
    return {
        ...u,
        books: u.books.filter((b) => b !== bookForDelete)
    }
}

export function exchangeCompanyTitle(u: WithCompaniesType, companyId: number, companyTitle: string) {
    return {
        ...u,
        companies: u.companies.map(c => c.id === companyId ? {...c, title: companyTitle} : c)
    }
}

export function updateCompanyTitle(companies: {[key: string]: Array<CompanyType>},
                                   userName: string,
                                   companyId: number,
                                   newTitle: string) {
    let companyCopy = {...companies};
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ?
        {...c, title: newTitle} : c)

    return companyCopy;
}