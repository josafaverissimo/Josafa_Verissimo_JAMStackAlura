import React from 'react';
import { ProjetosWrapper } from './styles/ProjetosWrapper';
import Card from '../Card'

export default function Projetos() {
  const myProjects = [
    {
      name: "Projeto Report",
      background: "https://via.placeholder.com/400x400.png"
    },
    {
      name: "Projeto Report",
      background: "https://via.placeholder.com/400x400.png"
    },
    {
      name: "Projeto Report",
      background: "https://via.placeholder.com/400x400.png"
    },
    {
      name: "Projeto Report",
      background: "https://via.placeholder.com/400x400.png"
    }
  ];

  return (
    <ProjetosWrapper>
      <h1>Meus projetos</h1>

      <ul>
        {myProjects.map(project => (
          <li style={{marginBottom: '32px'}}>
            <Card text={project.name} background={project.background}/>
          </li>
        ))}
      </ul>
    </ProjetosWrapper>
  )
}