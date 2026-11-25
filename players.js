// Verified senior club career paths for ClubPath (105 iconic & modern footballers)
// Format: { name, aliases?, nation, region, pos, career: [{ club, years, loan? }] }
window.PLAYERS = [
  { name: "Zlatan Ibrahimović", aliases: ["Zlatan Ibrahimovic", "Ibrahimovic"], nation: "🇸🇪 Sweden", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Malmö FF", years: "1999–2001" }, { club: "Ajax", years: "2001–2004" }, { club: "Juventus", years: "2004–2006" },
    { club: "Inter Milan", years: "2006–2009" }, { club: "Barcelona", years: "2009–2011" }, { club: "AC Milan", years: "2010–2012" },
    { club: "Paris Saint-Germain", years: "2012–2016" }, { club: "Manchester United", years: "2016–2018" },
    { club: "LA Galaxy", years: "2018–2019" }, { club: "AC Milan", years: "2020–2023" }
  ]},
  { name: "Cristiano Ronaldo", aliases: ["CR7"], nation: "🇵🇹 Portugal", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Sporting CP", years: "2002–2003" }, { club: "Manchester United", years: "2003–2009" },
    { club: "Real Madrid", years: "2009–2018" }, { club: "Juventus", years: "2018–2021" },
    { club: "Manchester United", years: "2021–2022" }, { club: "Al-Nassr", years: "2023–present" }
  ]},
  { name: "Lionel Messi", nation: "🇦🇷 Argentina", region: "South America (CONMEBOL)", pos: "Forward", career: [
    { club: "Barcelona", years: "2004–2021" }, { club: "Paris Saint-Germain", years: "2021–2023" }, { club: "Inter Miami", years: "2023–present" }
  ]},
  { name: "Erling Haaland", nation: "🇳🇴 Norway", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Bryne", years: "2016" }, { club: "Molde", years: "2017–2018" }, { club: "Red Bull Salzburg", years: "2019" },
    { club: "Borussia Dortmund", years: "2020–2022" }, { club: "Manchester City", years: "2022–present" }
  ]},
  { name: "Kylian Mbappé", aliases: ["Kylian Mbappe", "Mbappe"], nation: "🇫🇷 France", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Monaco", years: "2015–2018" }, { club: "Paris Saint-Germain", years: "2017–2024" }, { club: "Real Madrid", years: "2024–present" }
  ]},
  { name: "Mohamed Salah", nation: "🇪🇬 Egypt", region: "Africa (CAF)", pos: "Forward", career: [
    { club: "Al Mokawloon", years: "2010–2012" }, { club: "Basel", years: "2012–2014" }, { club: "Chelsea", years: "2014–2016" },
    { club: "Fiorentina", years: "2015", loan: true }, { club: "Roma", years: "2015–2017" }, { club: "Liverpool", years: "2017–present" }
  ]},
  { name: "Kevin De Bruyne", nation: "🇧🇪 Belgium", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "Genk", years: "2008–2012" }, { club: "Chelsea", years: "2012–2014" }, { club: "Werder Bremen", years: "2012–2013", loan: true },
    { club: "VfL Wolfsburg", years: "2014–2015" }, { club: "Manchester City", years: "2015–2025" }
  ]},
  { name: "Alexander Isak", nation: "🇸🇪 Sweden", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "AIK", years: "2016" }, { club: "Borussia Dortmund", years: "2017–2019" },
    { club: "Willem II", years: "2019", loan: true }, { club: "Real Sociedad", years: "2019–2022" }, { club: "Newcastle United", years: "2022–present" }
  ]},
  { name: "Viktor Gyökeres", aliases: ["Viktor Gyokeres", "Gyokeres"], nation: "🇸🇪 Sweden", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "IF Brommapojkarna", years: "2015–2017" }, { club: "Brighton & Hove Albion", years: "2018–2021" },
    { club: "FC St. Pauli", years: "2019–2020", loan: true }, { club: "Swansea City", years: "2020–2021", loan: true },
    { club: "Coventry City", years: "2021–2023" }, { club: "Sporting CP", years: "2023–present" }
  ]},
  { name: "Dejan Kulusevski", nation: "🇸🇪 Sweden", region: "Europe (UEFA)", pos: "Midfielder / Forward", career: [
    { club: "Atalanta", years: "2018–2020" }, { club: "Parma", years: "2019–2020", loan: true },
    { club: "Juventus", years: "2020–2023" }, { club: "Tottenham Hotspur", years: "2022–present" }
  ]},
  { name: "Henrik Larsson", nation: "🇸🇪 Sweden", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Högaborgs BK", years: "1989–1992" }, { club: "Helsingborgs IF", years: "1992–1993" }, { club: "Feyenoord", years: "1993–1997" },
    { club: "Celtic", years: "1997–2004" }, { club: "Barcelona", years: "2004–2006" },
    { club: "Helsingborgs IF", years: "2006–2009" }, { club: "Manchester United", years: "2007", loan: true }
  ]},
  { name: "Luka Modrić", aliases: ["Luka Modric", "Modric"], nation: "🇭🇷 Croatia", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "Dinamo Zagreb", years: "2003–2008" }, { club: "Zrinjski Mostar", years: "2003–2004", loan: true },
    { club: "Inter Zaprešić", years: "2004–2005", loan: true }, { club: "Tottenham Hotspur", years: "2008–2012" }, { club: "Real Madrid", years: "2012–2025" }
  ]},
  { name: "Jude Bellingham", nation: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "Birmingham City", years: "2019–2020" }, { club: "Borussia Dortmund", years: "2020–2023" }, { club: "Real Madrid", years: "2023–present" }
  ]},
  { name: "Harry Kane", nation: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Tottenham Hotspur", years: "2009–2023" }, { club: "Leyton Orient", years: "2011", loan: true },
    { club: "Millwall", years: "2012", loan: true }, { club: "Norwich City", years: "2012–2013", loan: true },
    { club: "Leicester City", years: "2013", loan: true }, { club: "Bayern Munich", years: "2023–present" }
  ]},
  { name: "Robert Lewandowski", nation: "🇵🇱 Poland", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Znicz Pruszków", years: "2006–2008" }, { club: "Lech Poznań", years: "2008–2010" },
    { club: "Borussia Dortmund", years: "2010–2014" }, { club: "Bayern Munich", years: "2014–2022" }, { club: "Barcelona", years: "2022–present" }
  ]},
  { name: "Neymar", aliases: ["Neymar Jr"], nation: "🇧🇷 Brazil", region: "South America (CONMEBOL)", pos: "Forward", career: [
    { club: "Santos", years: "2009–2013" }, { club: "Barcelona", years: "2013–2017" },
    { club: "Paris Saint-Germain", years: "2017–2023" }, { club: "Al-Hilal", years: "2023–2025" }, { club: "Santos", years: "2025–present" }
  ]},
  { name: "Virgil van Dijk", nation: "🇳🇱 Netherlands", region: "Europe (UEFA)", pos: "Defender", career: [
    { club: "Groningen", years: "2011–2013" }, { club: "Celtic", years: "2013–2015" },
    { club: "Southampton", years: "2015–2018" }, { club: "Liverpool", years: "2018–present" }
  ]},
  { name: "Martin Ødegaard", aliases: ["Martin Odegaard", "Odegaard"], nation: "🇳🇴 Norway", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "Strømsgodset", years: "2014–2015" }, { club: "Real Madrid", years: "2015–2021" },
    { club: "Heerenveen", years: "2017–2018", loan: true }, { club: "Vitesse", years: "2018–2019", loan: true },
    { club: "Real Sociedad", years: "2019–2020", loan: true }, { club: "Arsenal", years: "2021–present" }
  ]},
  { name: "Son Heung-min", aliases: ["Heung-Min Son"], nation: "🇰🇷 South Korea", region: "Asia (AFC)", pos: "Forward", career: [
    { club: "Hamburger SV", years: "2010–2013" }, { club: "Bayer Leverkusen", years: "2013–2015" }, { club: "Tottenham Hotspur", years: "2015–present" }
  ]},
  { name: "Bruno Fernandes", nation: "🇵🇹 Portugal", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "Novara", years: "2012–2013" }, { club: "Udinese", years: "2013–2016" },
    { club: "Sampdoria", years: "2016–2017" }, { club: "Sporting CP", years: "2017–2020" }, { club: "Manchester United", years: "2020–present" }
  ]},
  { name: "Karim Benzema", nation: "🇫🇷 France", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Lyon", years: "2004–2009" }, { club: "Real Madrid", years: "2009–2023" }, { club: "Al-Ittihad", years: "2023–present" }
  ]},
  { name: "Sadio Mané", aliases: ["Sadio Mane", "Mane"], nation: "🇸🇳 Senegal", region: "Africa (CAF)", pos: "Forward", career: [
    { club: "Metz", years: "2011–2012" }, { club: "Red Bull Salzburg", years: "2012–2014" },
    { club: "Southampton", years: "2014–2016" }, { club: "Liverpool", years: "2016–2022" },
    { club: "Bayern Munich", years: "2022–2023" }, { club: "Al-Nassr", years: "2023–present" }
  ]},
  { name: "N'Golo Kanté", aliases: ["N'Golo Kante", "Kante"], nation: "🇫🇷 France", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "Boulogne", years: "2012–2013" }, { club: "Caen", years: "2013–2015" },
    { club: "Leicester City", years: "2015–2016" }, { club: "Chelsea", years: "2016–2023" }, { club: "Al-Ittihad", years: "2023–present" }
  ]},
  { name: "Riyad Mahrez", nation: "🇩🇿 Algeria", region: "Africa (CAF)", pos: "Forward", career: [
    { club: "Quimper", years: "2009–2010" }, { club: "Le Havre", years: "2010–2014" },
    { club: "Leicester City", years: "2014–2018" }, { club: "Manchester City", years: "2018–2023" }, { club: "Al-Ahli", years: "2023–present" }
  ]},
  { name: "Achraf Hakimi", nation: "🇲🇦 Morocco", region: "Africa (CAF)", pos: "Defender", career: [
    { club: "Real Madrid", years: "2017–2020" }, { club: "Borussia Dortmund", years: "2018–2020", loan: true },
    { club: "Inter Milan", years: "2020–2021" }, { club: "Paris Saint-Germain", years: "2021–present" }
  ]},
  { name: "Romelu Lukaku", nation: "🇧🇪 Belgium", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Anderlecht", years: "2009–2011" }, { club: "Chelsea", years: "2011–2014" },
    { club: "West Bromwich Albion", years: "2012–2013", loan: true }, { club: "Everton", years: "2013–2017" },
    { club: "Manchester United", years: "2017–2019" }, { club: "Inter Milan", years: "2019–2021" },
    { club: "Chelsea", years: "2021–2024" }, { club: "Inter Milan", years: "2022–2023", loan: true },
    { club: "Roma", years: "2023–2024", loan: true }, { club: "Napoli", years: "2024–present" }
  ]},
  { name: "Ángel Di María", aliases: ["Angel Di Maria", "Di Maria"], nation: "🇦🇷 Argentina", region: "South America (CONMEBOL)", pos: "Forward / Midfielder", career: [
    { club: "Rosario Central", years: "2005–2007" }, { club: "Benfica", years: "2007–2010" },
    { club: "Real Madrid", years: "2010–2014" }, { club: "Manchester United", years: "2014–2015" },
    { club: "Paris Saint-Germain", years: "2015–2022" }, { club: "Juventus", years: "2022–2023" }, { club: "Benfica", years: "2023–present" }
  ]},
  { name: "Luis Suárez", aliases: ["Luis Suarez", "Suarez"], nation: "🇺🇾 Uruguay", region: "South America (CONMEBOL)", pos: "Forward", career: [
    { club: "Nacional", years: "2005–2006" }, { club: "Groningen", years: "2006–2007" }, { club: "Ajax", years: "2007–2011" },
    { club: "Liverpool", years: "2011–2014" }, { club: "Barcelona", years: "2014–2020" }, { club: "Atlético Madrid", years: "2020–2022" },
    { club: "Nacional", years: "2022" }, { club: "Grêmio", years: "2023" }, { club: "Inter Miami", years: "2024–present" }
  ]},
  { name: "Thierry Henry", nation: "🇫🇷 France", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Monaco", years: "1994–1999" }, { club: "Juventus", years: "1999" }, { club: "Arsenal", years: "1999–2007" },
    { club: "Barcelona", years: "2007–2010" }, { club: "New York Red Bulls", years: "2010–2014" }, { club: "Arsenal", years: "2012", loan: true }
  ]},
  { name: "Zinedine Zidane", nation: "🇫🇷 France", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "Cannes", years: "1989–1992" }, { club: "Bordeaux", years: "1992–1996" }, { club: "Juventus", years: "1996–2001" }, { club: "Real Madrid", years: "2001–2006" }
  ]},
  { name: "Ronaldinho", nation: "🇧🇷 Brazil", region: "South America (CONMEBOL)", pos: "Forward / Midfielder", career: [
    { club: "Grêmio", years: "1998–2001" }, { club: "Paris Saint-Germain", years: "2001–2003" }, { club: "Barcelona", years: "2003–2008" },
    { club: "AC Milan", years: "2008–2011" }, { club: "Flamengo", years: "2011–2012" }, { club: "Atlético Mineiro", years: "2012–2014" },
    { club: "Querétaro", years: "2014–2015" }, { club: "Fluminense", years: "2015" }
  ]},
  { name: "Ronaldo Nazário", aliases: ["Ronaldo", "R9"], nation: "🇧🇷 Brazil", region: "South America (CONMEBOL)", pos: "Forward", career: [
    { club: "Cruzeiro", years: "1993–1994" }, { club: "PSV Eindhoven", years: "1994–1996" }, { club: "Barcelona", years: "1996–1997" },
    { club: "Inter Milan", years: "1997–2002" }, { club: "Real Madrid", years: "2002–2007" }, { club: "AC Milan", years: "2007–2008" }, { club: "Corinthians", years: "2009–2011" }
  ]},
  { name: "David Beckham", nation: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "Manchester United", years: "1992–2003" }, { club: "Preston North End", years: "1994–1995", loan: true },
    { club: "Real Madrid", years: "2003–2007" }, { club: "LA Galaxy", years: "2007–2012" },
    { club: "AC Milan", years: "2009, 2010", loan: true }, { club: "Paris Saint-Germain", years: "2013" }
  ]},
  { name: "Andrea Pirlo", nation: "🇮🇹 Italy", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "Brescia", years: "1995–1998" }, { club: "Inter Milan", years: "1998–2001" }, { club: "Reggina", years: "1999–2000", loan: true },
    { club: "Brescia", years: "2001", loan: true }, { club: "AC Milan", years: "2001–2011" },
    { club: "Juventus", years: "2011–2015" }, { club: "New York City FC", years: "2015–2017" }
  ]},
  { name: "Didier Drogba", nation: "🇨🇮 Ivory Coast", region: "Africa (CAF)", pos: "Forward", career: [
    { club: "Le Mans", years: "1998–2002" }, { club: "Guingamp", years: "2002–2003" }, { club: "Marseille", years: "2003–2004" },
    { club: "Chelsea", years: "2004–2012" }, { club: "Shanghai Shenhua", years: "2012" }, { club: "Galatasaray", years: "2013–2014" },
    { club: "Chelsea", years: "2014–2015" }, { club: "Montreal Impact", years: "2015–2016" }, { club: "Phoenix Rising", years: "2017–2018" }
  ]},
  { name: "Samuel Eto'o", aliases: ["Samuel Etoo"], nation: "🇨🇲 Cameroon", region: "Africa (CAF)", pos: "Forward", career: [
    { club: "Real Madrid", years: "1997–2000" }, { club: "Leganés", years: "1997–1998", loan: true }, { club: "Mallorca", years: "2000–2004" },
    { club: "Barcelona", years: "2004–2009" }, { club: "Inter Milan", years: "2009–2011" }, { club: "Anzhi Makhachkala", years: "2011–2013" },
    { club: "Chelsea", years: "2013–2014" }, { club: "Everton", years: "2014–2015" }, { club: "Sampdoria", years: "2015" }
  ]},
  { name: "Arjen Robben", nation: "🇳🇱 Netherlands", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Groningen", years: "2000–2002" }, { club: "PSV Eindhoven", years: "2002–2004" }, { club: "Chelsea", years: "2004–2007" },
    { club: "Real Madrid", years: "2007–2009" }, { club: "Bayern Munich", years: "2009–2019" }, { club: "Groningen", years: "2020–2021" }
  ]},
  { name: "Mesut Özil", aliases: ["Mesut Ozil", "Ozil"], nation: "🇩🇪 Germany", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "Schalke 04", years: "2006–2008" }, { club: "Werder Bremen", years: "2008–2010" }, { club: "Real Madrid", years: "2010–2013" },
    { club: "Arsenal", years: "2013–2021" }, { club: "Fenerbahçe", years: "2021–2022" }, { club: "İstanbul Başakşehir", years: "2022–2023" }
  ]},
  { name: "Toni Kroos", nation: "🇩🇪 Germany", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "Bayern Munich", years: "2007–2014" }, { club: "Bayer Leverkusen", years: "2009–2010", loan: true }, { club: "Real Madrid", years: "2014–2024" }
  ]},
  { name: "Gareth Bale", nation: "🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Southampton", years: "2006–2007" }, { club: "Tottenham Hotspur", years: "2007–2013" },
    { club: "Real Madrid", years: "2013–2022" }, { club: "Tottenham Hotspur", years: "2020–2021", loan: true }, { club: "LAFC", years: "2022–2023" }
  ]},
  { name: "Eden Hazard", nation: "🇧🇪 Belgium", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Lille", years: "2007–2012" }, { club: "Chelsea", years: "2012–2019" }, { club: "Real Madrid", years: "2019–2023" }
  ]},
  { name: "Antoine Griezmann", nation: "🇫🇷 France", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Real Sociedad", years: "2009–2014" }, { club: "Atlético Madrid", years: "2014–2019" },
    { club: "Barcelona", years: "2019–2022" }, { club: "Atlético Madrid", years: "2021–present" }
  ]},
  { name: "Ousmane Dembélé", aliases: ["Ousmane Dembele", "Dembele"], nation: "🇫🇷 France", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Rennes", years: "2015–2016" }, { club: "Borussia Dortmund", years: "2016–2017" },
    { club: "Barcelona", years: "2017–2023" }, { club: "Paris Saint-Germain", years: "2023–present" }
  ]},
  { name: "Rodri", nation: "🇪🇸 Spain", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "Villarreal", years: "2015–2018" }, { club: "Atlético Madrid", years: "2018–2019" }, { club: "Manchester City", years: "2019–present" }
  ]},
  { name: "Declan Rice", nation: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "West Ham United", years: "2017–2023" }, { club: "Arsenal", years: "2023–present" }
  ]},
  { name: "Cole Palmer", nation: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", region: "Europe (UEFA)", pos: "Midfielder / Forward", career: [
    { club: "Manchester City", years: "2020–2023" }, { club: "Chelsea", years: "2023–present" }
  ]},
  { name: "Florian Wirtz", nation: "🇩🇪 Germany", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "Bayer Leverkusen", years: "2020–2025" }
  ]},
  { name: "Jamal Musiala", nation: "🇩🇪 Germany", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "Bayern Munich", years: "2020–present" }
  ]},
  { name: "Raphinha", nation: "🇧🇷 Brazil", region: "South America (CONMEBOL)", pos: "Forward", career: [
    { club: "Avaí", years: "2015–2016" }, { club: "Vitória de Guimarães", years: "2016–2018" },
    { club: "Sporting CP", years: "2018–2019" }, { club: "Rennes", years: "2019–2020" },
    { club: "Leeds United", years: "2020–2022" }, { club: "Barcelona", years: "2022–present" }
  ]},
  { name: "Vinícius Júnior", aliases: ["Vinicius Junior", "Vini Jr"], nation: "🇧🇷 Brazil", region: "South America (CONMEBOL)", pos: "Forward", career: [
    { club: "Flamengo", years: "2017–2018" }, { club: "Real Madrid", years: "2018–present" }
  ]},
  { name: "Julián Álvarez", aliases: ["Julian Alvarez", "Alvarez"], nation: "🇦🇷 Argentina", region: "South America (CONMEBOL)", pos: "Forward", career: [
    { club: "River Plate", years: "2018–2022" }, { club: "Manchester City", years: "2022–2024" }, { club: "Atlético Madrid", years: "2024–present" }
  ]},
  { name: "Lautaro Martínez", aliases: ["Lautaro Martinez"], nation: "🇦🇷 Argentina", region: "South America (CONMEBOL)", pos: "Forward", career: [
    { club: "Racing Club", years: "2015–2018" }, { club: "Inter Milan", years: "2018–present" }
  ]},
  { name: "Alexis Mac Allister", nation: "🇦🇷 Argentina", region: "South America (CONMEBOL)", pos: "Midfielder", career: [
    { club: "Argentinos Juniors", years: "2016–2019" }, { club: "Brighton & Hove Albion", years: "2019–2023" },
    { club: "Boca Juniors", years: "2019–2020", loan: true }, { club: "Liverpool", years: "2023–present" }
  ]},
  { name: "Emiliano Martínez", aliases: ["Emiliano Martinez", "Dibu Martinez"], nation: "🇦🇷 Argentina", region: "South America (CONMEBOL)", pos: "Goalkeeper", career: [
    { club: "Arsenal", years: "2012–2020" }, { club: "Sheffield Wednesday", years: "2013–2014", loan: true },
    { club: "Wolverhampton Wanderers", years: "2015–2016", loan: true }, { club: "Getafe", years: "2017–2018", loan: true },
    { club: "Reading", years: "2019", loan: true }, { club: "Aston Villa", years: "2020–present" }
  ]},
  { name: "Alisson Becker", aliases: ["Alisson"], nation: "🇧🇷 Brazil", region: "South America (CONMEBOL)", pos: "Goalkeeper", career: [
    { club: "Internacional", years: "2013–2016" }, { club: "Roma", years: "2016–2018" }, { club: "Liverpool", years: "2018–present" }
  ]},
  { name: "Thibaut Courtois", nation: "🇧🇪 Belgium", region: "Europe (UEFA)", pos: "Goalkeeper", career: [
    { club: "Genk", years: "2009–2011" }, { club: "Chelsea", years: "2011–2018" },
    { club: "Atlético Madrid", years: "2011–2014", loan: true }, { club: "Real Madrid", years: "2018–present" }
  ]},
  { name: "Gianluigi Buffon", nation: "🇮🇹 Italy", region: "Europe (UEFA)", pos: "Goalkeeper", career: [
    { club: "Parma", years: "1995–2001" }, { club: "Juventus", years: "2001–2018" },
    { club: "Paris Saint-Germain", years: "2018–2019" }, { club: "Juventus", years: "2019–2021" }, { club: "Parma", years: "2021–2023" }
  ]},
  { name: "Gianluigi Donnarumma", nation: "🇮🇹 Italy", region: "Europe (UEFA)", pos: "Goalkeeper", career: [
    { club: "AC Milan", years: "2015–2021" }, { club: "Paris Saint-Germain", years: "2021–present" }
  ]},
  { name: "Manuel Neuer", nation: "🇩🇪 Germany", region: "Europe (UEFA)", pos: "Goalkeeper", career: [
    { club: "Schalke 04", years: "2005–2011" }, { club: "Bayern Munich", years: "2011–present" }
  ]},
  { name: "Sergio Ramos", nation: "🇪🇸 Spain", region: "Europe (UEFA)", pos: "Defender", career: [
    { club: "Sevilla", years: "2004–2005" }, { club: "Real Madrid", years: "2005–2021" },
    { club: "Paris Saint-Germain", years: "2021–2023" }, { club: "Sevilla", years: "2023–2024" }, { club: "Monterrey", years: "2025–present" }
  ]},
  { name: "Gerard Piqué", aliases: ["Gerard Pique", "Pique"], nation: "🇪🇸 Spain", region: "Europe (UEFA)", pos: "Defender", career: [
    { club: "Manchester United", years: "2004–2008" }, { club: "Real Zaragoza", years: "2006–2007", loan: true }, { club: "Barcelona", years: "2008–2022" }
  ]},
  { name: "Pepe", nation: "🇵🇹 Portugal", region: "Europe (UEFA)", pos: "Defender", career: [
    { club: "Marítimo", years: "2002–2004" }, { club: "Porto", years: "2004–2007" }, { club: "Real Madrid", years: "2007–2017" },
    { club: "Beşiktaş", years: "2017–2018" }, { club: "Porto", years: "2019–2024" }
  ]},
  { name: "Rúben Dias", aliases: ["Ruben Dias"], nation: "🇵🇹 Portugal", region: "Europe (UEFA)", pos: "Defender", career: [
    { club: "Benfica", years: "2017–2020" }, { club: "Manchester City", years: "2020–present" }
  ]},
  { name: "Bernardo Silva", nation: "🇵🇹 Portugal", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "Benfica", years: "2013–2015" }, { club: "Monaco", years: "2014–2017" }, { club: "Manchester City", years: "2017–present" }
  ]},
  { name: "Rafael Leão", aliases: ["Rafael Leao"], nation: "🇵🇹 Portugal", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Sporting CP", years: "2017–2018" }, { club: "Lille", years: "2018–2019" }, { club: "AC Milan", years: "2019–present" }
  ]},
  { name: "João Félix", aliases: ["Joao Felix"], nation: "🇵🇹 Portugal", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Benfica", years: "2018–2019" }, { club: "Atlético Madrid", years: "2019–2024" },
    { club: "Chelsea", years: "2023", loan: true }, { club: "Barcelona", years: "2023–2024", loan: true },
    { club: "Chelsea", years: "2024–present" }, { club: "AC Milan", years: "2025", loan: true }
  ]},
  { name: "João Cancelo", aliases: ["Joao Cancelo"], nation: "🇵🇹 Portugal", region: "Europe (UEFA)", pos: "Defender", career: [
    { club: "Benfica", years: "2014–2015" }, { club: "Valencia", years: "2014–2018" }, { club: "Inter Milan", years: "2017–2018", loan: true },
    { club: "Juventus", years: "2018–2019" }, { club: "Manchester City", years: "2019–2024" },
    { club: "Bayern Munich", years: "2023", loan: true }, { club: "Barcelona", years: "2023–2024", loan: true }, { club: "Al-Hilal", years: "2024–present" }
  ]},
  { name: "Victor Osimhen", nation: "🇳🇬 Nigeria", region: "Africa (CAF)", pos: "Forward", career: [
    { club: "VfL Wolfsburg", years: "2017–2019" }, { club: "Charleroi", years: "2018–2019", loan: true },
    { club: "Lille", years: "2019–2020" }, { club: "Napoli", years: "2020–present" }, { club: "Galatasaray", years: "2024–2025", loan: true }
  ]},
  { name: "Khvicha Kvaratskhelia", nation: "🇬🇪 Georgia", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Dinamo Tbilisi", years: "2017–2018" }, { club: "Rustavi", years: "2018–2019" },
    { club: "Lokomotiv Moscow", years: "2019", loan: true }, { club: "Rubin Kazan", years: "2019–2022" },
    { club: "Dinamo Batumi", years: "2022" }, { club: "Napoli", years: "2022–2025" }, { club: "Paris Saint-Germain", years: "2025–present" }
  ]},
  { name: "William Saliba", nation: "🇫🇷 France", region: "Europe (UEFA)", pos: "Defender", career: [
    { club: "Saint-Étienne", years: "2018–2019" }, { club: "Arsenal", years: "2019–present" },
    { club: "Saint-Étienne", years: "2019–2020", loan: true }, { club: "Nice", years: "2021", loan: true }, { club: "Marseille", years: "2021–2022", loan: true }
  ]},
  { name: "Paul Pogba", nation: "🇫🇷 France", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "Manchester United", years: "2011–2012" }, { club: "Juventus", years: "2012–2016" },
    { club: "Manchester United", years: "2016–2022" }, { club: "Juventus", years: "2022–2024" }
  ]},
  { name: "Olivier Giroud", nation: "🇫🇷 France", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Grenoble", years: "2005–2008" }, { club: "Tours", years: "2008–2010" }, { club: "Montpellier", years: "2010–2012" },
    { club: "Arsenal", years: "2012–2018" }, { club: "Chelsea", years: "2018–2021" }, { club: "AC Milan", years: "2021–2024" }, { club: "LAFC", years: "2024–present" }
  ]},
  { name: "Cesc Fàbregas", aliases: ["Cesc Fabregas", "Fabregas"], nation: "🇪🇸 Spain", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "Arsenal", years: "2003–2011" }, { club: "Barcelona", years: "2011–2014" }, { club: "Chelsea", years: "2014–2019" },
    { club: "Monaco", years: "2019–2022" }, { club: "Como", years: "2022–2023" }
  ]},
  { name: "Xabi Alonso", nation: "🇪🇸 Spain", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "Real Sociedad", years: "1999–2004" }, { club: "Eibar", years: "2000–2001", loan: true },
    { club: "Liverpool", years: "2004–2009" }, { club: "Real Madrid", years: "2009–2014" }, { club: "Bayern Munich", years: "2014–2017" }
  ]},
  { name: "Fernando Torres", nation: "🇪🇸 Spain", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Atlético Madrid", years: "2001–2007" }, { club: "Liverpool", years: "2007–2011" }, { club: "Chelsea", years: "2011–2015" },
    { club: "AC Milan", years: "2014–2015", loan: true }, { club: "Atlético Madrid", years: "2015–2018" }, { club: "Sagan Tosu", years: "2018–2019" }
  ]},
  { name: "Álvaro Morata", aliases: ["Alvaro Morata", "Morata"], nation: "🇪🇸 Spain", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Real Madrid", years: "2010–2014" }, { club: "Juventus", years: "2014–2016" }, { club: "Real Madrid", years: "2016–2017" },
    { club: "Chelsea", years: "2017–2020" }, { club: "Atlético Madrid", years: "2019–2024" },
    { club: "Juventus", years: "2020–2022", loan: true }, { club: "AC Milan", years: "2024–2025" }, { club: "Galatasaray", years: "2025", loan: true }
  ]},
  { name: "Thiago Silva", nation: "🇧🇷 Brazil", region: "South America (CONMEBOL)", pos: "Defender", career: [
    { club: "Juventude", years: "2004" }, { club: "Fluminense", years: "2006–2008" }, { club: "AC Milan", years: "2009–2012" },
    { club: "Paris Saint-Germain", years: "2012–2020" }, { club: "Chelsea", years: "2020–2024" }, { club: "Fluminense", years: "2024–present" }
  ]},
  { name: "Casemiro", nation: "🇧🇷 Brazil", region: "South America (CONMEBOL)", pos: "Midfielder", career: [
    { club: "São Paulo", years: "2010–2013" }, { club: "Real Madrid", years: "2013–2022" },
    { club: "Porto", years: "2014–2015", loan: true }, { club: "Manchester United", years: "2022–present" }
  ]},
  { name: "Philippe Coutinho", nation: "🇧🇷 Brazil", region: "South America (CONMEBOL)", pos: "Midfielder", career: [
    { club: "Inter Milan", years: "2008–2013" }, { club: "Vasco da Gama", years: "2008–2010", loan: true },
    { club: "Espanyol", years: "2012", loan: true }, { club: "Liverpool", years: "2013–2018" },
    { club: "Barcelona", years: "2018–2022" }, { club: "Bayern Munich", years: "2019–2020", loan: true },
    { club: "Aston Villa", years: "2022–present" }, { club: "Al-Duhail", years: "2023–2024", loan: true }
  ]},
  { name: "Sergio Agüero", aliases: ["Sergio Aguero", "Aguero"], nation: "🇦🇷 Argentina", region: "South America (CONMEBOL)", pos: "Forward", career: [
    { club: "Independiente", years: "2003–2006" }, { club: "Atlético Madrid", years: "2006–2011" },
    { club: "Manchester City", years: "2011–2021" }, { club: "Barcelona", years: "2021" }
  ]},
  { name: "Carlos Tevez", nation: "🇦🇷 Argentina", region: "South America (CONMEBOL)", pos: "Forward", career: [
    { club: "Boca Juniors", years: "2001–2004" }, { club: "Corinthians", years: "2005–2006" }, { club: "West Ham United", years: "2006–2007" },
    { club: "Manchester United", years: "2007–2009" }, { club: "Manchester City", years: "2009–2013" },
    { club: "Juventus", years: "2013–2015" }, { club: "Boca Juniors", years: "2015–2016, 2018–2021" }, { club: "Shanghai Shenhua", years: "2017" }
  ]},
  { name: "Edinson Cavani", nation: "🇺🇾 Uruguay", region: "South America (CONMEBOL)", pos: "Forward", career: [
    { club: "Danubio", years: "2005–2007" }, { club: "Palermo", years: "2007–2011" }, { club: "Napoli", years: "2010–2013" },
    { club: "Paris Saint-Germain", years: "2013–2020" }, { club: "Manchester United", years: "2020–2022" },
    { club: "Valencia", years: "2022–2023" }, { club: "Boca Juniors", years: "2023–present" }
  ]},
  { name: "Alexis Sánchez", aliases: ["Alexis Sanchez"], nation: "🇨🇱 Chile", region: "South America (CONMEBOL)", pos: "Forward", career: [
    { club: "Cobreloa", years: "2005–2006" }, { club: "Udinese", years: "2006–2011" }, { club: "Colo-Colo", years: "2006–2007", loan: true },
    { club: "River Plate", years: "2007–2008", loan: true }, { club: "Barcelona", years: "2011–2014" },
    { club: "Arsenal", years: "2014–2018" }, { club: "Manchester United", years: "2018–2020" },
    { club: "Inter Milan", years: "2019–2022" }, { club: "Marseille", years: "2022–2023" }, { club: "Udinese", years: "2024–present" }
  ]},
  { name: "James Rodríguez", aliases: ["James Rodriguez"], nation: "🇨🇴 Colombia", region: "South America (CONMEBOL)", pos: "Midfielder", career: [
    { club: "Envigado", years: "2006–2008" }, { club: "Banfield", years: "2008–2010" }, { club: "Porto", years: "2010–2013" },
    { club: "Monaco", years: "2013–2014" }, { club: "Real Madrid", years: "2014–2020" }, { club: "Bayern Munich", years: "2017–2019", loan: true },
    { club: "Everton", years: "2020–2021" }, { club: "Al-Rayyan", years: "2021–2022" }, { club: "Olympiacos", years: "2022–2023" },
    { club: "São Paulo", years: "2023–2024" }, { club: "Rayo Vallecano", years: "2024" }
  ]},
  { name: "Christian Pulisic", nation: "🇺🇸 United States", region: "North America (CONCACAF)", pos: "Forward", career: [
    { club: "Borussia Dortmund", years: "2016–2019" }, { club: "Chelsea", years: "2019–2023" }, { club: "AC Milan", years: "2023–present" }
  ]},
  { name: "Alphonso Davies", nation: "🇨🇦 Canada", region: "North America (CONCACAF)", pos: "Defender", career: [
    { club: "Vancouver Whitecaps", years: "2016–2018" }, { club: "Bayern Munich", years: "2019–present" }
  ]},
  { name: "Kaoru Mitoma", nation: "🇯🇵 Japan", region: "Asia (AFC)", pos: "Forward", career: [
    { club: "Kawasaki Frontale", years: "2020–2021" }, { club: "Brighton & Hove Albion", years: "2021–present" }, { club: "Union SG", years: "2021–2022", loan: true }
  ]},
  { name: "Pierre-Emerick Aubameyang", aliases: ["Aubameyang"], nation: "🇬🇦 Gabon", region: "Africa (CAF)", pos: "Forward", career: [
    { club: "AC Milan", years: "2008–2011" }, { club: "Dijon", years: "2008–2009", loan: true }, { club: "Lille", years: "2009–2010", loan: true },
    { club: "Monaco", years: "2010–2011", loan: true }, { club: "Saint-Étienne", years: "2011–2013" },
    { club: "Borussia Dortmund", years: "2013–2018" }, { club: "Arsenal", years: "2018–2022" },
    { club: "Barcelona", years: "2022" }, { club: "Chelsea", years: "2022–2023" }, { club: "Marseille", years: "2023–2024" }, { club: "Al-Qadsiah", years: "2024–present" }
  ]},
  { name: "Yaya Touré", aliases: ["Yaya Toure"], nation: "🇨🇮 Ivory Coast", region: "Africa (CAF)", pos: "Midfielder", career: [
    { club: "Beveren", years: "2001–2003" }, { club: "Metalurh Donetsk", years: "2003–2005" }, { club: "Olympiacos", years: "2005–2006" },
    { club: "Monaco", years: "2006–2007" }, { club: "Barcelona", years: "2007–2010" }, { club: "Manchester City", years: "2010–2018" }, { club: "Olympiacos", years: "2018" }
  ]},
  { name: "Emil Forsberg", nation: "🇸🇪 Sweden", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "GIF Sundsvall", years: "2009–2012" }, { club: "Malmö FF", years: "2013–2014" },
    { club: "RB Leipzig", years: "2015–2023" }, { club: "New York Red Bulls", years: "2024–present" }
  ]},
  { name: "Victor Lindelöf", aliases: ["Victor Lindelof"], nation: "🇸🇪 Sweden", region: "Europe (UEFA)", pos: "Defender", career: [
    { club: "Västerås SK", years: "2009–2012" }, { club: "Benfica", years: "2012–2017" }, { club: "Manchester United", years: "2017–2025" }
  ]},
  { name: "Fredrik Ljungberg", aliases: ["Freddie Ljungberg"], nation: "🇸🇪 Sweden", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "Halmstads BK", years: "1994–1998" }, { club: "Arsenal", years: "1998–2007" }, { club: "West Ham United", years: "2007–2008" },
    { club: "Seattle Sounders", years: "2009–2010" }, { club: "Chicago Fire", years: "2010" }, { club: "Celtic", years: "2011" }
  ]},
  { name: "Christian Eriksen", nation: "🇩🇰 Denmark", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "Ajax", years: "2010–2013" }, { club: "Tottenham Hotspur", years: "2013–2020" }, { club: "Inter Milan", years: "2020–2021" },
    { club: "Brentford", years: "2022" }, { club: "Manchester United", years: "2022–2025" }
  ]},
  { name: "Rasmus Højlund", aliases: ["Rasmus Hojlund"], nation: "🇩🇰 Denmark", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Copenhagen", years: "2020–2022" }, { club: "Sturm Graz", years: "2022" }, { club: "Atalanta", years: "2022–2023" }, { club: "Manchester United", years: "2023–present" }
  ]},
  { name: "İlkay Gündoğan", aliases: ["Ilkay Gundogan", "Gundogan"], nation: "🇩🇪 Germany", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "1. FC Nürnberg", years: "2009–2011" }, { club: "Borussia Dortmund", years: "2011–2016" },
    { club: "Manchester City", years: "2016–2023" }, { club: "Barcelona", years: "2023–2024" }, { club: "Manchester City", years: "2024–present" }
  ]},
  { name: "Antonio Rüdiger", aliases: ["Antonio Rudiger"], nation: "🇩🇪 Germany", region: "Europe (UEFA)", pos: "Defender", career: [
    { club: "VfB Stuttgart", years: "2012–2015" }, { club: "Roma", years: "2015–2017" }, { club: "Chelsea", years: "2017–2022" }, { club: "Real Madrid", years: "2022–present" }
  ]},
  { name: "Kai Havertz", nation: "🇩🇪 Germany", region: "Europe (UEFA)", pos: "Forward / Midfielder", career: [
    { club: "Bayer Leverkusen", years: "2016–2020" }, { club: "Chelsea", years: "2020–2023" }, { club: "Arsenal", years: "2023–present" }
  ]},
  { name: "Frenkie de Jong", nation: "🇳🇱 Netherlands", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "Willem II", years: "2015" }, { club: "Ajax", years: "2016–2019" }, { club: "Barcelona", years: "2019–present" }
  ]},
  { name: "Matthijs de Ligt", nation: "🇳🇱 Netherlands", region: "Europe (UEFA)", pos: "Defender", career: [
    { club: "Ajax", years: "2016–2019" }, { club: "Juventus", years: "2019–2022" }, { club: "Bayern Munich", years: "2022–2024" }, { club: "Manchester United", years: "2024–present" }
  ]},
  { name: "Cody Gakpo", nation: "🇳🇱 Netherlands", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "PSV Eindhoven", years: "2018–2022" }, { club: "Liverpool", years: "2023–present" }
  ]},
  { name: "Memphis Depay", nation: "🇳🇱 Netherlands", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "PSV Eindhoven", years: "2011–2015" }, { club: "Manchester United", years: "2015–2017" }, { club: "Lyon", years: "2017–2021" },
    { club: "Barcelona", years: "2021–2023" }, { club: "Atlético Madrid", years: "2023–2024" }, { club: "Corinthians", years: "2024–present" }
  ]},
  { name: "Robin van Persie", nation: "🇳🇱 Netherlands", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Feyenoord", years: "2001–2004" }, { club: "Arsenal", years: "2004–2012" }, { club: "Manchester United", years: "2012–2015" },
    { club: "Fenerbahçe", years: "2015–2018" }, { club: "Feyenoord", years: "2018–2019" }
  ]},
  { name: "Wesley Sneijder", nation: "🇳🇱 Netherlands", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "Ajax", years: "2002–2007" }, { club: "Real Madrid", years: "2007–2009" }, { club: "Inter Milan", years: "2009–2013" },
    { club: "Galatasaray", years: "2013–2017" }, { club: "Nice", years: "2017" }, { club: "Al-Gharafa", years: "2018–2019" }
  ]},
  { name: "Wayne Rooney", nation: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Everton", years: "2002–2004" }, { club: "Manchester United", years: "2004–2017" }, { club: "Everton", years: "2017–2018" },
    { club: "D.C. United", years: "2018–2019" }, { club: "Derby County", years: "2020–2021" }
  ]},
  { name: "Raheem Sterling", nation: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Liverpool", years: "2012–2015" }, { club: "Manchester City", years: "2015–2022" }, { club: "Chelsea", years: "2022–present" }, { club: "Arsenal", years: "2024–2025", loan: true }
  ]},
  { name: "Jamie Vardy", nation: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Stocksbridge Park Steels", years: "2007–2010" }, { club: "FC Halifax Town", years: "2010–2011" },
    { club: "Fleetwood Town", years: "2011–2012" }, { club: "Leicester City", years: "2012–2025" }
  ]},
  { name: "Marcus Rashford", nation: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Manchester United", years: "2016–present" }, { club: "Aston Villa", years: "2025", loan: true }
  ]},
  { name: "Jadon Sancho", nation: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Borussia Dortmund", years: "2017–2021" }, { club: "Manchester United", years: "2021–present" },
    { club: "Borussia Dortmund", years: "2024", loan: true }, { club: "Chelsea", years: "2024–2025", loan: true }
  ]},
  { name: "Kaká", aliases: ["Kaka"], nation: "🇧🇷 Brazil", region: "South America (CONMEBOL)", pos: "Midfielder", career: [
    { club: "São Paulo", years: "2001–2003" }, { club: "AC Milan", years: "2003–2009" }, { club: "Real Madrid", years: "2009–2013" },
    { club: "AC Milan", years: "2013–2014" }, { club: "Orlando City", years: "2014–2017" }, { club: "São Paulo", years: "2014", loan: true }
  ]},
  { name: "Andriy Shevchenko", nation: "🇺🇦 Ukraine", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Dynamo Kyiv", years: "1994–1999" }, { club: "AC Milan", years: "1999–2006" }, { club: "Chelsea", years: "2006–2009" },
    { club: "AC Milan", years: "2008–2009", loan: true }, { club: "Dynamo Kyiv", years: "2009–2012" }
  ]},
  { name: "Luís Figo", aliases: ["Luis Figo", "Figo"], nation: "🇵🇹 Portugal", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "Sporting CP", years: "1989–1995" }, { club: "Barcelona", years: "1995–2000" }, { club: "Real Madrid", years: "2000–2005" }, { club: "Inter Milan", years: "2005–2009" }
  ]},
  { name: "Mario Balotelli", nation: "🇮🇹 Italy", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Lumezzane", years: "2006" }, { club: "Inter Milan", years: "2007–2010" }, { club: "Manchester City", years: "2010–2013" },
    { club: "AC Milan", years: "2013–2014" }, { club: "Liverpool", years: "2014–2016" }, { club: "Nice", years: "2016–2019" },
    { club: "Marseille", years: "2019" }, { club: "Brescia", years: "2019–2020" }, { club: "Adana Demirspor", years: "2021–2022, 2023–2024" }
  ]},
  { name: "Nicolò Barella", aliases: ["Nicolo Barella"], nation: "🇮🇹 Italy", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "Cagliari", years: "2015–2020" }, { club: "Como", years: "2016", loan: true }, { club: "Inter Milan", years: "2019–present" }
  ]},
  { name: "Federico Chiesa", nation: "🇮🇹 Italy", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Fiorentina", years: "2016–2022" }, { club: "Juventus", years: "2020–2024" }, { club: "Liverpool", years: "2024–present" }
  ]},
  { name: "Edin Džeko", aliases: ["Edin Dzeko", "Dzeko"], nation: "🇧🇦 Bosnia & Herzegovina", region: "Europe (UEFA)", pos: "Forward", career: [
    { club: "Željezničar", years: "2003–2005" }, { club: "Teplice", years: "2005–2007" }, { club: "VfL Wolfsburg", years: "2007–2011" },
    { club: "Manchester City", years: "2011–2016" }, { club: "Roma", years: "2015–2021" }, { club: "Inter Milan", years: "2021–2023" }, { club: "Fenerbahçe", years: "2023–present" }
  ]},
  { name: "Ivan Rakitić", aliases: ["Ivan Rakitic"], nation: "🇭🇷 Croatia", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "Basel", years: "2005–2007" }, { club: "Schalke 04", years: "2007–2011" }, { club: "Sevilla", years: "2011–2014" },
    { club: "Barcelona", years: "2014–2020" }, { club: "Sevilla", years: "2020–2024" }, { club: "Al-Shabab", years: "2024" }, { club: "Hajduk Split", years: "2024–present" }
  ]},
  { name: "Joško Gvardiol", aliases: ["Josko Gvardiol"], nation: "🇭🇷 Croatia", region: "Europe (UEFA)", pos: "Defender", career: [
    { club: "Dinamo Zagreb", years: "2019–2021" }, { club: "RB Leipzig", years: "2021–2023" }, { club: "Manchester City", years: "2023–present" }
  ]},
  { name: "Mateo Kovačić", aliases: ["Mateo Kovacic"], nation: "🇭🇷 Croatia", region: "Europe (UEFA)", pos: "Midfielder", career: [
    { club: "Dinamo Zagreb", years: "2010–2013" }, { club: "Inter Milan", years: "2013–2015" }, { club: "Real Madrid", years: "2015–2019" },
    { club: "Chelsea", years: "2018–2023" }, { club: "Manchester City", years: "2023–present" }
  ]},
  { name: "Diego Forlán", aliases: ["Diego Forlan"], nation: "🇺🇾 Uruguay", region: "South America (CONMEBOL)", pos: "Forward", career: [
    { club: "Independiente", years: "1998–2002" }, { club: "Manchester United", years: "2002–2004" }, { club: "Villarreal", years: "2004–2007" },
    { club: "Atlético Madrid", years: "2007–2011" }, { club: "Inter Milan", years: "2011–2012" }, { club: "Internacional", years: "2012–2013" }
  ]},
  { name: "Radamel Falcao", nation: "🇨🇴 Colombia", region: "South America (CONMEBOL)", pos: "Forward", career: [
    { club: "River Plate", years: "2005–2009" }, { club: "Porto", years: "2009–2011" }, { club: "Atlético Madrid", years: "2011–2013" },
    { club: "Monaco", years: "2013–2019" }, { club: "Manchester United", years: "2014–2015", loan: true }, { club: "Chelsea", years: "2015–2016", loan: true },
    { club: "Galatasaray", years: "2019–2021" }, { club: "Rayo Vallecano", years: "2021–2024" }
  ]},
  { name: "Luis Díaz", aliases: ["Luis Diaz"], nation: "🇨🇴 Colombia", region: "South America (CONMEBOL)", pos: "Forward", career: [
    { club: "Barranquilla", years: "2016–2017" }, { club: "Junior", years: "2017–2019" }, { club: "Porto", years: "2019–2022" }, { club: "Liverpool", years: "2022–present" }
  ]},
  { name: "Federico Valverde", nation: "🇺🇾 Uruguay", region: "South America (CONMEBOL)", pos: "Midfielder", career: [
    { club: "Peñarol", years: "2015–2016" }, { club: "Real Madrid", years: "2016–present" }, { club: "Deportivo La Coruña", years: "2017–2018", loan: true }
  ]},
  { name: "Darwin Núñez", aliases: ["Darwin Nunez"], nation: "🇺🇾 Uruguay", region: "South America (CONMEBOL)", pos: "Forward", career: [
    { club: "Peñarol", years: "2017–2019" }, { club: "Almería", years: "2019–2020" }, { club: "Benfica", years: "2020–2022" }, { club: "Liverpool", years: "2022–present" }
  ]},
  { name: "Hakim Ziyech", nation: "🇲🇦 Morocco", region: "Africa (CAF)", pos: "Midfielder / Forward", career: [
    { club: "Heerenveen", years: "2012–2014" }, { club: "Twente", years: "2014–2016" }, { club: "Ajax", years: "2016–2020" },
    { club: "Chelsea", years: "2020–2024" }, { club: "Galatasaray", years: "2023–2025" }
  ]},
  { name: "Moisés Caicedo", aliases: ["Moises Caicedo"], nation: "🇪🇨 Ecuador", region: "South America (CONMEBOL)", pos: "Midfielder", career: [
    { club: "Independiente del Valle", years: "2019–2021" }, { club: "Brighton & Hove Albion", years: "2021–2023" },
    { club: "Beerschot", years: "2021–2022", loan: true }, { club: "Chelsea", years: "2023–present" }
  ]}
];
