import { FC } from 'react';
import styles from '../../styles/BlogHeaderComponent.module.css'
import BackButton from './BackButton';

interface Props {
    title: string,
    dateString: string,
    mainImageUrl: string,
    endpoint: string
}

const BlogHeaderComponent: FC<Props> = ({ title, dateString, mainImageUrl, endpoint}) => {
    return (
        <div className={styles.wrapper}>
            <BackButton route={endpoint} />
            <h1>{title}</h1>
            <img className={styles.wrapperImage} src={mainImageUrl} />
            <p>Posted on {dateString}</p>
        </div>
    )
}

export default BlogHeaderComponent