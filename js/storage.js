const users = [];

export function addUser(user) {
    users.push(user);
}

export function getAllUsers() {
    return users;
}
