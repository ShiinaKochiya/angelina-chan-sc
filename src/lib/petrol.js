/**
 * Some library functions for updating petrolimex petrol price
 */
import axios from "axios"
import fs from "fs"

export async function updatePetrolPrice() {
    //base64 encoded CMS filter used by Petrolimex
    let petrolEndpoint = "https://portals.petrolimex.com.vn/~apis/portals/cms.item/search?x-request=eyJGaWx0ZXJCeSI6eyJBbmQiOlt7IlN5c3RlbUlEIjp7IkVxdWFscyI6IjY3ODNkYzEyNzFmZjQ0OWU5NWI3NGE5NTIwOTY0MTY5In19LHsiUmVwb3NpdG9yeUlEIjp7IkVxdWFscyI6ImE5NTQ1MWUyM2I0NzRmZTU4ODZiZmI3Y2Y4NDNmNTNjIn19LHsiUmVwb3NpdG9yeUVudGl0eUlEIjp7IkVxdWFscyI6IjM4MDEzNzhmZTFlMDQ1YjFhZmExMGRlN2M1Nzc2MTI0In19XX19Cg"

    // Pull some headers from VietFuelBot
    // https://github.com/TranQui004/vietfuel-api/blob/main/backend/src/scrapers/petrolimex.js
    const HTTP_HEADERS = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'vi-VN,vi;q=0.9,en;q=0.8',
    };

    const petrol = await axios.get(petrolEndpoint, {
        HTTP_HEADERS
    })

    let petrolData = petrol.data.Objects
      .sort((a, b) => a.DIsplayOrder - b.DIsplayOrder)
      .map(({ Title, Zone1Price, Zone2Price, LastModified }) => ({
        Title,
        Zone1Price,
        Zone2Price,
        LastModified
      }));
    fs.writeFile("./src/data/petrolimex.json", JSON.stringify(petrolData), err => {
      if (err) {
        console.log("ERROR: Cannot write to file! Throwing error below");
        throw(err);
      }
    })

    console.log(`Caching fuelprice complete.`);
}
