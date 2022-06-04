function Skill(props) {
    return <li> { props.point }</li>;
  }
  
  export const Javascript = () => {
   
    const skills = [
      {id: 1, point: 'Loops'},
      {id: 2, point: ' Array'},
      {id: 3, point: 'Event-Mannagement '},
      {id: 4, point: 'JSON'}
    ];
    return (
      <>
        <h1> Javascript</h1>
        <ul>
          {skills.map((skill) => <Skill key={skill.id} point={skill.point} />)}
        </ul>
      </>
    );
  } 

  