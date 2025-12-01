// @ts-check
type User = {
  id: number
  name: string
  age: number
}

type Friends = [number, number]

export type UserResponse = {
  users: User[]
  friends: Friends[]
}

// BEGIN
const defaultUser = { id: 0, name: '', age: 0 }

const getUserFriends = (userResponseJSON: string, userId: number): User[] => {
  const userResponse = JSON.parse(userResponseJSON) as UserResponse

  return userResponse.friends
    .map(([ownerId, friendId]: Friends): User => {
      if (!(userId === ownerId || userId === friendId)) return defaultUser
      const searchId = (ownerId === userId) ? friendId : ownerId
      const friend: User | undefined = userResponse.users.find(({ id }) => id === searchId)

      return friend === undefined ? defaultUser : friend
    })
    .filter((user: User) => user.id > 0)
}
// END


const userJson = JSON.stringify({
  users: [
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Mary', age: 21 },
    { id: 3, name: 'Kate', age: 19 },
    { id: 4, name: 'Ann', age: 18 },
  ],
  friends: [
    [1, 2],
    [1, 3]
  ],
});

getUserFriends(userJson, 1); // [{ id: 2, name: 'Mary', age: 21 }, { id: 3, name: 'Kate', age: 19 }]
getUserFriends(userJson, 2); // [{ id: 1, name: 'John', age: 20 }]
getUserFriends(userJson, 3); // [{ id: 1, name: 'John', age: 20 }]
getUserFriends(userJson, 4); // []