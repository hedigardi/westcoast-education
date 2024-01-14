const courses = [
    {
      id: 1,
      title: 'Cloud Computing for Beginners',
      number: 1,
      duration: 3,
      price: 349,
      availability: 'Distance',
      imageUrl: 'course1.jpg',
      scheduleddate: '2024-03-01',
      bookingoption: 'Distance',
      description: 'Over the last couple of years, many business companies decided to use more and more cloud services as part of their digital transformation. They are trying to be more innovative and flexible to the dynamic business landscape by leveraging the power of the cloud. Cloud computing includes a variety of cloud service models, like SaaS, IaaS, PaaS, and FaaS. Each of them is a complete category of cloud services used to solve a variety of business challenges.'
    },
    {
      id: 2,
      title: 'Azure Fundamentals',
      number: 2,
      duration: 7,
      price: 399,
      availability: 'Distance',
      imageUrl: 'course2.jpg',
      scheduleddate: '2024-03-15',
      bookingoption: 'Distance',
      description: 'Azure is a rapidly growing technology that is being adopted by many corporations. Nearly all organizations have migrated to the cloud or have a plan to do so. The skills required to manage cloud based resources are necessary for those that are entering the IT field and those that are currently in IT.'
    },
    {
      id: 3,
      title: 'Active Directory on Windows Server',
      number: 3,
      duration: 5,
      price: 249,
      availability: 'Classroom',
      imageUrl: 'course3.jpg',
      scheduleddate: '2024-04-10',
      bookingoption: 'Classroom',
      description: 'Do you want to be a master of Active Directory? If so, this course is intended for you. This course will broaden your knowledge of active directory domain services (AD DS). You will learn how to configure some of the key features in Active Directory such as Active Directory Domain Services (AD DS), Group Policy, Dynamic Access Control (DAC), Work Folders, Work Place Join, Certificate Services, Rights Management Services (RMS), Federation Services, as well as integrating your on premise environment with cloud based technologies such as Windows Azure Active Directory.'
    },
    {
      id: 4,
      title: 'Mastering DNS on Windows Server',
      number: 4,
      duration: 5,
      price: 499,
      availability: 'Distance',
      imageUrl: 'course4.jpg',
      scheduleddate: '2024-04-20',
      bookingoption: 'Distance',
      description: 'This course is designed to provide you with a solid foundation for Windows DNS server. You will learn by completing the following tasks.'
    },
    {
      id: 5,
      title: 'Information Security Fundamentals',
      number: 5,
      duration: 2,
      price: 399,
      availability: 'Distance',
      imageUrl: 'course5.jpg',
      scheduleddate: '2024-05-02',
      bookingoption: 'Distance',
      description: 'This course is meant for anyone curious about InfoSec and just starting out in this field. Terminology and concepts are explained with the goal of being clear even to those who hear of them for the very first time.'
    },
    {
      id: 6,
      title: 'Cyber Security',
      number: 6,
      duration: 3,
      price: 199,
      availability: 'Classroom',
      imageUrl: 'course6.jpg',
      scheduleddate: '2024-05-15',
      bookingoption: 'Classroom',
      description: 'A beginner level comprehensive course that includes step-by-step explanations of core security concepts along with follow-up quizzes and hands on labs to ensure a solid learning for the course taker.'
    },
    {
      id: 7,
      title: 'Introduction to Vulnerability Management',
      number: 7,
      duration: 3,
      price: 449,
      availability: 'Classroom',
      imageUrl: 'course7.jpg',
      scheduleddate: '2024-06-01',
      bookingoption: 'Classroom',
      description: 'The course covers the basics of Vulnerability Management. The course dives into detail information of on the critical issues of vulnerabilities. It covers risk management and covers the basis of penetration testing vs vulnerability management as well. The course also includes lab simulation of vulnerability management processes. The lab introduces the students to Nessus and how vulnerabilities are tracked in the security scanner based on the respective critical level.'
    },
    {
      id: 8,
      title: 'Mastering Windows Security',
      number: 8,
      duration: 1,
      price: 599,
      availability: 'Distance',
      imageUrl: 'course8.jpg',
      scheduleddate: '2024-06-15',
      bookingoption: 'Distance',
      description: 'In todays fast-paced digital landscape, securing your Windows environment is no longer optional—its essential. This course is meticulously designed to help you fortify your systems in the most efficient manner.'
    },
    {
      id: 9,
      title: 'Fundamentals of Network Security',
      number: 9,
      duration: 6,
      price: 549,
      availability: 'Distance',
      imageUrl: 'course9.jpg',
      scheduleddate: '2024-07-02',
      bookingoption: 'Distance',
      description: 'We know that network security is the basic requirement of an IT company, so it is necessary for every student in the IT industry to learn the basic concept of network security. In this course, you will learn the fundamentals of network security and take the first leap into the world of the IT industry.'
    },
    {
      id: 10,
      title: 'Security in IoT',
      number: 10,
      duration: 2,
      price: 299,
      availability: 'Distance',
      imageUrl: 'course10.jpg',
      scheduleddate: '2024-07-15',
      bookingoption: 'Distance',
      description: 'In this course, learners will be going the study the Internet of Things (IoT) security. Starting from the Internet of Things (IoT) security introduction, learners will get an idea about why security is required in the Internet of Things (IoT).'
    },
    {
      id: 11,
      title: 'Cybersecurity For Beginners',
      number: 11,
      duration: 8,
      price: 549,
      availability: 'Classroom',
      imageUrl: 'course11.jpg',
      scheduleddate: '2024-08-01',
      bookingoption: 'Classroom',
      description: 'Whether you want to get your first job in IT security, become a white hat hacker, or prepare to check the security of your own home network, Udemy offers practical and accessible ethical hacking courses to help keep your networks safe from cybercriminals.'
    },
    {
      id: 12,
      title: 'Cloud Migration on Microsoft Azure',
      number: 12,
      duration: 7,
      price: 449,
      availability: 'Classroom',
      imageUrl: 'course12.jpg',
      scheduleddate: '2024-08-15',
      bookingoption: 'Classroom',
      description: 'In this course, you will be learning various Cloud Migration tools and services available on Microsoft Azure Cloud Platform.'
    },
    {
      id: 13,
      title: 'ChatGPT for IT Workers',
      number: 13,
      duration: 3,
      price: 299,
      availability: 'Distance',
      imageUrl: 'course13.jpg',
      scheduleddate: '2024-09-03',
      bookingoption: 'Distance',
      description: 'This may be the most useful course you have ever taken!  ChatGPT and AI are revolutionizing all industries.  ChatGPT is perhaps the largest single step in the technology industry, ever! ChatGPT has been designed to generate human-like responses to natural language input, with the purpose of assisting and communicating with humans. The benefits are enormous to all industries, especially the IT industry!'
    },
    {
      id: 14,
      title: 'Scrum Master Professional Certification',
      number: 14,
      duration: 7,
      price: 399,
      availability: 'Classroom',
      imageUrl: 'course14.jpg',
      scheduleddate: '2024-09-15',
      bookingoption: 'Classroom',
      description: 'The Scrum Master assessment is an important tool for assessing an individuals knowledge and skills related to the Scrum framework, which is a popular Agile project management methodology used by companies worldwide.'
    },
    {
      id: 15,
      title: 'Ethical Hacking From Scratch',
      number: 15,
      duration: 15,
      price: 599,
      availability: 'Distance',
      imageUrl: 'course15.jpg',
      scheduleddate: '2024-10-01',
      bookingoption: 'Distance',
      description: 'Welcome this comprehensive Ethical Hacking course! This course assumes you have NO prior knowledge! It starts with you from scratch and takes you step-by-step teaching you how to hack systems like black-hat hackers and secure them like security experts!'
    },
];

const listAllCourses = () => courses;

export { listAllCourses };