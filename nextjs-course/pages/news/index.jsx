import Link from "next/link"
const News = () => {
    return<><h1>News</h1>
    <ul><li>
        <Link href='/news/next-is-great'>next is great</Link>
    </li>
    <li>
        <Link href='news/something-else'>Something Else</Link>
    </li></ul>
    </>
}

export default News