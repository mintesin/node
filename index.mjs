import Blog from './blog.mjs'
async function main() {
    const blog = new Blog() 
    await blog.initialize()
    const allPost = await blog.getAllPost()
    if (allPost.length === 0) {
        console.log('There is no posts at all in the database')
    } 
    for (const post of allPost) {
        console.log(post.title)
        console.log(post.content)
        console.log('-'.repeat(post.title.length))
        console.log(`Published on ${new Date(post.created_at).toISOString()}`)
        console.log(post.content)
    }

    
    
}
main().catch(console.error)