import Parent from '../components/Parent';

const About = () => {
    const element =<div>Hello World</div>;{/*JSX code*/}
  return (
    <div>
        <p>{element}</p>{/*You can write any Java Script code inside"{}"*/}
        <Parent/>
    </div>
  )
}

export default About