import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';
const App = () => {
  return (
    <div className="App">
      <Header
        title="선물하기"
        imageUrl="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png"
      />
      <div style={{ padding: '100px 0' }}>{/* Main content goes here */}</div>
      <Footer content="카카오톡 선물하기" />
    </div>
  );
};

export default App;
