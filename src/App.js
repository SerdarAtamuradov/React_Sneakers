function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <svg />
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <svg />
            <span>35 BYR</span>
          </li>
          <li>
            <svg />
          </li>
        </ul>
      </header>
      <div className="content"></div>
    </div>
  );
}

export default App;
