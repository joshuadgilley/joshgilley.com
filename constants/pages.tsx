// type
export interface Page {
    title?: string;
    description?: string;
  }
  
  export interface Pages {
    [key: string]: Page;
  }
  
  const pages: Pages = {
    home: {
      title: 'Josh Gilley',
      description:
        'theBag is a multipurpose template made by Nextjs and MUI v5 which can be used for Portfolios, Resumes, CVs, and Personal websites.',
    },
    projects: {
      title: 'Projects',
      description:
        'You can see all my projects as a software engineer on this page.',
    },
    hireMe: {
      title: 'Hire me',
      description:
        'I am available as software engineer for full time employment.',
    },
  };
  
  export default pages;
  