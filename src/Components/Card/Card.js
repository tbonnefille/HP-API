import "./card.css";




function Card(props) {


  

    return (
      <div className="Card">

        <img src={props.character.image} />

        <div className="characterName">{props.character.name}</div>


      </div>




    )

};



  export default Card;