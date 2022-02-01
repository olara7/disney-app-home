import './App.css';

//components
import Navbar from './components/Navbar'
import MainSlider from './components/MainSlider';
import BrandContent from './components/BrandContent';
import ContentSlider from './components/ContentSlider';
import OriginalSlider from './components/OriginalSlider';
import RecommendedSlider from './components/RecommendedSlider';

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <MainSlider />
      <BrandContent />
      <h3> Trending </h3>
      <ContentSlider />
      <h3> Originals </h3>
      <OriginalSlider />
      <h3> Recommended </h3>
      <RecommendedSlider />
      <br />
      <br />
    </div>
  )
}

export default App;
