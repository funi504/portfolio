import './homeStyle.css'
import Typed from "react-typed"

export function home(){

    return (
            <div className= 'container'>
                <div className= 'name'> HEY I'M NEKHUNGUNI FUNANANI</div>
                <br/>
                <br/>
                <div className= 'description'>
                
                    <Typed
                        strings={[
                                "A web and mobile developer with a keen interest in AI and data science"
                            ]}
                            typeSpeed={50}
                            
                            />
                </div> 
                <br/>
                <br/>
                <div className='projectButton'>PROJECTS</div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className= 'social' >
                </div>
                
            </div>
        
        )
}

export default home