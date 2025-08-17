import { useState } from "react";
import "./Search.css";

const GoogleSearch = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
        window.location.href = googleUrl;
        setSearchQuery("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            setSearchQuery("");
        }
    };

    return (
        <div className="google-search-section">
            <div className="search-container">
                <form className="search-input-container" onSubmit={handleSearch}>
                    <input 
                        className="google-search-input search-input" 
                        type="text"
                        placeholder="Search Google..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button 
                        className="search-btn" 
                        type="submit"
                    >
                        🔍
                    </button>
                </form>
            </div>
        </div>
    );
};

export { GoogleSearch };
