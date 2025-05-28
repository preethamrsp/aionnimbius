import { NavigationItem } from '../types';

export const navigationData: NavigationItem[] = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Services',
    path: '/services',
    children: [
      {
        title: 'Cloud Services',
        path: '/Cloudservices',
        children: [
          {
            title: 'Cloud Consulting Services',
            path: '/Cloudconsultingservices'
          },
          {
            title: 'Cloud Managed Services',
            path: '/Cloudmanagedservices'
          },
          {
            title: 'Cloud Observability and Support',
            path: '/Cloudobservatorysupport'
          },
          {
            title: 'Cloud Training and Enablement',
            path: '/CloudTrainingEnablement'
          }
        ]
      },
      {
        title: 'Infrastructure Services',
        path: '#',
        children: [
          {
            title: 'DevOps Consulting',
            path: '/Devopsconsulting'
          },
          {
            title: '24/7 DevOps Support Services',
            path: '#'
          },
          {
            title: 'DevOps Tools Implementation and optimisation',
            path: '#'
          },
          {
            title: 'DevOps Training',
            path: '#'
          }
        ]
      },
      {
        title: 'Atlassian Solutions',
        path: '/Atlassiansolutions',
        children: [
          {
            title: 'AionNimbius Atlassian Elevate',
            path: '/AionNimbiusatlassianelevate'
          },
          {
            title: 'Atlassian Product Consulting',
            path: '/AtlassianProductConsulting'
          },
          {
            title: 'Atlassian Implementation Services',
            path: '/AtlassianImplementationServices'
          },
          {
            title: 'Managed Services & Support',
            path: '/AtlassianManagedServices'
          },
          {
            title: 'Atlassian Training and Enablement',
            path: '/AtlassianTraining'
          }
        ]
      },
      {
        title: 'Delivery Models',
        path: '#',
        children: [
          {
            title: 'Dedicated Teams',
            path: '#'
          },
          {
            title: 'IT Staff Augmentation Services',
            path: '#'
          },
          {
            title: 'Resource Based',
            path: '#'
          },
          {
            title: 'Project Based',
            path: '#'
          },
          {
            title: 'Cloud Operations Training',
            path: '#'
          }
        ]
      }
    ]
  },
  {
    title: 'Talent Academy',
    path: '/TalentAcademyPage'
  },
  {
    title: 'Success Stories',
    path: '/success-stories'
  },
  {
    title: 'Blog',
    path: '/blog'
  },
  {
    title: 'Company',
    path: '/company',
    children: [
      {
        title: 'Company Overview',
        path: '/Companyoverview'
      },
      {
        title: 'Join Us',
        path: '/Joinus'
      },
      {
        title: 'Contact',
        path: '/contact'
      }
    ]
  }
];