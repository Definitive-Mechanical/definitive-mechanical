// ============================================================
// Definitive Mechanical — Service Area Zip Code Database
// Covers: MD (PG, Montgomery, Howard, Anne Arundel, Charles)
//         Washington DC (all 8 wards)
//         VA (Fairfax, Arlington, Loudoun, Prince William)
// ============================================================

export interface ServiceAreaMatch {
  served: boolean;
  city?: string;
  county?: string;
  state?: string;
  stateLabel?: string;
  cityPageHref?: string;
  countyPageHref?: string;
}

interface ZipEntry {
  city: string;
  county: string;
  state: string;
  stateLabel: string;
  cityPageHref?: string;
  countyPageHref: string;
}

// ------------------------------------------------------------------
// ZIP CODE MAP
// ------------------------------------------------------------------
const ZIP_MAP: Record<string, ZipEntry> = {

  // ================================================================
  // MARYLAND — Prince George's County
  // ================================================================
  '20601': { city: 'Waldorf', county: "Charles County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/charles-county', cityPageHref: '/service-areas/maryland/charles-county/waldorf-md' },
  '20602': { city: 'Waldorf', county: "Charles County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/charles-county', cityPageHref: '/service-areas/maryland/charles-county/waldorf-md' },
  '20603': { city: 'Waldorf', county: "Charles County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/charles-county', cityPageHref: '/service-areas/maryland/charles-county/waldorf-md' },
  '20695': { city: 'Waldorf', county: "Charles County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/charles-county', cityPageHref: '/service-areas/maryland/charles-county/waldorf-md' },
  '20588': { city: 'Bensville', county: "Charles County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/charles-county', cityPageHref: '/service-areas/maryland/charles-county/bensville-md' },

  // Prince George's County — Largo / Upper Marlboro area
  '20772': { city: 'Upper Marlboro', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20773': { city: 'Upper Marlboro', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20774': { city: 'Largo', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county', cityPageHref: '/service-areas/maryland/prince-georges-county/largo-md' },
  '20775': { city: 'Largo', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county', cityPageHref: '/service-areas/maryland/prince-georges-county/largo-md' },
  '20785': { city: 'Largo', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county', cityPageHref: '/service-areas/maryland/prince-georges-county/largo-md' },
  '20706': { city: 'Lanham', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20707': { city: 'Laurel', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20708': { city: 'Laurel', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20709': { city: 'Laurel', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20710': { city: 'Bladensburg', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20712': { city: 'Mount Rainier', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20715': { city: 'Bowie', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county', cityPageHref: '/service-areas/maryland/prince-georges-county/bowie-md' },
  '20716': { city: 'Bowie', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county', cityPageHref: '/service-areas/maryland/prince-georges-county/bowie-md' },
  '20717': { city: 'Bowie', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county', cityPageHref: '/service-areas/maryland/prince-georges-county/bowie-md' },
  '20718': { city: 'Bowie', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county', cityPageHref: '/service-areas/maryland/prince-georges-county/bowie-md' },
  '20719': { city: 'Bowie', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county', cityPageHref: '/service-areas/maryland/prince-georges-county/bowie-md' },
  '20720': { city: 'Bowie', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county', cityPageHref: '/service-areas/maryland/prince-georges-county/bowie-md' },
  '20721': { city: 'Bowie', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county', cityPageHref: '/service-areas/maryland/prince-georges-county/bowie-md' },
  '20722': { city: 'Brentwood', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20735': { city: 'Clinton', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20737': { city: 'Riverdale Park', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20740': { city: 'College Park', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20741': { city: 'College Park', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20742': { city: 'College Park', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20743': { city: 'Capitol Heights', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20744': { city: 'Fort Washington', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county', cityPageHref: '/service-areas/maryland/prince-georges-county/fort-washington-md' },
  '20745': { city: 'Oxon Hill', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20746': { city: 'Suitland', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20747': { city: 'District Heights', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20748': { city: 'Temple Hills', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20762': { city: 'Andrews AFB', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20769': { city: 'Glenn Dale', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20770': { city: 'Greenbelt', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20781': { city: 'Hyattsville', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20782': { city: 'Hyattsville', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20783': { city: 'Hyattsville', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20784': { city: 'Hyattsville', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20786': { city: 'Landover', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20787': { city: 'Hyattsville', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20788': { city: 'Hyattsville', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20790': { city: 'Capitol Heights', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20791': { city: 'Capitol Heights', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20792': { city: 'Upper Marlboro', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20799': { city: 'Capitol Heights', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  // Woodmore / Fairwood / University Park / Croom / Queensland / Brock Hall
  '20764': { city: 'Shady Side', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20776': { city: 'Harwood', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20778': { city: 'West River', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },
  '20779': { city: 'Tracys Landing', county: "Prince George's County", state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/prince-georges-county' },

  // ================================================================
  // MARYLAND — Montgomery County
  // ================================================================
  '20814': { city: 'Bethesda', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county', cityPageHref: '/service-areas/maryland/montgomery-county/bethesda-md' },
  '20815': { city: 'Chevy Chase', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county', cityPageHref: '/service-areas/maryland/montgomery-county/chevy-chase-md' },
  '20816': { city: 'Bethesda', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county', cityPageHref: '/service-areas/maryland/montgomery-county/bethesda-md' },
  '20817': { city: 'Bethesda', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county', cityPageHref: '/service-areas/maryland/montgomery-county/bethesda-md' },
  '20818': { city: 'Cabin John', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county', cityPageHref: '/service-areas/maryland/montgomery-county/cabin-john-md' },
  '20832': { city: 'Olney', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20833': { city: 'Brookeville', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20837': { city: 'Poolesville', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20838': { city: 'Barnesville', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20839': { city: 'Beallsville', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20841': { city: 'Boyds', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20842': { city: 'Darnestown', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county', cityPageHref: '/service-areas/maryland/montgomery-county/darnestown-md' },
  '20850': { city: 'Rockville', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county', cityPageHref: '/service-areas/maryland/montgomery-county/rockville-md' },
  '20851': { city: 'Rockville', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county', cityPageHref: '/service-areas/maryland/montgomery-county/rockville-md' },
  '20852': { city: 'Rockville', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county', cityPageHref: '/service-areas/maryland/montgomery-county/rockville-md' },
  '20853': { city: 'Rockville', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county', cityPageHref: '/service-areas/maryland/montgomery-county/rockville-md' },
  '20854': { city: 'Potomac', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county', cityPageHref: '/service-areas/maryland/montgomery-county/potomac-md' },
  '20855': { city: 'Derwood', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20860': { city: 'Sandy Spring', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20861': { city: 'Ashton', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20862': { city: 'Brinklow', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20866': { city: 'Burtonsville', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20868': { city: 'Spencerville', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20871': { city: 'Clarksburg', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20872': { city: 'Damascus', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20874': { city: 'Germantown', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20875': { city: 'Germantown', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20876': { city: 'Germantown', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20877': { city: 'Gaithersburg', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20878': { city: 'Gaithersburg', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20879': { city: 'Gaithersburg', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20880': { city: 'Washington Grove', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20882': { city: 'Laytonsville', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20886': { city: 'Montgomery Village', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20895': { city: 'Kensington', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20896': { city: 'Garrett Park', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20897': { city: 'Suburb Maryland Fac', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20898': { city: 'Gaithersburg', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20899': { city: 'Gaithersburg', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20901': { city: 'Silver Spring', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20902': { city: 'Silver Spring', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20903': { city: 'Silver Spring', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20904': { city: 'Silver Spring', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20905': { city: 'Silver Spring', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20906': { city: 'Silver Spring', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20907': { city: 'Silver Spring', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20908': { city: 'Silver Spring', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20910': { city: 'Silver Spring', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20911': { city: 'Silver Spring', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },
  '20912': { city: 'Takoma Park', county: 'Montgomery County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/montgomery-county' },

  // ================================================================
  // MARYLAND — Howard County
  // ================================================================
  '21042': { city: 'Ellicott City', county: 'Howard County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/howard-county', cityPageHref: '/service-areas/maryland/howard-county/ellicott-city-md' },
  '21043': { city: 'Ellicott City', county: 'Howard County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/howard-county', cityPageHref: '/service-areas/maryland/howard-county/ellicott-city-md' },
  '21044': { city: 'Columbia', county: 'Howard County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/howard-county' },
  '21045': { city: 'Columbia', county: 'Howard County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/howard-county' },
  '21046': { city: 'Columbia', county: 'Howard County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/howard-county' },
  '21029': { city: 'Clarksville', county: 'Howard County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/howard-county', cityPageHref: '/service-areas/maryland/howard-county/clarksville-md' },
  '21737': { city: 'Glenelg', county: 'Howard County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/howard-county', cityPageHref: '/service-areas/maryland/howard-county/glenelg-md' },
  '21738': { city: 'Glenwood', county: 'Howard County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/howard-county' },
  '20777': { city: 'Highland', county: 'Howard County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/howard-county', cityPageHref: '/service-areas/maryland/howard-county/highland-md' },
  '20759': { city: 'Fulton', county: 'Howard County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/howard-county', cityPageHref: '/service-areas/maryland/howard-county/fulton-md' },
  '21794': { city: 'West Friendship', county: 'Howard County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/howard-county', cityPageHref: '/service-areas/maryland/howard-county/west-friendship-md' },
  '20723': { city: 'Laurel', county: 'Howard County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/howard-county' },
  '20724': { city: 'Laurel', county: 'Howard County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/howard-county' },
  '21076': { city: 'Hanover', county: 'Howard County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/howard-county' },
  '21104': { city: 'Marriottsville', county: 'Howard County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/howard-county' },
  '21163': { city: 'Woodstock', county: 'Howard County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/howard-county' },

  // ================================================================
  // MARYLAND — Anne Arundel County
  // ================================================================
  '20711': { city: 'Lothian', county: 'Anne Arundel County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/anne-arundel-county' },
  '20733': { city: 'Churchton', county: 'Anne Arundel County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/anne-arundel-county' },
  '20751': { city: 'Deale', county: 'Anne Arundel County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/anne-arundel-county' },
  '20755': { city: 'Fort Meade', county: 'Anne Arundel County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/anne-arundel-county' },
  '20758': { city: 'Friendship', county: 'Anne Arundel County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/anne-arundel-county' },
  '20763': { city: 'Savage', county: 'Anne Arundel County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/anne-arundel-county' },
  '20765': { city: 'Galesville', county: 'Anne Arundel County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/anne-arundel-county', cityPageHref: '/service-areas/maryland/anne-arundel-county/galesville-md' },
  '21012': { city: 'Arnold', county: 'Anne Arundel County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/anne-arundel-county' },
  '21032': { city: 'Crownsville', county: 'Anne Arundel County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/anne-arundel-county', cityPageHref: '/service-areas/maryland/anne-arundel-county/crownsville-md' },
  '21035': { city: 'Davidsonville', county: 'Anne Arundel County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/anne-arundel-county' },
  '21037': { city: 'Edgewater', county: 'Anne Arundel County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/anne-arundel-county' },
  '21054': { city: 'Gambrills', county: 'Anne Arundel County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/anne-arundel-county' },
  '21060': { city: 'Glen Burnie', county: 'Anne Arundel County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/anne-arundel-county' },
  '21061': { city: 'Glen Burnie', county: 'Anne Arundel County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/anne-arundel-county' },
  '21075': { city: 'Elkridge', county: 'Anne Arundel County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/anne-arundel-county' },
  '21077': { city: 'Harmans', county: 'Anne Arundel County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/anne-arundel-county' },
  '21090': { city: 'Linthicum Heights', county: 'Anne Arundel County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/anne-arundel-county' },
  '21108': { city: 'Millersville', county: 'Anne Arundel County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/anne-arundel-county' },
  '21113': { city: 'Odenton', county: 'Anne Arundel County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/anne-arundel-county' },
  '21114': { city: 'Crofton', county: 'Anne Arundel County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/anne-arundel-county' },
  '21122': { city: 'Pasadena', county: 'Anne Arundel County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/anne-arundel-county' },
  '21140': { city: 'Riva', county: 'Anne Arundel County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/anne-arundel-county', cityPageHref: '/service-areas/maryland/anne-arundel-county/riva-md' },
  '21401': { city: 'Annapolis', county: 'Anne Arundel County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/anne-arundel-county' },
  '21402': { city: 'Annapolis', county: 'Anne Arundel County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/anne-arundel-county' },
  '21403': { city: 'Annapolis', county: 'Anne Arundel County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/anne-arundel-county' },
  '21405': { city: 'Annapolis', county: 'Anne Arundel County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/anne-arundel-county' },
  '21409': { city: 'Annapolis', county: 'Anne Arundel County', state: 'MD', stateLabel: 'Maryland', countyPageHref: '/service-areas/maryland/anne-arundel-county' },

  // ================================================================
  // WASHINGTON DC — All Wards
  // ================================================================
  '20001': { city: 'Washington DC', county: 'Ward 5', state: 'DC', stateLabel: 'Washington DC', countyPageHref: '/service-areas/washington-dc', cityPageHref: '/service-areas/washington-dc/ward-5' },
  '20002': { city: 'Washington DC', county: 'Ward 6', state: 'DC', stateLabel: 'Washington DC', countyPageHref: '/service-areas/washington-dc', cityPageHref: '/service-areas/washington-dc/ward-6' },
  '20003': { city: 'Capitol Hill', county: 'Ward 6', state: 'DC', stateLabel: 'Washington DC', countyPageHref: '/service-areas/washington-dc', cityPageHref: '/service-areas/washington-dc/capitol-hill' },
  '20004': { city: 'Washington DC', county: 'Ward 2', state: 'DC', stateLabel: 'Washington DC', countyPageHref: '/service-areas/washington-dc', cityPageHref: '/service-areas/washington-dc/ward-2' },
  '20005': { city: 'Washington DC', county: 'Ward 2', state: 'DC', stateLabel: 'Washington DC', countyPageHref: '/service-areas/washington-dc', cityPageHref: '/service-areas/washington-dc/ward-2' },
  '20006': { city: 'Washington DC', county: 'Ward 2', state: 'DC', stateLabel: 'Washington DC', countyPageHref: '/service-areas/washington-dc', cityPageHref: '/service-areas/washington-dc/ward-2' },
  '20007': { city: 'Georgetown', county: 'Ward 2', state: 'DC', stateLabel: 'Washington DC', countyPageHref: '/service-areas/washington-dc', cityPageHref: '/service-areas/washington-dc/georgetown' },
  '20008': { city: 'Washington DC', county: 'Ward 3', state: 'DC', stateLabel: 'Washington DC', countyPageHref: '/service-areas/washington-dc', cityPageHref: '/service-areas/washington-dc/ward-3' },
  '20009': { city: 'Dupont Circle', county: 'Ward 1', state: 'DC', stateLabel: 'Washington DC', countyPageHref: '/service-areas/washington-dc', cityPageHref: '/service-areas/washington-dc/dupont-circle' },
  '20010': { city: 'Columbia Heights', county: 'Ward 1', state: 'DC', stateLabel: 'Washington DC', countyPageHref: '/service-areas/washington-dc', cityPageHref: '/service-areas/washington-dc/ward-1' },
  '20011': { city: 'Petworth', county: 'Ward 4', state: 'DC', stateLabel: 'Washington DC', countyPageHref: '/service-areas/washington-dc', cityPageHref: '/service-areas/washington-dc/ward-4' },
  '20012': { city: 'Washington DC', county: 'Ward 4', state: 'DC', stateLabel: 'Washington DC', countyPageHref: '/service-areas/washington-dc', cityPageHref: '/service-areas/washington-dc/ward-4' },
  '20015': { city: 'Chevy Chase DC', county: 'Ward 3', state: 'DC', stateLabel: 'Washington DC', countyPageHref: '/service-areas/washington-dc', cityPageHref: '/service-areas/washington-dc/ward-3' },
  '20016': { city: 'Washington DC', county: 'Ward 3', state: 'DC', stateLabel: 'Washington DC', countyPageHref: '/service-areas/washington-dc', cityPageHref: '/service-areas/washington-dc/ward-3' },
  '20017': { city: 'Brookland', county: 'Ward 5', state: 'DC', stateLabel: 'Washington DC', countyPageHref: '/service-areas/washington-dc', cityPageHref: '/service-areas/washington-dc/ward-5' },
  '20018': { city: 'Washington DC', county: 'Ward 5', state: 'DC', stateLabel: 'Washington DC', countyPageHref: '/service-areas/washington-dc', cityPageHref: '/service-areas/washington-dc/ward-5' },
  '20019': { city: 'Washington DC', county: 'Ward 7', state: 'DC', stateLabel: 'Washington DC', countyPageHref: '/service-areas/washington-dc', cityPageHref: '/service-areas/washington-dc/ward-7' },
  '20020': { city: 'Anacostia', county: 'Ward 8', state: 'DC', stateLabel: 'Washington DC', countyPageHref: '/service-areas/washington-dc', cityPageHref: '/service-areas/washington-dc/ward-8' },
  '20024': { city: 'Navy Yard', county: 'Ward 6', state: 'DC', stateLabel: 'Washington DC', countyPageHref: '/service-areas/washington-dc', cityPageHref: '/service-areas/washington-dc/navy-yard' },
  '20032': { city: 'Congress Heights', county: 'Ward 8', state: 'DC', stateLabel: 'Washington DC', countyPageHref: '/service-areas/washington-dc', cityPageHref: '/service-areas/washington-dc/ward-8' },
  '20036': { city: 'Dupont Circle', county: 'Ward 2', state: 'DC', stateLabel: 'Washington DC', countyPageHref: '/service-areas/washington-dc', cityPageHref: '/service-areas/washington-dc/dupont-circle' },
  '20037': { city: 'Foggy Bottom', county: 'Ward 2', state: 'DC', stateLabel: 'Washington DC', countyPageHref: '/service-areas/washington-dc', cityPageHref: '/service-areas/washington-dc/ward-2' },
  '20045': { city: 'Washington DC', county: 'Ward 2', state: 'DC', stateLabel: 'Washington DC', countyPageHref: '/service-areas/washington-dc', cityPageHref: '/service-areas/washington-dc/ward-2' },
  '20052': { city: 'Washington DC', county: 'Ward 2', state: 'DC', stateLabel: 'Washington DC', countyPageHref: '/service-areas/washington-dc', cityPageHref: '/service-areas/washington-dc/ward-2' },
  '20057': { city: 'Georgetown', county: 'Ward 2', state: 'DC', stateLabel: 'Washington DC', countyPageHref: '/service-areas/washington-dc', cityPageHref: '/service-areas/washington-dc/georgetown' },
  '20059': { city: 'Washington DC', county: 'Ward 1', state: 'DC', stateLabel: 'Washington DC', countyPageHref: '/service-areas/washington-dc', cityPageHref: '/service-areas/washington-dc/ward-1' },
  '20064': { city: 'Washington DC', county: 'Ward 5', state: 'DC', stateLabel: 'Washington DC', countyPageHref: '/service-areas/washington-dc', cityPageHref: '/service-areas/washington-dc/ward-5' },

  // ================================================================
  // VIRGINIA — Fairfax County
  // ================================================================
  '22003': { city: 'Annandale', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county' },
  '22015': { city: 'Burke', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county' },
  '22027': { city: 'Dunn Loring', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county', cityPageHref: '/service-areas/northern-virginia/fairfax-county/dunn-loring-va' },
  '22030': { city: 'Fairfax', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county' },
  '22031': { city: 'Fairfax', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county' },
  '22032': { city: 'Fairfax', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county' },
  '22033': { city: 'Fairfax', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county' },
  '22035': { city: 'Fairfax', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county' },
  '22039': { city: 'Fairfax Station', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county' },
  '22041': { city: 'Falls Church', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county' },
  '22042': { city: 'Falls Church', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county' },
  '22043': { city: 'Falls Church', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county' },
  '22044': { city: 'Falls Church', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county' },
  '22046': { city: 'Falls Church', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county' },
  '22060': { city: 'Fort Belvoir', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county' },
  '22066': { city: 'Great Falls', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county', cityPageHref: '/service-areas/northern-virginia/fairfax-county/great-falls-va' },
  '22079': { city: 'Lorton', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county' },
  '22101': { city: 'McLean', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county', cityPageHref: '/service-areas/northern-virginia/fairfax-county/mclean-va' },
  '22102': { city: 'McLean', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county', cityPageHref: '/service-areas/northern-virginia/fairfax-county/mclean-va' },
  '22124': { city: 'Oakton', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county' },
  '22150': { city: 'Springfield', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county', cityPageHref: '/service-areas/northern-virginia/fairfax-county/springfield-va' },
  '22151': { city: 'Springfield', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county', cityPageHref: '/service-areas/northern-virginia/fairfax-county/springfield-va' },
  '22152': { city: 'Springfield', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county', cityPageHref: '/service-areas/northern-virginia/fairfax-county/springfield-va' },
  '22153': { city: 'Springfield', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county', cityPageHref: '/service-areas/northern-virginia/fairfax-county/springfield-va' },
  '22180': { city: 'Vienna', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county', cityPageHref: '/service-areas/northern-virginia/fairfax-county/vienna-va' },
  '22181': { city: 'Vienna', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county', cityPageHref: '/service-areas/northern-virginia/fairfax-county/vienna-va' },
  '22182': { city: 'Vienna', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county', cityPageHref: '/service-areas/northern-virginia/fairfax-county/vienna-va' },
  '22301': { city: 'Alexandria', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county', cityPageHref: '/service-areas/northern-virginia/fairfax-county/alexandria-va' },
  '22302': { city: 'Alexandria', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county', cityPageHref: '/service-areas/northern-virginia/fairfax-county/alexandria-va' },
  '22303': { city: 'Alexandria', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county', cityPageHref: '/service-areas/northern-virginia/fairfax-county/alexandria-va' },
  '22304': { city: 'Alexandria', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county', cityPageHref: '/service-areas/northern-virginia/fairfax-county/alexandria-va' },
  '22305': { city: 'Alexandria', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county', cityPageHref: '/service-areas/northern-virginia/fairfax-county/alexandria-va' },
  '22306': { city: 'Alexandria', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county', cityPageHref: '/service-areas/northern-virginia/fairfax-county/alexandria-va' },
  '22307': { city: 'Alexandria', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county', cityPageHref: '/service-areas/northern-virginia/fairfax-county/alexandria-va' },
  '22308': { city: 'Alexandria', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county', cityPageHref: '/service-areas/northern-virginia/fairfax-county/alexandria-va' },
  '22309': { city: 'Alexandria', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county', cityPageHref: '/service-areas/northern-virginia/fairfax-county/alexandria-va' },
  '22310': { city: 'Alexandria', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county', cityPageHref: '/service-areas/northern-virginia/fairfax-county/alexandria-va' },
  '22311': { city: 'Alexandria', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county', cityPageHref: '/service-areas/northern-virginia/fairfax-county/alexandria-va' },
  '22312': { city: 'Alexandria', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county', cityPageHref: '/service-areas/northern-virginia/fairfax-county/alexandria-va' },
  '22315': { city: 'Alexandria', county: 'Fairfax County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/fairfax-county', cityPageHref: '/service-areas/northern-virginia/fairfax-county/alexandria-va' },

  // ================================================================
  // VIRGINIA — Arlington County
  // ================================================================
  '22201': { city: 'Arlington', county: 'Arlington County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/arlington-county', cityPageHref: '/service-areas/northern-virginia/arlington-county/arlington-va' },
  '22202': { city: 'Arlington', county: 'Arlington County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/arlington-county', cityPageHref: '/service-areas/northern-virginia/arlington-county/arlington-va' },
  '22203': { city: 'Arlington', county: 'Arlington County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/arlington-county', cityPageHref: '/service-areas/northern-virginia/arlington-county/arlington-va' },
  '22204': { city: 'Arlington', county: 'Arlington County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/arlington-county', cityPageHref: '/service-areas/northern-virginia/arlington-county/arlington-va' },
  '22205': { city: 'Arlington', county: 'Arlington County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/arlington-county', cityPageHref: '/service-areas/northern-virginia/arlington-county/arlington-va' },
  '22206': { city: 'Arlington', county: 'Arlington County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/arlington-county', cityPageHref: '/service-areas/northern-virginia/arlington-county/arlington-va' },
  '22207': { city: 'Arlington', county: 'Arlington County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/arlington-county', cityPageHref: '/service-areas/northern-virginia/arlington-county/arlington-va' },
  '22209': { city: 'Arlington', county: 'Arlington County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/arlington-county', cityPageHref: '/service-areas/northern-virginia/arlington-county/arlington-va' },
  '22210': { city: 'Arlington', county: 'Arlington County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/arlington-county', cityPageHref: '/service-areas/northern-virginia/arlington-county/arlington-va' },
  '22211': { city: 'Fort Myer', county: 'Arlington County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/arlington-county', cityPageHref: '/service-areas/northern-virginia/arlington-county/arlington-va' },
  '22213': { city: 'Arlington', county: 'Arlington County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/arlington-county', cityPageHref: '/service-areas/northern-virginia/arlington-county/arlington-va' },
  '22214': { city: 'Arlington', county: 'Arlington County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/arlington-county', cityPageHref: '/service-areas/northern-virginia/arlington-county/arlington-va' },
  '22215': { city: 'Arlington', county: 'Arlington County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/arlington-county', cityPageHref: '/service-areas/northern-virginia/arlington-county/arlington-va' },
  '22216': { city: 'Arlington', county: 'Arlington County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/arlington-county', cityPageHref: '/service-areas/northern-virginia/arlington-county/arlington-va' },
  '22217': { city: 'Arlington', county: 'Arlington County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/arlington-county', cityPageHref: '/service-areas/northern-virginia/arlington-county/arlington-va' },
  '22219': { city: 'Arlington', county: 'Arlington County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/arlington-county', cityPageHref: '/service-areas/northern-virginia/arlington-county/arlington-va' },
  '22222': { city: 'Arlington', county: 'Arlington County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/arlington-county', cityPageHref: '/service-areas/northern-virginia/arlington-county/arlington-va' },

  // ================================================================
  // VIRGINIA — Loudoun County
  // ================================================================
  '20105': { city: 'Aldie', county: 'Loudoun County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/loudoun-county' },
  '20117': { city: 'Middleburg', county: 'Loudoun County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/loudoun-county' },
  '20118': { city: 'Middleburg', county: 'Loudoun County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/loudoun-county' },
  '20132': { city: 'Purcellville', county: 'Loudoun County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/loudoun-county' },
  '20141': { city: 'Round Hill', county: 'Loudoun County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/loudoun-county' },
  '20147': { city: 'Ashburn', county: 'Loudoun County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/loudoun-county' },
  '20148': { city: 'Brambleton', county: 'Loudoun County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/loudoun-county', cityPageHref: '/service-areas/northern-virginia/loudoun-county/brambleton-va' },
  '20152': { city: 'Chantilly', county: 'Loudoun County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/loudoun-county' },
  '20164': { city: 'Sterling', county: 'Loudoun County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/loudoun-county' },
  '20165': { city: 'Potomac Falls', county: 'Loudoun County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/loudoun-county' },
  '20166': { city: 'Sterling', county: 'Loudoun County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/loudoun-county' },
  '20175': { city: 'Leesburg', county: 'Loudoun County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/loudoun-county' },
  '20176': { city: 'Leesburg', county: 'Loudoun County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/loudoun-county' },
  '20189': { city: 'Dulles', county: 'Loudoun County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/loudoun-county' },
  '20197': { city: 'Waterford', county: 'Loudoun County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/loudoun-county' },

  // ================================================================
  // VIRGINIA — Prince William County
  // ================================================================
  '20109': { city: 'Manassas', county: 'Prince William County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/prince-william-county' },
  '20110': { city: 'Manassas', county: 'Prince William County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/prince-william-county' },
  '20111': { city: 'Manassas', county: 'Prince William County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/prince-william-county' },
  '20112': { city: 'Manassas', county: 'Prince William County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/prince-william-county' },
  '20136': { city: 'Bristow', county: 'Prince William County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/prince-william-county' },
  '20155': { city: 'Gainesville', county: 'Prince William County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/prince-william-county' },
  '20169': { city: 'Haymarket', county: 'Prince William County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/prince-william-county' },
  '20181': { city: 'Nokesville', county: 'Prince William County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/prince-william-county' },
  '20187': { city: 'Warrenton', county: 'Prince William County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/prince-william-county' },
  '22025': { city: 'Dumfries', county: 'Prince William County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/prince-william-county' },
  '22026': { city: 'Dumfries', county: 'Prince William County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/prince-william-county' },
  '22125': { city: 'Occoquan', county: 'Prince William County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/prince-william-county' },
  '22191': { city: 'Woodbridge', county: 'Prince William County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/prince-william-county' },
  '22192': { city: 'Woodbridge', county: 'Prince William County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/prince-william-county' },
  '22193': { city: 'Woodbridge', county: 'Prince William County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/prince-william-county' },
  '22134': { city: 'Quantico', county: 'Prince William County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/prince-william-county' },
  '22172': { city: 'Triangle', county: 'Prince William County', state: 'VA', stateLabel: 'Northern Virginia', countyPageHref: '/service-areas/northern-virginia/prince-william-county' },
};

// ------------------------------------------------------------------
// LOOKUP FUNCTION
// ------------------------------------------------------------------
export function lookupZip(zip: string): ServiceAreaMatch {
  const clean = zip.trim().replace(/\D/g, '').slice(0, 5);
  if (clean.length < 5) return { served: false };
  const entry = ZIP_MAP[clean];
  if (!entry) return { served: false };
  return {
    served: true,
    city: entry.city,
    county: entry.county,
    state: entry.state,
    stateLabel: entry.stateLabel,
    cityPageHref: entry.cityPageHref,
    countyPageHref: entry.countyPageHref,
  };
}
