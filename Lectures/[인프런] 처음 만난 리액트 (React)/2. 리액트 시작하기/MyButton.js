function MyButton(props) {
  const [isClicked, setIsClicked] = React.useState(false);

  return React.createElement(
    "button",
    { onClick: () => setIsClicked(true) },
    isClicked ? "Clicked!" : "Click here!"
  );
}

// React 18 버전에서는 아래와 같이 createRoot를 통해 root를 만들고, 이를 render 메서드로 렌더링함.
const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(MyButton));
