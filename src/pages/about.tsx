import { Title } from '@src/components/Typography';
import { BaseLayout } from '@src/layouts';

const AboutPage = () => {
  const renderIntro = () => {
    return (
      <div className="md:flex md:justify-between">
        <img src="/images/headshot.jpg" alt="Headshot" className="rounded-lg" />
        <div className="mt-4 md:mt-0 md:ml-4">
          <p>Hi, I'm Esther Jun Kim.</p>
          <p>
            I am an engineering manager, software engineer, and researcher based in the San
            Francisco Bay Area.
          </p>
          <p>
            I love learning, and I have a wide variety of interests that range from web, mobile, AI,
            and IoT. It's essential for me to learn by doing, as well as to document what I've
            learned. That's how I got started in creating personal projects on{' '}
            <a href="https://github.com/estherjk" target="_blank" rel="noreferrer">
              GitHub
            </a>
            .
          </p>
          <p>
            My favorite hobby is reading. Check out my{' '}
            <a href="https://trello.com/b/mgqBN7ZV" target="_blank" rel="noreferrer">
              Trello board
            </a>{' '}
            with books that I have finished or queued up.
          </p>
        </div>
      </div>
    );
  };

  return (
    <BaseLayout title="About" image="/images/headshot.jpg">
      <div className="w-full max-w-4xl mx-auto">
        <div className="mb-8">
          <Title>About Me</Title>
        </div>

        {renderIntro()}
      </div>
    </BaseLayout>
  );
};

export default AboutPage;
