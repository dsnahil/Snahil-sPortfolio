import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
            Here are some of my projects that I have worked on ranging from Web Development to Machine Learning.
        </Desc>
        <div></div>
        {/* <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'data analytics' ?
            <ToggleButton active value="data analytics" onClick={() => setToggle('data analytics')}>DATA ANALYTICS </ToggleButton>
            :
            <ToggleButton value="data analytics" onClick={() => setToggle('data analytics')}>DATA ANALYTICS</ToggleButton>
          }
          <Divider />
          {toggle === 'machine learning' ?
            <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
          }
          {toggle === 'web development' ?
            <ToggleButton active value="web development" onClick={() => setToggle('web development')}>WEB DEVELOPMENT</ToggleButton>
            :
            <ToggleButton value="web development" onClick={() => setToggle('web development')}>WEB DEVELOPMENT</ToggleButton>
          }
          <Divider />
          
        </ToggleButtonGroup> */}
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects