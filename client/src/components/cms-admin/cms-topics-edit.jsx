import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import TextEditor from "./text-editor.jsx";
import {useParams} from "react-router-dom";
import API from "../../../api.js";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import authorization from "../../utils/auth.jsx";

export default function EditTopic() {
    const { topic_id } = useParams();
    const [topic, setTopic] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
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

    useEffect(()=> {
        const fetchTopic = async () => {
            const res = await fetch(API + `/topics/${topic_id}`)
            const topic = await res.json();
            setTopic(topic);
            console.log(topic);
        }
        fetchTopic();
    }, [])

    const handleImageUpload = (e) => {
        setImageFile(e.target.files[0])
    }

    async function handleSubmit() {
        const formData = new FormData();
        formData.append("user_id", user_id);
        formData.append("username", username);
        formData.append("signature", signature);

        formData.append("topic_id", topic_id)
        formData.append("topic_image", imageFile);
        formData.append("title", title);
        formData.append("text", text);
        formData.append("metatitle", metatitle);
        formData.append("metadesc", metadesc);
        const res = await fetch(API + "/manageTopics/editTopic", {
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
                <h2>View or edit topic details</h2>
                { topic !== null &&
                    <form>
                        <label name="heading">Topic heading
                            <input type="text" name="heading" id='heading' value={title} placeholder={topic.title} onChange={(e) => setTitle(e.target.value)}/>
                        </label>
                        <label >Current main image
                            <div className='cms-image'><img src={API + `/images/topics/${topic.imageUri}`} /></div>
                        </label>
                        <label name="topic_image">Change the main image
                            <input type="file" id="topic_image" name="topic_image" onChange={handleImageUpload}/>
                        </label>
                        <label name="texteditor">Update the page text</label>
                        <TextEditor setText={setText} desc={topic.description}/>
                        <label name="metatitle">Meta title (this is for ranking on google)
                            <input type="text" name="metatitle" id='metatitle' value={metatitle} onChange={(e) => setMetatitle(e.target.value)}/>
                        </label>
                        <label name="metadesc">Meta description (this is a short summary for ranking on google)
                            <input type="text" name="metadesc" id='metadesc' value={metadesc} onChange={(e) => setMetadesc(e.target.value)}/>
                        </label>
                        <button type='button' className='btn' onClick={handleSubmit}>Submit</button>
                        <Link to={`/cms`}><button className='btn blue' >Cancel</button></Link>
                    </form>
                }
            </div>
            }
        </>
    )}