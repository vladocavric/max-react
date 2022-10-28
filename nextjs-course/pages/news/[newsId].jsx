import { useRouter } from "next/router";
const NewsItem = () => {
    const router = useRouter()
    const newsId = router.query.newsId
    return<h1>News Item {newsId}</h1>
}

export default NewsItem