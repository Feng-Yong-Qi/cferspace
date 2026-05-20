import type { FC, SVGProps } from "react";

export interface ProjectProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  tags: string[];
  className?: string;
}

export interface FAQItemProps {
  question: string;
  answer: string;
  category: string;
}

export interface SocialLinkProps {
  name: string;
  href: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  lightColor: string;
  darkColor: string;
}

export interface Sponsor {
  name: string;
}

export interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  company: string;
  image: string;
}
