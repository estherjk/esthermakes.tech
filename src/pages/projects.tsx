import { ProjectCard } from '@src/components';
import { projects } from '@src/data';
import { BaseLayout } from '@src/layouts';

const ProjectsPage = () => {
  return (
    <BaseLayout title="Projects">
      <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
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
    </BaseLayout>
  );
};

export default ProjectsPage;
