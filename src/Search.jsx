import React from "react";
import Footer from './Components/Footer';




export default function Search() {

    const [randomImage, setRandomImage] = React.useState([]);

    async function getRandomImage() {
        try {
            const response = await fetch("https://source.unsplash.com/random");
            if (response.ok) {
                return response.url;
            } else {
                throw new Error(`Error: ${response.statusText}`);
            }
        } catch (error) {
            throw new Error(`Network error: ${error.message}`);
        }
    }

  


      React.useEffect(()=>{
        const fetchimg = async ()=>{
            const images = await Promise.all([...Array(5)].map(()=> getRandomImage()))
            setRandomImage(images)
        }
        fetchimg()
      },[])
      

    return(
        <>
            <Footer/>
            <div className="boxcontainer">
            {
                  

                    randomImage.map((img,index) => (
                        <div key = {index} className="box">
                            <img src ={img} alt={`Random Image ${index}`}/>
                        </div>
                    ))
                }
            </div>
        </>
    )
}