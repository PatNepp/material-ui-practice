import PeopleIcon from '@mui/icons-material/People';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import DnsIcon from '@mui/icons-material/Dns';
import Storage from '../../../pages/Storage/Storage';
import Authentication from '../../../pages/Authentication/Authentication';
import Database from '../../../pages/Database/Database';
import Hosting from '../../../pages/Hosting/Hosting';
import Functions from '../../../pages/Functions/Functions';
import MachineLearning from '../../../pages/MachineLearning/MachineLearning';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <PeopleIcon />,
        label: 'Authentication',
        route: '/authentication',
        element: <Authentication />
    },
    {
        id: 1,
        icon: <DnsIcon />,
        label: 'Database',
        route: '/database',
        element: <Database />
    },
    {
        id: 2,
        icon: <ImageIcon />,
        label: 'Storage',
        route: '/storage',
        element: <Storage />
    },
    {
        id: 3,
        icon: <PublicIcon />,
        label: 'Hosting',
        route: '/hosting',
        element: <Hosting />
    },
    {
        id: 4,
        icon: <SettingsEthernetIcon />,
        label: 'Functions',
        route: '/functions',
        element: <Functions />
    },
    {
        id: 5,
        icon: <SettingsInputComponentIcon />,
        label: 'Machine Learning',
        route: '/machine-learning',
        element: <MachineLearning />
    },
]