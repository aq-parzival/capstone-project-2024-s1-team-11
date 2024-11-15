import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import API from "../../../api.js";
import TextEditor from "./text-editor.jsx";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import authorization from "../../utils/auth.jsx";


export default function AddTopic() {

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [metatitle, setMetatitle] = useState("");
    const [metadesc, setMetadesc] = useState("");
    const navigate = useNavigate();

    // Redirect unauthorized user to homepage.
    const [isAuthorized, setIsAuthorized] = useState(false);
    const user_id = Cookies.get("user_id");
    const username = Cookies.get("username");
    const signature = Cookies.get("signature");

    useEffect(() => {
        const authorize = async () => {
            if (! await authorization(user_id, username, signature)){
                navigate("/");
            } else{
                setIsAuthorized(true);
            }
        }
        authorize();
    }, []);

    const handleImageUpload = (e) => {
        setImageFile(e.target.files[0])
    }

    async function handleSubmit() {
        const formData = new FormData();
        formData.append("user_id", user_id);
        formData.append("username", username);
        formData.append("signature", signature);

        formData.append("topic_image", imageFile);
        formData.append("title", title);
        formData.append("text", text);
        formData.append("metatitle", metatitle);
        formData.append("metadesc", metadesc);
        const res = await fetch(API + "/manageTopics/addTopic", {
            method: "POST",
            body: formData
        })
        const next_link = (await res.json()).next;
        navigate(next_link);
    }

    return (
        <>
            {isAuthorized &&
            <div className="cms-topic">
                <h2>Add a new topic</h2>
                <form>
                    <label name="topic_title">Add a topic title
                        <input type="text" name="topic_title" id='topic_title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </label>
                    <label name="topic_image">Upload a main image <span style={{color: "purple"}}>(🌟 A default image will be displayed if no image is uploaded.)</span>
                        <input type="file" id="topic_image" name="topic_image" onChange={handleImageUpload}/>
                    </label>
                    <label name="texteditor">Add the page text</label>
                    <TextEditor setText={setText}/>
                    <label name="metatitle">Meta title <span style={{color: "purple"}}>(🌟 This is for ranking on google.)</span>
                        <input type="text" name="metatitle" id='metatitle' value={metatitle} onChange={(e) => setMetatitle(e.target.value)}/>
                    </label>
                    <label name="metadesc">Meta description <span style={{color: "purple"}}>(🌟 This is a short summary for ranking on google.)</span>
                        <input type="text" name="metadesc" id='metadesc' value={metadesc} onChange={(e) => setMetadesc(e.target.value)}/>
                    </label>
                    <button type="button" className='btn' onClick={handleSubmit}>Submit</button>
                    <Link to={`/cms`}><button className='btn blue' >Cancel</button></Link>
                </form>
            </div>
            }
        </>
    )}