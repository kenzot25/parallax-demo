'use client';
import {useEffect} from 'react';
import {Canvas3D} from '../components/Butterfly/Canvas3D';

/* eslint-disable @next/next/no-img-element */
const Threejs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Canvas3D />
      <header>
        <div className='content-fit'>
          <div className='logo cursor-pointer text-4xl uppercase font-bold font-serif tracking-wider'>
            MikeDev
          </div>
        </div>
      </header>

      <div className='section' id='banner'>
        <div className='content-fit'>
          <div className='title' data-before='DEVELOPER'>
            FULL-STACK
          </div>
        </div>
        <img
          src='/img/flower.png'
          className='decorate'
          alt='Flower decoration'
          style={{width: '50vw', bottom: 0, right: 0}}
        />
        <img
          src='/img/leaf.png'
          className='decorate'
          alt='Leaf decoration'
          style={{width: '30vw', bottom: 0, left: 0}}
        />
      </div>

      <div className='section' id='intro'>
        <div className='content-fit'>
          <div className='number'>01</div>
          <div className='des'>
            <div className='title'>Proficiency Developer</div>
            <p>
              With nearly 3 years of experience, I specialize in crafting
              scalable and efficient web solutions using modern web
              technologies. My expertise spans both frontend and backend
              development, delivering full-stack applications that are robust,
              maintainable, and aligned with business goals.
            </p>
            <p>
              On the frontend, I excel in building interactive, responsive user
              interfaces using technologies like Next.js, ReactJS, and
              TailwindCSS. I emphasize creating pixel-perfect UIs that provide
              seamless user experiences. On the backend, I used NestJS
              architectures to develop scalable, high-performance systems that
              meet client needs.
            </p>
          </div>
        </div>
      </div>

      <div className='section' id='description'>
        <div className='content-fit'>
          <div className='number'>02</div>
          <div className='des'>
            <div className='title'>Technical Stack</div>
            <p>
              My tech stack includes JavaScript, TypeScript, Node.js, ReactJS,
              and Next.js for frontend development, while I use NestJS, GraphQL,
              and SQL for backend development. I am proficient in state
              management tools like Redux and Jotai, ensuring smooth data flow
              across applications.
            </p>
            <p>
              I also have hands-on experience with Docker for containerization,
              Redis for caching, and CI/CD pipelines (Jenkins, GitHub Actions)
              to streamline development workflows. My knowledge of
              authentication mechanisms, including auth.js and JWT, allows me to
              build secure and user-friendly authentication systems.
            </p>
          </div>
        </div>
        <img
          src='/img/leaf1.png'
          className='decorate'
          alt='Leaf decoration 1'
          style={{width: '70vw', bottom: 0, right: 0, zIndex: 101}}
        />
      </div>

      <div className='section' id='contact'>
        <div className='content-fit'>
          <div className='number'>03</div>
          <div className='des'>
            <div className='title'>CONTACT</div>
            <table>
              <tbody>
                <tr>
                  <td>Email</td>
                  <td>kenzo.devweb@gmail.com</td>
                </tr>
                <tr>
                  <td>Linkedin</td>
                  <td>
                    <a
                      target='_blank'
                      href='https://www.linkedin.com/in/toan-dev/'>
                      toan-dev
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Github</td>
                  <td>
                    <a target='_blank' href='https://github.com/kenzot25'>
                      kenzot25
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Threejs;
