import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import axios from "axios";

const Share = () => {
  const { currentUser } = useContext(AuthContext);

  const [postText, setPostText] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [location, setLocation] = useState(""); 
  const [tags, setTags] = useState(""); 
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    setPostText(e.target.value);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const sharePost = async () => {
    const formData = new FormData();
    formData.append("text", postText);
    formData.append("location", location);
    formData.append("tags", tags);
    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    try {
      await axios.post("http://localhost:5000/post/create", formData);
      setSuccessMessage("Post was successful!");

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);

      setPostText("");
      setSelectedFile(null);
      setLocation("");
      setTags("");
    } catch (err) {
      setSuccessMessage(err.response && err.response.data ? err.response.data.error : "Failed to create the post. Please try again!");
      console.error("Error creating post:", err);
  }
  };

  return (
    <div className="share">
      {successMessage && <div className="success-message">{successMessage}</div>}
      <div className="container">
        <div className="top">
          <img src={currentUser.profilePic} alt="" />
          <input
            type="text"
            placeholder={`What's on your mind ${currentUser.name}?`}
            value={postText}
            onChange={handleInputChange}
          />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{ display: "none" }} onChange={handleFileChange} />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            {selectedFile && <img src={URL.createObjectURL(selectedFile)} alt="Chosen" style={{ height: '150px' }} />}
            <div className="item">
              <img src={Map} alt="" />
              <input type="text" placeholder="Add Place" value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
            {location && <p>Location: {location}</p>}
            <div className="item">
              <img src={Friend} alt="" />
              <input type="text" placeholder="Tag Friends (comma separated)" value={tags} onChange={(e) => setTags(e.target.value)} />
            </div>
            {tags && <p>Tags: {tags.split(",").map(tag => tag.trim()).join(", ")}</p>}
          </div>
          <div className="right">
            <button onClick={sharePost}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
