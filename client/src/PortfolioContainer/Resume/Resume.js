import React, { useState, useEffect} from 'react'
import ScreenHeading from '../../utilities/SubHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import "aos/dist/aos.css"
import Aos from 'aos'
import './Resume.css'
import education from '../../assets/Resume/education.svg'
import workHistory from '../../assets/Resume/work-history.svg'
import programmingSkills from '../../assets/Resume/programming-skills.svg'
import projects from '../../assets/Resume/projects.svg'
import interests from '../../assets/Resume/interests.svg'



const Resume = (props) => {

    useEffect(()=>{
        Aos.init({ duration:2000});
          },[])

    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffStyle, setCarousalOffStyle] = useState({});

    let fadeInScreenHandler = (screen) =>{
        if(screen.fadeScreen !==props.id)
        return
        Animations.animations.fadeInScreen(props.id)
      }
      
      const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const ResumeHeading = (props) =>{
        return(
        <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'>
                    
                </div>
                <span>{props.heading? props.heading:""}</span>
                    {props.fromDate && props.toDate ?(
                    <div className='heading-date'>{props.fromDate+"-"+props.toDate}</div>
                    ):(<div></div>)}
               
            </div>
            <div className='resume-sub-heading'>
                    <span>{props.subHeading ? props.subHeading: ""}</span>
                </div>
                <div className='resume-heading-description'>
                    <span>{props.description? props.description : ''}</span>
                </div>
        </div>
        )
    };


    const resumeBullets = [
        {label: "Education", logoSrc:education},
        {label: "Work History", logoSrc: workHistory},
        {label: "Proramming Skills", logoSrc: programmingSkills},
        {label: "Projects", logoSrc: projects},
        {label: "Interests", logoSrc: interests},
    ];
   
    const programmingSkillsDetails = [
        {skill: 'Javascript', ratingPercentage: 70},
        {skill: 'React', ratingPercentage: 70},
        {skill: 'HTML', ratingPercentage: 90},
        {skill: 'CSS', ratingPercentage: 70},
        {skill: 'Bootstrap', ratingPercentage: 60},
        {skill: 'Git', ratingPercentage: 75},
        {skill: 'Firebase', ratingPercentage: 50},
        {skill: 'MS Office', ratingPercentage: 75},
        {skill: 'AWS', ratingPercentage: 60},
        {skill: 'SDLC', ratingPercentage: 50},
        {skill: 'C/C++', ratingPercentage: 70},
    ];

    const projectDetails =[
        {
            heading: 'Personal Portfolio Website',
            duration: {fromDate: "2021", toDate:"2022"},
            description: "A Personal Portfoloio website to showcase all my details and projects at one place",
            subHeading: "Technologies Used: React Js, Material UI, Node Js"
        },
        {
            heading: 'React-Crypto-App',
            duration: {fromDate: "2021", toDate:"2022"},
            description: "It's a app here you can see the price of crypto coins and also you can search various types of crypto coins",
            subHeading: "Technologies Used: React Js, Javascript, Css, HTML"
        },
        {
            heading: 'Weather-Forecast-Application',
            duration: {fromDate: "2022", toDate:"2022"},
            description: "Weather Forecast Web Application built using React.JS and OpenWeatherMap API",
            subHeading: "Technologies Used: React Js, Javascript, Css, HTML"
        }
    ];

    const resumeDetails = [
        <div className="resume-screen-container" key='education'>
        <ResumeHeading
        heading ={"High School/Higher Secondary"} 
        subHeading ={"Holy Cross Higher Secondary School, Kawardha"}
        fromDate={"2013"}
        toDate={"2017"}
        />
        <ResumeHeading
        heading ={"Bachelor of Technology , Computer Science & Engineering"} 
        subHeading ={"Shri Shanrachriya Technical Campus, Bhilai"}
        fromDate={"2019"}
        toDate={"2023"}
        />
        </div>,

        <div className="resume-screen-container" key="work-experience">
            <ResumeHeading
            heading={"Bikebazar Pvt. Ltd."}
            subHeading ={"Collection Associate"}
            fromDate={"November, 2021"}
            toDate={"March, 2022"}
            />
            <div className="experience-description">
                <span className='resume-description-text'>
                    Worked as Collection Associate at BikeBazar Pvt. Ltd. which is a two wheeler finance company
                </span>
                <div >
                 <span className='resume-description'>
    
                 </span>
                 <br/>
                 <span className='resume-description'>
                 - Have experience to work as a team and how to manage others.
                 </span> 
                 <br/>
                 <span className='resume-description'>
                 - Know how to work under pressure with a good time management skill
                 </span>
                </div>
            </div>
        </div>,

        <div className="resume-screen-container programming-skills-container" key='proramming-skills'>
            {programmingSkillsDetails.map((skill, index)=>(
                <div className='skill-parent' key={index}>
                  
                  <div className=''>
                      <span>{skill.skill}</span>
                      <div className='skill-percentage'>
                          <div style={{width: skill.ratingPercentage + "%"}}
                           className="active-percentage-bar">
                              <span className='skill-text'> {`${skill.ratingPercentage}%`}</span>
                          </div>
                      </div>
                  </div>

                </div>
            ))}

        </div>,

        <div className="resume-screen-container projects-div" key="projects">
            
        {projectDetails.map((projectDetails, index)=>(
            <ResumeHeading
            key={index}
            heading={projectDetails.heading}
            subHeading={projectDetails.subHeading}
            description={projectDetails.description}
            fromDate={projectDetails.duration.fromDate}
            toDate={projectDetails.duration.toDate}
            />
        ))}

        </div>,
        <div className="resume-screen-container" key="interests">
            <ResumeHeading
             heading="Financing"
             description="Other than coding I like to invest my time on various Financial area"
             />
             <ResumeHeading
             heading="Football"
            description="I like to play Football, it’s a great relaxer, stress reliever, teacher of discipline and teamwork"
             />
            <ResumeHeading
            heading="Video Games"
            description="What could be the best way to escape the reality than Video Games"
            />
            <ResumeHeading
             heading="Hiking"
             description="My best side hobby is hiking, It helps me to brighten up my mood and have some fresh air"
            />

            
            </div>

    ];

    const handleCarousal =(index) =>{
        let offsetHeight =360;
        let newCarousalOffSet ={
            style: {transform: "translateY(" + index * offsetHeight * -1 + "px)"}
        };
        setCarousalOffStyle(newCarousalOffSet)
        setSelectedBulletIndex(index)
    };


    const getBullets =() =>{
        return resumeBullets.map((bullet, index)=>(
            <div
            onClick={()=>handleCarousal(index)}
            className={index=== selectedBulletIndex? "bullet selected-bullet" : "bullet"}
            key={index}
            >
                <img className='bullet-logo'
                src={bullet.logoSrc}
                alt='B'/>
                <span className='bullet-label'>{bullet.label}</span>
            </div>
        ))
    }
    
    const getResumeScreens =()=>{
        return(
            <div
            style ={carousalOffStyle.style}
            className ='resume-details-carousal'>
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        )

    }
   

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
        <div data-aos="fade-left" className='resume-content'>
            <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />
            <div className='resume-card'>
                <div className='resume-bullets'>
                    <div className='bullet-container'>
                        <div className='bullet-icons'>
                            <div className='bullets'>
                                {getBullets()}
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='resume-bullet-details'>
                        {getResumeScreens()}
                    </div>
            </div>
        </div>
      
    </div>
  )
}

export default Resume
