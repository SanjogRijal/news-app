'use client'

import * as React from 'react';
import PrimaryNavComponent, { PrimaryNavComponentProps } from './PrimaryNav';
import SecondaryNavComponent from './SecondaryNav';

interface HeaderProps {

    secondaryNavProps: Array<{
        title: string;
        url: string;
    }>;
    primaryNavProps: PrimaryNavComponentProps

}

export default function Header(props: HeaderProps): React.ReactElement {
    const { secondaryNavProps, primaryNavProps } = props;
    const { titleContent, leftLinkContent, rightButtonContent } = primaryNavProps;
    return (
        <React.Fragment>
            <PrimaryNavComponent titleContent={titleContent} leftLinkContent={leftLinkContent} rightButtonContent={rightButtonContent} />
            <SecondaryNavComponent sections={secondaryNavProps} />
        </React.Fragment>
    );
}