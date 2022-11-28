import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1619431486830-4477e6e0783d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />
            <div className={styles.profile}>
                <Avatar src="https://iili.io/H9Qwv87.png" />
                <strong>Kyoshi</strong>
                <span>Avatar</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20}
                />
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    );
}