import BorderColorIcon from '@mui/icons-material/BorderColor';
import CheckIcon from '@mui/icons-material/Check';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';


export const menuItems = [
    {
        id: 0,
        icon: <BorderColorIcon />,
        label: 'All Tasks',
        route: 'all-tasks',
    },
    {
        id: 1,
        icon: <FavoriteIcon />,
        label: 'favorites',
        route: 'favorites',
    },
    {
        id: 2,
        icon: <CheckIcon />,
        label: 'Completed Tasks',
        route: 'completed-tasks',
    },
    {
        id: 3,
        icon: <PriorityHighIcon />,
        label: 'Priorities',
        route: 'priorities',
    },
]