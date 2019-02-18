class ArticlePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const articleId = this.props.match.params.id;
    console.log(articles);
    const article = articles.find(a => {
      return a.id == articleId
    });
    console.log(article)
    return (
      <div>
        <article className="container m-5">
          <h1>{article.title}</h1>
          {article.body.split('\n').map(text => <p key={text}>{text}</p>)}
        </article>
      </div>
    );
  }
}
