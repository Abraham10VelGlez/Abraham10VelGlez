import { useEffect, useState } from "react"
interface GithubStats {
    login: string
    public_repos: number
    followers: number
    following: number
    name: string
    avatar_url: string
}
type Cube = {
    id: number
    title: string
    gitprop: keyof GithubStats | ""
}
export const Hook1 = (username: string) => {
    const [data, setData] = useState<GithubStats | null>(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await fetch(`https://api.github.com/users/${username}`)
                const json = await res.json()
                setData(json)
            } catch (err) {
                console.error("Error fetching GitHub data:", err)
            } finally {
                setLoading(false)
            }
        }
        fetchStats()
    }, [username]);

    //, , , 
    const cubes: Cube[] = [
        { id: 1, title: "Repos", gitprop: 'public_repos' },
        { id: 2, title: "Commits", gitprop: 'followers' },
        { id: 3, title: "Followers", gitprop: 'followers' },
        { id: 4, title: "Following", gitprop: 'following' }
    ]
    return { data, loading, cubes }
}
