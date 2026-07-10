import type { LucideProps } from 'lucide-react';
import { 
  BookOpen, 
  Linkedin, 
  Github, 
  Mail, 
  ExternalLink, 
  ServerCrash, 
  CircleDot, 
  Smartphone, 
  Laptop, 
  Database, 
  GraduationCap, 
  Briefcase, 
  BarChart3, 
  Phone, 
  Globe, 
  MapPin, 
  FileText, 
  CheckCircle2, 
  User,
  ShieldCheck,
  Lock,
  Zap,
  TrendingUp,
  Users,
  MessageSquare,
  Sparkles,
  Wand2,
  Newspaper
} from 'lucide-react';
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
    case 'Phone':
      return <Phone {...props} />;
    case 'Globe':
      return <Globe {...props} />;
    case 'MapPin':
      return <MapPin {...props} />;
    case 'FileText':
      return <FileText {...props} />;
    case 'CheckCircle':
      return <CheckCircle2 {...props} />;
    case 'User':
      return <User {...props} />;
    case 'ShieldCheck':
      return <ShieldCheck {...props} />;
    case 'Lock':
      return <Lock {...props} />;
    case 'Zap':
      return <Zap {...props} />;
    case 'TrendingUp':
      return <TrendingUp {...props} />;
    case 'Users':
      return <Users {...props} />;
    case 'MessageSquare':
      return <MessageSquare {...props} />;
    case 'Sparkles':
      return <Sparkles {...props} />;
    case 'Wand2':
      return <Wand2 {...props} />;
    case 'Newspaper':
      return <Newspaper {...props} />;
    default:
      const iconMap: Record<string, React.ElementType> = {
        react: Laptop,
        ai: Database,
        nextjs: Laptop,
        ecommerce: Smartphone,
      };
      const MappedIcon = iconMap[name.toLowerCase()];
      if (MappedIcon) {
        return <MappedIcon {...props} />;
      }
      return <CircleDot {...props} />;
  }
};
