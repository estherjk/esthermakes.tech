import { ProjectCard } from '@src/components';
import { projects } from '@src/data';
import { BaseLayout } from '@src/layouts';

const ProjectsPage = () => {
  return (
    <BaseLayout title="Projects">
      <div className="w-full max-w-4xl mx-auto">
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
