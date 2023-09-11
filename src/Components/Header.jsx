import React from 'react'

function Header() {
  return (
    <header className="flex justify-between items-center shadow-xl p-4">
        <div className="logo w-32">
            <a href="/"><img src="https://fontmeme.com/permalink/230911/f958685d4ca3975d1f5307af7bb5bb69.png" alt="logo"  /></a>
        </div>
        <nav>
            <ul className="flex gap-5 font-bold text-red-500 cursor-pointer">
                <li><a href="#home">Home</a></li>
                <li><a href="#profile">Profile</a></li>
                <li><a href="#repositories">Repos</a></li>
            </ul>
        </nav>
    </header>

  )
}

export default Header