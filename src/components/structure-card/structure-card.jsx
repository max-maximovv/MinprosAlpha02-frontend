import "./structure-card.css";

export default function StructureCard(props) {
  return (
    <a href={props.link} className="structure-card-a">
      <div className="structure-card">
        <img src={props.img} />
        <div className="structure-card-text">
          <p className="structure-card-p">{props.name}</p>
          <h6>{props.career}</h6>
        </div>
      </div>
    </a>
  );
}
