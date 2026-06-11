import {createGreetingMessage, ManType} from "./05-01";

let people: Array<ManType> = []


beforeEach( () => {
    people = [
        {name: "Alex X", age: 33},
        {name: "Axel M", age: 24},
        {name: "Anna Y", age: 18},
    ]
})

test("should get array of greeting message", () => {
    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello Alex. Welcome to IT-Incubator");
    expect(messages[1]).toBe("Hello Axel. Welcome to IT-Incubator");
    expect(messages[2]).toBe("Hello Anna. Welcome to IT-Incubator");
})

