import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    // Dynamic title using hook
    useTitle('Blog');

    return (
        // use grid
        <div className='grid grid-cols-1 gap-5 my-20 mx-12 md:mx-36'>
            <details className='bg-blue-50 rounded-lg flex justify-center pb-4 px-20'>
                {/* question */}
                <summary className='py-4 flex justify-between duration-200 ease-in cursor-pointer'>
                    1. What are the different ways to manage a state in a react application?
                </summary>
                <hr />
                {/* answer */}
                <div className='py-4 px-6 text-md text-justify'>
                    The <strong>four types of React State</strong> to manage a react application.
                    <br />
                    <br />
                    <strong>Local (UI) state:</strong> Local state is data we manage in one or another component.
                    Local state is most often managed in React using the useState hook.
                    <br />
                    <br />
                    <strong>Global (UI) state:</strong> Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                    <br />
                    <br />
                    <strong>Server state:</strong> Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                    <br />
                    <br />
                    <strong>URL state:</strong> Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one.
                </div>
            </details>
            <details className='bg-blue-50 rounded-lg flex justify-center pb-4 px-20'>
                {/* question */}
                <summary className='py-4 flex justify-between duration-200 ease-in cursor-pointer'>
                    2. How does prototypical inheritance work?
                </summary>
                <hr />
                {/* answer */}
                <div className='py-4 px-6 text-md text-justify'>
                The<strong> Prototypal Inheritance</strong> is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
                </div>
            </details>
            <details className='bg-blue-50 rounded-lg flex justify-center pb-4 px-20'>
                {/* question */}
                <summary className='py-4 flex justify-between duration-200 ease-in cursor-pointer'>
                    3. What is a unit test? Why should we write unit tests?
                </summary>
                <hr />
                {/* answer */}
                <div className='py-4 px-6 text-md text-justify'>
                    <strong>Unit testing</strong> a testing technique using which individual modules are tested to determine if there are any issues by the developer himself. It is concerned with functional correctness of the standalone modules. It uses modules for the testing process which reduces the dependency of waiting for Unit testing frameworks, stubs, drivers and mock objects are used for assistance in unit testing.
                    <br />
                    The main aim is to isolate each unit of the system to identify, analyze and fix the defects.
                    <br />
                    <br />
                    In a testing level hierarchy, unit testing is the first level of testing done before integration and other remaining levels of the testing.
                    <br />
                    Generally, the software goes under four level of testing: Unit Testing, Integration Testing, System Testing, and Acceptance Testing but sometimes due to time consumption software testers does minimal unit testing but skipping of unit testing may lead to higher defects during Integration Testing, System Testing, and Acceptance Testing or even during Beta Testing which takes place after the completion of software application.
                </div>
            </details>
            <details className='bg-blue-50 rounded-lg flex justify-center pb-4 px-20'>
                {/* question */}
                <summary className='py-4 flex justify-between duration-200 ease-in cursor-pointer'>
                    4. React vs. Angular vs. Vue?
                </summary>
                <hr />
                {/* answer */}
                <div className='py-4 px-6 text-md text-justify'>
                    <strong>Angular</strong> was first released by Google in 2010 as a framework for building web applications. It is the most mature framework among React and Vue. If your company has a large team and uses TypeScript, Angular might be a good solution.
                    <br />
                    <br />
                    <strong>React</strong> was released by Facebook in 2013 as a tool to combat the problems triggered by high volumes of traffic that were generated by its Facebook ads. It makes dynamic websites work seamlessly. React is an excellent choice for those just starting out with front-end JavaScript frameworks development and developers looking for more flexibility.
                    <br />
                    <br />
                    <strong>Vue</strong> was released by Evan You in 2014, a former employee of Google who worked on Angular when he was a Googler. It seems to be increasing significantly in the web development field by combining best features of Angular and React. If you’re looking for simplicity and flexibility, Vue is the right choice for you.
                </div>
            </details>
        </div>
    );
};

export default Blog;