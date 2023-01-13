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
            <h1 className="mb-4 text-4xl w-8/10 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">{title}</h1>
            <img className={styles.wrapperImage} src={mainImageUrl} />
            <p className="mb-6 mt-2 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Posted on {dateString}</p>
        </div>
    )
}

export default BlogHeaderComponent