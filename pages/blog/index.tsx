import MoreStories from '../../components/more-stories'
import HeroPost from '../../components/hero-post'
import { getAllPosts } from '../../lib/api'
import Post from '../../types/post'

type BlogProps = {
  posts: Array<Post>
}

export const Blog: React.FC<BlogProps> = ({ posts }) => {
  const heroPost = posts[0]
  const morePosts = posts.slice(1)
  return (
    <>
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </>
  )
}

export default Blog

export const getStaticProps = async () => {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { posts },
  }
}
