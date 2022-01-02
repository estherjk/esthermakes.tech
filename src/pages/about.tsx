import { BaseLayout } from '@src/layouts';

const AboutPage = () => {
  const renderIntro = () => {
    return (
      <div className="md:flex md:justify-between">
        <img src="/images/headshot.jpg" className="rounded-lg" />
        <div className="mt-4 md:mt-0 md:ml-4">
          <p>Hi, I'm Esther Jun Kim and I like to make things.</p>
          <p>
            I'm based in the San Francisco Bay Area and am currently the Head of Application
            Engineering at{' '}
            <a href="https://www.riiidlabs.com/" target="_blank" rel="noreferrer">
              Riiid Labs
            </a>
            .
          </p>
          <p>
            I love learning. I'm particularly interested in making things that combine hardware and
            software, that go up and down the stack, or are in areas like AI and IoT.
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
      <div className="w-full max-w-4xl mx-auto">{renderIntro()}</div>
    </BaseLayout>
  );
};

export default AboutPage;
