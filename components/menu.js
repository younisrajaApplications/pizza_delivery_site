import React, { useState } from 'react';
import styles from './menu.module.css';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([
        ['Chicken', 'Tandoori Chicken', 'Sweet Corn'],
        ['Something1', 'Something1', 'Something1'],
        ['Something2', 'Something2', 'Something2'],
    ]);

    const [editMode, setEditMode] = useState(false); // Initially, not in edit mode
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);

    // Function to update a list item
    const updateListItem = (listIndex, itemIndex, newValue) => {
        const newMenuItems = [...menuItems];
        newMenuItems[listIndex][itemIndex] = newValue;
        setMenuItems(newMenuItems);
    };

    // Function to add a new item to a list
    const addItemToList = (listIndex) => {
        const newMenuItems = [...menuItems];
        newMenuItems[listIndex].push('New Item');
        setMenuItems(newMenuItems);
    };

    // Function to remove an item from a list
    const removeItemFromList = (listIndex, itemIndex) => {
        const newMenuItems = [...menuItems];
        newMenuItems[listIndex].splice(itemIndex, 1);
        setMenuItems(newMenuItems);
    };

    // Function to check username and password
    const authenticate = () => {
        if (username === 'admin' && password === 'password') {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
            alert('Invalid username or password');
        }
    };

    // Function to log out
    const logout = () => {
        setAuthenticated(false);
        setEditMode(false); // Exit edit mode on logout
        setUsername('');
        setPassword('');
    };

    return (
        <div className={styles.container}>
            <div className={styles.menuLists}>
                {/* Wrap the lists in a container with flexbox */}
                <div className={styles.listsContainer}>
                    {menuItems.map((list, listIndex) => (
                        <div key={listIndex} className={styles.listContainer}>
                            <ul className={styles.list && styles.text}>
                                {list.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        {editMode && authenticated ? (
                                            <input
                                                type="text"
                                                value={item}
                                                onChange={(e) =>
                                                    updateListItem(listIndex, itemIndex, e.target.value)
                                                }
                                            />
                                        ) : (
                                            item
                                        )}
                                        {editMode && authenticated && (
                                            <button onClick={() => removeItemFromList(listIndex, itemIndex)}>
                                                Remove
                                            </button>
                                        )}
                                    </li>
                                ))}
                            </ul>
                            {editMode && authenticated && (
                                <button onClick={() => addItemToList(listIndex)}>Add Item</button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.controls}>
                {authenticated && (
                    <div>
                        <button onClick={() => setEditMode(!editMode)}>
                            {editMode ? 'Exit Edit Mode' : 'Enter Edit Mode'}
                        </button>
                        <button onClick={logout}>Logout</button>
                    </div>
                )}
                {!authenticated && (
                    <div>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={authenticate}>Login</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Menu;
