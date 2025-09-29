
export default function SearchSection() {

  return (
    <section className="search-section">
      <h1 className="preset-2">How's the sky looking today?</h1>
      <form className="search-form">
        <input type="text" aria-label="Search for location" placeholder="Search for a place..." className="search-input preset-5"/>
        <button type="submit" className="search-button preset-5">Search</button>
      </form>
    </section>
  )
}

//Rendered in the MainContent component
