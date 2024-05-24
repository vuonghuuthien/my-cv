import { Component, ViewChild } from '@angular/core';
import { Project } from 'src/app/model/project.model';
import { ModalSectionComponent } from '../modal-section/modal-section.component';


@Component({
  selector: 'app-business-section',
  templateUrl: './business-section.component.html',
  styleUrls: ['./business-section.component.scss'],
})

export class BusinessSectionComponent {
  @ViewChild('modal') modal!: ModalSectionComponent;

  projects: Project[] = [
    {
      company: 'NOIS - 2023',
      name: 'Onboarding System 2',
      logo: '',
      roles: ['User Research', 'User Experience', 'User Interface'],
      description:
        'A software solution designed for multinational corporations to manage, guide, and evaluate employees across various offices worldwide.',
      buttonTitle: 'Explore',
      buttonArrow: 1,
      buttonLink: '',
      background: '/assets/backgrounds/OS2.png',
      color: '#6366f1',
    },
    {
      company: 'NOIS - 2022',
      name: 'Onboarding System 1',
      logo: '',
      roles: ['User Research', 'User Experience', 'User Interface', 'Business Analyst'],
      description:
        'A software solution designed for multinational corporations to manage, guide, and evaluate employees across various offices worldwide.',
      buttonTitle: 'Explore',
      buttonArrow: 1,
      buttonLink: '',
      background: '/assets/backgrounds/OS.png',
      color: '#0BA5EC',
    },
    {
      company: 'NOIS - 2023',
      name: 'Line View GMI Web & App',
      logo: '/assets/logos/LineView.png',
      roles: ['User Research', 'User Experience', 'User Interface'],
      description:
        'A comprehensive project including website and mobile application. It is designed to manage large-scale data related to questions and answer choices.',
      buttonTitle: 'Explore',
      buttonArrow: 1,
      buttonLink: '',
      background: '/assets/backgrounds/LineView.png',
      color: '#F37322',
    },
    {
      company: 'NOIS - 2023',
      name: 'NOIS Website',
      logo: '/assets/logos/NOIS.png',
      roles: ['User Research', 'User Experience', 'User Interface', 'Animator', 'Front-End Developer'],
      description:
        'Redesign of the NOIS website. The project aims to create a fresh, dynamic, and modern look. Helping to increase brand recognition. ',
      buttonTitle: 'See the live site',
      buttonArrow: 2,
      buttonLink: 'https://nois.vn/',
      background: '/assets/backgrounds/NOIS.png',
      color: '#12B76A',
    },
    {
      company: 'NOIS - 2022',
      name: 'Appsure',
      logo: '/assets/logos/Appsure.png',
      roles: ['User Research', 'User Experience', 'User Interface', 'Animator'],
      description:
        'Appsure insurance management application is a powerful, flexible and user-friendly system that helps insurance companies optimize their processes, enhance customer experience and manage data effectively. fruit.',
      buttonTitle: 'Explore',
      buttonArrow: 1,
      buttonLink: '',
      background: '/assets/backgrounds/Appsure.png',
      color: '#5569FF',
    },
    {
      company: 'NOIS - 2023',
      name: 'Juicy Burger Web & App',
      logo: '/assets/logos/JuicyBurger.png',
      roles: ['UI/UX Consultant', 'Front-End Developer'],
      description:
        'The project entails designing a website and mobile application for Juicy Burger, a chain of fast food restaurants with multiple branches. ',
      buttonTitle: 'Explore',
      buttonArrow: 1,
      buttonLink: '',
      background: '/assets/backgrounds/JuicyBurger.png',
      color: '#FF3537',
    },
    {
      company: 'NOIS - 2023',
      name: 'HBCF - iCare',
      logo: '/assets/logos/HBCF.png',
      roles: ['UX Designer'],
      description:
        'I have been working on the Home Building Compensation Fund (HBCF) product by iCare. The primary goal of this project is to create a user-friendly digital platform that enables homeowners to easily access information and services related to building compensation in New South Wales (NSW).',
      buttonTitle: 'Explore',
      buttonArrow: 1,
      buttonLink: '',
      background: '/assets/backgrounds/HBCF.png',
      color: '#00B9BD',
    },
    {
      company: 'TMTCO.ASIA - 2021',
      name: 'TPOS',
      logo: '/assets/logos/TPOS.png',
      roles: ['UI Consultant', 'Full-Stack Developer'],
      description:
        'TPos sales management software and App helps users manage all business activities in stores and online sales effectively, helping to grow sales quickly and continuously. ',
      buttonTitle: 'Register a Trial',
      buttonArrow: 2,
      buttonLink: '',
      background: '/assets/backgrounds/TPOS.png',
      color: '#008E30',
    },
    {
      company: 'TMTCO.ASIA - 2020',
      name: 'TDental',
      logo: '/assets/logos/TDental.png',
      roles: ['UI Consultant', 'Full-Stack Developer'],
      description:
        'Software and App manage all activities at the dental clinic, from patient management, doctors, laboratories, suppliers, revenue and expenditure management, ... There is also automated customer care. ',
      buttonTitle: 'Register a Trial',
      buttonArrow: 2,
      buttonLink: '',
      background: '/assets/backgrounds/TDental.png',
      color: '#1B4FC9',
    },
  ];

  openModal(project: Project) {
    this.modal.openPopup();
    this.modal.setProject(project);
  }
}
