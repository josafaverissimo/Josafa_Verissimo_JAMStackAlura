import React from 'react';
import { ProjetosWrapper } from './styles/ProjetosWrapper';
import ProjectCard from '../ProjectCard'

export default function Projetos() {
  const myProjects = [
    {
      name: "Projeto Report",
      background: "https://via.placeholder.com/400x900.png",
      highlighted: false
    },
    {
      name: "Projeto Report",
      background: "https://via.placeholder.com/400x500.png",
      highlighted: true
    },
    {
      name: "Projeto Report",
      background: "https://via.placeholder.com/100x400.png",
      highlighted: false
    },
    {
      name: "Projeto Report",
      background: "https://via.placeholder.com/300x400.png",
      highlighted: false
    }
  ];

  const orders = myProjects.map((project, index) => ({order: index + 1, toTop: project.highlighted}))
  const toTop = orders.filter((x) => x.toTop)[0]

  orders[0].order = toTop.order;
  toTop.order = 1;

  return (
    <ProjetosWrapper>
      <h1>Meus projetos</h1>

      <ul>
        {myProjects.map((project, index) => {
          const order = index + 1
          return (
            <li key={project.background} style={{marginBottom: '32px', order: orders[index].order}}>
              <ProjectCard text={project.name} background={project.background} highlighted={project.highlighted} />
            </li>
          )
        })}
      </ul>
    </ProjetosWrapper>
  )
}