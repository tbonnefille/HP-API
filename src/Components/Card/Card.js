import "./card.css";
import { useState } from "react";


function Card(props) {

  const [modal, setModal] = useState(false);

  return (

    <div>

      {modal && (

        <div className="modal"

          onClick={() => {
            setModal(false)

          }}

        >

          <div className="bio">

            <div className="bioPicHolder">

              <h1>Biography</h1>

              <img className="bioPic" src={props.character.image} />
            </div>

            <div className="datas">

              <div className="dataCat">
                <div className="tag"> Name : </div>
                <div className="tagInfo"> {props.character.name} </div>
              </div>

              <div className="dataCat">
                <div className="tag"> Ancestry : </div>
                <div className="tagInfo">{props.character.ancestry} </div>
              </div>

              <div className="dataCat">
                <div className="tag">House : </div>
                <div className="tagInfo">  {props.character.house} </div>
              </div>

              <div className="dataCat">
                <div className="tag">Eye colour : </div>
                <div className="tagInfo">{props.character.eyeColour} </div>
              </div>

              <div className="dataCat">
                <div className="tag">Hair colour : </div>
                <div className="tagInfo"> {props.character.hairColour} </div>
              </div>

              <div className="dataCat"><div className="tag">Alternate names : </div>{props.character.alternate_names}
              </div>

              <div className="dataCat">
                <div className="tag">Species : </div>
                <div className="tagInfo">{props.character.species} </div>
              </div>

              <div className="dataCat">
                <div className="tag">Gender : </div>
                <div className="tagInfo">  {props.character.gender} </div>
              </div>

              <div className="dataCat">
                <div className="tag">Patronus : </div>
                <div className="tagInfo">   {props.character.patronus} </div>
              </div>

              <div className="dataCat">
                <div className="tag">Actor : </div>
                <div className="tagInfo">{props.character.actor} </div>
              </div>

              <div className="dataCat">
                <div className="tag"> date of birth : </div>
                <div className="tagInfo">{props.character.dateOfBirth}</div>
              </div>


            </div>

          </div>


        </div>

      )
      }



      <div className="Card"

        onClick={() => {
          setModal(true);
        }}

      >

        <img src={props.character.image} />

        <div className="characterName">{props.character.name}</div>


      </div>


    </div >


  )

};

export default Card;