import banner from '../images/banner1.png';
function Header() {
    return (
      <div className="Header">
        <div className='bannerimg'><img src={banner} height={"150px"} width={'100%'} alt ="banner"/></div>
        <div className='bannertext'>My First React App</div>
        

      </div>
    );
  }
  
  export default Header;

