
const NotFound = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <button onClick={() => window.history.back()}>返回上一页</button>
    </div>
  )
}

export default NotFound
