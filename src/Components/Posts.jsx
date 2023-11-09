import {useState,useEffect, React} from "react";



/**
 * Renders a list of posts with randomly generated images and user information.
 *
 * @returns {JSX.Element} The Posts component.
 */
export default function Posts() {

    const posts = [
        {
            name: " ",
            username: "",
            location: "",
            avatar: '',
            post: '',
            comment: "just took a few mushrooms lol",
            likes: '',
            storypic: ''
        },
        {
            name: "",
            username: "",
            location: "",
            avatar: "",
            post: '',
            comment: "i'm feelin a bit stressed tbh",
            likes: '',
            storypic: ''
        },
            {
            name: "",
            username: "",
            location: "",
            avatar: "",
            post: '',
            comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
            likes: '',
            storypic: ''
        },
        {
          name: " ",
          username: "",
          location: "",
          avatar: '',
          post: '',
          comment: "just took a few mushrooms lol",
          likes: '',
          storypic: ''
      },
      {
          name: "",
          username: "",
          location: "",
          avatar: "",
          post: '',
          comment: "i'm feelin a bit stressed tbh",
          likes: '',
          storypic: ''
      },
          {
          name: "",
          username: "",
          location: "",
          avatar: "",
          post: '',
          comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
          likes: '',
          storypic: ''
      }
    ]

    const [updatedPosts, setUpdatedPosts] = useState([]);
  

    useEffect(() => {

      async function fetchRandomImages() {

        const updatedArrayOfObjects = await Promise.all(
          
          posts.map(async (obj) => {
            try {
              const randomImageUrl = await getRandomImage();
              const randomAvatarUrl = await getRandomAvatar();
              const randomLikes  = getRandomLikes();
              const user = await getRandomUser();
            

              const username = user.login.username;
              const location = user.location.city;
              const profilepic = user.picture.large;
           
              console.log("user", user);
              return { ...obj,location : location, name : username,  avatar : profilepic, post: randomImageUrl, likes: randomLikes, storypic: randomAvatarUrl };
            } catch (error) {
              console.error("Error fetching random image:", error);
              return obj;
            }
          })
        );
        setUpdatedPosts(updatedArrayOfObjects);
      }
  
      fetchRandomImages();
     

    }, []); // Empty dependency array ensures useEffect runs once after initial render
  
    async function getRandomUser(){
      try{
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
         return data.results[0];
      }catch(error){
        throw new Error("Error fetching random location: " + error.message);
      }

    }

    async function getRandomImage() {
      try {
        const response = await fetch("https://source.unsplash.com/random");
        if (response.ok) {
          const randomImageUrl = response.url;
      
          return randomImageUrl;
        } else {
          throw new Error(`Error: ${response.statusText}`);
        }
      } catch (error) {
        throw new Error(`Network error: ${error.message}`);
      }
    }

    async function getRandomAvatar() {
      try{
        const response = await fetch("https://source.unsplash.com/featured/?portrait");
        if(response.ok){
          const randomAvatarUrl = response.url;
          return randomAvatarUrl;
        }else{
          throw new Error(`Error: ${response.statusText}`)
        }
      }
      catch(erroe){
        throw new Error(`Network error: ${error.message}`);
      }
    }


    
    //     fetch('https://randomuser.me/api/')
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data)
    //   setUser[data];
    //   const randomLocation = data.results[0].location;
    //   console.log("Random Location: ", randomLocation);
    // })
    // .catch(error => console.error("Error fetching random location:", error));
    


    function getRandomLikes(){
      const randomLikes  = Math.floor(Math.random()*1000);
      return randomLikes;
    }
   
    return (
        <>
           {/* <div class="stories">
            <div class="stories-content">
         
              
                <div className="story">
                  <>
                  </>
                </div>
                <div className="story"></div>
                <div className="story"></div>
                <div className="story"></div>
                <div className="story"></div>
                <div className="story"></div>
            </div>
        </div> */}

                <div className="stories">
                    <div className="stories-content">
                    {updatedPosts.map(data => (
                        <div className="story">
                          <img src={data.storypic} alt="User Avatar" />
                        </div>
                    ))}
                    </div>
                </div>

            {updatedPosts.map(data => (
               
               <>
                  
                <div className="main" key={data.id}>
                    <div className="userinfo">
                        <div className="photo">
                            
                            <img src={data.avatar} alt="User Avatar" />
                        </div>
                        <div className="name">
                            <p><b>{data.name}</b></p>
                            <p>{data.location}</p>
                        </div>
                    </div>

                    <div className="userpost">
                        <img src= {data.post} alt="User Post" />
                    </div>
                    <div className="userlcs">
                        <img src="/icon-heart.png" alt="Heart Icon" />
                        <img src="/icon-comment.png" alt="Comment Icon" />
                        <img src="/icon-dm.png" alt="DM Icon" />
                    </div>
                    <div className="userlikescounts">
                        <p>{data.likes} likes</p>
                    </div>
                    <div className="usercaption">
                        <p>
                            <b>{data.username}</b>
                            {data.comment}
                        </p>
                    </div>
                </div>
                </>
            ))}
        </>
    );
}