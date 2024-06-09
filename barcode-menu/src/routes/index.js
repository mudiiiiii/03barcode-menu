// 5xl3ay centennial survey
import React, {  useState, useEffect} from 'react'
import { Route, Routes , useLocation} from 'react-router-dom';
import Header from '../components/Header/Main';
import Footer from '../components/Footer/Main';
import Home from '../components/Home/Main';


function Index() {

    const [homepage, sethomepage] = useState(false)
      const location = useLocation();
      useEffect(() => {
        if (location.pathname === "/hometwo"){
          sethomepage(false)
        }else{
          sethomepage(true)
        }
      }, [location])
  
    const path = location.pathname
    useEffect(() => {
      window.scroll(0, 0)
  }, [path]);
  
    return (
      <>
        {homepage && <Header/>}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </>
    )
  }
  
  export default Index