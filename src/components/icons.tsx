import type { LucideProps } from 'lucide-react';
import { BookOpen, Linkedin, Github, Mail, ExternalLink, ServerCrash, CircleDot, Smartphone, Laptop, Database, GraduationCap, Briefcase, BarChart3 } from 'lucide-react';
import type { FC } from 'react';
import type { IconName } from '@/lib/types';


interface IconProps extends LucideProps {
  name: IconName;
}

export const Icon: FC<IconProps> = ({ name, ...props }) => {
  switch (name) {
    case 'BookOpen':
      return <BookOpen {...props} />;
    case 'Linkedin':
      return <Linkedin {...props} />;
    case 'Github':
      return <Github {...props} />;
    case 'Mail':
      return <Mail {...props} />;
    case 'ExternalLink':
      return <ExternalLink {...props} />;
    case 'ServerCrash':
      return <ServerCrash {...props} />;
    case 'CircleDot':
      return <CircleDot {...props} />;
    case 'Smartphone':
      return <Smartphone {...props} />;
    case 'GraduationCap':
      return <GraduationCap {...props} />;
    case 'Briefcase':
      return <Briefcase {...props} />;
    case 'BarChart3':
      return <BarChart3 {...props} />;
    default:
      // Fallback for icons not explicitly handled, or return a default icon
      // For example, if tags like 'React', 'AI' are passed as icon names by mistake
      const iconMap: Record<string, React.ElementType> = {
        react: Laptop,
        ai: Database,
        nextjs: Laptop,
        ecommerce: Smartphone,
        // Add more mappings as needed
      };
      const MappedIcon = iconMap[name.toLowerCase()];
      if (MappedIcon) {
        return <MappedIcon {...props} />;
      }
      return <CircleDot {...props} />; // Default fallback icon
  }
};
