import config from "@config/config.json";
import dateFormat from "@lib/utils/dateFormat";
import { humanize, slugify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Posts = ({ title, description, image, categories, tags, posts, authors, className, slug }) => {
  const { summary_length } = config.settings;
  return (
    <>
      <div className={`row space-y-16 ${className}`}>
        {posts.map((post, i) => (
          <div
            key={`key-${i}`}
            className={i === 0 ? "col-12" : "col-12 sm:col-6"}
          >
            {post.frontmatter.image && (
              <Image
                className="rounded-lg"
                src={post.frontmatter.image}
                alt={post.frontmatter.title}
                width={i === 0 ? "925" : "445"}
                height={i === 0 ? "475" : "230"}
                priority={i === 0 ? true : false}
              />
            )}
            <h3 className="mb-2">
              <span className="block">{post.frontmatter.title}</span>
            </h3>
            <p className="text-text">
              {post.content}...
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
