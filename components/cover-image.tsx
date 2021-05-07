import cn from 'classnames'
import Link from 'next/link'

type CoverImageProps = {
  title: string
  src: string
  slug?: string
}

const CoverImage: React.FC<CoverImageProps> = ({ title, src, slug }) => {
  const image = (
    <img
      src={src}
      alt={`Cover for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage