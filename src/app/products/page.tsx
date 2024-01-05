import { getProducts } from "@/service/products";
import Link from "next/link";
import styles from './page.module.css';

// export const revalidate = 3;

export default async function page() {
    // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌.
    const products = await getProducts()
    const res = await fetch('https://meowfacts.herokuapp.com', {
        // next: { revalidate: 3 }, // revalidate를 0으로 설정하면 ssr처럼 행동함.
        // cache: 'no-store' // ssr처럼 행동한다. (cache를 해두지 않기 때문에 page가 요청이 오면 그때 fetch를 하게 됨.)
    });
    const data = await res.json();
    const factText = data.data[0];
    return (
        <>
            <h1>제품 소개 페이지</h1>
            <ul>
                {
                    products.map(({ id, name }, index) => <li key={index}>
                        <Link href={`products/${id}`}>{name}</Link>
                    </li>)
                }
            </ul>
            <article className={styles.article}>
                {factText}
            </article>
        </>
    )
}
