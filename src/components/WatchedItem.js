function WatchedItem({ get_local }) {
  const path = process.env.PUBLIC_URL;

  return (
    <div className="watched">
      <h4>최근본 상품</h4>

      {get_local !== null
        ? get_local.map((a, i) => {
            return (
              <div key={i}>
                <img src={`${path}/img/item${a}.jpg`} width="100%" />
                {/* <p className="get-local">{get_local[i].title}</p> */}
              </div>
            );
          })
        : null}
    </div>
  );
}

export default WatchedItem;
