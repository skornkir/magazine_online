class App extends React.Component {
  render() {
    return (
      <Router >
        <div>
          <Nav />
          <Switch>
            <Route path="/article/:id" component={ArticlePage}/>
            <Route path="/subscription" component={SubscribtionPage}/>
            <Route path="/" exact component={Homepage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
