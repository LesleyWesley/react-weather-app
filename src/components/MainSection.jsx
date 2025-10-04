import SearchSection from "./SearchSection"
import GridSection from "./GridSection"
import NoResults from "./NoResults"
import React from "react"

export default function MainSection() {

  const [searchResults, setSearchResults] = React.useState(true);

  return (
    <main>
      <SearchSection />
      {searchResults ? <GridSection /> : <NoResults />}
    </main>
  )
}
