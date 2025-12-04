import { 
  Music, 
  Heart, 
  Rocket, 
  Bot, 
  Video, 
  TrendingUp, 
  Zap, 
  Users 
} from 'lucide-react';
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'redactslice',
    title: 'RedactSliceAI',
    description: 'Beat/Sampler Splicer & Drum Pads',
    url: 'https://beatslicer-ai-875855106263.us-west1.run.app/',
    icon: Music,
    category: 'Audio',
    color: 'from-lumina-teal to-lumina-mint'
  },
  {
    id: 'lumina',
    title: 'Lumina',
    description: 'Daily Faith & Community',
    url: 'https://lumina-daily-faith-community-875855106263.us-west1.run.app/',
    icon: Heart,
    category: 'Lifestyle',
    color: 'from-lumina-periwinkle to-lumina-deepIndigo'
  },
  {
    id: 'content-rocket',
    title: 'Content Rocket',
    description: '3-Day AI-Powered Digital Marketing Content & Automation Crash Course',
    url: 'https://content-rocket-875855106263.us-west1.run.app',
    icon: Rocket,
    category: 'Education',
    color: 'from-lumina-teal to-blue-500'
  },
  {
    id: 'rocket-responder',
    title: 'Rocket Responder',
    description: 'AI Voice Agent Demo App',
    url: 'https://rocket-responder-875855106263.us-west1.run.app/',
    icon: Bot,
    category: 'Agents',
    color: 'from-purple-500 to-lumina-periwinkle'
  },
  {
    id: 'vidseo',
    title: 'VidSEO',
    description: 'Video Thumbnails, SEO Strategy and Content Reports',
    url: 'https://vidseo-875855106263.us-west1.run.app/',
    icon: Video,
    category: 'Marketing',
    color: 'from-red-400 to-orange-400'
  },
  {
    id: 'cardvalue',
    title: 'CardValueAI',
    description: 'Sports Card Value/SEO/Listing Agent',
    url: 'https://cardvalue-ai-875855106263.us-west1.run.app/',
    icon: TrendingUp,
    category: 'Finance',
    color: 'from-emerald-400 to-lumina-mint'
  },
  {
    id: 'omni',
    title: '1-Click Omni Content',
    description: 'Powerful Multi-Platform Content Engine',
    url: 'https://omnicontent-engine-875855106263.us-west1.run.app/',
    icon: Zap,
    category: 'Productivity',
    color: 'from-yellow-400 to-amber-500'
  },
  {
    id: 'predacted',
    title: 'Predacted',
    description: 'Polymarket PM Consensus Agent Swarm',
    url: '#', 
    icon: Users,
    category: 'Web3',
    color: 'from-indigo-400 to-blue-600'
  },
];