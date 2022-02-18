## React List Update

<p>It's a function build for react, but it can be use with others frameworks or even typecript/javascript vanila.</p>
<p>
This package will help you to update your states (array of objects only) after request (post, put or delete), without a new request.<br/>
Use the uptader function only inside of the ".then(()=>{ /* right here */ })". I am using Axios at this example but it is not required.
</p>

[![npm downloads](https://img.shields.io/npm/dm/react-list-update.svg?style=for-the-badge)](https://www.npmjs.com/package/react-list-update)
[![npm](https://img.shields.io/npm/dt/react-list-update.svg?style=for-the-badge)](https://www.npmjs.com/package/react-list-update)
[![npm](https://img.shields.io/npm/l/react-list-update?style=for-the-badge)](https://github.com/userdansilva/react-list-update/blob/main/LICENSE)

### Installation

    npm install react-list-update

### Usage

```jsx
import updater from 'react-list-update';

const [users, setUsers] = useState([]);

useEffect(() => {
  axiosInstance.get('/users').then(setUsers);
}, []);

function createUser(user: UserInterface) {
  axiosInstance.post('/user/create', user).then(id => {
    user.id = id;
    setUsers(updater(users).add(user));
  });
}

function updateUser(user: UserInterface, id: number) {
  axiosInstance.put(`/user/${id}/edit`, user).then(() => {
    setUsers(
      updater(users)
        .update(user)
        .where('id', id)
    );
  });
}

function removeUser(id: number) {
  axiosInstance.delete(`/user/${id}/delete`).then(() => {
    setUsers(
      updater(users)
        .remove()
        .where('id', id)
    );
  });
}

return (
  <ul>
    {users.map(item => (
      <li key={item.id} style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>ID: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>Age: {item.age}</span>
        </div>
      </li>
    ))}
  </ul>
);
```
