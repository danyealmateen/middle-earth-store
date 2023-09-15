import './BuyWeapons.css';

const BuyWeapons = () => {
  return (
    <>
      <h1>Buy weapons page</h1>
      <div className='product-container'>
        <div className='product-card'>
          <img
            className='placeholder-img'
            src='./images/placeholder.jpg'
            alt=''
          />
          <h3 className='product-title'>Narsil</h3>
          <p>Lorem ipsum dolor.</p>
          <h3 className='product-price'>24.99€</h3>
          <p className='product-stock'>5 in Stock</p>
        </div>
      </div>
    </>
  );
};

export default BuyWeapons;
