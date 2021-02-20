import React from 'react';
import { ProjectsWrapper } from './styles/ProjectsWrapper';
import Card from '../Card';
import { Grid } from '../../foundation/layout/Grid';
import { Title } from '../Title';

export default function Projetos() {
  const myProjects = [
    {
      name: "Project1",
      img: "https://via.placeholder.com/400x400",
    },
    {
      name: "Project1",
      img: "https://via.placeholder.com/400x400"
    },
    {
      name: "Project1",
      img: "https://via.placeholder.com/400x400"
    },
    {
      name: "Project1",
      img: "https://via.placeholder.com/400x400",
      highlighted: true
    }
  ]
  return (
    <ProjectsWrapper>
      <Title fontSize="3.75rem !important" fontWeight="400" textAlign="center" margin="0px auto 85px auto" fontFamily="Fira Sans Condensed">
        <h1>Meus projetos</h1>
      </Title>
      
      <Grid.Container>
        <Grid.Row justifyContent="space-between">
          {myProjects.map(project => (
            <Grid.Col value={{xs: 12, md: 5, lg: project.highlighted ? 12 : 3}}>
              <Card text={project.name} img={project.img} />
            </Grid.Col>
          ))}
        </Grid.Row>
      </Grid.Container>
   </ProjectsWrapper>
  )
}