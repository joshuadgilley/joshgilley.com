import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { useEffect } from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import BlogHeaderComponent from "../../components/common/BlogHeaderComponent";
import hljs from 'highlight.js';
import typescript from 'highlight.js/lib/languages/typescript';
import 'highlight.js/styles/vs2015.css';
import styles from '../../styles/Slug.module.css';

type Params = {
    [param: string]: any
}

const components = {
    BlogHeaderComponent,
}

hljs.registerLanguage('typescript', typescript);

export default function Article({ source }: InferGetStaticPropsType<typeof getStaticProps>) {
    useEffect(() => {
        hljs.highlightAll();
    }, [])
    return (
        <div className={styles.post}>
            <div className="prose">
                <MDXRemote {...source} components={components}/>
            </div>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const articlesDirectory = path.join('blog_articles');
    const files = fs.readdirSync(articlesDirectory);
    const paths = files.map((fileName: string) => ({
        params: { slug: fileName.replace('.mdx', '') }
    }));
    return {
        paths,
        fallback: false // this is where your 404 custom page will be
    }
}

export const getStaticProps: GetStaticProps<Params> = async ({ params: {slug}}: Params) => {
    const article = fs.readFileSync(path.join('blog_articles', `${slug}.mdx`));
    const { data: metaData, content } = matter(article)
    const mdxSource = await serialize(content, { scope: metaData });
    return { props: { source: mdxSource }}
}
