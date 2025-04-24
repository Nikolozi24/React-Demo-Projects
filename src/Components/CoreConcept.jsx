export default function 
 CoreConcept({title , image="#", description}){
 return(
    <li key={Math.random()}>
        <img src={image} alt="#"/>
        <h3>{title ||"title"}</h3>
        <p>{description}</p>
    </li>
  )
}