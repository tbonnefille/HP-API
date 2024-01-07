import "./spellCard.css";

import spellbook from '../../Assets/spellbook.png'


function SpellCard(props) {





  return (



    <div className="SpellCard">

      <div className="spellbook"> <img src={spellbook} className="spellPic" alt="Logo" /></div>
      <div className="spellName">{props.spell.name}</div>
      <div className="spellDescription">{props.spell.description}</div>


    </div>




  )

};



export default SpellCard;