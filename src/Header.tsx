
export function Header() {
    return (
        <header>
            <div className="icon-div">
                <img className="icon" src="images/ts.svg" alt="ForumTS Icon" />
                <h1>ForumTS</h1>
            </div>
            <div className="search-div">
                <img src="images/search.svg" alt="Search Icon"/>
                <input className="search-bar" type="text" placeholder="Search..." />
                <button className="search-button">{">"}</button>
            </div>
            <div className="other-div">
                <div className="nav-links">
                    <a href="#">Головна</a>
                    <a href="#">Всі пости</a>
                    <button>+ Створити пост</button>
                </div>
                <div className="user-actions">
                    <button>
                        <img className="user-avatar" src="images/profile.svg" alt="User Avatar" />
                    </button>
                    <button>
                        <img src="images/ua.png"/>
                    </button>
                </div>
            </div>
        </header>
    )
}