import SideBar from "./Components/SideBar/SideBar/SideBar";
import React, { useRef } from "react";
import AddProject from "./Components/AddProject/AddProject";
import NoProjectSelected from "./Components/AddProject/NoProjectSelected";

function App() {
  const modal = useRef()
  const  [projectsState, setProjectsState] = React.useState({
  selectedProjectId: undefined,
  projects:[]  
  } 
    )

 const values = useRef();

     function handleStartAddProjects(){
      setProjectsState((prev)=>{
        return {
          ...prev,
          selectedProjectId:null
        
        }
      })
    }
let content;

function handleValues(){

  const value = values.current.getValues();
  console.log(value)
 if(value.title.trim()==="" || value.description.trim()==="" || value.date.trim()===""){
  modal.current.open()
  return;
 }




setProjectsState((prev)=>{
  return {
    ...prev,
    projects:[...prev.projects, value],
    selectedProjectId:undefined
  }
})

}

if(projectsState.selectedProjectId===null){
  content = <AddProject modalRef={modal} values={values} handleValues={handleValues}/>
}
else if(projectsState.selectedProjectId===undefined){
  content =   <NoProjectSelected  onStartAddProjects={handleStartAddProjects} />
}


  return (
    <main className="h-screen my-8 flex gap-8">
          <SideBar projectState={projectsState?.projects} onStartAddProjects={handleStartAddProjects} />
        {content}
      
    </main>

  );
}

export default App;
