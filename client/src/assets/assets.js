import logo from "./logo.png";
import search_icon from "./search_icon.svg";
import company_icon from "./company_icon.svg";
import microsoft_logo from "./microsoft_logo.svg";
import walmart_logo from "./walmart_logo.svg";
import google from "./R.png";
import ibmlogo from "./R (1).png";
import virtusa from "./virtusa-logo.png";
import accenture_logo from "./accenture_logo.png";
import profile_img from "./profile_img.png";
import app_main_img from "./app_main_img.png";
import cross_icon from './cross_icon.svg';
import location_icon from './location_icon.svg';
import money_icon from './money_icon.svg';
import suitcase_icon from './suitcase_icon.svg';
import person_icon from './person_icon.svg';
import upload_area from './upload_area.svg';
import resume_selected from './resume_selected.svg';
import resume_not_selected from './resume_not_selected.svg';
import play_store from './play_store.svg';
import app_store from './app_store.svg';
import back_arrow_icon from './back_arrow_icon.svg';
import left_arrow_icon from './left_arrow_icon.svg';
import right_arrow_icon from './right_arrow_icon.svg';
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import home_icon from './home_icon.svg'
import add_icon from './add_icon.svg'
import profile_upload_icon from './profile_upload_icon.svg'
import person_tick_icon from './person_tick_icon.svg'
import resume_download_icon from './resume_download_icon.svg'
import delete_icon from './delete_icon.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import samsung_logo from './samsung_logo.png'
import adobe_logo from './adobe_logo.png'
import amazon_logo from './amazon_logo.png'

export const assets = {
    google,
    ibmlogo,
    virtusa,
    logo,
    search_icon,
    cross_icon,
    upload_area,
    company_icon,
    resume_not_selected,
    resume_selected,
    microsoft_logo,
    walmart_logo,
    accenture_logo,
    app_main_img,
    play_store,
    app_store,
    back_arrow_icon,
    left_arrow_icon,
    right_arrow_icon,
    location_icon,
    money_icon,
    suitcase_icon,
    person_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    home_icon,
    add_icon,
    person_tick_icon,
    resume_download_icon,
    profile_img,
    delete_icon,
    profile_upload_icon,
    email_icon,
    lock_icon,
    samsung_logo,
    adobe_logo,
    amazon_logo
}

export const JobCategories = [
    "Programming",
    "Data Science",
    "Designing",
    "Networking",
    "Management",
    "Marketing",
    "Cybersecurity",
]

export const JobLocations = [
    "Colombo",
    "Galle",
    "Anuradapura",
    "Jaffna",
    "Mathara",
    "Gampaha",
    "Kandy",
    "Polonnaruwa"
]

// Sample data for Manage Jobs Page
export const manageJobsData = [
    { _id: 1, title: "Full Stack Developer", date: 1729102298497, location: "Colombo", applicants: 20 },
    { _id: 2, title: "Data Scientist", date: 1729102298497, location: " Galle", applicants: 15 },
    { _id: 3, title: "Marketing Manager", date: 1729102298497, location: "Colombo", applicants: 2 },
    { _id: 4, title: "UI/UX Designer", date: 1729102298497, location: "Jaffna", applicants: 25 }
];

// Sample data for Profile Page
export const jobsApplied = [
    {
        company: 'Amazon',
        title: 'Full Stack Developer',
        location: 'Jaffna',
        date: '22 Aug, 2024',
        status: 'Pending',
        logo: company_icon,
    },
    {
        company: 'Meta',
        title: 'Data Scientist',
        location: 'Galle',
        date: '22 Aug, 2024',
        status: 'Rejected',
        logo: company_icon,
    },
    {
        company: 'Google',
        title: 'Marketing Manager',
        location: 'Colombo',
        date: '25 Sep, 2024',
        status: 'Accepted',
        logo: company_icon,
    },
    {
        company: 'Qualcomm',
        title: 'UI/UX Designer',
        location: 'Gampaha',
        date: '15 Oct, 2024',
        status: 'Pending',
        logo: company_icon,
    },
    {
        company: 'Microsoft',
        title: 'Full Stack Developer',
        location: 'Polonnaruwa',
        date: '25 Sep, 2024',
        status: 'Accepted',
        logo: company_icon,
    },
];

export const viewApplicationsPageData = [
    { _id: 1, name: "Sanjeewa Perera", jobTitle: "Full Stack Developer", location: "Colombo", imgSrc: profile_img },
    { _id: 2, name: "Nadeesha Hettiarachchi", jobTitle: "Data Scientist", location: "Galle", imgSrc: profile_img },
    { _id: 3, name: "Malina Wickramarathna", jobTitle: "Marketing Manager", location: "Anuradhapura", imgSrc: profile_img },
    { _id: 4, name: "Sanjeewa Perera", jobTitle: "UI/UX Designer", location: "Jaffna", imgSrc: profile_img },
    { _id: 5, name: "Nadeesha Hettiarachchi", jobTitle: "Full Stack Developer", location: "Matara", imgSrc: profile_img },
    { _id: 6, name: "Malina Wickramarathna", jobTitle: "Data Scientist", location: "Gampaha", imgSrc: profile_img },
    { _id: 7, name: "Sanjeewa Perera", jobTitle: "Marketing Manager", location: "Kandy", imgSrc: profile_img },
    { _id: 8, name: "Kusum Perera", jobTitle: "Data Scientist", location: "Polonnaruwa", imgSrc: profile_img },  
];



export const internCard = [
    {
        _id: '1',
        title: "Full Stack Developer",
        location: "Colombo",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "KIU@Div.com",
            "image": company_icon,
        },
        description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candidate will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
        salary: 82000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '2',
        title: "Data Scientist",
        location: "Galle",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "KIU@Div.com",
            "image": company_icon,
        },
        description: `
        <p>Join our analytics team to help drive business decisions using data. As a Data Scientist, you will leverage your analytical skills to uncover patterns and insights that will influence our strategic direction. You will work closely with stakeholders to understand their needs and deliver impactful analyses that support our growth objectives.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Analyze large datasets to uncover trends and patterns that inform business strategies.</li>
            <li>Develop predictive models to forecast outcomes and improve decision-making.</li>
            <li>Visualize data findings through reports and dashboards for stakeholders.</li>
            <li>Collaborate with cross-functional teams to define data-driven goals.</li>
            <li>Continuously refine data collection and analysis processes to enhance accuracy.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in Python or R for statistical analysis and data manipulation.</li>
            <li>Experience with data visualization tools (e.g., Tableau, Power BI).</li>
            <li>Strong knowledge of SQL and database management.</li>
            <li>Familiarity with machine learning techniques and algorithms.</li>
            <li>Excellent problem-solving and critical-thinking skills.</li>
        </ol>`,
        salary: 72000,
        date: 1729681667114,
        category: "Data Science",
    },
    {
        _id: '3',
        title: "UI/UX Designer",
        location: "Anuradapura",
        level: "Beginner Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "KIU@Div.com",
            "image": company_icon,
        },
        description: `
        <p>Create intuitive digital experiences as a UI/UX Designer. In this role, you will collaborate with product teams to design engaging user interfaces and ensure a seamless user journey. Your creativity and attention to detail will be crucial in developing designs that not only look good but also enhance functionality and user satisfaction.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Conduct user research and usability testing to gather insights on user needs.</li>
            <li>Create wireframes, prototypes, and high-fidelity designs that communicate user flows.</li>
            <li>Collaborate with development teams to implement designs effectively.</li>
            <li>Stay updated with industry trends and best practices in UI/UX design.</li>
            <li>Gather and analyze user feedback to iterate and improve designs.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in design tools like Figma, Sketch, or Adobe XD.</li>
            <li>Strong understanding of user-centered design principles.</li>
            <li>Basic knowledge of HTML/CSS for better collaboration with developers.</li>
            <li>Excellent communication and teamwork skills.</li>
            <li>Creative problem-solving abilities.</li>
        </ol>`,
        salary: 61000,
        date: 1729681667114,
        category: "Designing",
    },
    {
        _id: '4',
        title: "Network Engineer",
        location: "Jaffna",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "KIU@Div.com",
            "image": company_icon,
        },
        description: `
        <p>We are looking for a skilled Network Engineer to design, implement, and maintain efficient network infrastructures. You will ensure the secure and smooth operation of communication networks and provide technical support to end-users and teams.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design and deploy networks that meet organizational requirements.</li>
            <li>Monitor and troubleshoot network performance to minimize downtime.</li>
            <li>Implement security measures to protect sensitive data.</li>
            <li>Document network configurations and processes.</li>
            <li>Stay updated on emerging networking technologies.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in networking protocols (e.g., TCP/IP, BGP, OSPF).</li>
            <li>Hands-on experience with firewalls, routers, and switches.</li>
            <li>Strong knowledge of network monitoring tools.</li>
            <li>Excellent problem-solving and multitasking skills.</li>
            <li>Familiarity with cloud networking solutions is a plus.</li>
        </ol>`,
        salary: 85000,
        date: 1729681667114,
        category: "Networking",
    },
    {
        _id: '5',
        title: "Marketing Specialist",
        location: "Mathara",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "KIU@Div.com",
            "image": company_icon,
        },
        description: `
        <p>We are seeking a talented Marketing Specialist to drive our campaigns and boost brand awareness. You will work with cross-functional teams to create compelling marketing strategies that engage our target audience and generate measurable results.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop and execute marketing campaigns across multiple channels.</li>
            <li>Analyze campaign performance to optimize strategies.</li>
            <li>Collaborate with content creators to produce engaging materials.</li>
            <li>Conduct market research to identify trends and opportunities.</li>
            <li>Manage social media accounts and track engagement metrics.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in digital marketing tools and platforms.</li>
            <li>Strong communication and writing skills.</li>
            <li>Experience with SEO and SEM strategies.</li>
            <li>Ability to analyze data and generate actionable insights.</li>
            <li>Creativity and adaptability in a fast-paced environment.</li>
        </ol>`,
        salary: 65000,
        date: 1729681667114,
        category: "Marketing",
    },
    {
        _id: '6',
        title: "Cybersecurity Analyst",
        location: "Gampaha",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "KIU@Div.com",
            "image": company_icon,
        },
        description: `
        <p>Protect our digital assets as a Cybersecurity Analyst. Your role will involve identifying vulnerabilities, monitoring threats, and implementing robust security protocols to ensure the safety of our systems and data.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Monitor systems for potential security breaches.</li>
            <li>Conduct risk assessments and penetration testing.</li>
            <li>Develop and enforce security policies and protocols.</li>
            <li>Respond to and mitigate security incidents.</li>
            <li>Train employees on cybersecurity best practices.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>In-depth knowledge of network and system security.</li>
            <li>Familiarity with security tools like firewalls and antivirus software.</li>
            <li>Experience with incident response and threat detection.</li>
            <li>Strong problem-solving and analytical skills.</li>
            <li>Certifications like CISSP or CISM are a plus.</li>
        </ol>`,
        salary: 92000,
        date: 1729681667114,
        category: "Cybersecurity",
    },
    {
        _id: '7',
        title: "Project Manager",
        location: "Kandy",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "KIU@Div.com",
            "image": company_icon,
        },
        description: `
        <p>We are looking for an experienced Project Manager to oversee projects from inception to completion. In this role, you will coordinate with teams, manage resources, and ensure that projects meet quality standards and deadlines.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Define project scope, objectives, and deliverables.</li>
            <li>Manage project schedules, budgets, and resources.</li>
            <li>Communicate effectively with stakeholders to ensure alignment.</li>
            <li>Monitor project progress and resolve any issues.</li>
            <li>Ensure project documentation is maintained and up-to-date.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Strong leadership and organizational skills.</li>
            <li>Experience with project management tools like Jira or Trello.</li>
            <li>Excellent problem-solving and conflict-resolution skills.</li>
            <li>Ability to manage multiple projects simultaneously.</li>
            <li>PMP certification is a plus.</li>
        </ol>`,
        salary: 80000,
        date: 1729681667114,
        category: "Management",
    },
    {
        _id: '8',
        title: "Cloud Engineer",
        location: "Colombo",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "KIU@Div.com",
            "image": company_icon,
        },
        description: `
        <p>Join our tech team as a Cloud Engineer to design, deploy, and maintain cloud-based solutions. You will work with modern cloud platforms to ensure our infrastructure is scalable, secure, and efficient.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design and implement cloud architectures that support business needs.</li>
            <li>Manage cloud infrastructure and optimize for performance and cost.</li>
            <li>Ensure high availability and disaster recovery capabilities.</li>
            <li>Monitor and troubleshoot cloud-based applications and services.</li>
            <li>Stay updated on emerging cloud technologies and best practices.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency with AWS, Azure, or Google Cloud.</li>
            <li>Strong scripting skills (e.g., Python, Bash).</li>
            <li>Knowledge of containerization and orchestration tools (e.g., Docker, Kubernetes).</li>
            <li>Experience with infrastructure as code (e.g., Terraform).</li>
            <li>Excellent problem-solving and communication skills.</li>
        </ol>`,
        salary: 98000,
        date: 1729681667114,
        category: "Networking",
    },
    {
        _id: '9',
        title: "Content Creator",
        location: "Anuradapura",
        level: "Beginner Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "KIU@Div.com",
            "image": company_icon,
        },
        description: `
        <p>We are looking for a creative Content Creator to develop engaging materials for our brand. Your role will involve producing blogs, videos, and social media posts that resonate with our audience and drive engagement.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop creative content for digital platforms.</li>
            <li>Collaborate with marketing teams to align content with campaigns.</li>
            <li>Analyze audience engagement metrics and refine strategies.</li>
            <li>Stay updated with content trends and implement innovative ideas.</li>
            <li>Manage a content calendar to ensure timely delivery.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in content creation tools and software.</li>
            <li>Strong writing and storytelling skills.</li>
            <li>Knowledge of social media trends and best practices.</li>
            <li>Creative mindset and attention to detail.</li>
            <li>Ability to multitask and meet deadlines.</li>
        </ol>`,
        salary: 45000,
        date: 1729681667114,
        category: "Marketing",
    },
    {
        _id: '10',
        title: "Data Analyst",
        location: "Jaffna",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "KIU@Div.com",
            "image": company_icon,
        },
        description: `
        <p>We are looking for a Data Analyst to join our team and transform raw data into actionable insights. You will work closely with stakeholders to provide reports and data-driven recommendations that improve business performance.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Analyze large datasets to identify trends and patterns.</li>
            <li>Create data visualizations to present findings clearly.</li>
            <li>Work with cross-functional teams to define analytics needs.</li>
            <li>Develop and maintain dashboards and reporting tools.</li>
            <li>Ensure data quality and integrity.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in SQL and data visualization tools (e.g., Tableau, Power BI).</li>
            <li>Strong analytical and problem-solving skills.</li>
            <li>Experience with statistical tools like R or Python.</li>
            <li>Knowledge of data warehousing and ETL processes.</li>
            <li>Attention to detail and ability to work with complex data.</li>
        </ol>`,
        salary: 75000,
        date: 1729681667114,
        category: "Data Science",
    },
    {
        _id: '11',
        title: "UX Designer",
        location: "Colombo",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "KIU@Div.com",
            "image": company_icon,
        },
        description: `
        <p>As a UX Designer, you will craft exceptional user experiences that align with our product goals. You will collaborate with teams to create intuitive interfaces and improve usability across all platforms.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design wireframes, prototypes, and user flows.</li>
            <li>Conduct user research and usability testing.</li>
            <li>Collaborate with developers to implement designs.</li>
            <li>Ensure designs meet accessibility standards.</li>
            <li>Stay updated with design trends and best practices.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in design tools like Figma, Adobe XD, or Sketch.</li>
            <li>Strong portfolio showcasing user-centered designs.</li>
            <li>Understanding of responsive and mobile-first design principles.</li>
            <li>Excellent communication and collaboration skills.</li>
            <li>Attention to detail and creativity.</li>
        </ol>`,
        salary: 89000,
        date: 1729681667114,
        category: "Designing",
    },
    {
        _id: '12',
        title: "Network Administrator",
        location: "Kandy",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "KIU@Div.com",
            "image": company_icon,
        },
        description: `
        <p>We are hiring a Network Administrator to maintain and enhance our network infrastructure. You will ensure system availability, security, and efficiency, playing a key role in our IT operations.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Configure and maintain network devices and systems.</li>
            <li>Monitor network performance and troubleshoot issues.</li>
            <li>Implement security measures to protect data and systems.</li>
            <li>Coordinate with vendors for hardware and software support.</li>
            <li>Create and update network documentation.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in network protocols and troubleshooting tools.</li>
            <li>Experience with firewalls, routers, and switches.</li>
            <li>Knowledge of network security practices.</li>
            <li>Strong problem-solving and organizational skills.</li>
            <li>Certifications like CCNA or CompTIA Network+ are a plus.</li>
        </ol>`,
        salary: 72000,
        date: 1729681667114,
        category: "Networking",
    },
    {
        _id: '13',
        title: "SEO Specialist",
        location: "Galle",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "KIU@Div.com",
            "image": company_icon,
        },
        description: `
        <p>We are looking for an SEO Specialist to increase our online visibility and drive traffic to our website. You will optimize web pages, conduct keyword research, and monitor performance metrics to achieve our marketing goals.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Perform keyword research to identify target phrases.</li>
            <li>Optimize website content and metadata for search engines.</li>
            <li>Monitor and analyze SEO performance metrics.</li>
            <li>Collaborate with content creators for on-page SEO.</li>
            <li>Stay updated with changes in search engine algorithms.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in SEO tools like Google Analytics, SEMrush, or Ahrefs.</li>
            <li>Strong analytical skills and attention to detail.</li>
            <li>Understanding of on-page and off-page SEO techniques.</li>
            <li>Experience with content management systems like WordPress.</li>
            <li>Ability to adapt to changing SEO trends and algorithms.</li>
        </ol>`,
        salary: 60000,
        date: 1729681667114,
        category: "Marketing",
    },
    {
        _id: '14',
        title: "Mobile App Developer",
        location: "Anuradapura",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "KIU@Div.com",
            "image": company_icon,
        },
        description: `
        <p>We are hiring a Mobile App Developer to create high-quality applications for Android and iOS platforms. You will collaborate with designers and back-end developers to deliver seamless user experiences.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design, build, and maintain mobile applications.</li>
            <li>Collaborate with teams to define app features.</li>
            <li>Ensure applications meet performance and quality standards.</li>
            <li>Write clean, maintainable, and reusable code.</li>
            <li>Stay updated with mobile development trends and tools.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in programming languages like Swift, Kotlin, or React Native.</li>
            <li>Experience with mobile app design principles and APIs.</li>
            <li>Strong problem-solving and debugging skills.</li>
            <li>Knowledge of app deployment on App Store and Google Play.</li>
            <li>Excellent teamwork and communication skills.</li>
        </ol>`,
        salary: 96000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '15',
        title: "DevOps Engineer",
        location: "Gampaha",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "KIU@Div.com",
            "image": company_icon,
        },
        description: `
        <p>We are seeking a DevOps Engineer to enhance our development processes and manage infrastructure efficiently. Join our team to implement CI/CD pipelines and ensure smooth deployment of applications.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop and maintain CI/CD pipelines.</li>
            <li>Automate infrastructure provisioning and configuration.</li>
            <li>Monitor system performance and troubleshoot issues.</li>
            <li>Collaborate with developers to optimize deployment processes.</li>
            <li>Ensure system reliability and scalability.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in cloud platforms like AWS, Azure, or GCP.</li>
            <li>Experience with containerization tools like Docker and Kubernetes.</li>
            <li>Strong scripting skills (e.g., Python, Bash).</li>
            <li>Knowledge of configuration management tools (e.g., Ansible, Puppet).</li>
            <li>Excellent problem-solving and communication skills.</li>
        </ol>`,
        salary: 92000,
        date: 1729681667114,
        category: "Networking",
    },
    {
        _id: '16',
        title: "AI Researcher",
        location: "Mathara",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "KIU@Div.com",
            "image": company_icon,
        },
        description: `
        <p>Join us as an AI Researcher to work on cutting-edge artificial intelligence technologies. Your role will involve developing innovative models and algorithms to solve real-world problems.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design and implement AI models and algorithms.</li>
            <li>Analyze large datasets to derive meaningful insights.</li>
            <li>Collaborate with engineering teams to deploy AI solutions.</li>
            <li>Publish research findings in journals and conferences.</li>
            <li>Stay updated on AI trends and advancements.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in Python and AI frameworks like TensorFlow or PyTorch.</li>
            <li>Strong understanding of machine learning and deep learning.</li>
            <li>Experience with natural language processing or computer vision.</li>
            <li>Ability to analyze and process large datasets.</li>
            <li>Excellent problem-solving and research skills.</li>
        </ol>`,
        salary: 108000,
        date: 1729681667114,
        category: "Data Science",
    },
    {
        _id: '17',
        title: "Cybersecurity Specialist",
        location: "Polonnaruwa",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "KIU@Div.com",
            "image": company_icon,
        },
        description: `
        <p>We are hiring a Cybersecurity Specialist to protect our digital assets and ensure robust security across our systems. Join our team to develop and implement security measures against evolving cyber threats.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Monitor network traffic for potential threats.</li>
            <li>Conduct vulnerability assessments and penetration testing.</li>
            <li>Implement and manage security tools and protocols.</li>
            <li>Develop incident response plans and handle breaches.</li>
            <li>Train employees on cybersecurity best practices.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in security tools like firewalls, IDS/IPS.</li>
            <li>Experience with encryption, VPNs, and endpoint protection.</li>
            <li>Knowledge of security frameworks like NIST or ISO 27001.</li>
            <li>Strong analytical and troubleshooting skills.</li>
            <li>Relevant certifications (e.g., CEH, CISSP) are a plus.</li>
        </ol>`,
        salary: 80000,
        date: 1729681667114,
        category: "Cybersecurity",
    },
    {
        _id: '18',
        title: "Technical Support Engineer",
        location: "Polonnaruwa",
        level: "Junior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "KIU@Div.com",
            "image": company_icon,
        },
        description: `
        <p>We are looking for a Technical Support Engineer to provide exceptional support to our customers and ensure smooth operation of our products and services.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Respond to customer inquiries and resolve technical issues.</li>
            <li>Diagnose and troubleshoot hardware and software problems.</li>
            <li>Document technical issues and provide solutions.</li>
            <li>Collaborate with engineering teams for complex problems.</li>
            <li>Assist in system updates and maintenance tasks.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Excellent problem-solving and communication skills.</li>
            <li>Familiarity with operating systems like Windows and Linux.</li>
            <li>Basic knowledge of networking and IT systems.</li>
            <li>Ability to learn new technologies quickly.</li>
            <li>Strong customer service orientation.</li>
        </ol>`,
        salary: 50000,
        date: 1729681667114,
        category: "IT Support",
    },
    {
        _id: '19',
        title: "Content Writer",
        location: "Polonnaruwa",
        level: "Entry Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "KIU@Div.com",
            "image": company_icon,
        },
        description: `
        <p>We are seeking a Content Writer to produce engaging and high-quality content that aligns with our brand voice and marketing objectives.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Write and edit articles, blog posts, and marketing copy.</li>
            <li>Research industry-related topics and trends.</li>
            <li>Collaborate with the marketing team to develop content strategies.</li>
            <li>Proofread and ensure all content meets quality standards.</li>
            <li>Optimize content for SEO and user engagement.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Strong writing and editing skills.</li>
            <li>Basic understanding of SEO principles.</li>
            <li>Creativity and ability to produce original content.</li>
            <li>Time management and organizational skills.</li>
            <li>Experience with CMS platforms like WordPress is a plus.</li>
        </ol>`,
        salary: 40000,
        date: 1729681667114,
        category: "Content Creation",
    }
    

];

