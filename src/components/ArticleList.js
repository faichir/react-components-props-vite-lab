function ArticleList({ name }) {
  return (
    <main>
      {posts.map((post) => (
        <Article>
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        </Article>
      ))}
    </main>
  );
}
export default ArticleList;
