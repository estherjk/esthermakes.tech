import { ProjectCard } from '@src/components';
import { Title } from '@src/components/Typography';
import { projects } from '@src/data';
import { BaseLayout } from '@src/layouts';

const ProjectsPage = () => {
  return (
    <BaseLayout title="Projects">
      <div className="flex flex-col w-full max-w-5xl mx-auto">
        <div className="mb-8">
          <Title>Making & Learning</Title>
          <p>
            This is a collection of projects that I have worked on over the years. It is a
            reflection of my personal interests & what I was eager to learn at the time. The source
            code is available on{' '}
            <a href="https://github.com/estherjk" target="_blank" rel="noreferrer">
              GitHub
            </a>{' '}
            & free to use.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
              url={project.url}
              dateUpdated={project.dateUpdated}
            />
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default ProjectsPage;
