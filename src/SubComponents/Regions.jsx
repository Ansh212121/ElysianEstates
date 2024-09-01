

const Regions = () => {
  return (
    <>
      <section id='regions'>
        <h1>Top Destinations</h1>
        <p>Explore a World of Wonders: We’re expanding our top destinations to bring you new adventures, unique experiences, and unforgettable moments. Discover your next great escape!</p>
        <div className="region_container">
        <div className="card">
         <img src="/10.jpg" alt="mountains" />
         <h2>Mountains</h2>
         <p><span>90</span> Properties</p> 
        </div>
        <div className="card">
        <img src="/9.jpg" alt="coastline" />
         <h2>Coastline</h2>
         <p><span>52</span> Properties</p> 
        </div>
        </div>
        </section> 
    </>
  )
}

export default Regions
