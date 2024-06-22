import {useState} from "react";
import Link from "next/link";

const Users = () => {
    const [users, setUsers] = useState([
        {id: 1, name: "name_1"},
        {id: 2, name: "name_2"}
    ])
    return (
        <div>
            <h1>Страница с пользователя</h1>
            <ul>
                {users.map(user =>
                    <Link href={`/users/${user.id}`}>
                        {user.name}
                    </Link>
                )}
            </ul>
        </div>
    );
};

export default Users;
