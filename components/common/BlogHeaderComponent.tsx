import { FC } from 'react';
import styles from '../../styles/BlogHeaderComponent.module.css'

interface Props {
    title: string,
    dateString: string,
    mainImageUrl: string
}

const BlogHeaderComponent: FC<Props> = ({ title, dateString, mainImageUrl}) => {
    return (
        <div className={styles.wrapper}>
            <h1>{title}</h1>
            <img className={styles.wrapperImage} src={mainImageUrl} />
            <p>Posted on {dateString}</p>
        </div>
    )
}

export default BlogHeaderComponent