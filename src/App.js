import './App.css';
import Profile from './profile/Profile';
import profile from './Nahoua.jpg'

function App() {
    const fullName = 'Coulibaly Nahoua Aruna'
    const profession = 'Developpeur Full Stack SIG'
    const bio = <div> 
                  <p> Un développeur Full Stack SIG est un professionnel de la technologie qui possède une expertise en matière de développement de logiciels pour les systèmes d'information géographique (SIG). Il est capable de travailler sur toutes les couches d'une application web SIG, depuis la base de données jusqu'à l'interface utilisateur.</p>  
                  <p>En plus de maîtriser les langages de programmation tels que JavaScript, Python, HTML/CSS, et les frameworks comme React, Angular, Node.js, Flask, Django, il possède également une solide connaissance des outils SIG tels que QGIS, ArcGIS, Mapbox, OpenLayers, Leaflet, etc.</p> 
                  <p>Avec cette expertise, il peut concevoir, développer et déployer des applications SIG avancées, qui permettent aux utilisateurs de visualiser, d'analyser et de gérer les données géospatiales avec efficacité et précision. En bref, un développeur Full Stack SIG est un expert en programmation et en géomatique qui est capable de résoudre des problèmes complexes en utilisant des technologies innovantes.</p>
                </div>

    const handleName = e => {
      e.preventDefault();
      alert(fullName);
    }
    return (
    <div className="App">
      <Profile  profession={profession} bio={bio} handleName={handleName}> <img src={profile} alt='Nahoua.jpg'/> </Profile>
    </div>
    );

}

export default App;
