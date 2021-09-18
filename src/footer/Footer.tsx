import React from 'react'
import styles from './Footer.module.css'
import stylesContainer from '../common/styles/Container.module.css';
import {SocialPage} from './socialPage/SocialPage';

export const Footer = () => {
    return (
        <footer className={styles.footerBlock}>
            <div className={`${stylesContainer.container} ${styles.footerContainer}`}>
                <h2 className={styles.title}> Ilya Duginov </h2>
                <div className={styles.socialPagesBlock}>
                    <SocialPage icon={'1'} />
                    <SocialPage icon={'2'} />
                    <SocialPage icon={'3'} />
                    <SocialPage icon={'4'} />
                </div>
                <h3 className={styles.rightsSpan}>2021 All rights reserved </h3>
            </div>
        </footer>
    )
}