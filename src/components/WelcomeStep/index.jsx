import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.css'
import Head from 'next/head';
import Image from 'next/Image';
import Link from 'next/Link';

export default function WelcomeStep(props) {
    return (
        <React.Fragment>
            <Head>
                <title>Welcome Clubhouse</title>
            </Head>

            <div className={styles.container}>
                <div className={styles.block}>
                    <header className={styles.header}>
                        <Image
                            width={32}
                            height={32}
                            src="/resource/hello_icon.png"
                            alt="Hello Clubhouse"
                        />
                        <h1>Clubhouse</h1>
                    </header>
                    <main className={styles.main}>
                        <p>
                            Hey, we're still opening up but anyone can join with an invite from an existing user!
                        </p>
                    </main>
                    <footer className={styles.footer}>
                        <button className={styles.button_username}>
                            <p className={styles.button_text}>Get your username</p>
                            <Image
                                width={16}
                                height={16}
                                src="/resource/right-arrow.svg"
                                alt="arrow"
                            />
                        </button>
                        <p className={styles.sing_in}>
                            Have an invite text?
                            
                            <Link href="">
                                <a className={styles.link_sing_in}>Sign In</a>
                            </Link>

                        </p>
                    </footer>
                </div>

            </div>
        </React.Fragment>

    )
}

WelcomeStep.propTypes = {

}


