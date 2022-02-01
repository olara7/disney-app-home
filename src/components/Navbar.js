//styles
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
        <nav>
            <div className='logo'> </div>
              <img src="/img/Disney+-White-Logo.wine.png" alt="disney-logo" />
            <div className='menu'>
              <a href="">
                <span> <img src="/img/home-icon.svg" alt="home-icon" /> Home </span>
              </a>
              <a href="">
                <span> <img src="/img/search-icon.svg" alt="home-icon" /> Search </span>
              </a>
              <a href="">
                <span> <img src="/img/watchlist-icon.svg" alt="home-icon" /> Watchlist </span>
              </a>
              <a href="">
                <span> <img src="/img/original-icon.svg" alt="home-icon" /> Originals </span>
              </a>
              <a href="">
                <span> <img src="/img/movie-icon.svg" alt="home-icon" /> Movies </span>
              </a>
              <a href="">
                <span> <img src="/img/series-icon.svg" alt="home-icon" /> Series </span>
              </a>
            </div>
            <div className='nav-profile'>
              <img src="/img/ferb-profile-icon.png" alt="profile-icon" />
            </div>
        </nav>
    </div>
  )
}
