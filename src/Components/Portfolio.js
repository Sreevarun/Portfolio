import './../App.css';
import React from 'react';
import sreevarun from './sreevarun.jpg';
import project1 from './project1.jpg';
import project2 from './project2.jpg';
import github from './images/github.jpg';
import Twitter from './images/Twitter.jpg';
//import bgi from './bgi.jpg';
const Portfolio = () => {
    return ( 
        <div className="main">
          <div className="header">
            <h1>Hello, I am Sreevarun Katu</h1>
            </div>
            <div>
            <div className="title">
            <h2 >My Portfolio page</h2>
            </div>

            <div className="nav">
                <div className="nav-about">
                <a href="#about">About</a>
                </div>
                <div className="nav-project">
                <a href="#project">project</a>
                </div>
                <div className="nav-social">
                <a href="#socialNetwork">socialNetwork</a>
                </div>
                <div className="nav-connect">
                <a href="#connect">connect</a>   
                </div>
          </div>
          </div>
          
          <div className="about" id="about">
          <h1 className="about-tittle">Who  am I</h1>
              <div className="about-img">
              <img src={sreevarun}/>
              </div>
              <div className="about-info">
                 <p>
                     Hello,This is Sreevarun studying KL university
                     Learning web devlopment on my own.my target is 
                     to complete full stack devlopment.
                 </p>
                 <h1 className='about-skill-titil'>Skills</h1>               
                 <ol className="about-skills">
                     <li>C</li>
                     <li>python</li>
                     <li>C++</li>
                     <li>javascript</li>
                     <li>web frontend using React</li>
                 </ol>
              </div>
          </div>

          <div className="project"  id="project">
          <h2 className='projectTitle'>projects</h2>
              <div className="project1">
               <a href="https://github.com/Sreevarun/WeatherApp" target="_blank"> <img src={project1}  alt='Weather app'/></a>
                <b className='projectName'>Weather app</b>
              </div>
              <div  className="project2">
             <a href='https://github.com/Sreevarun/Notes_reactjs' target="_blank"> <img src={project2}  alt='Notes app'/></a>
                <b className='projectName'>Notes app</b>
              </div>

          </div>
          <div className="socialNetwork" id="socialNetwork">
          <h2 className='projectTitle'>socialNetwork</h2>
           <div className="TechNetwork">
           <a href='https://github.com/Sreevarun' target="_blank"><img src={github}/></a>
           </div>
           <div className="TechNetwork">
           <a href='https://www.linkedin.com/in/katu-sreevarun-a1b506211' target="_blank"><img src={Twitter}/></a>
           </div>
          </div>
          
          <div className="connect" id="connect">
          <div className='connectForm'>
          <h1 className='connectTittle'>connect</h1>   
            <div >
                Name:<input type="text" placeholder='Name' className='txt'/>
            </div>
            <div>
                 email:<input type="text" placeholder='email' className='txt'/>
            </div>
            <div>
                message:<input type="text" placeholder='message' className='msg'></input>
            </div>
            <div>
                <button>Submit</button>
            </div>
          </div>
          </div>
        </div>
     );
}
export default Portfolio;