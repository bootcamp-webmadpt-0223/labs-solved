import { useState } from 'react'
import profilesData from '../data/berlin.json'

const FaceBook = () => {
  const distinctCountries = [
    ...new Set(profilesData.map((profile) => profile.country)),
  ]
  const [highlightedCountry, setHighlightedCountry] = useState(null)
  const [selectedProfile, setSelectedProfile] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')

  const sortedProfiles = [...profilesData].sort((a, b) => {
    return sortOrder === 'asc'
      ? a.firstName.localeCompare(b.firstName)
      : b.firstName.localeCompare(a.firstName)
  })

  const filteredProfiles = searchTerm
    ? sortedProfiles.filter((profile) =>
        `${profile.firstName} ${profile.lastName}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    : sortedProfiles

  const changeHighlightedCountry = (country) => {
    setHighlightedCountry(country)
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setSortOrder('asc')}>Sort Ascending</button>
      <button onClick={() => setSortOrder('desc')}>Sort Descending</button>
      <button
        onClick={() => changeHighlightedCountry('All')}
        style={{
          backgroundColor: highlightedCountry === 'All' ? '#a3d2e2' : 'white',
        }}
      >
        All
      </button>
      {distinctCountries.map((country, index) => (
        <button
          key={index}
          onClick={() => changeHighlightedCountry(country)}
          style={{
            backgroundColor:
              highlightedCountry === country ? '#a3d2e2' : 'white',
          }}
        >
          {country}
        </button>
      ))}
      {filteredProfiles.map((profile, index) => (
        <div
          onClick={() => setSelectedProfile(profile)}
          style={{
            backgroundColor:
              highlightedCountry === 'All' ||
              highlightedCountry === profile.country
                ? '#a3d2e2'
                : 'white',
          }}
          className={`FaceBook ${profile.country}`}
          key={index}
        >
          <img src={profile.img} alt={profile.firstName} />
          {profile === selectedProfile && (
            <div className="sideText">
              <p>
                <strong>First name:</strong> {profile.firstName}
              </p>
              <p>
                <strong>Last name:</strong> {profile.lastName}
              </p>
              <p>
                <strong>Country:</strong> {profile.country}
              </p>
              <p>
                <strong>Type:</strong>{' '}
                {profile.isStudent ? 'Student' : 'Teacher'}
              </p>
            </div>
          )}
        </div>
      ))}
    </>
  )
}

export default FaceBook
