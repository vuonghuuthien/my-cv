export interface Technology {
  name?: string;
  icon?: string;
}

export interface Project {
  company?: string;
  name?: string;
  logo?: string;
  roles?: string[];
  description?: string;
  buttonTitle?: string;
  buttonArrow?: number;
  buttonLink?: string;
  buttonTitle2?: string;
  buttonArrow2?: number;
  buttonLink2?: string;
  background?: string;
  color?: string;
  description_2?: string;
  role_2?: string;
  technologies?: Technology[];
  previewFolder?: string;
  previewLength?: number;
  totalScreens?: number;
  totalComponents?: number;
}
