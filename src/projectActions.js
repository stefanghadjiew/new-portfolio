import { AiFillGithub } from 'react-icons/ai';
import { CgDetailsMore } from 'react-icons/cg';
import { MdPreview } from 'react-icons/md';

export const projectActions = darkTheme => [
    {
        action: {
            id: 1,
            title: 'Details',
            icon: (
                <CgDetailsMore
                    className={darkTheme && 'svg--dark-theme'}
                />
            ),
        },
    },
    {
        action: {
            id: 2,
            title: 'Github',
            icon: (
                <AiFillGithub className={darkTheme && 'svg--dark-theme'} />
            ),
        },
    },
    {
        action: {
            id: 3,
            title: 'Preview',
            icon: <MdPreview className={darkTheme && 'svg--dark-theme'} />,
        },
    },
];
