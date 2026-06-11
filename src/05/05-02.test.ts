import {CityType} from "../02/02_02";
import {createMessages, getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses} from "./05-02";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            id: 1,
            buildedAt: 2012,
            repaired: false,
            address: {
                number: 100, street: {
                    title: "White street"
                }
            },
        },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100, street: {
                        title: "Happy street"
                    }
                },
            },
            {
                id: 3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101, street: {
                        title: "Happy street"
                    }
                },
            },
        ],
        governmentBuildings: [{
            type: "HOSPITAL",
            budget: 200000,
            staffCount: 200,
            address: {
                street: {
                    title: "Central street"
                }
            }
        },
            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: "South street"
                    }
                }
            }],
        citizensNumber: 1000000
    }
})

//  01.  Создайте в том же файле еще одну функцию, чтобы тесты прошли
test("list of streets titles of government buildings", () => {
    let streets = getStreetsTitlesOfGovernmentBuildings(
        city.governmentBuildings
    );

    expect(streets.length).toBe(2);
    expect(streets[0]).toBe("Central street");
    expect(streets[1]).toBe("South street");
})

//  01.  Создайте в том же файле еще одну функцию, чтобы тесты прошли
test("list of streets titles", () => {
    let streetNames = getStreetsTitlesOfHouses(city.houses);

    expect(streetNames.length).toBe(3);
    expect(streetNames[0]).toBe("White street");
    expect(streetNames[1]).toBe("Happy street");
    expect(streetNames[2]).toBe("Happy street");
})

test("create greeting messages for streets", () => {
    let messages = createMessages(city.houses);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello guys from White street");
    expect(messages[1]).toBe("Hello guys from Happy street");
    expect(messages[2]).toBe("Hello guys from Happy street");
})