import React from 'react';
import ProjectsWrapper from './styles/ProjectsWrapper';
import Card from '../Card';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

export default function Projetos() {
  const myProjects = [
    {
      header: 'Project1',
      img: '/images/project1.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus nisl, placerat ac dignissim efficitur, venenatis tristique nisi. Nulla purus neque, iaculis vel sodales in, iaculis eget nibh. Aenean volutpat volutpat erat, sed ullamcorper diam iaculis in. Quisque porttitor feugiat eros vitae auctor. Maecenas elementum accumsan massa, a tempus lectus egestas at. ',
      highlighted: true,
    },
    {
      header: 'Project2',
      img: '/images/project2.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus nisl, placerat ac dignissim efficitur, venenatis tristique nisi. Nulla purus neque, iaculis vel sodales in, iaculis eget nibh. Aenean volutpat volutpat erat, sed ullamcorper diam iaculis in. Quisque porttitor feugiat eros vitae auctor. Maecenas elementum accumsan massa, a tempus lectus egestas at. ',
    },
    {
      header: 'Project3',
      img: '/images/project1.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus nisl, placerat ac dignissim efficitur, venenatis tristique nisi. Nulla purus neque, iaculis vel sodales in, iaculis eget nibh. Aenean volutpat volutpat erat, sed ullamcorper diam iaculis in. Quisque porttitor feugiat eros vitae auctor. Maecenas elementum accumsan massa, a tempus lectus egestas at. ',
    },
    {
      header: 'Project4',
      img: '/images/project2.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus nisl, placerat ac dignissim efficitur, venenatis tristique nisi. Nulla purus neque, iaculis vel sodales in, iaculis eget nibh. Aenean volutpat volutpat erat, sed ullamcorper diam iaculis in. Quisque porttitor feugiat eros vitae auctor. Maecenas elementum accumsan massa, a tempus lectus egestas at. ',
    },
  ];
  return (
    <ProjectsWrapper>
      <Text
        as="p"
        color="background.main.constrastText"
        variant="title"
        textAlign="center"
        margin="64px 0px 32px 0"
      >
        Meus projetos
      </Text>

      <Grid.Container>
        <Grid.Row justifyContent="space-between">
          {myProjects.map((project) => (
            <Grid.Col
              value={{ xs: 12, md: 5, lg: project.highlighted ? 12 : 3 }}
              order={project.highlighted}
            >
              <Card
                header={project.header}
                description={project.description}
                img={project.img}
                highlighted={project.highlighted}
              />
            </Grid.Col>
          ))}
        </Grid.Row>
      </Grid.Container>
    </ProjectsWrapper>
  );
}
