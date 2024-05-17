import {useEffect, useState} from 'react';
import Hamburger from '../Hamburger';
import './styles.css'
import API from "../../../api.js";

function EditRock({close}) {
  return (
    <>
        <h2>View or edit rock details</h2>
        <form>
          <label name="topic">Associated topic
            <select>
              <option value="0">Zero</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </label> 
          <label name="rname">Rock name
            <input type="text" name="rname" id='rname' value="Zero" />
          </label>
          <div className='cms-image'><img src="/maths-rocks-zero.jpg" /></div>
          <label name="filename">Change the rock image
            <input type="file" id="myFile" name="filename" />
          </label>  
          <button type='submit' className='btn'>Submit</button>
        </form>
    </>
  )}


function AddRock({close}) {

  return (
    <>
        <h2>Add a new rock</h2>
        <form>
          <label name="topic">Select a topic page to associate the rock with
            <select>
              <option value="0">Zero</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </label> 
          <label name="rname">Rock name
            <input type="text" name="rname" id='rname' />
          </label>
          <label name="filename">Rock image
            <input type="file" id="myFile" name="filename" />
          </label>  
          <button type='submit' className='btn'>Submit</button>
        </form>
    </>
  )}

    
export default function CmsRocks() {
  const [rocksList, setRocksList] = useState(null);
  const [topicsMap, setTopicsMap] = useState(null);

  useEffect(() => {

    const fetchRocks = async () => {
      const response = await fetch(API + "/rocks");
      const rocks = await response.json();
      const rocks_list = Object.keys(rocks).map((key) => rocks[key])
      setRocksList(rocks_list)
      console.log(rocks_list)
    }

    const fetchTopics = async () => {
      const response = await fetch(API + "/topics");
      const topics = await response.json();
      setTopicsMap(topics);
      console.log(topics)
    }

    fetchRocks();
    fetchTopics();
  }, [])
  return (
    <>
      <h2>Rocks</h2>
      <p>This table shows all rocks that have been loaded to the database.</p>
      <button className='btn' onClick={() => {}}>Add new rock +</button>
      <table>
        <tbody>
        <tr>
          <th>Rock id</th>
          <th>Associated Topic</th>
          <th>Rock name</th>
          <th>QR code url</th>
          <th></th>
        </tr>
        {rocksList !== null && rocksList.map((rock) => (
        <tr key={rock.rock_id}>
          <td>{rock.rock_id}</td>
          <td>{topicsMap !== null && topicsMap[rock.rock_id] !== undefined ? topicsMap[rock.rock_id].title: "No associated topic."}</td>
          <td>{rock.rock_name}</td>
          <td><a href='http://localhost:5173/rock/1' target='_blank'>http://localhost:5173/rock/1</a></td>
          <td>
          <button className='btn' onClick={() => {
          }}>View/Edit</button>
          </td>
        </tr>
        ))}
        </tbody>
      </table>
      </>
  );
}