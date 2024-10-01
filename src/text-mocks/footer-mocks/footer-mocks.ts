export interface FooterLink {
  name: string;
  optionOne: string;
  optionTwo: string;
  optionTree?: string;
  optionFour?: string;
}

export interface ListsData {
  lists: FooterLink[];
}

export interface ListProps {
  props: FooterLink;
}

export interface Linktext {
  text: string;
}

export const footerLinksList: ListsData = {
  lists: [
    {
      name: 'Academy',
      optionOne: 'Video Vault',
      optionTwo: 'Document Portal',
      optionTree: 'Training Guides',
      optionFour: 'Maintenance Class',
    },
    {
      name: 'Features',
      optionOne: 'Playground Inspections',
      optionTwo: 'Playground Audits',
      optionTree: 'Book a Demo',
      optionFour: 'Sign Up',
    },
    {
      name: 'Playgrounds.com',
      optionOne: 'About Us',
      optionTwo: 'Support',
      optionTree: 'FAQ’s',
      optionFour: 'Pricing',
    },
    {
      name: 'Legal',
      optionOne: 'Privacy Policy',
      optionTwo: 'Terms & Conditions',
    },
  ],
};
