import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-community-content-section',
  templateUrl: './community-content-section.component.html',
  styleUrls: ['./community-content-section.component.scss'],
})
export class CommunityContentSectionComponent implements OnInit {
  projects = [
    {
      urlImg: '/assets/covers/Cover1.png',
      link: 'https://www.figma.com/community/file/1364368331565295794/food-delivery-app-ui-kit-design-speedy-chow-figma',
    },
    {
      urlImg: '/assets/covers/Cover2.png',
      link: 'https://www.figma.com/community/file/1370509894547995600/chatting-app-ui-kit-design-e-chat-figma',
    },
    {
      urlImg: '/assets/covers/Cover3.png',
      link: 'https://www.figma.com/community/file/1358874430357908723/fast-vpn-vpn-mobile-app-ui-kit-design-figma',
    },
    {
      urlImg: '/assets/covers/Cover4.png',
      link: 'https://www.figma.com/community/file/1335089126429911828/plantum-plant-scanner-function-animation',
    },
    {
      urlImg: '/assets/covers/Cover5.png',
      link: 'https://www.figma.com/community/file/1348061005728668498/340-free-menu-icon-hamburger-icon-styles',
    },
    {
      urlImg: '/assets/covers/Cover6.png',
      link: 'https://www.figma.com/community/file/1355236623075440285/ant-design-icons-2-4-5',
    },
    {
      urlImg: '/assets/covers/Cover7.png',
      link: 'https://www.figma.com/community/file/1356003037445276793/font-awesome-icons-5-6',
    },
    {
      urlImg: '/assets/covers/Cover8.png',
      link: 'https://www.figma.com/community/file/1352827442687907720/5-free-infinite-scroll-animation-types',
    },
    {
      urlImg: '/assets/covers/Cover9.png',
      link: 'https://www.figma.com/community/file/1346932268778175414/370-free-pagination-bar-component-types',
    },
    {
      urlImg: '/assets/covers/Cover10.png',
      link: 'https://www.figma.com/community/file/1344038523808556624/150-free-stepper-wizard-component-types',
    },
    {
      urlImg: '/assets/covers/Cover11.png',
      link: 'https://www.figma.com/community/file/1345428443770777407/80-free-skeleton-shimmer-loading-animation-component-sample',
    },
    {
      urlImg: '/assets/covers/Cover12.png',
      link: 'https://www.figma.com/community/file/1300286216743813582/70-free-headers-layout-navbar',
    },
    {
      urlImg: '/assets/covers/Cover13.png',
      link: 'https://www.figma.com/community/file/1312921033225014799/160-free-tab-bar-component-types',
    },
    {
      urlImg: '/assets/covers/Cover14.png',
      link: 'https://www.figma.com/community/file/1319887930637567259/100-free-search-bar-component-types',
    },
    {
      urlImg: '/assets/covers/Cover15.png',
      link: 'https://www.figma.com/community/file/1278067419991143588/svg-world-map',
    },
  ];

  projects_chunk: any[][] = [];

  typeApps: string[] = [
    'Messaging Apps',
    'Social Media Apps',
    'Video Streaming Apps',
    'Music Streaming Apps',
    'E-commerce Apps',
    'Ride-Hailing Apps',
    'Food Delivery Apps',
    'Weather Apps',
    'Fitness Apps',
    'Health and Wellness Apps',
    'Navigation Apps',
    'Photo Editing Apps',
    'Video Editing Apps',
    'Finance and Banking Apps',
    'Expense Tracker Apps',
    'News Apps',
    'Project Management Apps',
    'To-do List Apps',
    'Learning Apps',
    'E-book and Audiobook Apps',
    'Dating Apps',
    'Job Search Apps',
    'Travel Booking Apps',
    'Event Management Apps',
    'Children’s Educational Apps',
    'Cooking and Recipe Apps',
    'Ticket Booking Apps',
    'Virtual Reality (VR) Apps',
    'Augmented Reality (AR) Apps',
    'Home Automation Apps',
    'Habit Tracker Apps',
    'Gaming Apps',
    'Language Learning Apps',
    'Carpooling Apps',
    'Pet Care Apps',
    'Music and Podcast Apps',
    'Plant Care Apps',
    'Personal Finance Apps',
    'Map and Navigation Apps',
    'Sports Apps',
  ];

  typeApps_chunk: any[][] = [];

  highlights = [
    {
      urlIcon: '/assets/highlights/Slider_Vertical.svg',
      title: 'Hundreds Of Screens<br>(iOS/Android)',
    },
    {
      urlIcon: '/assets/highlights/Mode.svg',
      title: 'Light & Dark Theme<br>Included',
    },
    {
      urlIcon: '/assets/highlights/Pen_Round.svg',
      title: '100% Editable &<br>Customizable',
    },
    {
      urlIcon: '/assets/highlights/Pallete.svg',
      title: 'Design System<br>Included',
    },
    {
      urlIcon: '/assets/highlights/Widget.svg',
      title: 'Pixel Perfect &<br>Grid System',
    },
    {
      urlIcon: '/assets/highlights/Component.svg',
      title: 'Hundreds of<br>Components',
    },
    {
      urlIcon: '/assets/highlights/Paragraph_Spacing.svg',
      title: 'Full Auto<br>Layout',
    },
    {
      urlIcon: '/assets/highlights/Layers.svg',
      title: 'Well Organized<br>Layers',
    },
    {
      urlIcon: '/assets/highlights/Stars.svg',
      title: 'Clean, Stylish &<br>Modern',
    },
    {
      urlIcon: '/assets/highlights/Aa.svg',
      title: 'Using Google<br>Free Fonts',
    },
    {
      urlIcon: '/assets/highlights/Circle_Top_Up.svg',
      title: 'Global Style<br>Guide',
    },
    {
      urlIcon: '/assets/highlights/Drag.svg',
      title: 'Easily Drag &<br>Drop Design',
    },
  ];

  highlights_chunk: any[][] = [];

  ngOnInit() {
    this.updateChunks(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target = event.target as Window;
    this.updateChunks(target.innerWidth);
  }

  updateChunks(width: number) {
    if (width <= 380) {
      this.projects_chunk = this.chunkProjects(1);
      this.typeApps_chunk = this.chunkTypeApps(1);
      this.highlights_chunk = this.chunkHighlights(1);
    } else if (width <= 480) {
      this.projects_chunk = this.chunkProjects(1);
      this.typeApps_chunk = this.chunkTypeApps(2);
      this.highlights_chunk = this.chunkHighlights(2);
    } else if (width <= 767) {
      this.projects_chunk = this.chunkProjects(2);
      this.typeApps_chunk = this.chunkTypeApps(3);
      this.highlights_chunk = this.chunkHighlights(3);
    } else {
      this.projects_chunk = this.chunkProjects(3);
      this.typeApps_chunk = this.chunkTypeApps(4);
      this.highlights_chunk = this.chunkHighlights(4);
    }
  }

  chunkProjects(chunkSize: number): any[][] {
    const result: any[][] = [];
    for (let i = 0; i < this.projects.length; i += chunkSize) {
      result.push(this.projects.slice(i, i + chunkSize));
    }
    return result;
  }

  chunkTypeApps(columnCount: number): any[][] {
    const columns: string[][] = [];
    const itemsPerColumn = Math.ceil(this.typeApps.length / columnCount);

    for (let i = 0; i < columnCount; i++) {
      columns.push(this.typeApps.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn));
    }

    return columns;
  }

  chunkHighlights(chunkSize: number): any[][] {
    const result: any[][] = [];
    for (let i = 0; i < this.highlights.length; i += chunkSize) {
      result.push(this.highlights.slice(i, i + chunkSize));
    }
    return result;
  }
}
