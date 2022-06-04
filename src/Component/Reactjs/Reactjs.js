function Skill(props) {
    return <li> { props.point }</li>;
  }
  
  export const Reactjs = () => {
   
    const skills = [
      {id: 1, point: 'Material-Ui'},
      {id: 2, point: 'React Router'},
      {id: 3, point: 'Api CAlls'},
      {id: 4, point: 'Basic Hooks'}
    ];
    return (
      <>
        <h1>React Js</h1>
        <ul>
          {skills.map((skill) => <Skill key={skill.id} point={skill.point} />)}
        </ul>
      </>
    );
  } 

  