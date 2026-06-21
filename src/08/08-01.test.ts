
type UsersType = {
    [key: string]: {id: number, name: string}
}

let users: UsersType;

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'xxx'},
        '122': {id: 122, name: 'yyy'},
        '55': {id: 55, name: 'zzz'},
        '175': {id: 175, name: 'vvv'},
    }
})

test('should update corresponding user', () => {

    users["122"].name = 'mmm'

    expect(users["122"].name).toBe('mmm');
    expect(users["122"]).toEqual({id: 122, name: 'mmm'});
})

test('should delete corresponding user', () => {

    delete users["122"];

    expect(users["122"]).toBeUndefined();
})