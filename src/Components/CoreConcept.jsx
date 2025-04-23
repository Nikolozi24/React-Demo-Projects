export default function 
 CoreConcept({title , image="#", description, key}){
 return(
    <li key={key}>
        <img src={image} alt="#"/>
        <h3>{title ||"title"}</h3>
        <p>{description}</p>
    </li>
  )
}