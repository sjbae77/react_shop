function WatchedItem({ get_local, Shoes }) {
  const path = process.env.PUBLIC_URL;

  return (
    <div className="watched">
      <h4>최근본 상품</h4>

      {get_local !== null
        ? get_local.map((a, i) => {
            return (
              <div key={i}>
                <img src={`${path}/img/item${a}.jpg`} width="100%" />
              </div>
            );
          })
        : null}
    </div>
  );
}

export default WatchedItem;
