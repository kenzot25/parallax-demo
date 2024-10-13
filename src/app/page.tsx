import BannerParallax from './components/BannerParallax';

export default function Home() {
  return (
    <div>
      <BannerParallax />
      <div className='container mx-auto mt-20 flex flex-col gap-5'>
        <h1 className='text-5xl font-bold text-center'>Description</h1>
        {Array(10)
          .fill(null)
          .map((e, index) => {
            return (
              <p key={index}>
                {`What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum`}
              </p>
            );
          })}
      </div>
    </div>
  );
}
