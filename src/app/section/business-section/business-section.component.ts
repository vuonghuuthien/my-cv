import { Component } from '@angular/core';

@Component({
  selector: 'app-business-section',
  templateUrl: './business-section.component.html',
  styleUrls: ['./business-section.component.scss'],
})
export class BusinessSectionComponent {
  projects = [
    {
      company: 'NOIS - 2023',
      name: 'Onboarding System 2',
      chips: ['User Research', 'User Experience', 'User Interface'],
      description:
        'A software solution designed for multinational corporations to manage, guide, and evaluate employees across various offices worldwide.',
      buttonTitle: 'Explore',
      buttonArrow: 1,
      background: '/assets/backgrounds/OS2.png',
      color: '#6366f1',
    },
    {
      company: 'NOIS - 2022',
      name: 'Onboarding System 1',
      chips: ['User Research', 'User Experience', 'User Interface'],
      description:
        'A software solution designed for multinational corporations to manage, guide, and evaluate employees across various offices worldwide.',
      buttonTitle: 'Explore',
      buttonArrow: 1,
      background: '/assets/backgrounds/OS.png',
      color: '#0BA5EC',
    },
    {
      company: 'NOIS - 2023',
      name: 'Line View GMI Web & App',
      chips: ['User Research', 'User Experience', 'User Interface'],
      description:
        'A comprehensive project including website and mobile application. It is designed to manage large-scale data related to questions and answer choices.',
      buttonTitle: 'Explore',
      buttonArrow: 1,
      background: '/assets/backgrounds/LineView.png',
      color: '#F37322',
    },
    {
      company: 'NOIS - 2023',
      name: 'NOIS Website',
      chips: ['User Research', 'User Experience', 'User Interface', 'Animator'],
      description:
        'Redesign of the NOIS website. The project aims to create a fresh, dynamic, and modern look. Helping to increase brand recognition. ',
      buttonTitle: 'See the live site',
      buttonArrow: 2,
      background: '/assets/backgrounds/NOIS.png',
      color: '#12B76A',
    },
    {
      company: 'NOIS - 2022',
      name: 'Appsure',
      chips: ['User Research', 'User Experience', 'User Interface', 'Animator'],
      description:
        'Appsure insurance management application is a powerful, flexible and user-friendly system that helps insurance companies optimize their processes, enhance customer experience and manage data effectively. fruit.',
      buttonTitle: 'Explore',
      buttonArrow: 1,
      background: '/assets/backgrounds/Appsure.png',
      color: '#5569FF',
    },
  ];
}
