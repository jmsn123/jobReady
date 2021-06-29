// ui component takes in some props containng text and a function
// Todo
// put prop types together
function Content({ id, title, contnet, deletHandle }) {
  return (
    <div>
      {/* {put all your data styling for the info } */}
      <button onClick={() => deletHandle(id)}></button>
    </div>
  );
}

export default Content;
