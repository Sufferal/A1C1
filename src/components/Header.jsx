import '../assets/css/Header.css' 

const Header = () => {
  return (
    <header id="header">
      <h1 className="header-title">
        <span className="text-green-italy">A1</span>
        <span className="text-red-italy">C1</span>
      </h1>
      <div className="header-info">
        <img src="./img/flag_italy.png" alt="flag_italy" className="header-img" />
      </div>
    </header>
  )
}

export default Header