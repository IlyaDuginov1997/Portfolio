import React from 'react'
import styles from './Contacts.module.css'
import stylesContainer from '../common/styles/Container.module.css';

export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${stylesContainer.container} ${styles.contactsContainer}`}>
                <h2 className={styles.title}> Contacts </h2>
                <form className={styles.formBlock}>
                    <input type='text'/>
                    <input type='text'/>
                    <textarea></textarea>
                </form>
                <a href={''}> Check</a>
            </div>
        </div>
    )
}