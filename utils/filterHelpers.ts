import { Post } from "@/data/posts";

interface FilterOptions {
    category: string,
    date: string,
    sortBy: string
}

export function filterAndSortPosts(posts: Post[], options: FilterOptions): Post[] {
    const {category, date, sortBy} = options;

    let result = [...posts];

    if( category ){
        result = result.filter(
            ( post ) => post.category === category
        )
    }

    if( date ){
        const filterDate = new Date(date)
        result = result.filter(
            ( post ) => new Date(post.date) >= filterDate
        )
    }

    result.sort((a, b) => {
        const dateA = new Date(a.date).getTime()
        const dateB = new Date(b.date).getTime()
        return sortBy === "asc" ? dateA - dateB : dateB - dateA
    })

    return result;
}

export function getUniqueCategories(posts: Post[]): string[]{
    const categories = posts.map((post)=> post.category)
    return Array.from(new Set(categories))
}