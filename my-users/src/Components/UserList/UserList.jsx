import Card from '../Card/Card';
import styles from './UserList.module.scss';

const UserList = ({ users, removeUser }) => {
    const onRemoveUser = (id) => {
        removeUser(id)
    }
	return (
		<Card className={styles.UserList}>
			{users.length === 0 && <h3>No users yet</h3>}
			{users.length !== 0 &&
				users.map((user) => (
					<div className={styles.User} key={user.id} onClick={() => onRemoveUser(user.id)}>
						{user.username} ({user.age} years old)
					</div>
				))}
		</Card>
	);
};

export default UserList;
