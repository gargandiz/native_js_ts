

// export const userArray = ['xxx', 'yyy', 'zzz', 'vvv'];

const usersObj = {
    '0': 'xxx',
    '1': 'yyy',
    '2': 'zzz',
    '3': 'vvv',
}



type UserType = {
    [key: string]: {id: number, name: string}
}

const users: UserType = {
    '101': {id: 101, name: 'xxx'},
    '122': {id: 122, name: 'yyy'},
    '55': {id: 55, name: 'zzz'},
    '175': {id: 175, name: 'vvv'},
}

//users[55];

const user = {id: 1050, name: 'www'};

users[user.id] = user;
delete users[user.id];
users[user.id].name = 'ooo';


export const userArray = [
    {id: 101, name: 'xxx'},
    {id: 122, name: 'yyy'},
    {id: 55, name: 'zzz'},
    {id: 175, name: 'vvv'}
];

// userArray.find(u => u.id === 55);
// userArray.push(user);
// const usersCopy = [...userArray.filter(), user];
// const users = userArray.filter(u => u.id !== user.id)